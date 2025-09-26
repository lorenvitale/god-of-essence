// Bundled with custom script to inline LOCAL_ESSENCES
(() => {
const LOCAL_ESSENCES = [
  {
    id: "bergamot-calabria",
    name: "Bergamotto di Calabria",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["frizzante", "solare", "tonica"],
    facets: ["agrumato", "verde", "speziato"],
    volatility: 0.94,
    intensity: 0.58,
    harmonies: ["Floreale", "Aromatica", "Chypré"],
  },
  {
    id: "lemon-sicily",
    name: "Limone di Sicilia",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["limpido", "succoso", "verde"],
    facets: ["agrumato", "verve", "minerale"],
    volatility: 0.95,
    intensity: 0.55,
    harmonies: ["Floreale", "Legnosa", "Acquatica"],
  },
  {
    id: "grapefruit-pink",
    name: "Pompelmo Rosa",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["amaricante", "effervescente", "roseo"],
    facets: ["agrumato", "frizzante", "verde"],
    volatility: 0.92,
    intensity: 0.6,
    harmonies: ["Speziata", "Floreale", "Acquatica"],
  },
  {
    id: "lime-tahiti",
    name: "Lime di Tahiti",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["pungente", "verde", "polposo"],
    facets: ["lime", "acquatico", "speziato"],
    volatility: 0.93,
    intensity: 0.54,
    harmonies: ["Aromatica", "Gourmand", "Floreale"],
  },
  {
    id: "mandarin-green",
    name: "Mandarino Verde Foglie",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["verde", "dolce", "mandarancio"],
    facets: ["agrumato", "erbaceo", "morbido"],
    volatility: 0.91,
    intensity: 0.53,
    harmonies: ["Floreale", "Gourmand", "Fougère"],
  },
  {
    id: "yuzu-japan",
    name: "Yuzu Giapponese",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["luminosa", "speziata", "esotica"],
    facets: ["agrumato", "zen", "speziato"],
    volatility: 0.9,
    intensity: 0.57,
    harmonies: ["Legnosa", "Floreale", "Acquatica"],
  },
  {
    id: "clementine-italy",
    name: "Clementina Italiana",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["succosa", "solare", "miele"],
    facets: ["agrumato", "dolce", "floreale"],
    volatility: 0.9,
    intensity: 0.52,
    harmonies: ["Floreale", "Gourmand", "Speziata"],
  },
  {
    id: "petitgrain-paraguay",
    name: "Petitgrain del Paraguay",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["amaricante", "foglia", "legnoso"],
    facets: ["verde", "legnoso", "petitgrain"],
    volatility: 0.85,
    intensity: 0.6,
    harmonies: ["Fougère", "Aromatica", "Chypré"],
  },
  {
    id: "green-mandarin",
    name: "Mandarino Verde Distillato",
    family: "Agrumata",
    noteType: "top",
    source: "naturale",
    descriptors: ["erbaceo", "foglia", "succoso"],
    facets: ["agrumato", "verde", "bitter"],
    volatility: 0.89,
    intensity: 0.53,
    harmonies: ["Fougère", "Floreale", "Speziata"],
  },
  {
    id: "aldehyde-c12",
    name: "Aldeide C12 MNA",
    family: "Aldeidica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["saponosa", "scintillante", "metallica"],
    facets: ["aldeidica", "frizzante", "ozonica"],
    volatility: 0.98,
    intensity: 0.62,
    harmonies: ["Floreale", "Muschiata", "Marina"],
  },
  {
    id: "aldehyde-c10",
    name: "Aldeide C10",
    family: "Aldeidica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["cera", "candido", "frizzante"],
    facets: ["aldeidica", "limonata", "pulita"],
    volatility: 0.97,
    intensity: 0.58,
    harmonies: ["Floreale", "Gourmand", "Legnosa"],
  },
  {
    id: "aldehyde-c11",
    name: "Aldeide C11",
    family: "Aldeidica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["ozonica", "vetrosa", "aria"],
    facets: ["trasparente", "metallica", "solare"],
    volatility: 0.97,
    intensity: 0.61,
    harmonies: ["Acquatica", "Floreale", "Muschiata"],
  },
  {
    id: "blackcurrant-bud",
    name: "Bocciolo di Ribes Nero",
    family: "Fruttata",
    noteType: "top",
    source: "naturale",
    descriptors: ["verde", "sulfureo", "cremoso"],
    facets: ["verde", "fruttato", "animalico"],
    volatility: 0.82,
    intensity: 0.7,
    harmonies: ["Floreale", "Gourmand", "Chypré"],
  },
  {
    id: "cassis-base",
    name: "Base Cassis Signature",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["acidula", "nera", "lucida"],
    facets: ["frutti rossi", "verde", "moderna"],
    volatility: 0.8,
    intensity: 0.66,
    harmonies: ["Floreale", "Muscata", "Gourmand"],
  },
  {
    id: "apple-smith",
    name: "Mela Verde Smith",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["croccante", "verde", "succosa"],
    facets: ["mela", "verde", "ozonica"],
    volatility: 0.82,
    intensity: 0.56,
    harmonies: ["Acquatica", "Floreale", "Fougère"],
  },
  {
    id: "pear-accord",
    name: "Accordo Pera Nashi",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["polposa", "acquatica", "dolce"],
    facets: ["pera", "verde", "trasparente"],
    volatility: 0.83,
    intensity: 0.59,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "pineapple-core",
    name: "Ananas Cuore",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["tropicale", "dolce", "acidulo"],
    facets: ["ananas", "succo", "gourmand"],
    volatility: 0.8,
    intensity: 0.63,
    harmonies: ["Gourmand", "Floreale", "Legnosa"],
  },
  {
    id: "raspberry-ketone",
    name: "Lampone Ketone",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["lampone", "candito", "floreale"],
    facets: ["frutti rossi", "dolce", "polveroso"],
    volatility: 0.78,
    intensity: 0.68,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "marine-brisa",
    name: "Accordo Marino Brisa",
    family: "Acquatica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["ozonica", "salina", "aria"],
    facets: ["marina", "ozonica", "minerale"],
    volatility: 0.87,
    intensity: 0.61,
    harmonies: ["Agrumata", "Floreale", "Muscata"],
  },
  {
    id: "seaweed-absolute",
    name: "Alga Atlantica Assoluta",
    family: "Acquatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["iodata", "umami", "salata"],
    facets: ["marino", "verde", "resinoso"],
    volatility: 0.65,
    intensity: 0.72,
    harmonies: ["Chypré", "Legnosa", "Aromatica"],
  },
  {
    id: "melon-fresh",
    name: "Melone Fresco Base",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["acquatico", "dolce", "trasparente"],
    facets: ["melone", "acquatico", "verde"],
    volatility: 0.79,
    intensity: 0.55,
    harmonies: ["Acquatica", "Muscata", "Floreale"],
  },
  {
    id: "basilico-verde",
    name: "Basilico Verde Fresco",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["erbaceo", "anice", "verde"],
    facets: ["basilico", "speziato", "verde"],
    volatility: 0.78,
    intensity: 0.62,
    harmonies: ["Agrumata", "Fougère", "Gourmand"],
  },
  {
    id: "peppermint",
    name: "Menta Piperita",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["fredda", "mentolata", "verde"],
    facets: ["menta", "canforato", "verde"],
    volatility: 0.85,
    intensity: 0.65,
    harmonies: ["Agrumata", "Gourmand", "Fougère"],
  },
  {
    id: "spearmint",
    name: "Menta Romana",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["dolce", "menta", "verde"],
    facets: ["menta", "dolce", "erba"],
    volatility: 0.83,
    intensity: 0.6,
    harmonies: ["Gourmand", "Fougère", "Muscata"],
  },
  {
    id: "eucalyptus-bluegum",
    name: "Eucalipto Blue Gum",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["canforato", "aria", "balsamico"],
    facets: ["eucalipto", "mentolato", "resinoso"],
    volatility: 0.86,
    intensity: 0.66,
    harmonies: ["Fougère", "Resinosa", "Speziata"],
  },
  {
    id: "rosemary-corsica",
    name: "Rosmarino di Corsica",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["canforato", "verde", "salino"],
    facets: ["resina", "verde", "mare"],
    volatility: 0.82,
    intensity: 0.61,
    harmonies: ["Agrumata", "Chypré", "Legnosa"],
  },
  {
    id: "thyme-white",
    name: "Timo Bianco",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["balsamico", "speziato", "verde"],
    facets: ["erbaceo", "caldo", "medicinale"],
    volatility: 0.76,
    intensity: 0.68,
    harmonies: ["Speziata", "Fougère", "Chypré"],
  },
  {
    id: "ginger-co2",
    name: "Zenzero CO2",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["speziato", "limonato", "caldo"],
    facets: ["zenzero", "pepe", "limone"],
    volatility: 0.8,
    intensity: 0.7,
    harmonies: ["Agrumata", "Gourmand", "Legnosa"],
  },
  {
    id: "cardamom",
    name: "Cardamomo del Guatemala",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["freddo", "eucaliptato", "balsamico"],
    facets: ["speziato", "verde", "camforato"],
    volatility: 0.78,
    intensity: 0.69,
    harmonies: ["Cuoio", "Gourmand", "Aromatica"],
  },
  {
    id: "pink-pepper",
    name: "Pepe Rosa CO2",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["pepato", "rosato", "fruttato"],
    facets: ["speziato", "fruttato", "citrico"],
    volatility: 0.77,
    intensity: 0.66,
    harmonies: ["Floreale", "Fruttata", "Cuoio"],
  },
  {
    id: "timut-pepper",
    name: "Pepe Timut",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["pompelmo", "speziato", "piccante"],
    facets: ["pepe", "agrumato", "leggero"],
    volatility: 0.76,
    intensity: 0.62,
    harmonies: ["Agrumata", "Floreale", "Gourmand"],
  },
  {
    id: "black-pepper",
    name: "Pepe Nero Madagascar",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["caldo", "legnoso", "terroso"],
    facets: ["speziato", "pepato", "resinoso"],
    volatility: 0.72,
    intensity: 0.73,
    harmonies: ["Legnosa", "Cuoio", "Gourmand"],
  },
  {
    id: "coriander-seed",
    name: "Coriandolo Semi",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["noce", "arancia", "speziato"],
    facets: ["caldo", "agrumato", "speziato"],
    volatility: 0.74,
    intensity: 0.64,
    harmonies: ["Floreale", "Legnosa", "Gourmand"],
  },
  {
    id: "juniper-berry",
    name: "Ginepro Bacca",
    family: "Aromatica",
    noteType: "top",
    source: "naturale",
    descriptors: ["gin", "resinoso", "pepato"],
    facets: ["resina", "speziato", "bosco"],
    volatility: 0.75,
    intensity: 0.63,
    harmonies: ["Legnosa", "Cuoio", "Chypré"],
  },
  {
    id: "rhubarb-stem",
    name: "Rabarbaro Gambo",
    family: "Vegetale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["verde", "acidulo", "vegetale"],
    facets: ["rabarbaro", "metallico", "verde"],
    volatility: 0.68,
    intensity: 0.67,
    harmonies: ["Floreale", "Agrumata", "Gourmand"],
  },
  {
    id: "green-tea",
    name: "Accordo Tè Verde Sencha",
    family: "Aromatica",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["tè", "erbaceo", "acquatico"],
    facets: ["tè", "verde", "ozonico"],
    volatility: 0.66,
    intensity: 0.55,
    harmonies: ["Acquatica", "Floreale", "Gourmand"],
  },
  {
    id: "mate-absolute",
    name: "Maté Assoluta",
    family: "Erbacea",
    noteType: "heart",
    source: "naturale",
    descriptors: ["tostato", "verde", "affumicato"],
    facets: ["mate", "erba", "tabacco"],
    volatility: 0.52,
    intensity: 0.68,
    harmonies: ["Tabaccosa", "Legnosa", "Gourmand"],
  },
  {
    id: "black-tea",
    name: "Tè Nero Assam",
    family: "Erbacea",
    noteType: "heart",
    source: "naturale",
    descriptors: ["tannico", "cuoio", "maltato"],
    facets: ["tè", "affumicato", "malt"],
    volatility: 0.5,
    intensity: 0.7,
    harmonies: ["Gourmand", "Tabaccosa", "Legnosa"],
  },
  {
    id: "white-tea",
    name: "Tè Bianco Foglie",
    family: "Erbacea",
    noteType: "heart",
    source: "naturale",
    descriptors: ["pulito", "morbido", "petale"],
    facets: ["tè", "floreale", "aria"],
    volatility: 0.54,
    intensity: 0.52,
    harmonies: ["Floreale", "Muscata", "Agrumata"],
  },
  {
    id: "osmanthus-absolute",
    name: "Osmanto Assoluta",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["albicocca", "cuoio", "tè"],
    facets: ["fruttato", "cuoio", "floreale"],
    volatility: 0.48,
    intensity: 0.74,
    harmonies: ["Cuoio", "Gourmand", "Floreale"],
  },
  {
    id: "jasmine-sambac",
    name: "Gelsomino Sambac",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["solare", "miele", "verde"],
    facets: ["floreale", "fruttato", "tè"],
    volatility: 0.56,
    intensity: 0.82,
    harmonies: ["Agrumata", "Muscata", "Orientale"],
  },
  {
    id: "jasmine-grandiflorum",
    name: "Gelsomino Grandiflorum",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cremoso", "indolico", "sensuale"],
    facets: ["floreale", "indolico", "fruttato"],
    volatility: 0.55,
    intensity: 0.84,
    harmonies: ["Ambrata", "Cuoio", "Gourmand"],
  },
  {
    id: "rose-damask",
    name: "Rosa Damascena Assoluta",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["mielata", "profonda", "vellutata"],
    facets: ["rosa", "miele", "speziata"],
    volatility: 0.52,
    intensity: 0.86,
    harmonies: ["Speziata", "Gourmand", "Legnosa"],
  },
  {
    id: "rose-centifolia",
    name: "Rosa Centifolia Assoluta",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["morbida", "miele", "petali"],
    facets: ["rosata", "miele", "verde"],
    volatility: 0.5,
    intensity: 0.83,
    harmonies: ["Chypré", "Gourmand", "Muscata"],
  },
  {
    id: "rose-otto-turkey",
    name: "Rosa Otto Turchia",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["fresco", "limone", "rosa"],
    facets: ["rosa", "agrumato", "verde"],
    volatility: 0.49,
    intensity: 0.78,
    harmonies: ["Agrumata", "Legnosa", "Muscata"],
  },
  {
    id: "geranium-egypt",
    name: "Geranio Egiziano",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["mentolato", "rosato", "verde"],
    facets: ["geranio", "menta", "rosa"],
    volatility: 0.58,
    intensity: 0.7,
    harmonies: ["Fougère", "Chypré", "Muscata"],
  },
  {
    id: "lavender-highland",
    name: "Lavanda d'Alta Provenza",
    family: "Aromatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["balsamica", "erbaria", "calmante"],
    facets: ["lavanda", "floreale", "canforata"],
    volatility: 0.6,
    intensity: 0.69,
    harmonies: ["Fougère", "Gourmand", "Agrumata"],
  },
  {
    id: "sage-sclarea",
    name: "Salvia Sclarea Assoluta",
    family: "Aromatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["ambra", "erbacea", "muschio"],
    facets: ["salvia", "ambra", "tabacco"],
    volatility: 0.48,
    intensity: 0.71,
    harmonies: ["Orientale", "Tabaccosa", "Legnosa"],
  },
  {
    id: "saffron",
    name: "Zafferano Assoluta",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cuoio", "dorato", "metallico"],
    facets: ["speziato", "cuoio", "ambra"],
    volatility: 0.45,
    intensity: 0.82,
    harmonies: ["Cuoio", "Orientale", "Legnosa"],
  },
  {
    id: "immortelle",
    name: "Elicriso Assoluta",
    family: "Balsamica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["miele", "curry", "solare"],
    facets: ["miele", "speziato", "resina"],
    volatility: 0.44,
    intensity: 0.78,
    harmonies: ["Ambrata", "Tabaccosa", "Gourmand"],
  },
  {
    id: "violet-ionone",
    name: "Violetta Ionone Alfa",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["cipriata", "fruttata", "polverosa"],
    facets: ["polvere", "legnoso", "fruttato"],
    volatility: 0.5,
    intensity: 0.63,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "iris-pallida",
    name: "Iris Pallida Burro",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cipriato", "vellutato", "legnoso"],
    facets: ["iris", "polvere", "legno"],
    volatility: 0.36,
    intensity: 0.85,
    harmonies: ["Legnosa", "Muscata", "Gourmand"],
  },
  {
    id: "orris-butter",
    name: "Orris Butter 15% Irone",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["burroso", "talco", "viola"],
    facets: ["iris", "crema", "polvere"],
    volatility: 0.34,
    intensity: 0.88,
    harmonies: ["Ambrata", "Legnosa", "Gourmand"],
  },
  {
    id: "ylang-comores",
    name: "Ylang Ylang Comore",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cremoso", "fruttato", "solare"],
    facets: ["ylang", "banana", "crema"],
    volatility: 0.47,
    intensity: 0.79,
    harmonies: ["Gourmand", "Ambrata", "Floreale"],
  },
  {
    id: "magnolia-grandiflora",
    name: "Magnolia Grandiflora",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["limone", "crema", "floreale"],
    facets: ["magnolia", "agrumato", "verde"],
    volatility: 0.46,
    intensity: 0.68,
    harmonies: ["Agrumata", "Muscata", "Legnosa"],
  },
  {
    id: "orange-blossom",
    name: "Fiori d'Arancio Tunisia",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["miele", "petalo", "bianco"],
    facets: ["neroli", "miele", "verde"],
    volatility: 0.48,
    intensity: 0.77,
    harmonies: ["Gourmand", "Muscata", "Agrumata"],
  },
  {
    id: "neroli-morocco",
    name: "Neroli del Marocco",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["verde", "limone", "miele"],
    facets: ["neroli", "verde", "petalo"],
    volatility: 0.5,
    intensity: 0.69,
    harmonies: ["Agrumata", "Muscata", "Chypré"],
  },
  {
    id: "tuberose-absolute",
    name: "Tuborosa Assoluta India",
    family: "Floreale",
    noteType: "heart",
    source: "naturale",
    descriptors: ["cremosa", "sensuale", "indolica"],
    facets: ["tuberosa", "crema", "speziata"],
    volatility: 0.42,
    intensity: 0.9,
    harmonies: ["Ambrata", "Cuoio", "Gourmand"],
  },
  {
    id: "gardenia-headspace",
    name: "Gardenia Headspace",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["lattea", "verde", "solare"],
    facets: ["gardenia", "crema", "cocco"],
    volatility: 0.44,
    intensity: 0.72,
    harmonies: ["Gourmand", "Floreale", "Muscata"],
  },
  {
    id: "freesia-white",
    name: "Fresia Bianca Base",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["trasparente", "fresca", "speziata"],
    facets: ["fresia", "pepe", "ozonica"],
    volatility: 0.52,
    intensity: 0.6,
    harmonies: ["Floreale", "Agrumata", "Muscata"],
  },
  {
    id: "peony-accord",
    name: "Peonia Couture",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["frizzante", "petalo", "fruttata"],
    facets: ["peonia", "lampone", "rosa"],
    volatility: 0.49,
    intensity: 0.62,
    harmonies: ["Fruttata", "Muscata", "Floreale"],
  },
  {
    id: "lotus-blue",
    name: "Loto Blu CO2",
    family: "Acquatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["acquatico", "zen", "legnoso"],
    facets: ["acqua", "verde", "loto"],
    volatility: 0.51,
    intensity: 0.58,
    harmonies: ["Agrumata", "Muscata", "Floreale"],
  },
  {
    id: "muguet-synth",
    name: "Hydroxycitronellal",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["mughetto", "soffice", "verde"],
    facets: ["muguet", "verde", "trasparente"],
    volatility: 0.55,
    intensity: 0.57,
    harmonies: ["Muscata", "Agrumata", "Floreale"],
  },
  {
    id: "hedione",
    name: "Hedione HC",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["gelsominato", "radioso", "arioso"],
    facets: ["gelsomino", "trasparente", "ozonico"],
    volatility: 0.6,
    intensity: 0.55,
    harmonies: ["Agrumata", "Muscata", "Acquatica"],
  },
  {
    id: "iso-e-super",
    name: "Iso E Super",
    family: "Legnosa",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["trasparente", "cedrato", "moderno"],
    facets: ["legno", "ambra", "velluto"],
    volatility: 0.4,
    intensity: 0.73,
    harmonies: ["Legnosa", "Muscata", "Ambrata"],
  },
  {
    id: "roasted-coffee",
    name: "Caffè Tostato CO2",
    family: "Gourmand",
    noteType: "heart",
    source: "naturale",
    descriptors: ["torrefatto", "amaro", "affumicato"],
    facets: ["caffè", "cacao", "torrefatto"],
    volatility: 0.38,
    intensity: 0.86,
    harmonies: ["Gourmand", "Tabaccosa", "Legnosa"],
  },
  {
    id: "praline-base",
    name: "Base Praliné",
    family: "Gourmand",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["caramello", "nocciola", "burrosa"],
    facets: ["pralinato", "zucchero", "nocciola"],
    volatility: 0.42,
    intensity: 0.8,
    harmonies: ["Gourmand", "Ambrata", "Muscata"],
  },
  {
    id: "licorice-absolute",
    name: "Liquirizia Assoluta",
    family: "Gourmand",
    noteType: "heart",
    source: "naturale",
    descriptors: ["anice", "balsamica", "dolce"],
    facets: ["liquirizia", "speziato", "cuoio"],
    volatility: 0.41,
    intensity: 0.74,
    harmonies: ["Tabaccosa", "Gourmand", "Orientale"],
  },
  {
    id: "tobacco-leaf",
    name: "Tabacco Foglia Assoluta",
    family: "Tabaccosa",
    noteType: "heart",
    source: "naturale",
    descriptors: ["mielato", "cuoio", "fumé"],
    facets: ["tabacco", "miele", "legno"],
    volatility: 0.33,
    intensity: 0.85,
    harmonies: ["Gourmand", "Cuoio", "Ambrata"],
  },
  {
    id: "tea-black",
    name: "Accordo Tè Nero Fumé",
    family: "Erbacea",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["affumicato", "maltato", "cuoio"],
    facets: ["tè", "fumo", "cuoio"],
    volatility: 0.38,
    intensity: 0.72,
    harmonies: ["Tabaccosa", "Legnosa", "Gourmand"],
  },
  {
    id: "tea-white",
    name: "Accordo Tè Bianco",
    family: "Erbacea",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["setoso", "trasparente", "petalo"],
    facets: ["tè", "floreale", "muschiato"],
    volatility: 0.45,
    intensity: 0.5,
    harmonies: ["Muscata", "Floreale", "Agrumata"],
  },
  {
    id: "tonka",
    name: "Fava Tonka Assoluta",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["mandorlata", "calda", "tabaccosa"],
    facets: ["mandorla", "vaniglia", "balsamico"],
    volatility: 0.22,
    intensity: 0.88,
    harmonies: ["Tabaccosa", "Gourmand", "Ambrata"],
  },
  {
    id: "coumarin",
    name: "Cumarina Cristalli",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["fieno", "dolce", "mandorla"],
    facets: ["fieno", "mandorla", "tonka"],
    volatility: 0.2,
    intensity: 0.75,
    harmonies: ["Fougère", "Tabaccosa", "Gourmand"],
  },
  {
    id: "vanilla-absolute",
    name: "Vaniglia Madagascar Assoluta",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["cremosa", "balsamica", "speziata"],
    facets: ["vaniglia", "rum", "legno"],
    volatility: 0.18,
    intensity: 0.92,
    harmonies: ["Gourmand", "Ambrata", "Legnosa"],
  },
  {
    id: "vanillin",
    name: "Vanillina",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["dolce", "crema", "comfort"],
    facets: ["vaniglia", "zucchero", "latte"],
    volatility: 0.2,
    intensity: 0.83,
    harmonies: ["Gourmand", "Ambrata", "Muscata"],
  },
  {
    id: "ethyl-vanillin",
    name: "Etilvanillina",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["glassa", "intensa", "calda"],
    facets: ["vaniglia", "caramello", "legno"],
    volatility: 0.2,
    intensity: 0.9,
    harmonies: ["Gourmand", "Ambrata", "Legnosa"],
  },
  {
    id: "caramel-fusion",
    name: "Accordo Caramello Fusion",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["zucchero", "burro", "sale"],
    facets: ["caramello", "salato", "latte"],
    volatility: 0.19,
    intensity: 0.81,
    harmonies: ["Gourmand", "Tabaccosa", "Muscata"],
  },
  {
    id: "cocoa-absolute",
    name: "Cacao Assoluta",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["cioccolato", "denso", "bitter"],
    facets: ["cacao", "torrefatto", "legno"],
    volatility: 0.21,
    intensity: 0.85,
    harmonies: ["Gourmand", "Tabaccosa", "Legnosa"],
  },
  {
    id: "benzoin-siam",
    name: "Benzoino del Siam",
    family: "Balsamica",
    noteType: "base",
    source: "naturale",
    descriptors: ["miele", "vaniglia", "balsamico"],
    facets: ["ambra", "resina", "dolce"],
    volatility: 0.19,
    intensity: 0.87,
    harmonies: ["Gourmand", "Ambrata", "Legnosa"],
  },
  {
    id: "tolu-balsam",
    name: "Balsamo di Tolù",
    family: "Balsamica",
    noteType: "base",
    source: "naturale",
    descriptors: ["cannella", "balsamico", "dolce"],
    facets: ["speziato", "balsamo", "resina"],
    volatility: 0.18,
    intensity: 0.8,
    harmonies: ["Ambrata", "Orientale", "Gourmand"],
  },
  {
    id: "labdanum-resinoid",
    name: "Labdano Resinoide",
    family: "Ambrata",
    noteType: "base",
    source: "naturale",
    descriptors: ["cuoio", "ambrato", "resinoso"],
    facets: ["ambra", "cuoio", "resina"],
    volatility: 0.16,
    intensity: 0.9,
    harmonies: ["Orientale", "Cuoio", "Gourmand"],
  },
  {
    id: "opoponax",
    name: "Opoponax Eritreo",
    family: "Balsamica",
    noteType: "base",
    source: "naturale",
    descriptors: ["balsamico", "miele", "incenso"],
    facets: ["resina", "dolce", "fumé"],
    volatility: 0.15,
    intensity: 0.86,
    harmonies: ["Resinosa", "Gourmand", "Orientale"],
  },
  {
    id: "myrrh",
    name: "Mirra Eritrea",
    family: "Resinosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["balsamica", "liquirizia", "mistica"],
    facets: ["resina", "speziato", "fumé"],
    volatility: 0.14,
    intensity: 0.85,
    harmonies: ["Orientale", "Cuoio", "Legnosa"],
  },
  {
    id: "frankincense",
    name: "Incenso Oman",
    family: "Resinosa",
    noteType: "heart",
    source: "naturale",
    descriptors: ["fumosa", "limpida", "sacrale"],
    facets: ["incenso", "limone", "legno"],
    volatility: 0.32,
    intensity: 0.75,
    harmonies: ["Orientale", "Chypré", "Legnosa"],
  },
  {
    id: "guaiacwood",
    name: "Guaiaco Paraguay",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["affumicato", "dolce", "cremoso"],
    facets: ["legno", "fumo", "balsamico"],
    volatility: 0.18,
    intensity: 0.82,
    harmonies: ["Tabaccosa", "Orientale", "Gourmand"],
  },
  {
    id: "amyris",
    name: "Amyris Essenza",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["dolce", "cedrato", "latte"],
    facets: ["legno", "balsamo", "ambra"],
    volatility: 0.2,
    intensity: 0.74,
    harmonies: ["Legnosa", "Ambrata", "Floreale"],
  },
  {
    id: "sandalwood-newcaledonia",
    name: "Sandalo Nuova Caledonia",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["latteo", "cremoso", "morbido"],
    facets: ["sandalo", "crema", "latte"],
    volatility: 0.17,
    intensity: 0.88,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "sandalwood-mysore",
    name: "Sandalo Mysore Vintage",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["latteo", "speziato", "sacro"],
    facets: ["sandalo", "incenso", "speziato"],
    volatility: 0.16,
    intensity: 0.93,
    harmonies: ["Orientale", "Floreale", "Muscata"],
  },
  {
    id: "cedar-atlas",
    name: "Cedro dell'Atlas",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["secco", "resinoso", "maturo"],
    facets: ["cedro", "secco", "resina"],
    volatility: 0.18,
    intensity: 0.8,
    harmonies: ["Legnosa", "Chypré", "Aromatica"],
  },
  {
    id: "cedar-texas",
    name: "Cedro Texas Distillato",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["morbido", "matita", "balsamico"],
    facets: ["cedro", "muschio", "resina"],
    volatility: 0.19,
    intensity: 0.76,
    harmonies: ["Legnosa", "Muscata", "Gourmand"],
  },
  {
    id: "teakwood",
    name: "Legno di Teak Accord",
    family: "Legnosa",
    noteType: "base",
    source: "sintetica",
    descriptors: ["legnoso", "fumé", "modern"],
    facets: ["legno", "fumo", "ambra"],
    volatility: 0.2,
    intensity: 0.78,
    harmonies: ["Legnosa", "Cuoio", "Orientale"],
  },
  {
    id: "patchouli-fraction",
    name: "Patchouli Scorched Fraction",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["cioccolato", "terroso", "boisé"],
    facets: ["patchouli", "cacao", "terra"],
    volatility: 0.17,
    intensity: 0.89,
    harmonies: ["Gourmand", "Ambrata", "Cuoio"],
  },
  {
    id: "patchouli-coeur",
    name: "Patchouli Coeur",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["pulito", "ambra", "boisé"],
    facets: ["patchouli", "ambra", "legno"],
    volatility: 0.17,
    intensity: 0.82,
    harmonies: ["Chypré", "Gourmand", "Muscata"],
  },
  {
    id: "vetiver-haiti",
    name: "Vetiver di Haiti",
    family: "Terrosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["affumicato", "terroso", "legnoso"],
    facets: ["vetiver", "fumo", "terra"],
    volatility: 0.18,
    intensity: 0.86,
    harmonies: ["Cuoio", "Chypré", "Gourmand"],
  },
  {
    id: "vetiver-java",
    name: "Vetiver di Giava",
    family: "Terrosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["affumicato", "radice", "cuoio"],
    facets: ["vetiver", "fumo", "cuoio"],
    volatility: 0.17,
    intensity: 0.9,
    harmonies: ["Cuoio", "Orientale", "Tabaccosa"],
  },
  {
    id: "papyrus",
    name: "Papyrus CO2",
    family: "Terrosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["cuoio", "affumicato", "verde"],
    facets: ["papiro", "fumé", "terra"],
    volatility: 0.16,
    intensity: 0.82,
    harmonies: ["Cuoio", "Chypré", "Ambrata"],
  },
  {
    id: "cypriol-nagarmotha",
    name: "Cypriol Nagarmotha",
    family: "Terrosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["terra", "legno", "ambra"],
    facets: ["cypriol", "fumé", "ambra"],
    volatility: 0.16,
    intensity: 0.84,
    harmonies: ["Orientale", "Legnosa", "Cuoio"],
  },
  {
    id: "oakmoss",
    name: "Muschio di Quercia Low-Atr",
    family: "Chypré",
    noteType: "base",
    source: "naturale",
    descriptors: ["umido", "salino", "boscoso"],
    facets: ["muschio", "terra", "sale"],
    volatility: 0.15,
    intensity: 0.91,
    harmonies: ["Chypré", "Fougère", "Legnosa"],
  },
  {
    id: "evernyl",
    name: "Evernyl",
    family: "Chypré",
    noteType: "base",
    source: "sintetica",
    descriptors: ["muschio", "legno", "polvere"],
    facets: ["muschio", "legno", "ambrox"],
    volatility: 0.16,
    intensity: 0.78,
    harmonies: ["Chypré", "Muscata", "Legnosa"],
  },
  {
    id: "ambergris-accord",
    name: "Accordo Ambra Grigia",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["marino", "caldo", "minerale"],
    facets: ["ambra", "sale", "muschio"],
    volatility: 0.14,
    intensity: 0.85,
    harmonies: ["Muscata", "Ambrata", "Acquatica"],
  },
  {
    id: "ambroxan",
    name: "Ambroxan",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambrato", "minerale", "sensuale"],
    facets: ["ambra", "legno", "muschio"],
    volatility: 0.18,
    intensity: 0.89,
    harmonies: ["Muscata", "Legnosa", "Ambrata"],
  },
  {
    id: "cetalox",
    name: "Cetalox",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambra grigia", "minerale", "vellutata"],
    facets: ["ambra", "legno", "velluto"],
    volatility: 0.18,
    intensity: 0.87,
    harmonies: ["Ambrata", "Muscata", "Legnosa"],
  },
  {
    id: "ambermax",
    name: "Ambermax",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambra", "legno", "intensa"],
    facets: ["ambra", "cedro", "cashmere"],
    volatility: 0.17,
    intensity: 0.92,
    harmonies: ["Legnosa", "Orientale", "Cuoio"],
  },
  {
    id: "norlimbanol",
    name: "Norlimbanol",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambra", "legno secco", "fumo"],
    facets: ["ambra", "cedro", "fumo"],
    volatility: 0.16,
    intensity: 0.94,
    harmonies: ["Legnosa", "Cuoio", "Orientale"],
  },
  {
    id: "kephalis",
    name: "Kephalis",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambra", "tabacco", "legno"],
    facets: ["ambra", "tabacco", "patchouli"],
    volatility: 0.17,
    intensity: 0.88,
    harmonies: ["Tabaccosa", "Legnosa", "Gourmand"],
  },
  {
    id: "cashmeran",
    name: "Cashmeran",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["soffice", "boisé", "muschiata"],
    facets: ["cashmere", "ambra", "legno"],
    volatility: 0.2,
    intensity: 0.83,
    harmonies: ["Muscata", "Ambrata", "Gourmand"],
  },
  {
    id: "amberwood-firbest",
    name: "Amberwood Firbest",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["ambra", "resina", "modern"],
    facets: ["ambra", "resina", "legno"],
    volatility: 0.18,
    intensity: 0.9,
    harmonies: ["Legnosa", "Orientale", "Gourmand"],
  },
  {
    id: "musk-t",
    name: "Muscone Synthetico",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["pelle", "pulito", "sensuale"],
    facets: ["muschio", "pelle", "ambra"],
    volatility: 0.21,
    intensity: 0.84,
    harmonies: ["Muscata", "Ambrata", "Gourmand"],
  },
  {
    id: "ambrettolide",
    name: "Ambrettolide",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["pulito", "setoso", "muschiato"],
    facets: ["muschio", "fruttato", "pelle"],
    volatility: 0.22,
    intensity: 0.8,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "muscenone",
    name: "Muscenone Delta",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["vellutato", "pelle", "fresco"],
    facets: ["muschio", "pelle", "pulito"],
    volatility: 0.22,
    intensity: 0.82,
    harmonies: ["Muscata", "Floreale", "Gourmand"],
  },
  {
    id: "galaxolide",
    name: "Galaxolide",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["soffice", "saponoso", "pulito"],
    facets: ["muschio", "sapone", "floreale"],
    volatility: 0.23,
    intensity: 0.78,
    harmonies: ["Muscata", "Floreale", "Gourmand"],
  },
  {
    id: "habanolide",
    name: "Habanolide",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["metallico", "muschiato", "pelle"],
    facets: ["muschio", "metallo", "pelle"],
    volatility: 0.22,
    intensity: 0.8,
    harmonies: ["Muscata", "Orientale", "Floreale"],
  },
  {
    id: "powdery-musk",
    name: "Musk Polaris",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["talco", "nuvola", "cremoso"],
    facets: ["polvere", "muschio", "crema"],
    volatility: 0.23,
    intensity: 0.77,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "skin-accord",
    name: "Skin Sensual Accord",
    family: "Muscata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["pelle", "camoscio", "caldo"],
    facets: ["pelle", "ambra", "muschio"],
    volatility: 0.21,
    intensity: 0.79,
    harmonies: ["Cuoio", "Muscata", "Gourmand"],
  },
  {
    id: "leather-suede",
    name: "Suede Noble Accord",
    family: "Cuoio",
    noteType: "base",
    source: "sintetica",
    descriptors: ["scamosciato", "morbido", "ambra"],
    facets: ["cuoio", "ambra", "miele"],
    volatility: 0.2,
    intensity: 0.83,
    harmonies: ["Cuoio", "Gourmand", "Orientale"],
  },
  {
    id: "birch-tar",
    name: "Catrame di Betulla",
    family: "Cuoio",
    noteType: "base",
    source: "naturale",
    descriptors: ["affumicato", "cuoio", "animalico"],
    facets: ["cuoio", "fumo", "legno"],
    volatility: 0.14,
    intensity: 0.88,
    harmonies: ["Cuoio", "Tabaccosa", "Orientale"],
  },
  {
    id: "smoke-accord",
    name: "Accordo Fumo Bois",
    family: "Cuoio",
    noteType: "base",
    source: "sintetica",
    descriptors: ["fumé", "catrame", "ambra"],
    facets: ["fumo", "resina", "legno"],
    volatility: 0.15,
    intensity: 0.86,
    harmonies: ["Cuoio", "Orientale", "Legnosa"],
  },
  {
    id: "oud-assam",
    name: "Oud Assam Supercritical",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["resinoso", "cuoio", "affumicato"],
    facets: ["oud", "ambra", "cuoio"],
    volatility: 0.12,
    intensity: 0.95,
    harmonies: ["Orientale", "Cuoio", "Gourmand"],
  },
  {
    id: "oud-laos",
    name: "Oud Laos Coeur",
    family: "Legnosa",
    noteType: "base",
    source: "naturale",
    descriptors: ["resina", "miele", "speziato"],
    facets: ["oud", "miele", "speziato"],
    volatility: 0.12,
    intensity: 0.9,
    harmonies: ["Orientale", "Gourmand", "Cuoio"],
  },
  {
    id: "ambergris-fantasia",
    name: "Fantasia Ambra Marina",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["salino", "luminoso", "velvet"],
    facets: ["ambra", "mare", "muschio"],
    volatility: 0.17,
    intensity: 0.84,
    harmonies: ["Acquatica", "Muscata", "Ambrata"],
  },
  {
    id: "marine-amber",
    name: "Ambra Marina Brilliance",
    family: "Ambrata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["salina", "legno", "ambra"],
    facets: ["mare", "ambra", "legno"],
    volatility: 0.18,
    intensity: 0.83,
    harmonies: ["Acquatica", "Legnosa", "Muscata"],
  },
  {
    id: "rum-absolute",
    name: "Rum Scuro Assoluto",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["alcol", "mela", "legno"],
    facets: ["rum", "zucchero", "speziato"],
    volatility: 0.2,
    intensity: 0.8,
    harmonies: ["Gourmand", "Tabaccosa", "Orientale"],
  },
  {
    id: "whisky-accord",
    name: "Accordo Whisky Torbato",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["torbato", "fumo", "malt"],
    facets: ["whisky", "fumo", "malto"],
    volatility: 0.21,
    intensity: 0.82,
    harmonies: ["Tabaccosa", "Cuoio", "Gourmand"],
  },
  {
    id: "absinthe",
    name: "Assenzio Verde",
    family: "Aromatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["erbaceo", "amara", "anice"],
    facets: ["assenzio", "verde", "speziato"],
    volatility: 0.5,
    intensity: 0.7,
    harmonies: ["Agrumata", "Tabaccosa", "Legnosa"],
  },
  {
    id: "champagne-accord",
    name: "Accordo Champagne Rosé",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["frizzante", "uva", "brioche"],
    facets: ["bollicine", "frutta", "lievito"],
    volatility: 0.82,
    intensity: 0.62,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "honey-absolute",
    name: "Miele d'Acacia Assoluto",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["miele", "cera", "floreale"],
    facets: ["miele", "cera", "fieno"],
    volatility: 0.24,
    intensity: 0.82,
    harmonies: ["Gourmand", "Floreale", "Tabaccosa"],
  },
  {
    id: "beeswax",
    name: "Cera d'Api Assoluta",
    family: "Gourmand",
    noteType: "base",
    source: "naturale",
    descriptors: ["cera", "miele", "cuoio"],
    facets: ["cera", "miele", "legno"],
    volatility: 0.23,
    intensity: 0.79,
    harmonies: ["Gourmand", "Cuoio", "Floreale"],
  },
  {
    id: "hay-absolute",
    name: "Fieno Assoluto",
    family: "Erbacea",
    noteType: "base",
    source: "naturale",
    descriptors: ["paglia", "dolce", "tostato"],
    facets: ["fieno", "tabacco", "mandorla"],
    volatility: 0.24,
    intensity: 0.78,
    harmonies: ["Tabaccosa", "Gourmand", "Legnosa"],
  },
  {
    id: "chai-spice",
    name: "Accordo Chai Masala",
    family: "Speziata",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["cardamomo", "latte", "speziato"],
    facets: ["spezie", "latte", "tè"],
    volatility: 0.46,
    intensity: 0.71,
    harmonies: ["Gourmand", "Floreale", "Tabaccosa"],
  },
  {
    id: "gingerbread",
    name: "Accordo Pan di Zenzero",
    family: "Gourmand",
    noteType: "base",
    source: "sintetica",
    descriptors: ["speziato", "miele", "biscotto"],
    facets: ["zenzero", "miele", "cannella"],
    volatility: 0.22,
    intensity: 0.83,
    harmonies: ["Gourmand", "Speziata", "Ambrata"],
  },
  {
    id: "pear-ester",
    name: "Etil Maltol Pear",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["pera", "cotone", "dolce"],
    facets: ["pera", "zucchero", "verde"],
    volatility: 0.81,
    intensity: 0.61,
    harmonies: ["Floreale", "Gourmand", "Muscata"],
  },
  {
    id: "rose-oxide",
    name: "Rose Oxide",
    family: "Floreale",
    noteType: "top",
    source: "sintetica",
    descriptors: ["metallico", "rosa", "verde"],
    facets: ["rosa", "ozonico", "metallo"],
    volatility: 0.78,
    intensity: 0.63,
    harmonies: ["Floreale", "Muscata", "Aromatica"],
  },
  {
    id: "safraleine",
    name: "Safraleine",
    family: "Speziata",
    noteType: "base",
    source: "sintetica",
    descriptors: ["zafferano", "cuoio", "ambra"],
    facets: ["speziato", "cuoio", "ambra"],
    volatility: 0.2,
    intensity: 0.87,
    harmonies: ["Cuoio", "Ambrata", "Orientale"],
  },
  {
    id: "civetone-synth",
    name: "Civetone Biotech",
    family: "Animalica",
    noteType: "base",
    source: "sintetica",
    descriptors: ["animale", "muschio", "caldo"],
    facets: ["animalico", "muschio", "cuoio"],
    volatility: 0.16,
    intensity: 0.9,
    harmonies: ["Orientale", "Cuoio", "Floreale"],
  },
  {
    id: "metallic-silver",
    name: "Accordo Metallic Silver",
    family: "Aldeidica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["acciaio", "aria", "ghiaccio"],
    facets: ["metallico", "ozonico", "aldeidico"],
    volatility: 0.9,
    intensity: 0.58,
    harmonies: ["Acquatica", "Floreale", "Muscata"],
  },
  {
    id: "mistral-ozone",
    name: "Mistral Ozone Base",
    family: "Acquatica",
    noteType: "top",
    source: "sintetica",
    descriptors: ["ozonica", "vento", "minerale"],
    facets: ["ozono", "sale", "aria"],
    volatility: 0.88,
    intensity: 0.6,
    harmonies: ["Acquatica", "Agrumata", "Muscata"],
  },
  {
    id: "solar-accord",
    name: "Accordo Solare Capri",
    family: "Orientale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["solare", "tiare", "cocco"],
    facets: ["solare", "cocco", "ambra"],
    volatility: 0.52,
    intensity: 0.76,
    harmonies: ["Gourmand", "Floreale", "Ambrata"],
  },
  {
    id: "papaya-headspace",
    name: "Papaya Headspace",
    family: "Fruttata",
    noteType: "top",
    source: "sintetica",
    descriptors: ["tropicale", "lattea", "verde"],
    facets: ["papaya", "crema", "verde"],
    volatility: 0.79,
    intensity: 0.58,
    harmonies: ["Gourmand", "Floreale", "Muscata"],
  },
  {
    id: "absinthe-wormwood",
    name: "Artemisia Wormwood",
    family: "Aromatica",
    noteType: "heart",
    source: "naturale",
    descriptors: ["amara", "verde", "canforata"],
    facets: ["assenzio", "erba", "speziato"],
    volatility: 0.49,
    intensity: 0.69,
    harmonies: ["Fougère", "Tabaccosa", "Chypré"],
  },
  {
    id: "pimento-leaf",
    name: "Pimento Foglia",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["chiodo di garofano", "cannella", "verde"],
    facets: ["pimento", "spezie", "legno"],
    volatility: 0.5,
    intensity: 0.74,
    harmonies: ["Tabaccosa", "Gourmand", "Cuoio"],
  },
  {
    id: "cumin-seed",
    name: "Cumino Semi",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["speziato", "terra", "caldo"],
    facets: ["cumino", "terra", "cuoio"],
    volatility: 0.47,
    intensity: 0.78,
    harmonies: ["Cuoio", "Orientale", "Floreale"],
  },
  {
    id: "anis-star",
    name: "Anice Stellato",
    family: "Speziata",
    noteType: "top",
    source: "naturale",
    descriptors: ["anice", "dolce", "speziato"],
    facets: ["anice", "liquirizia", "spezie"],
    volatility: 0.76,
    intensity: 0.62,
    harmonies: ["Gourmand", "Floreale", "Tabaccosa"],
  },
  {
    id: "nutmeg",
    name: "Noce Moscata CO2",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["caldo", "legnoso", "nocciola"],
    facets: ["noce moscata", "legno", "speziato"],
    volatility: 0.51,
    intensity: 0.73,
    harmonies: ["Gourmand", "Orientale", "Legnosa"],
  },
  {
    id: "cinnamon-ceylon",
    name: "Cannella Ceylon",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["calda", "dolce", "legnosa"],
    facets: ["cannella", "miele", "legno"],
    volatility: 0.5,
    intensity: 0.8,
    harmonies: ["Gourmand", "Orientale", "Tabaccosa"],
  },
  {
    id: "clove-bud",
    name: "Chiodi di Garofano",
    family: "Speziata",
    noteType: "heart",
    source: "naturale",
    descriptors: ["speziato", "medicinale", "dolce"],
    facets: ["garofano", "spezie", "fumé"],
    volatility: 0.49,
    intensity: 0.78,
    harmonies: ["Gourmand", "Cuoio", "Orientale"],
  },
  {
    id: "metal-rose",
    name: "Rosa Metallica Accord",
    family: "Floreale",
    noteType: "heart",
    source: "sintetica",
    descriptors: ["rosa", "metallico", "ozonico"],
    facets: ["rosa", "metal", "acqua"],
    volatility: 0.6,
    intensity: 0.66,
    harmonies: ["Floreale", "Acquatica", "Muscata"],
  },
];

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

const elements = {
  essenceList: document.querySelector("#essence-list"),
  searchInput: document.querySelector("#search-essence"),
  familyFilter: document.querySelector("#family-filter"),
  workspaceIntro: document.querySelector("#workspace-intro"),
  workspace: document.querySelector("#workspace"),
  startBuilder: document.querySelector("#start-builder"),
  heroLoadFormula: document.querySelector("#open-import"),
  composition: document.querySelector("#composition"),
  compositionSummary: document.querySelector("#composition-summary"),
  clearSelection: document.querySelector("#clear-selection"),
  rating: document.querySelector("#rating"),
  ratingOutput: document.querySelector("#rating-output"),
  olfactoryFamily: document.querySelector("#olfactory-family"),
  saveFormula: document.querySelector("#save-formula"),
  loadFormula: document.querySelector("#load-formula"),
  duplicateFormula: document.querySelector("#duplicate-formula"),
  restoreAI: document.querySelector("#restore-ai"),
  syncStatus: document.querySelector("#sync-status"),
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

init();

function init() {
  configurePdfWorker();
  rebuildEssenceIndex();
  renderFamilyPills();
  renderEssenceList();
  bindEvents();
  setupManualOverrideTracking();
  elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
  loadInitialState();
  updateSyncStatus("Database locale caricato", "success");
  syncExternalLibraries();
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
  elements.searchInput.addEventListener("input", renderEssenceList);
  elements.startBuilder.addEventListener("click", startFormula);
  elements.heroLoadFormula?.addEventListener("click", () => openSavedModal({ focusImport: true }));
  elements.clearSelection.addEventListener("click", clearComposition);
  elements.rating.addEventListener("input", () => {
    markManual(elements.rating);
    elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
    persistLastFormula();
  });
  elements.saveFormula.addEventListener("click", handleSaveFormula);
  elements.loadFormula.addEventListener("click", openSavedModal);
  elements.duplicateFormula.addEventListener("click", duplicateFormula);
  elements.restoreAI.addEventListener("click", resetAIOverrides);

  [formFields.volume, formFields.density, formFields.concentration].forEach((field) => {
    field.addEventListener("input", () => {
      if (state.selected.size > 0) {
        updateCompositionSummary();
      }
    });
  });

  formFields.type.addEventListener("change", persistLastFormula);
  formFields.name.addEventListener("input", persistLastFormula);
  formFields.notes.addEventListener("input", persistLastFormula);
}

function setupManualOverrideTracking() {
  [formFields.topNotes, formFields.heartNotes, formFields.baseNotes, formFields.impressions].forEach((field) => {
    field.addEventListener("input", () => {
      markManual(field);
      persistLastFormula();
    });
  });
}

function markManual(field) {
  field.dataset.manual = "true";
}

function clearManual(field) {
  delete field.dataset.manual;
}

function resetAIOverrides() {
  [elements.rating, formFields.topNotes, formFields.heartNotes, formFields.baseNotes, formFields.impressions].forEach((field) => {
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
  const term = elements.searchInput.value?.toLowerCase().trim() ?? "";
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
  state.detailedComponents = [];
  state.analysis = null;
  elements.composition.innerHTML = "";
  elements.compositionSummary.textContent = "Aggiungi materie prime per iniziare.";
  applyAnalysis(null);
  persistLastFormula();
}

function updateCompositionSummary() {
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
  if (!analysis) {
    elements.olfactoryFamily.textContent = "—";
    if (!elements.rating.dataset.manual) {
      elements.rating.value = 8;
      elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
    }
    if (!formFields.topNotes.dataset.manual) formFields.topNotes.value = "";
    if (!formFields.heartNotes.dataset.manual) formFields.heartNotes.value = "";
    if (!formFields.baseNotes.dataset.manual) formFields.baseNotes.value = "";
    if (!formFields.impressions.dataset.manual) formFields.impressions.value = "";
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

  if (!formFields.topNotes.dataset.manual) {
    formFields.topNotes.value = analysis.pyramid.top.join(", ");
  }
  if (!formFields.heartNotes.dataset.manual) {
    formFields.heartNotes.value = analysis.pyramid.heart.join(", ");
  }
  if (!formFields.baseNotes.dataset.manual) {
    formFields.baseNotes.value = analysis.pyramid.base.join(", ");
  }
  if (!formFields.impressions.dataset.manual) {
    formFields.impressions.value = analysis.impressions;
  }
}

function gatherFormulaState() {
  const components = [...elements.composition.querySelectorAll(".composition__row")].map((row) => {
    const id = row.dataset.id;
    const slider = row.querySelector("input[type='range']");
    return { id, percentage: Number(slider.value) };
  });

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
    name: formFields.name.value || "Formula senza nome",
    type: formFields.type.value,
    volume: Number(formFields.volume.value) || 0,
    density: Number(formFields.density.value) || 1,
    concentration: Number(formFields.concentration.value) || 0,
    notes: formFields.notes.value,
    components,
    componentsDetailed: state.detailedComponents,
    rating: Number(elements.rating.value),
    pyramid: {
      top: formFields.topNotes.value,
      heart: formFields.heartNotes.value,
      base: formFields.baseNotes.value,
    },
    impressions: formFields.impressions.value,
    analysis,
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
  elements.ratingOutput.textContent = formatSliderValue(elements.rating.value);
  formFields.topNotes.value = data.pyramid?.top ?? "";
  formFields.heartNotes.value = data.pyramid?.heart ?? "";
  formFields.baseNotes.value = data.pyramid?.base ?? "";
  formFields.impressions.value = data.impressions ?? "";

  [elements.rating, formFields.topNotes, formFields.heartNotes, formFields.baseNotes, formFields.impressions].forEach(
    (field) => markManual(field),
  );

  data.components?.forEach((component) => {
    const essence = essenceIndex.get(component.id);
    if (essence) {
      addEssenceToComposition(essence);
      const row = elements.composition.querySelector(`.composition__row[data-id='${component.id}']`);
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
            triggerDownload(csv, 'text/csv', \`${sanitize(formula.name)}.csv\`);
          }

          function exportWord() {
            const rows = detailed.map((row) => \`<tr><td>${row.name}</td><td>${row.family}</td><td>${row.noteType}</td><td>${row.percentage}%</td><td>${row.ml}</td><td>${row.grams}</td><td>${row.drops}</td></tr>\`).join('');
            const html = \`<!DOCTYPE html><html><body><h1>${formula.name}</h1><table border="1" cellpadding="6" cellspacing="0"><thead><tr><th>Materia</th><th>Famiglia</th><th>Nota</th><th>%</th><th>ml</th><th>g</th><th>Gocce</th></tr></thead><tbody>${rows}</tbody></table></body></html>\`;
            triggerDownload(html, 'application/msword', \`${sanitize(formula.name)}.doc\`);
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
            ctx.fillText(\`${formula.type} · ${formula.volume} ml\`, 60, 170);
            if (analysis) {
              ctx.fillText(\`Voto AI: ${analysis.rating} / Score ${analysis.score}\`, 60, 210);
              ctx.fillText(\`Famiglia: ${analysis.family ? analysis.family.name : '—'}\`, 60, 250);
            }
            ctx.fillText('Composizione', 60, 320);
            const startY = 360;
            const lineHeight = 36;
            detailed.slice(0, 20).forEach((row, index) => {
              const y = startY + index * lineHeight;
              ctx.fillStyle = '#f9fafb';
              ctx.fillText(\`${index + 1}. ${row.name}\`, 60, y);
              ctx.fillStyle = '#9ca3af';
              ctx.fillText(\`${row.family} · ${row.noteType} · ${row.percentage.toFixed(1)}%\`, 540, y);
            });
            const url = canvas.toDataURL('image/jpeg', 0.9);
            const link = document.createElement('a');
            link.href = url;
            link.download = \`${sanitize(formula.name)}.jpg\`;
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
})();
