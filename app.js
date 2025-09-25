const DROPS_PER_ML = 20;
const DEFAULT_PERCENTAGES = {
  top: 8,
  heart: 12,
  base: 15,
};

const ESSENCES = [
  {
    id: "bergamot-calabria",
    name: "Bergamotto di Calabria",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["frizzante", "solare", "tonica"],
  },
  {
    id: "lemon-sicily",
    name: "Limone di Sicilia",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["limpido", "sottile", "verde"],
  },
  {
    id: "grapefruit-pink",
    name: "Pompelmo Rosa",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["amaricante", "effervescente"],
  },
  {
    id: "blackcurrant-bud",
    name: "Bocciolo di Ribes Nero",
    family: "Fruttata",
    noteType: "top",
    source: "naturale",
    descriptors: ["verde", "cremoso", "sulfureo"],
  },
  {
    id: "aldehyde-c12",
    name: "Aldeide C12 MNA",
    family: "Aldeidica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["saponosa", "scintillante", "metallica"],
  },
  {
    id: "pink-pepper",
    name: "Pepe Rosa CO2",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["pepato", "rosato", "fruttato"],
  },
  {
    id: "cardamom",
    name: "Cardamomo del Guatemala",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["freddo", "eucaliptato", "balsamico"],
  },
  {
    id: "saffron",
    name: "Zafferano Assoluta",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cuoio", "dorato", "metallico"],
  },
  {
    id: "iris-pallida",
    name: "Iris Pallida Burro",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cipriato", "vellutato", "legnoso"],
  },
  {
    id: "jasmine-sambac",
    name: "Gelsomino Sambac",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["solare", "miele", "verde"],
  },
  {
    id: "rose-damask",
    name: "Rosa Damascena Assoluta",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["mielata", "profonda", "vellutata"],
  },
  {
    id: "ylang-comores",
    name: "Ylang Ylang Comore",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cremoso", "fruttato", "solare"],
  },
  {
    id: "violet-leaf",
    name: "Foglia di Violetta Absolue",
    family: "Foglia Verde",
    noteType: "heart",
    source: "naturale",
    descriptors: ["vegetale", "acquatico", "metallico"],
  },
  {
    id: "lavender-highland",
    name: "Lavanda d'Alta Provenza",
    family: "Aromatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["balsamica", "erbaria", "calmante"],
  },
  {
    id: "roasted-coffee",
    name: "Caffè Tostato CO2",
    family: "Gourmand",
    noteType: "heart",
    source: "naturale",
    descriptors: ["torrefatto", "amaro", "affumicato"],
  },
  {
    id: "tonka",
    name: "Fava Tonka Assoluta",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["mandorlata", "calda", "tabaccosa"],
  },
  {
    id: "vanillin",
    name: "Vanillina",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["dolce", "crema", "comfort"],
  },
  {
    id: "ambroxan",
    name: "Ambroxan",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambrato", "minerale", "sensuale"],
  },
  {
    id: "cedar-atlas",
    name: "Cedro dell'Atlas",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["secco", "resinoso", "maturo"],
  },
  {
    id: "sandalwood",
    name: "Sandalo Nuovo Caledonia",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["latteo", "cremoso", "morbido"],
  },
  {
    id: "patchouli-fraction",
    name: "Patchouli Scorched Fraction",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["cioccolato", "terroso", "boisé"],
  },
  {
    id: "vetiver-haïti",
    name: "Vetiver di Haiti",
    family: "Terrosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["affumicato", "terroso", "legnoso"],
  },
  {
    id: "oakmoss",
    name: "Muschio di Quercia Low-Atr",
    family: "Chypré",
    noteType: "base",
    source: "naturale",
    descriptors: ["umido", "salino", "boscoso"],
  },
  {
    id: "labdanum-resinoid",
    name: "Labdano Resinoide",
    family: "Ambrata",
    noteType: "base",
    source: "naturale",
    descriptors: ["cuoio", "ambrato", "resinoso"],
  },
  {
    id: "benzoin-siam",
    name: "Benzoino del Siam",
    family: "Balsamica",
    noteType: "base",
    source: "naturale",
    descriptors: ["miele", "vaniglia", "balsamico"],
  },
  {
    id: "cashmeran",
    name: "Cashmeran",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["soffice", "boisé", "muschiata"],
  },
  {
    id: "iso-e-super",
    name: "Iso E Super",
    family: "Legnosa",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["trasparente", "cedrato", "moderno"],
  },
  {
    id: "hedione",
    name: "Hedione HC",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["gelsominato", "radioso", "arioso"],
  },
  {
    id: "muguet-synth",
    name: "Hydroxycitronellal",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["mughetto", "soffice", "verde"],
  },
  {
    id: "ambrettolide",
    name: "Ambrettolide",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["pulito", "setoso", "muschiato"],
  },
  {
    id: "cetalox",
    name: "Cetalox",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambra grigia", "minerale", "vellutata"],
  },
  {
    id: "galbanum",
    name: "Galbano Resina",
    family: "Foglia Verde",
    noteType: "top",
    source: "naturale",
    descriptors: ["verde", "amarognolo", "resinoso"],
  },
  {
    id: "mate-absolute",
    name: "Maté Assoluta",
    family: "Erbacea",
    noteType: "heart",
    source: "naturale",
    descriptors: ["tostato", "verde", "affumicato"],
  },
  {
    id: "immortelle",
    name: "Elicriso Assoluta",
    family: "Balsamica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["miele", "curry", "solare"],
  },
  {
    id: "frankincense",
    name: "Incenso Oman",
    family: "Resinosa",
    noteType: "heart",
    source: "naturale",
    descriptors: ["fumosa", "limpida", "sacrale"],
  },
  {
    id: "myrrh",
    name: "Mirra Eritrea",
    family: "Resinosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["balsamica", "liquirizia", "mistica"],
  },
  {
    id: "birch-tar",
    name: "Catrame di Betulla",
    family: "Cuoio",
    noteType: "base",
    source: "naturale",
    descriptors: ["affumicato", "cuoio", "animalico"],
  },
  {
    id: "suederal",
    name: "Suederal",
    family: "Cuoio",
    noteType: "base",
    source: "sintetica",
    descriptors: ["scamosciato", "morbido", "ambra"],
  },
  {
    id: "marine-brisa",
    name: "Accordo Marino Brisa",
    family: "Acquatica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["ozonica", "salina", "aria"],
  },
  {
    id: "melon-fresh",
    name: "Melone Fresco Base",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["acquatico", "dolce", "trasparente"],
  },
  {
    id: "fig-leaf",
    name: "Foglia di Fico",
    family: "Foglia Verde",
    noteType: "heart",
    source: "naturale",
    descriptors: ["lattea", "verde", "solare"],
  },
  {
    id: "praline-base",
    name: "Base Praliné",
    family: "Gourmand",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["caramello", "nocciola", "burrosa"],
  },
  {
    id: "musk-t",
    name: "Muscone Synthetico",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["pelle", "pulito", "sensuale"],
  },
  {
    id: "cocoa-absolute",
    name: "Cacao Assoluta",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["cioccolato", "denso", "bitter"],
  },
  {
    id: "tobacco-leaf",
    name: "Tabacco Foglia Assoluta",
    family: "Tabaccosa",
    noteType: "heart",
    source: "naturale",
    descriptors: ["mielato", "cuoio", "fumé"],
  },
  {
    id: "sage",
    name: "Salvia Sclarea",
    family: "Aromatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["erbacea", "ambra", "muschio"],
  },
  {
    id: "peppermint",
    name: "Menta Piperita",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["fredda", "verde", "mentolata"],
  },
];

const elements = {
  essenceList: document.querySelector("#essence-list"),
  searchInput: document.querySelector("#search-essence"),
  familyFilter: document.querySelector("#family-filter"),
  workspaceIntro: document.querySelector("#workspace-intro"),
  workspace: document.querySelector("#workspace"),
  startBuilder: document.querySelector("#start-builder"),
  composition: document.querySelector("#composition"),
  compositionSummary: document.querySelector("#composition-summary"),
  clearSelection: document.querySelector("#clear-selection"),
  batchForm: document.querySelector("#batch-form"),
  rating: document.querySelector("#rating"),
  ratingOutput: document.querySelector("#rating-output"),
  olfactoryFamily: document.querySelector("#olfactory-family"),
  saveFormula: document.querySelector("#save-formula"),
  loadFormula: document.querySelector("#load-formula"),
  duplicateFormula: document.querySelector("#duplicate-formula"),
};

const state = {
  selected: new Map(),
  activeFamilyFilter: "tutte",
};

const templates = {
  compositionRow: document.querySelector("#composition-row-template"),
  savedModal: document.querySelector("#saved-formulas-template"),
};

const formFields = {
  name: document.querySelector("#formula-name"),
  type: document.querySelector("#batch-type"),
  volume: document.querySelector("#batch-volume"),
  density: document.querySelector("#density"),
  concentration: document.querySelector("#concentration"),
  notes: document.querySelector("#formula-notes"),
  topNotes: document.querySelector("#top-notes"),
  heartNotes: document.querySelector("#heart-notes"),
  baseNotes: document.querySelector("#base-notes"),
  impressions: document.querySelector("#impressions"),
};

function init() {
  renderEssenceList();
  renderFamilyPills();
  bindEvents();
  loadInitialState();
}

function bindEvents() {
  elements.searchInput.addEventListener("input", renderEssenceList);
  elements.startBuilder.addEventListener("click", startFormula);
  elements.clearSelection.addEventListener("click", clearComposition);
  elements.rating.addEventListener("input", () => {
    elements.ratingOutput.textContent = elements.rating.value;
  });
  elements.saveFormula.addEventListener("click", handleSaveFormula);
  elements.loadFormula.addEventListener("click", openSavedModal);
  elements.duplicateFormula.addEventListener("click", duplicateFormula);
  formFields.volume.addEventListener("input", updateCompositionSummary);
  formFields.density.addEventListener("input", updateCompositionSummary);
  formFields.concentration.addEventListener("input", updateCompositionSummary);
}

function loadInitialState() {
  const stored = localStorage.getItem("god-of-essence:last");
  if (!stored) return;
  const parsed = JSON.parse(stored);
  populateFormula(parsed);
  revealWorkspace();
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

function renderEssenceList() {
  const term = elements.searchInput.value?.toLowerCase().trim() ?? "";
  const filtered = ESSENCES.filter((essence) => {
    const matchesTerm = [essence.name, essence.family, essence.noteType, essence.source]
      .join(" ")
      .toLowerCase()
      .includes(term);
    const matchesFamily =
      state.activeFamilyFilter === "tutte" || essence.family === state.activeFamilyFilter;
    return matchesTerm && matchesFamily;
  });

  elements.essenceList.innerHTML = "";
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
        <span>${essence.descriptors.join(" · ")}</span>
      </div>
    `;

    li.addEventListener("click", () => addEssenceToComposition(essence));
    elements.essenceList.appendChild(li);
  });
}

function renderFamilyPills() {
  const families = ["tutte", ...new Set(ESSENCES.map((essence) => essence.family))];
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

function addEssenceToComposition(essence) {
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
  const row = elements.composition.querySelector(`.composition__row[data-id='${id}']`);
  if (!row) return;
  row.classList.add("is-highlighted");
  row.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => row.classList.remove("is-highlighted"), 1200);
}

function clearComposition() {
  state.selected.clear();
  elements.composition.innerHTML = "";
  updateCompositionSummary();
}

function updateCompositionSummary() {
  const compositionRows = [...elements.composition.querySelectorAll(".composition__row")];
  const percentages = compositionRows.map((row) => {
    const slider = row.querySelector("input[type='range']");
    return Number(slider.value);
  });
  const totalPercentage = percentages.reduce((sum, value) => sum + value, 0);

  const volume = Number(formFields.volume.value) || 0;
  const concentration = Number(formFields.concentration.value) || 0;
  const density = Number(formFields.density.value) || 1;

  const aromaticVolume = (volume * concentration) / 100;

  compositionRows.forEach((row) => {
    const slider = row.querySelector("input[type='range']");
    const percentage = Number(slider.value);
    const ml = (aromaticVolume * percentage) / 100;
    const grams = ml * density;
    const drops = ml * DROPS_PER_ML;

    row.querySelector('[data-unit="ml"]').textContent = ml.toFixed(2);
    row.querySelector('[data-unit="g"]').textContent = grams.toFixed(2);
    row.querySelector('[data-unit="drops"]').textContent = Math.round(drops);
  });

  const remainder = Math.max(0, 100 - totalPercentage);
  const summaryParts = [
    `<span>${totalPercentage.toFixed(1)}% aroma</span>`,
    remainder > 0 ? `${remainder.toFixed(1)}% disponibili` : "Bilanciato",
    `${aromaticVolume.toFixed(2)} ml aroma totale`,
  ];
  elements.compositionSummary.innerHTML = summaryParts.join(" · ");
  updateOlfactoryFamily();
  persistLastFormula();
}

function updateOlfactoryFamily() {
  if (state.selected.size === 0) {
    elements.olfactoryFamily.textContent = "—";
    return;
  }
  const totals = {};
  state.selected.forEach((percentage, id) => {
    const essence = ESSENCES.find((item) => item.id === id);
    if (!essence) return;
    totals[essence.family] = (totals[essence.family] || 0) + percentage;
  });
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const [topFamily, topValue] = sorted[0];
  const total = [...state.selected.values()].reduce((sum, value) => sum + value, 0);
  const percentage = total > 0 ? Math.round((topValue / total) * 100) : 0;
  elements.olfactoryFamily.textContent = `${topFamily} · ${percentage}%`;
}

function gatherFormulaState() {
  const components = [...elements.composition.querySelectorAll(".composition__row")].map((row) => {
    const id = row.dataset.id;
    const slider = row.querySelector("input[type='range']");
    return { id, percentage: Number(slider.value) };
  });

  return {
    name: formFields.name.value || "Formula senza nome",
    type: formFields.type.value,
    volume: Number(formFields.volume.value) || 0,
    density: Number(formFields.density.value) || 1,
    concentration: Number(formFields.concentration.value) || 0,
    notes: formFields.notes.value,
    components,
    rating: Number(elements.rating.value),
    pyramid: {
      top: formFields.topNotes.value,
      heart: formFields.heartNotes.value,
      base: formFields.baseNotes.value,
    },
    impressions: formFields.impressions.value,
    savedAt: new Date().toISOString(),
  };
}

function populateFormula(data) {
  clearComposition();
  formFields.name.value = data.name ?? "";
  formFields.type.value = data.type ?? "EDP";
  formFields.volume.value = data.volume ?? 10;
  formFields.density.value = data.density ?? 0.96;
  formFields.concentration.value = data.concentration ?? 18;
  formFields.notes.value = data.notes ?? "";
  elements.rating.value = data.rating ?? 8;
  elements.ratingOutput.textContent = elements.rating.value;
  formFields.topNotes.value = data.pyramid?.top ?? "";
  formFields.heartNotes.value = data.pyramid?.heart ?? "";
  formFields.baseNotes.value = data.pyramid?.base ?? "";
  formFields.impressions.value = data.impressions ?? "";

  data.components?.forEach((component) => {
    const essence = ESSENCES.find((item) => item.id === component.id);
    if (essence) {
      addEssenceToComposition(essence);
      const row = elements.composition.querySelector(`.composition__row[data-id='${essence.id}']`);
      if (row) {
        const slider = row.querySelector("input[type='range']");
        slider.value = component.percentage;
        slider.dispatchEvent(new Event("input"));
      }
    }
  });
  updateCompositionSummary();
}

function handleSaveFormula() {
  const formula = gatherFormulaState();
  const stored = JSON.parse(localStorage.getItem("god-of-essence:formulas") || "[]");
  const existingIndex = stored.findIndex((item) => item.name === formula.name);
  if (existingIndex >= 0) {
    stored[existingIndex] = formula;
  } else {
    stored.push(formula);
  }
  localStorage.setItem("god-of-essence:formulas", JSON.stringify(stored));
  localStorage.setItem("god-of-essence:last", JSON.stringify(formula));
  showToast(`Formula "${formula.name}" salvata`);
}

function persistLastFormula() {
  const formula = gatherFormulaState();
  localStorage.setItem("god-of-essence:last", JSON.stringify(formula));
}

function openSavedModal() {
  const stored = JSON.parse(localStorage.getItem("god-of-essence:formulas") || "[]");
  if (stored.length === 0) {
    showToast("Nessuna formula salvata ancora");
    return;
  }

  let modal = document.querySelector("#saved-formulas-modal");
  if (!modal) {
    const fragment = templates.savedModal.content.cloneNode(true);
    document.body.appendChild(fragment);
    modal = document.querySelector("#saved-formulas-modal");
    modal.querySelector("#close-saved").addEventListener("click", () => modal.close());
    modal.addEventListener("close", () => modal.removeAttribute("open"));
  }

  const list = modal.querySelector("#saved-formulas-list");
  list.innerHTML = "";

  stored
    .sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt))
    .forEach((formula, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${formula.name}</strong>
          <div class="meta">${formula.type} · ${formula.volume} ml · ${new Date(
        formula.savedAt
      ).toLocaleString()}</div>
        </div>
        <div class="modal-buttons">
          <button class="btn btn--ghost" data-action="load" data-index="${index}">Carica</button>
          <button class="btn btn--ghost" data-action="delete" data-index="${index}">Elimina</button>
        </div>`;
      list.appendChild(li);
    });

  list.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const action = event.currentTarget.dataset.action;
      const index = Number(event.currentTarget.dataset.index);
      if (action === "load") {
        populateFormula(stored[index]);
        modal.close();
        revealWorkspace();
      } else if (action === "delete") {
        stored.splice(index, 1);
        localStorage.setItem("god-of-essence:formulas", JSON.stringify(stored));
        openSavedModal();
      }
    });
  });

  if (typeof modal.showModal === "function") {
    modal.showModal();
  }
}

function duplicateFormula() {
  const current = gatherFormulaState();
  current.name = `${current.name} · Remix`;
  current.savedAt = new Date().toISOString();
  populateFormula(current);
  showToast("Formula duplicata, personalizza liberamente");
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

init();
