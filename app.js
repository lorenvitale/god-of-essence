import LOCAL_ESSENCES from "./data/essences.js";

const DROPS_PER_ML = 20;
const DEFAULT_PERCENTAGES = {
  top: 8,
  heart: 12,
  base: 15,
};

let ESSENCES = [...LOCAL_ESSENCES];
const EXTERNAL_LIBRARY_ENDPOINTS = [
  "https://raw.githubusercontent.com/perfume-open-datasets/datasets/main/essences.json",
  "https://raw.githubusercontent.com/katarzynaq/perfume-library/main/library.json",
];
const essenceIndex = new Map();
const essenceNameIndex = new Map();

const elements = {};
const templates = {};
const formFields = {};

const state = {
  selected: new Map(),
  activeFamilyFilter: "tutte",
  detailedComponents: [],
  analysis: null,
};

const FragranceAI = (() => {
  const IDEAL_DISTRIBUTION = { top: 28, heart: 44, base: 28 };
  const SYNERGY_MAP = {
    Agrumata: ["Floreale", "Aromatica", "Acquatica", "Chypré"],
    Floreale: ["Agrumata", "Muscata", "Gourmand", "Legnosa"],
    Aromatica: ["Agrumata", "Fougère", "Chypré", "Legnosa"],
    Speziata: ["Gourmand", "Orientale", "Cuoio", "Legnosa"],
    Gourmand: ["Ambrata", "Tabaccosa", "Floreale", "Muscata"],
    Legnosa: ["Ambrata", "Muscata", "Terrosa", "Gourmand"],
    Ambrata: ["Legnosa", "Muscata", "Orientale", "Cuoio"],
    Muscata: ["Floreale", "Gourmand", "Ambrata", "Acquatica"],
    Tabaccosa: ["Gourmand", "Cuoio", "Ambrata", "Speziata"],
    Terrosa: ["Legnosa", "Chypré", "Orientale", "Speziata"],
    Chypré: ["Floreale", "Legnosa", "Aromatica", "Muscata"],
    Acquatica: ["Agrumata", "Floreale", "Muscata", "Ambrata"],
    Orientale: ["Ambrata", "Gourmand", "Speziata", "Cuoio"],
    Animalica: ["Cuoio", "Floreale", "Ambrata"],
  };

  function analyze(components, settings) {
    if (!components || components.length === 0) {
      return null;
    }

    const totalPercentage = components.reduce((sum, c) => sum + c.percentage, 0) || 1;
    const groups = { top: [], heart: [], base: [] };
    const distribution = { top: 0, heart: 0, base: 0 };
    const familyTotals = new Map();
    const descriptorSet = new Set();
    const facetSet = new Set();
    let naturalLoad = 0;
    let syntheticLoad = 0;
    let intensityAccumulator = 0;

    components.forEach((component) => {
      const tier = normalizeTier(component.noteType);
      groups[tier].push(component);
      distribution[tier] += component.percentage;
      descriptorSetAdd(descriptorSet, component.descriptors);
      descriptorSetAdd(facetSet, component.facets);
      if (component.source === "naturale") {
        naturalLoad += component.percentage;
      } else {
        syntheticLoad += component.percentage;
      }
      intensityAccumulator += (component.intensity ?? 0.6) * component.percentage;
      familyTotals.set(
        component.family,
        (familyTotals.get(component.family) || 0) + component.percentage,
      );
    });

    const distributionShare = {
      top: Number(((distribution.top / totalPercentage) * 100).toFixed(1)),
      heart: Number(((distribution.heart / totalPercentage) * 100).toFixed(1)),
      base: Number(((distribution.base / totalPercentage) * 100).toFixed(1)),
    };

    const balanceScore = computeBalanceScore(distributionShare, IDEAL_DISTRIBUTION);
    const varietyScore = computeVarietyScore(familyTotals.size, descriptorSet.size, facetSet.size);
    const naturalShare = naturalLoad / (naturalLoad + syntheticLoad || 1);
    const naturalScore = computeNaturalScore(naturalShare);
    const synergyScore = computeSynergyScore(components, familyTotals);

    const weightedScore = balanceScore * 0.4 + varietyScore * 0.2 + naturalScore * 0.2 + synergyScore * 0.2;
    const rating = clamp(Number((weightedScore / 10).toFixed(1)), 0, 10);

    const familyInsights = [...familyTotals.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([name, amount]) => ({ name, share: Math.round((amount / totalPercentage) * 100) }));

    const mainFamily = familyInsights[0] || null;
    const pyramid = buildPyramid(groups);
    const highlights = buildHighlights({
      distributionShare,
      naturalShare,
      familyInsights,
      intensity: intensityAccumulator / (totalPercentage || 1) / 100,
      settings,
    });

    const impressions = buildImpression({
      mainFamily,
      distributionShare,
      naturalShare,
      descriptorSet,
      facetSet,
      intensity: intensityAccumulator / (totalPercentage || 1) / 100,
    });

    return {
      rating,
      score: Math.round(weightedScore),
      family: mainFamily,
      distribution: distributionShare,
      pyramid,
      naturalShare: Math.round(naturalShare * 100),
      syntheticShare: Math.round((1 - naturalShare) * 100),
      highlights,
      impressions,
    };
  }

  function descriptorSetAdd(set, values = []) {
    values.forEach((value) => {
      if (value) {
        set.add(value.toLowerCase());
      }
    });
  }

  function normalizeTier(value = "heart") {
    if (value === "top" || value === "heart" || value === "base") {
      return value;
    }
    return value.includes("base") ? "base" : value.includes("top") ? "top" : "heart";
  }

  function computeBalanceScore(current, ideal) {
    const delta =
      Math.abs(current.top - ideal.top) +
      Math.abs(current.heart - ideal.heart) +
      Math.abs(current.base - ideal.base);
    return clamp(100 - delta * 0.9, 0, 100);
  }

  function computeVarietyScore(familyCount, descriptorCount, facetCount) {
    const familyScore = Math.min(100, familyCount * 16);
    const nuanceScore = Math.min(70, descriptorCount * 2.2 + facetCount * 2.8);
    return clamp(familyScore * 0.6 + nuanceScore * 0.4, 0, 100);
  }

  function computeNaturalScore(naturalShare) {
    const preferred = 0.6;
    const diff = Math.abs(naturalShare - preferred);
    return clamp(100 - diff * 180, 40, 100);
  }

  function computeSynergyScore(components, familyTotals) {
    const pairs = new Set();
    components.forEach((component) => {
      const expected = SYNERGY_MAP[component.family] || [];
      components.forEach((other) => {
        if (component === other) return;
        if (expected.includes(other.family)) {
          const key = [component.family, other.family].sort().join("::");
          pairs.add(key);
        }
      });
    });
    const baseScore = Math.min(100, (pairs.size / Math.max(1, familyTotals.size)) * 120);
    return clamp(baseScore, 30, 100);
  }

  function buildPyramid(groups) {
    return {
      top: groups.top
        .sort((a, b) => b.percentage - a.percentage)
        .map((c) => c.name)
        .slice(0, 4),
      heart: groups.heart
        .sort((a, b) => b.percentage - a.percentage)
        .map((c) => c.name)
        .slice(0, 4),
      base: groups.base
        .sort((a, b) => b.percentage - a.percentage)
        .map((c) => c.name)
        .slice(0, 4),
    };
  }

  function buildHighlights({ distributionShare, naturalShare, familyInsights, intensity }) {
    const highlights = [];
    const balanceSpread = Math.max(distributionShare.top, distributionShare.heart, distributionShare.base) -
      Math.min(distributionShare.top, distributionShare.heart, distributionShare.base);
    if (balanceSpread < 18) {
      highlights.push("Equilibrio ottimale tra le tre altezze olfattive");
    } else if (distributionShare.base > 36) {
      highlights.push("Base corposa per scie avvolgenti");
    }

    if (familyInsights.length > 1) {
      const [first, second] = familyInsights;
      highlights.push(`Dialogo ${first.name.toLowerCase()} con accenti ${second.name.toLowerCase()}`);
    }

    if (naturalShare > 0.7) {
      highlights.push("Impronta molto naturale");
    } else if (naturalShare < 0.4) {
      highlights.push("Profilo futuristico a prevalenza sintetica");
    }

    if (intensity > 0.0065) {
      highlights.push("Intensità proiettiva pronunciata");
    }

    return highlights;
  }

  function buildImpression({ mainFamily, distributionShare, naturalShare, descriptorSet, facetSet, intensity }) {
    const familyLabel = mainFamily?.name?.toLowerCase() ?? "sfaccettata";
    const projection = intensity > 0.0065 ? "avvolgente" : intensity > 0.004 ? "radiosa" : "intima";
    const longevity = distributionShare.base > 30 ? "persistenza prolungata" : "evoluzione leggera";
    const accents = [...facetSet].slice(0, 3).join(", ") || [...descriptorSet].slice(0, 3).join(", ");
    const naturalTone = naturalShare > 0.65 ? "materie prime naturali in evidenza" : naturalShare < 0.35 ? "impronta contemporanea" : "bilanciamento naturale/sintetico";

    return `Scia ${projection} con ${longevity}; cuore ${familyLabel} arricchito da ${accents || "sfumature vellutate"} e ${naturalTone}.`;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  return { analyze };
})();

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  if (!elements.essenceList) {
    console.error("Impossibile inizializzare la libreria delle essenze: elementi DOM mancanti.");
    return;
  }
  configurePdfWorker();
  rebuildEssenceIndex();
  renderFamilyPills();
  renderEssenceList();
  bindEvents();
  setupManualOverrideTracking();
  if (elements.rating && elements.ratingOutput) {
    elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
  }
  loadInitialState();
  updateSyncStatus("Database locale caricato", "success");
  syncExternalLibraries();
}

function cacheElements() {
  elements.essenceList = document.querySelector("#essence-list");
  elements.searchInput = document.querySelector("#search-essence");
  elements.familyFilter = document.querySelector("#family-filter");
  elements.workspaceIntro = document.querySelector("#workspace-intro");
  elements.workspace = document.querySelector("#workspace");
  elements.startBuilder = document.querySelector("#start-builder");
  elements.heroLoadFormula = document.querySelector("#open-import");
  elements.composition = document.querySelector("#composition");
  elements.compositionSummary = document.querySelector("#composition-summary");
  elements.clearSelection = document.querySelector("#clear-selection");
  elements.rating = document.querySelector("#rating");
  elements.ratingOutput = document.querySelector("#rating-output");
  elements.olfactoryFamily = document.querySelector("#olfactory-family");
  elements.saveFormula = document.querySelector("#save-formula");
  elements.loadFormula = document.querySelector("#load-formula");
  elements.duplicateFormula = document.querySelector("#duplicate-formula");
  elements.restoreAI = document.querySelector("#restore-ai");
  elements.syncStatus = document.querySelector("#sync-status");

  templates.compositionRow = document.querySelector("#composition-row-template");
  templates.savedModal = document.querySelector("#saved-formulas-template");

  formFields.name = document.querySelector("#formula-name");
  formFields.type = document.querySelector("#batch-type");
  formFields.volume = document.querySelector("#batch-volume");
  formFields.density = document.querySelector("#density");
  formFields.concentration = document.querySelector("#concentration");
  formFields.notes = document.querySelector("#formula-notes");
  formFields.topNotes = document.querySelector("#top-notes");
  formFields.heartNotes = document.querySelector("#heart-notes");
  formFields.baseNotes = document.querySelector("#base-notes");
  formFields.impressions = document.querySelector("#impressions");
}

function configurePdfWorker() {
  if (window.pdfjsLib?.GlobalWorkerOptions) {
    const workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";
    if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
    }
  }
}

function bindEvents() {
  elements.searchInput?.addEventListener("input", renderEssenceList);
  elements.startBuilder?.addEventListener("click", startFormula);
  elements.heroLoadFormula?.addEventListener("click", () => openSavedModal({ focusImport: true }));
  elements.clearSelection?.addEventListener("click", clearComposition);
  if (elements.rating) {
    elements.rating.addEventListener("input", () => {
      markManual(elements.rating);
      if (elements.ratingOutput) {
        elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
      }
      persistLastFormula();
    });
  }
  elements.saveFormula?.addEventListener("click", handleSaveFormula);
  elements.loadFormula?.addEventListener("click", openSavedModal);
  elements.duplicateFormula?.addEventListener("click", duplicateFormula);
  elements.restoreAI?.addEventListener("click", resetAIOverrides);

  [formFields.volume, formFields.density, formFields.concentration]
    .filter(Boolean)
    .forEach((field) => {
      field.addEventListener("input", () => {
        if (state.selected.size > 0) {
          updateCompositionSummary();
        }
      });
    });

  formFields.type?.addEventListener("change", persistLastFormula);
  formFields.name?.addEventListener("input", persistLastFormula);
  formFields.notes?.addEventListener("input", persistLastFormula);
}

function setupManualOverrideTracking() {
  [formFields.topNotes, formFields.heartNotes, formFields.baseNotes, formFields.impressions]
    .filter(Boolean)
    .forEach((field) => {
      field.addEventListener("input", () => {
        markManual(field);
        persistLastFormula();
      });
    });
}

function markManual(field) {
  if (!field) return;
  field.dataset.manual = "true";
}

function clearManual(field) {
  if (!field) return;
  delete field.dataset.manual;
}

function resetAIOverrides() {
  [elements.rating, formFields.topNotes, formFields.heartNotes, formFields.baseNotes, formFields.impressions]
    .filter(Boolean)
    .forEach((field) => {
      clearManual(field);
    });
  if (state.analysis) {
    applyAnalysis(state.analysis);
    showToast("Suggerimenti AI ripristinati");
  } else {
    applyAnalysis(null);
  }
}

function rebuildEssenceIndex() {
  essenceIndex.clear();
  essenceNameIndex.clear();
  ESSENCES.forEach((essence) => {
    essenceIndex.set(essence.id, essence);
    essenceNameIndex.set(normalizeLabel(essence.name), essence);
    toArray(essence.aliases).forEach((alias) => {
      essenceNameIndex.set(normalizeLabel(alias), essence);
    });
  });
}

function renderEssenceList() {
  if (!elements.essenceList) return;
  const term = elements.searchInput?.value?.toLowerCase().trim() ?? "";
  const filtered = ESSENCES.filter((essence) => {
    const haystack = [
      essence.name,
      essence.family,
      essence.noteType,
      essence.source,
      ...(essence.descriptors || []),
      ...(essence.facets || []),
    ]
      .join(" ")
      .toLowerCase();
    const matchesTerm = term.length === 0 || haystack.includes(term);
    const matchesFamily =
      state.activeFamilyFilter === "tutte" || essence.family === state.activeFamilyFilter;
    return matchesTerm && matchesFamily;
  }).sort((a, b) => a.name.localeCompare(b.name));

  elements.essenceList.innerHTML = "";

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.className = "essence essence--empty";
    li.textContent = "Nessuna essenza trovata con i filtri attuali";
    elements.essenceList.appendChild(li);
    return;
  }

  filtered.forEach((essence) => {
    const li = document.createElement("li");
    li.className = "essence";
    li.dataset.id = essence.id;
    li.innerHTML = `
      <div class="essence__name">
        <span>${essence.name}</span>
        <span class="badge">${essence.noteType.toUpperCase()}</span>
      </div>
      <div class="essence__meta">
        <span>${essence.family}</span>
        <span>${essence.source}</span>
        <span>${formatDescriptors(essence)}</span>
      </div>
    `;

    li.addEventListener("click", () => {
      addEssenceToComposition(essence);
    });
    elements.essenceList.appendChild(li);
  });
}

function formatDescriptors(essence) {
  const primary = essence.facets?.length ? essence.facets : essence.descriptors;
  return primary?.slice(0, 3).join(" · ") ?? "";
}

function renderFamilyPills() {
  if (!elements.familyFilter) return;
  const uniqueFamilies = [...new Set(ESSENCES.map((essence) => essence.family))].sort((a, b) =>
    a.localeCompare(b, "it")
  );
  const families = ["tutte", ...uniqueFamilies];
  elements.familyFilter.innerHTML = "";
  families.forEach((family) => {
    const button = document.createElement("button");
    button.textContent = family;
    button.dataset.family = family;
    if (family === state.activeFamilyFilter) {
      button.dataset.active = "true";
    }
    button.addEventListener("click", () => {
      state.activeFamilyFilter = family;
      renderFamilyPills();
      renderEssenceList();
    });
    elements.familyFilter.appendChild(button);
  });
}

function loadInitialState() {
  const stored = localStorage.getItem("god-of-essence:last");
  if (!stored) return;
  try {
    const parsed = JSON.parse(stored);
    populateFormula(parsed);
    revealWorkspace();
  } catch (error) {
    console.error("Impossibile caricare la formula salvata", error);
  }
}

function startFormula() {
  revealWorkspace();
  if (!formFields.name.value) {
    formFields.name.focus();
  }
}

function revealWorkspace() {
  elements.workspaceIntro.setAttribute("hidden", "");
  elements.workspace.removeAttribute("hidden");
  elements.workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function addEssenceToComposition(essence) {
  if (!templates.compositionRow || !elements.composition) return;
  if (state.selected.has(essence.id)) {
    highlightExistingRow(essence.id);
    return;
  }

  const defaultPercentage = DEFAULT_PERCENTAGES[essence.noteType] ?? 10;
  const rowFragment = templates.compositionRow.content.cloneNode(true);
  const row = rowFragment.querySelector(".composition__row");
  row.dataset.id = essence.id;
  row.querySelector(".composition__name").textContent = essence.name;
  row.querySelector(".composition__details").textContent = `${essence.family} · ${essence.source}`;

  const slider = row.querySelector("input[type='range']");
  const output = row.querySelector("output");
  slider.value = defaultPercentage;
  output.textContent = `${defaultPercentage}%`;

  slider.addEventListener("input", () => {
    output.textContent = `${slider.value}%`;
    state.selected.set(essence.id, Number(slider.value));
    updateCompositionSummary();
  });

  row.querySelector(".btn-icon").addEventListener("click", () => {
    state.selected.delete(essence.id);
    row.remove();
    updateCompositionSummary();
  });

  elements.composition.appendChild(rowFragment);
  state.selected.set(essence.id, defaultPercentage);
  updateCompositionSummary();
}

function highlightExistingRow(id) {
  if (!elements.composition) return;
  const row = elements.composition.querySelector(`.composition__row[data-id='${id}']`);
  if (!row) return;
  row.classList.add("is-highlighted");
  row.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => row.classList.remove("is-highlighted"), 1200);
}

function clearComposition() {
  if (!elements.composition || !elements.compositionSummary) return;
  state.selected.clear();
  state.detailedComponents = [];
  state.analysis = null;
  elements.composition.innerHTML = "";
  elements.compositionSummary.textContent = "Aggiungi materie prime per iniziare.";
  applyAnalysis(null);
  persistLastFormula();
}

function updateCompositionSummary() {
  if (!elements.composition || !elements.compositionSummary) return;
  const rows = [...elements.composition.querySelectorAll(".composition__row")];
  if (rows.length === 0) {
    clearComposition();
    return;
  }

  const volume = Number(formFields.volume.value) || 0;
  const concentration = Number(formFields.concentration.value) || 0;
  const density = Number(formFields.density.value) || 1;
  const aromaticVolume = (volume * concentration) / 100;

  const detailedComponents = rows.map((row) => {
    const id = row.dataset.id;
    const slider = row.querySelector("input[type='range']");
    const percentage = Number(slider.value);
    const ml = (aromaticVolume * percentage) / 100;
    const grams = ml * density;
    const drops = ml * DROPS_PER_ML;
    const essence = essenceIndex.get(id) ?? { id, name: id, family: "—", noteType: "heart", source: "—" };

    row.querySelector('[data-unit="ml"]').textContent = ml.toFixed(2);
    row.querySelector('[data-unit="g"]').textContent = grams.toFixed(2);
    row.querySelector('[data-unit="drops"]').textContent = Math.round(drops);

    return {
      id,
      name: essence.name,
      family: essence.family,
      noteType: essence.noteType,
      source: essence.source,
      descriptors: essence.descriptors ?? [],
      facets: essence.facets ?? [],
      volatility: essence.volatility ?? 0.5,
      intensity: essence.intensity ?? 0.6,
      harmonies: essence.harmonies ?? [],
      percentage,
      ml: Number(ml.toFixed(3)),
      grams: Number(grams.toFixed(3)),
      drops: Math.round(drops),
    };
  });

  state.detailedComponents = detailedComponents;

  const totalPercentage = detailedComponents.reduce((sum, component) => sum + component.percentage, 0);
  const remainder = Math.max(0, 100 - totalPercentage);
  const summaryParts = [
    `<span>${totalPercentage.toFixed(1)}% aroma</span>`,
    remainder > 0 ? `${remainder.toFixed(1)}% disponibili` : "Bilanciato",
    `${aromaticVolume.toFixed(2)} ml aroma totale`,
  ];
  elements.compositionSummary.innerHTML = summaryParts.join(" · ");

  state.analysis = FragranceAI.analyze(detailedComponents, { volume, concentration, density });
  applyAnalysis(state.analysis);
  persistLastFormula();
}

function applyAnalysis(analysis) {
  if (!elements.rating || !elements.ratingOutput || !elements.olfactoryFamily) return;
  if (!analysis) {
    elements.olfactoryFamily.textContent = "—";
    if (!elements.rating.dataset.manual) {
      elements.rating.value = 8;
      elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
    }
    if (formFields.topNotes && !formFields.topNotes.dataset.manual) formFields.topNotes.value = "";
    if (formFields.heartNotes && !formFields.heartNotes.dataset.manual) formFields.heartNotes.value = "";
    if (formFields.baseNotes && !formFields.baseNotes.dataset.manual) formFields.baseNotes.value = "";
    if (formFields.impressions && !formFields.impressions.dataset.manual) formFields.impressions.value = "";
    return;
  }

  if (analysis.family) {
    elements.olfactoryFamily.textContent = `${analysis.family.name} · ${analysis.family.share}%`;
  } else {
    elements.olfactoryFamily.textContent = "—";
  }

  if (!elements.rating.dataset.manual) {
    elements.rating.value = analysis.rating;
    elements.ratingOutput.textContent = formatSliderValue(analysis.rating);
  }

  if (formFields.topNotes && !formFields.topNotes.dataset.manual) {
    formFields.topNotes.value = analysis.pyramid.top.join(", ");
  }
  if (formFields.heartNotes && !formFields.heartNotes.dataset.manual) {
    formFields.heartNotes.value = analysis.pyramid.heart.join(", ");
  }
  if (formFields.baseNotes && !formFields.baseNotes.dataset.manual) {
    formFields.baseNotes.value = analysis.pyramid.base.join(", ");
  }
  if (formFields.impressions && !formFields.impressions.dataset.manual) {
    formFields.impressions.value = analysis.impressions;
  }
}

function gatherFormulaState() {
  const components = elements.composition
    ? [...elements.composition.querySelectorAll(".composition__row")].map((row) => {
        const id = row.dataset.id;
        const slider = row.querySelector("input[type='range']");
        return { id, percentage: Number(slider.value) };
      })
    : [];

  const analysis = state.analysis
    ? {
        rating: state.analysis.rating,
        score: state.analysis.score,
        family: state.analysis.family,
        distribution: state.analysis.distribution,
        highlights: state.analysis.highlights,
        impressions: state.analysis.impressions,
        pyramid: state.analysis.pyramid,
        naturalShare: state.analysis.naturalShare,
        syntheticShare: state.analysis.syntheticShare,
      }
    : null;

  return {
    name: formFields.name?.value || "Formula senza nome",
    type: formFields.type?.value || "EDP",
    volume: Number(formFields.volume?.value) || 0,
    density: Number(formFields.density?.value) || 1,
    concentration: Number(formFields.concentration?.value) || 0,
    notes: formFields.notes?.value || "",
    components,
    componentsDetailed: state.detailedComponents,
    rating: elements.rating ? Number(elements.rating.value) : 0,
    pyramid: {
      top: formFields.topNotes?.value || "",
      heart: formFields.heartNotes?.value || "",
      base: formFields.baseNotes?.value || "",
    },
    impressions: formFields.impressions?.value || "",
    analysis,
    savedAt: new Date().toISOString(),
  };
}

function populateFormula(data) {
  clearComposition();
  if (formFields.name) formFields.name.value = data.name ?? "";
  if (formFields.type) formFields.type.value = data.type ?? "EDP";
  if (formFields.volume) formFields.volume.value = data.volume ?? 10;
  if (formFields.density) formFields.density.value = data.density ?? 0.96;
  if (formFields.concentration) formFields.concentration.value = data.concentration ?? 18;
  if (formFields.notes) formFields.notes.value = data.notes ?? "";
  if (elements.rating) elements.rating.value = data.rating ?? 8;
  if (elements.rating && elements.ratingOutput) {
    elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
  }
  if (formFields.topNotes) formFields.topNotes.value = data.pyramid?.top ?? "";
  if (formFields.heartNotes) formFields.heartNotes.value = data.pyramid?.heart ?? "";
  if (formFields.baseNotes) formFields.baseNotes.value = data.pyramid?.base ?? "";
  if (formFields.impressions) formFields.impressions.value = data.impressions ?? "";

  [elements.rating, formFields.topNotes, formFields.heartNotes, formFields.baseNotes, formFields.impressions]
    .filter(Boolean)
    .forEach((field) => markManual(field));

  data.components?.forEach((component) => {
    const essence = essenceIndex.get(component.id);
    if (essence) {
      addEssenceToComposition(essence);
      const row = elements.composition?.querySelector(`.composition__row[data-id='${component.id}']`);
      if (row) {
        const slider = row.querySelector("input[type='range']");
        slider.value = component.percentage;
        slider.dispatchEvent(new Event("input"));
      }
    }
  });

  state.analysis = data.analysis ?? null;
  if (state.analysis) {
    applyAnalysis(state.analysis);
  } else {
    updateCompositionSummary();
  }
}

function handleSaveFormula() {
  const formula = gatherFormulaState();
  const stored = JSON.parse(localStorage.getItem("god-of-essence:formulas") || "[]");
  const index = stored.findIndex((item) => item.name === formula.name);
  if (index >= 0) {
    stored[index] = formula;
  } else {
    stored.push(formula);
  }
  localStorage.setItem("god-of-essence:formulas", JSON.stringify(stored));
  localStorage.setItem("god-of-essence:last", JSON.stringify(formula));
  showToast(`Formula "${formula.name}" salvata`);
  openSaveReport(formula);
}

function persistLastFormula() {
  const formula = gatherFormulaState();
  localStorage.setItem("god-of-essence:last", JSON.stringify(formula));
}

function openSavedModal({ focusImport = false } = {}) {
  let modal = document.querySelector("#saved-formulas-modal");
  if (!modal) {
    const fragment = templates.savedModal.content.cloneNode(true);
    document.body.appendChild(fragment);
    modal = document.querySelector("#saved-formulas-modal");
    const fileInput = modal.querySelector("#external-formula-file");
    modal.querySelector("#close-saved").addEventListener("click", () => modal.close());
    modal.addEventListener("close", () => modal.removeAttribute("open"));
    modal.querySelector("#saved-formulas-list").addEventListener("click", handleSavedFormulaAction);
    fileInput.addEventListener("change", handleExternalFormulaSelection);
  }

  const stored = JSON.parse(localStorage.getItem("god-of-essence:formulas") || "[]");
  renderSavedModalContent(modal, stored);

  if (typeof modal.showModal === "function") {
    modal.showModal();
    if (focusImport) {
      const card = modal.querySelector(".upload-card");
      if (card) {
        card.classList.add("is-highlighted");
        setTimeout(() => card.classList.remove("is-highlighted"), 1400);
      }
    }
  }
}

function duplicateFormula() {
  const current = gatherFormulaState();
  current.name = `${current.name} · Remix`;
  current.savedAt = new Date().toISOString();
  populateFormula(current);
  showToast("Formula duplicata, personalizza liberamente");
}

function renderSavedModalContent(modal, stored = []) {
  const list = modal.querySelector("#saved-formulas-list");
  const emptyState = modal.querySelector("#saved-formulas-empty");
  list.innerHTML = "";

  if (!stored.length) {
    emptyState?.removeAttribute("hidden");
    return;
  }

  emptyState?.setAttribute("hidden", "");

  const decorated = stored.map((formula, index) => ({ formula, index }));
  decorated
    .sort((a, b) => new Date(b.formula.savedAt || 0) - new Date(a.formula.savedAt || 0))
    .forEach(({ formula, index }) => {
      const li = document.createElement("li");
      const rating = formula.analysis?.rating ?? formula.rating ?? "—";
      const volumeLabel = formatNumber(formula.volume);
      const savedLabel = formatTimestamp(formula.savedAt) || "—";
      li.innerHTML = `
        <div>
          <strong>${formula.name || "Formula senza nome"}</strong>
          <div class="meta">${formula.type || "—"} · ${volumeLabel} ml · ⭐ ${rating}</div>
          <div class="meta">${savedLabel}</div>
        </div>
        <div class="modal-buttons">
          <button class="btn btn--ghost" data-action="load" data-index="${index}">Carica</button>
          <button class="btn btn--ghost" data-action="delete" data-index="${index}">Elimina</button>
        </div>`;
      list.appendChild(li);
    });
}

function handleSavedFormulaAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const index = Number(button.dataset.index);
  const modal = event.currentTarget.closest("dialog");
  const stored = JSON.parse(localStorage.getItem("god-of-essence:formulas") || "[]");
  if (Number.isNaN(index) || !stored[index]) {
    showToast("Formula non trovata");
    return;
  }

  if (action === "load") {
    populateFormula(stored[index]);
    modal?.close();
    revealWorkspace();
  } else if (action === "delete") {
    stored.splice(index, 1);
    localStorage.setItem("god-of-essence:formulas", JSON.stringify(stored));
    renderSavedModalContent(modal, stored);
  }
}

async function handleExternalFormulaSelection(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file) return;
  await importExternalFormula(file);
  input.value = "";
}

async function importExternalFormula(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  let parsed = null;

  try {
    if (extension === "pdf") {
      parsed = await parseFormulaPdf(file);
    } else if (extension === "xlsx" || extension === "xls") {
      parsed = await parseFormulaSpreadsheet(file);
    } else if (extension === "csv") {
      parsed = await parseFormulaSpreadsheet(file, { isCsv: true });
    } else {
      showToast("Formato non supportato. Usa PDF, XLSX, XLS o CSV");
      return;
    }
  } catch (error) {
    console.error("Errore durante la lettura del file", error);
    showToast("Impossibile leggere il file selezionato");
    return;
  }

  if (!parsed) {
    showToast("Formato del file non riconosciuto");
    return;
  }

  const result = buildFormulaFromImport(parsed);
  if (!result || result.formula.components.length === 0) {
    showToast("Nessuna materia prima riconosciuta nel file caricato");
    return;
  }

  populateFormula(result.formula);
  persistLastFormula();
  revealWorkspace();
  const modal = document.querySelector("#saved-formulas-modal");
  if (modal?.open) {
    modal.close();
  }

  let message = `Formula "${result.formula.name}" importata`;
  if (result.missing.length) {
    const preview = result.missing.slice(0, 3).join(", ");
    message += ` (ingredienti non trovati: ${preview}${result.missing.length > 3 ? "…" : ""})`;
  }
  showToast(message);
}

async function parseFormulaPdf(file) {
  if (!window.pdfjsLib) {
    throw new Error("pdfjsLib non disponibile");
  }
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let textContent = "";
  const pages = Math.min(pdf.numPages, 8);
  for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    textContent += `${pageText}\n`;
  }
  return parseFormulaFromText(textContent);
}

async function parseFormulaSpreadsheet(file, { isCsv = false } = {}) {
  if (typeof XLSX === "undefined") {
    throw new Error("Libreria XLSX non disponibile");
  }
  let workbook;
  if (isCsv) {
    const text = await file.text();
    workbook = XLSX.read(text, { type: "string" });
  } else {
    const buffer = await file.arrayBuffer();
    workbook = XLSX.read(buffer, { type: "array" });
  }

  const firstSheet = workbook.SheetNames[0];
  const sheet = workbook.Sheets[firstSheet];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
  if (!Array.isArray(rows) || rows.length === 0) {
    return null;
  }
  return interpretTabularRows(rows);
}

function interpretTabularRows(rows) {
  const summary = {
    components: [],
  };

  rows.forEach((row) => {
    const normalized = Object.entries(row).reduce((acc, [key, value]) => {
      const cleanKey = normalizeLabel(key);
      if (cleanKey) {
        acc[cleanKey] = value;
      }
      return acc;
    }, {});

    summary.name = summary.name || normalized.nome_formula || normalized.nome || normalized.formula;
    summary.type = summary.type || normalized.tipologia || normalized.tipo;
    summary.volume = summary.volume || toNumeric(normalized.volume) || toNumeric(normalized.volume_ml);
    summary.concentration =
      summary.concentration ||
      toNumeric(normalized.concentrazione) ||
      toNumeric(normalized.concentrazione_aromi);
    summary.density = summary.density || toNumeric(normalized.densita) || toNumeric(normalized.densita_media);
    summary.notes = summary.notes || normalized.note_creative || normalized.note || normalized.commenti;
    summary.topNotes = summary.topNotes || normalized.note_di_testa || normalized.testa;
    summary.heartNotes = summary.heartNotes || normalized.note_di_cuore || normalized.cuore;
    summary.baseNotes = summary.baseNotes || normalized.note_di_fondo || normalized.fondo;
    summary.impressions = summary.impressions || normalized.sensazioni || normalized.valutazione;

    const componentName =
      normalized.essenza ||
      normalized.materia_prima ||
      normalized.ingrediente ||
      normalized.nome_ingrediente ||
      normalized.nome_materia ||
      normalized.componente ||
      normalized.nome;
    const percentage = toNumeric(normalized.percentuale || normalized.percento || normalized.percent);
    if (componentName && percentage !== null) {
      summary.components.push({ name: componentName, percentage });
    }
  });

  return summary;
}

function parseFormulaFromText(text) {
  if (!text) return null;
  const sanitized = text.replace(/\s+/g, " ").trim();
  const summary = {
    components: [],
  };

  summary.name = matchGroup(sanitized, /Nome (?:della )?formula[:\-]\s*([^:]+?)(?:Tipologia|Volume|Concentrazione|Note|Famiglia|$)/i);
  summary.type = matchGroup(sanitized, /Tipologia[:\-]\s*([^:]+?)(?:Volume|Concentrazione|Note|Famiglia|$)/i);
  summary.volume = toNumeric(matchGroup(sanitized, /Volume(?: batch)?[:\-]\s*([\d.,]+)/i));
  summary.concentration = toNumeric(matchGroup(sanitized, /Concentrazione(?: aromi)?[:\-]\s*([\d.,]+)/i));
  summary.notes = matchGroup(sanitized, /Note creative[:\-]\s*([^:]+?)(?:Note di Testa|Note di Cuore|Note di Fondo|Sensazioni|$)/i);
  summary.topNotes = matchGroup(sanitized, /Note di Testa[:\-]\s*([^:]+?)(?:Note di Cuore|Note di Fondo|Sensazioni|$)/i);
  summary.heartNotes = matchGroup(sanitized, /Note di Cuore[:\-]\s*([^:]+?)(?:Note di Fondo|Sensazioni|$)/i);
  summary.baseNotes = matchGroup(sanitized, /Note di Fondo[:\-]\s*([^:]+?)(?:Sensazioni|Famiglia|$)/i);
  summary.impressions = matchGroup(sanitized, /Sensazioni[:\-]\s*([^:]+?)(?:Famiglia|$)/i);

  const componentRegex = /([A-Za-zÀ-ÖØ-öø-ÿ'’\s]+?)\s*(?:[-–:])\s*([\d.,]+)\s*%/g;
  let match;
  while ((match = componentRegex.exec(sanitized))) {
    const name = match[1].trim();
    const percentage = toNumeric(match[2]);
    if (name && percentage !== null) {
      summary.components.push({ name, percentage });
    }
  }

  return summary;
}

function buildFormulaFromImport(data) {
  if (!data) return null;

  const fallbackVolume = Number(formFields.volume.value) || 10;
  const fallbackDensity = Number(formFields.density.value) || 0.96;
  const fallbackConcentration = Number(formFields.concentration.value) || 18;
  const fallbackRating = Number(elements.rating.value) || 8;

  const volume = toNumeric(data.volume);
  const density = toNumeric(data.density);
  const concentration = toNumeric(data.concentration);
  const rating = toNumeric(data.rating);

  let name = (data.name || data.formula || "").toString().trim();
  if (!name) {
    name = `Import ${new Date().toLocaleString()}`;
  }

  const formula = {
    name,
    type: (data.type || "EDP").toUpperCase(),
    volume: volume ?? fallbackVolume,
    density: density ?? fallbackDensity,
    concentration: concentration ?? fallbackConcentration,
    notes: data.notes || "",
    components: [],
    componentsDetailed: [],
    rating: rating ?? fallbackRating,
    pyramid: {
      top: stringifyNotes(data.topNotes || data.pyramid?.top),
      heart: stringifyNotes(data.heartNotes || data.pyramid?.heart),
      base: stringifyNotes(data.baseNotes || data.pyramid?.base),
    },
    impressions: stringifyNotes(data.impressions),
    analysis: null,
    savedAt: new Date().toISOString(),
  };

  const missing = [];
  (data.components || []).forEach((component) => {
    const essence = findEssenceByName(component.name);
    const percentage = toNumeric(component.percentage);
    if (!essence || percentage === null || percentage <= 0) {
      if (component.name) {
        missing.push(component.name);
      }
      return;
    }
    formula.components.push({ id: essence.id, percentage });
  });

  return { formula, missing };
}

function findEssenceByName(name) {
  if (!name) return null;
  const normalized = normalizeLabel(name);
  if (!normalized) return null;
  return essenceNameIndex.get(normalized) || null;
}

function openSaveReport(formula) {
  const detailed = formula.componentsDetailed?.length ? formula.componentsDetailed : state.detailedComponents;
  const analysis = formula.analysis ?? state.analysis;
  const reportWindow = window.open("", "_blank", "noopener");
  if (!reportWindow) {
    showToast("Abilita i popup per esportare la formula");
    return;
  }

  const safeData = (data) => JSON.stringify(data).replace(/</g, "\\u003C");

  const rows = detailed
    .map(
      (component, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${component.name}</td>
          <td>${component.family}</td>
          <td>${component.noteType}</td>
          <td>${component.percentage.toFixed(2)}%</td>
          <td>${component.ml.toFixed(2)}</td>
          <td>${component.grams.toFixed(2)}</td>
          <td>${component.drops}</td>
        </tr>
      `,
    )
    .join("");

  const analysisBlock = analysis
    ? `
        <p class="report__metric">Voto AI: <strong>${analysis.rating}</strong> · Score ${analysis.score}/100</p>
        <p class="report__metric">Famiglia dominante: <strong>${analysis.family?.name ?? "—"}</strong></p>
        <p class="report__metric">Distribuzione: Testa ${analysis.distribution.top}% · Cuore ${analysis.distribution.heart}% · Fondo ${analysis.distribution.base}%</p>
        <p class="report__metric">Naturale vs sintetico: ${analysis.naturalShare}% / ${analysis.syntheticShare}%</p>
        <p class="report__metric">Highlight: ${analysis.highlights.join(" · ") || "—"}</p>
        <p class="report__metric">Sensazioni: ${analysis.impressions}</p>
      `
    : "";

  reportWindow.document.write(`
    <!DOCTYPE html>
    <html lang="it">
      <head>
        <meta charset="utf-8" />
        <title>Report Formula · ${formula.name}</title>
        <style>
          * { box-sizing: border-box; font-family: 'Manrope', system-ui, sans-serif; }
          body { margin: 0; background: #0b0e15; color: #f3f4f6; padding: 2.5rem; }
          h1 { font-size: 2.2rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem; }
          h2 { text-transform: uppercase; letter-spacing: 0.06em; margin-top: 2rem; font-size: 1.2rem; }
          .report { max-width: 960px; margin: 0 auto; background: rgba(15,18,24,0.85); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 2.5rem; position: relative; overflow: hidden; }
          .report::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 20% 20%, rgba(242,183,5,0.22), transparent 55%), radial-gradient(circle at 80% 10%, rgba(116,89,255,0.18), transparent 45%); pointer-events: none; }
          .report__header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; position: relative; z-index: 1; }
          .report__meta { color: #cdd1d9; letter-spacing: 0.08em; font-size: 0.85rem; text-transform: uppercase; }
          table { width: 100%; border-collapse: collapse; margin-top: 1.5rem; background: rgba(0,0,0,0.25); backdrop-filter: blur(12px); }
          th, td { padding: 0.75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); text-align: left; }
          th { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.78rem; color: #f5d16d; }
          td { font-size: 0.9rem; }
          .report__bottle { position: relative; width: 160px; height: 200px; margin-left: auto; }
          .bottle { position: absolute; inset: 0; border-radius: 30px 30px 18px 18px; background: linear-gradient(145deg, rgba(255,215,128,0.15), rgba(255,215,128,0.05)); border: 2px solid rgba(255,215,128,0.35); box-shadow: 0 0 45px rgba(255,215,128,0.2); display: flex; align-items: flex-end; justify-content: center; overflow: hidden; }
          .bottle::after { content: ""; width: 70%; height: 12px; border-radius: 12px; background: rgba(255,232,189,0.4); position: absolute; top: 18px; left: 50%; transform: translateX(-50%); }
          .bottle__liquid { width: 100%; height: 60%; background: linear-gradient(180deg, rgba(242,183,5,0.75), rgba(255,112,67,0.55)); animation: pulse 3.6s ease-in-out infinite; }
          .bottle__glow { position: absolute; inset: 0; background: radial-gradient(circle at 50% 20%, rgba(255,239,195,0.6), transparent 55%); mix-blend-mode: screen; animation: shimmer 4.2s linear infinite; }
          .export-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2rem; }
          .export-actions button { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); color: #f3f4f6; padding: 0.7rem 1.1rem; border-radius: 12px; cursor: pointer; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.8rem; transition: all 0.2s ease; }
          .export-actions button:hover { border-color: rgba(242,183,5,0.6); color: #ffde8f; box-shadow: 0 8px 24px rgba(242,183,5,0.15); }
          .report__metric { margin: 0.4rem 0; color: #d4d8df; font-size: 0.95rem; }
          @keyframes pulse { from { height: 55%; } 50% { height: 65%; } to { height: 55%; } }
          @keyframes shimmer { from { transform: translateY(-15%); opacity: 0.6; } 50% { opacity: 0.9; } to { transform: translateY(10%); opacity: 0.6; } }
          @media print { body { background: #fff; color: #111; padding: 1.5rem; } .report { box-shadow: none; border: none; background: #fff; } .report::before, .report__bottle, .export-actions { display: none !important; } th, td { border-color: #ddd; color: #111; } }
        </style>
      </head>
      <body>
        <div class="report">
          <div class="report__header">
            <div>
              <h1>${formula.name}</h1>
              <div class="report__meta">${formula.type} · ${formula.volume} ml · ${new Date(
                formula.savedAt,
              ).toLocaleString()}</div>
              ${analysisBlock}
            </div>
            <div class="report__bottle">
              <div class="bottle">
                <div class="bottle__glow"></div>
                <div class="bottle__liquid"></div>
              </div>
            </div>
          </div>
          <h2>Composizione</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Materia prima</th>
                <th>Famiglia</th>
                <th>Nota</th>
                <th>%</th>
                <th>ml</th>
                <th>g</th>
                <th>Gocce</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
          <div class="export-actions">
            <button data-export="pdf">Salva PDF</button>
            <button data-export="excel">Esporta Excel</button>
            <button data-export="word">Esporta Word</button>
            <button data-export="jpeg">Scarica JPEG</button>
          </div>
        </div>
        <script>
          const formula = ${safeData(formula)};
          const detailed = ${safeData(detailed)};
          const analysis = ${safeData(analysis || null)};

          function triggerDownload(data, mime, filename) {
            const blob = new Blob([data], { type: mime });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(link.href), 2000);
          }

          function exportCSV() {
            const header = ['Nome','Famiglia','Nota','Percentuale','ml','g','Gocce'];
            const lines = detailed.map((row) => [row.name, row.family, row.noteType, row.percentage, row.ml, row.grams, row.drops].join(';'));
            const csv = [header.join(';'), ...lines].join('\n');
            triggerDownload(csv, 'text/csv', `${sanitize(formula.name)}.csv`);
          }

          function exportWord() {
            const rows = detailed.map((row) => `<tr><td>${row.name}</td><td>${row.family}</td><td>${row.noteType}</td><td>${row.percentage}%</td><td>${row.ml}</td><td>${row.grams}</td><td>${row.drops}</td></tr>`).join('');
            const html = `<!DOCTYPE html><html><body><h1>${formula.name}</h1><table border="1" cellpadding="6" cellspacing="0"><thead><tr><th>Materia</th><th>Famiglia</th><th>Nota</th><th>%</th><th>ml</th><th>g</th><th>Gocce</th></tr></thead><tbody>${rows}</tbody></table></body></html>`;
            triggerDownload(html, 'application/msword', `${sanitize(formula.name)}.doc`);
          }

          function exportJPEG() {
            const canvas = document.createElement('canvas');
            const width = 1080;
            const height = 1350;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#0b0e15');
            gradient.addColorStop(1, '#1a2233');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#f2b705';
            ctx.font = '48px Cinzel, serif';
            ctx.fillText(formula.name, 60, 120);
            ctx.font = '22px Manrope, sans-serif';
            ctx.fillStyle = '#d1d5db';
            ctx.fillText(`${formula.type} · ${formula.volume} ml`, 60, 170);
            if (analysis) {
              ctx.fillText(`Voto AI: ${analysis.rating} / Score ${analysis.score}`, 60, 210);
              ctx.fillText(`Famiglia: ${analysis.family ? analysis.family.name : '—'}`, 60, 250);
            }
            ctx.fillText('Composizione', 60, 320);
            const startY = 360;
            const lineHeight = 36;
            detailed.slice(0, 20).forEach((row, index) => {
              const y = startY + index * lineHeight;
              ctx.fillStyle = '#f9fafb';
              ctx.fillText(`${index + 1}. ${row.name}`, 60, y);
              ctx.fillStyle = '#9ca3af';
              ctx.fillText(`${row.family} · ${row.noteType} · ${row.percentage.toFixed(1)}%`, 540, y);
            });
            const url = canvas.toDataURL('image/jpeg', 0.9);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${sanitize(formula.name)}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }

          function sanitize(text) {
            return text.replace(/[^a-z0-9]+/gi, '-').replace(/-+/g, '-').toLowerCase();
          }

          document.querySelectorAll('[data-export]').forEach((button) => {
            button.addEventListener('click', () => {
              const type = button.dataset.export;
              if (type === 'pdf') {
                window.print();
              } else if (type === 'excel') {
                exportCSV();
              } else if (type === 'word') {
                exportWord();
              } else if (type === 'jpeg') {
                exportJPEG();
              }
            });
          });
        </script>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

function formatSliderValue(value) {
  return Number(value).toFixed(1).replace(/\.0$/, "");
}

function syncExternalLibraries() {
  if (!EXTERNAL_LIBRARY_ENDPOINTS.length) return;
  updateSyncStatus("Sincronizzazione con archivi professionali…", "loading");

  Promise.allSettled(
    EXTERNAL_LIBRARY_ENDPOINTS.map((endpoint) =>
      fetch(endpoint)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Status ${response.status}`);
          }
          return response.json();
        })
        .then((payload) => ({ endpoint, payload }))
    ),
  )
    .then((results) => {
      const additions = [];
      results.forEach((result) => {
        if (result.status === "fulfilled") {
          const { endpoint, payload } = result.value;
          const extracted = extractExternalEssences(payload, endpoint);
          extracted.forEach((essence) => {
            if (!essenceIndex.has(essence.id)) {
              additions.push(essence);
            }
          });
        }
      });

      if (additions.length === 0) {
        updateSyncStatus("Database locale allineato", "success");
        return;
      }

      ESSENCES = [...ESSENCES, ...additions].sort((a, b) => a.name.localeCompare(b.name));
      rebuildEssenceIndex();
      renderFamilyPills();
      renderEssenceList();
      updateSyncStatus(`Sincronizzate ${additions.length} essenze esterne`, "success");
    })
    .catch(() => {
      updateSyncStatus("Connessione ai cataloghi esterni non disponibile", "offline");
    });
}

function extractExternalEssences(payload, endpoint) {
  if (!payload) return [];
  const list = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.essences)
    ? payload.essences
    : Array.isArray(payload?.data)
    ? payload.data
    : [];

  return list
    .map((item, index) => normalizeExternalEssence(item, endpoint, index))
    .filter(Boolean);
}

function normalizeExternalEssence(raw, endpoint, index) {
  const name = raw.name || raw.nome || raw.material || raw.title;
  if (!name) return null;

  const family = raw.family || raw.category || raw.famiglia || "Miscela";
  const noteType = (raw.tier || raw.noteType || raw.layer || "heart").toLowerCase();
  const sourceRaw = (raw.origin || raw.source || "").toLowerCase();
  const source = sourceRaw.includes("syn") ? "sintetica" : sourceRaw.includes("nat") ? "naturale" : "naturale";
  const descriptors = toArray(raw.descriptors || raw.facets || raw.tags || []);
  const facets = toArray(raw.facets || raw.nuances || []);
  const volatility = Number(raw.volatility ?? raw.evaporation ?? 0.5) || 0.5;
  const intensity = Number(raw.intensity ?? raw.strength ?? 0.6) || 0.6;
  const harmonies = toArray(raw.harmonies || raw.pairings || []);
  const safeId = `${name}-${family}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 60);

  const id = essenceIndex.has(safeId) ? `${safeId}-${index}` : safeId;

  return {
    id,
    name,
    family,
    noteType,
    source,
    descriptors,
    facets,
    volatility,
    intensity,
    harmonies,
    externalSource: endpoint,
  };
}

function formatNumber(value) {
  const number = toNumeric(value);
  if (number === null) return "—";
  return Number(number).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function formatTimestamp(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString();
}

function matchGroup(text, regex) {
  if (!text) return "";
  const match = regex.exec(text);
  return match ? match[1].trim() : "";
}

function stringifyNotes(value) {
  if (!value) return "";
  if (Array.isArray(value)) {
    return value.map((item) => `${item}`.trim()).filter(Boolean).join(", ");
  }
  if (typeof value === "string") {
    return value.trim();
  }
  return `${value}`.trim();
}

function normalizeLabel(value) {
  if (!value && value !== 0) return "";
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "_");
}

function toNumeric(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }
  if (typeof value === "string") {
    const sanitized = value
      .replace(/[^0-9,.-]/g, "")
      .replace(/,(?=\d{3}\b)/g, "")
      .replace(/,/g, ".");
    if (!sanitized) return null;
    const number = Number(sanitized);
    return Number.isFinite(number) ? number : null;
  }
  return null;
}

function toArray(value) {
  if (Array.isArray(value)) return value.map((item) => `${item}`.trim()).filter(Boolean);
  if (typeof value === "string") {
    return value
      .split(/[,;\u2022]/)
      .map((part) => part.trim())
      .filter(Boolean);
  }
  return [];
}

function updateSyncStatus(message, status = "idle") {
  if (!elements.syncStatus) return;
  elements.syncStatus.textContent = message;
  elements.syncStatus.dataset.status = status;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}
