// This file is the easiest place to add or edit periodic table tiles.
// To add a new tile later, copy one object in elementRecords and change the fields.

export const categories = [
  "Reactive nonmetals",
  "Noble gases",
  "Alkali metals",
  "Alkaline earth metals",
  "Metalloids",
  "Post-transition metals",
  "Transition metals",
  "Halogens",
  "Lanthanides",
  "Actinides",
  "Unknown properties",
];

export const categoryStyles = {
  "Reactive nonmetals": {
    accent: "#39ff88",
    soft: "rgba(57, 255, 136, 0.16)",
    border: "rgba(57, 255, 136, 0.56)",
  },
  "Noble gases": {
    accent: "#36c5ff",
    soft: "rgba(54, 197, 255, 0.16)",
    border: "rgba(54, 197, 255, 0.56)",
  },
  "Alkali metals": {
    accent: "#ff5c8a",
    soft: "rgba(255, 92, 138, 0.15)",
    border: "rgba(255, 92, 138, 0.56)",
  },
  "Alkaline earth metals": {
    accent: "#ffd166",
    soft: "rgba(255, 209, 102, 0.16)",
    border: "rgba(255, 209, 102, 0.56)",
  },
  Metalloids: {
    accent: "#b4ff39",
    soft: "rgba(180, 255, 57, 0.14)",
    border: "rgba(180, 255, 57, 0.56)",
  },
  "Post-transition metals": {
    accent: "#2dd4bf",
    soft: "rgba(45, 212, 191, 0.16)",
    border: "rgba(45, 212, 191, 0.56)",
  },
  "Transition metals": {
    accent: "#a78bfa",
    soft: "rgba(167, 139, 250, 0.17)",
    border: "rgba(167, 139, 250, 0.56)",
  },
  Halogens: {
    accent: "#ff8bd1",
    soft: "rgba(255, 139, 209, 0.16)",
    border: "rgba(255, 139, 209, 0.56)",
  },
  Lanthanides: {
    accent: "#f97316",
    soft: "rgba(249, 115, 22, 0.16)",
    border: "rgba(249, 115, 22, 0.56)",
  },
  Actinides: {
    accent: "#fb7185",
    soft: "rgba(251, 113, 133, 0.16)",
    border: "rgba(251, 113, 133, 0.56)",
  },
  "Unknown properties": {
    accent: "#94a3b8",
    soft: "rgba(148, 163, 184, 0.14)",
    border: "rgba(148, 163, 184, 0.56)",
  },
};

const categoryDescriptions = {
  "Reactive nonmetals": "a nonmetal that forms many important compounds",
  "Noble gases": "a stable gas with a filled outer electron shell",
  "Alkali metals": "a soft, highly reactive metal in group 1",
  "Alkaline earth metals": "a reactive metal in group 2",
  Metalloids: "an element with properties between metals and nonmetals",
  "Post-transition metals": "a softer metal found near the metalloid line",
  "Transition metals": "a metal known for variable charges and colorful compounds",
  Halogens: "a reactive salt-forming nonmetal in group 17",
  Lanthanides: "a rare-earth metal from the lanthanide series",
  Actinides: "a heavy element from the actinide series",
  "Unknown properties": "a superheavy element with properties still being studied",
};

const categoryImportance = {
  "Reactive nonmetals": "These elements build air, water, acids, bases, fuels, and the chemistry of living things.",
  "Noble gases": "Their stability makes them useful in lighting, lasers, balloons, and controlled atmospheres.",
  "Alkali metals": "Their intense reactivity makes them important in batteries, salts, medicine, and chemical research.",
  "Alkaline earth metals": "They appear in minerals, bones, fireworks, alloys, and many everyday materials.",
  Metalloids: "Metalloids are crucial in glass, ceramics, semiconductors, electronics, and advanced materials.",
  "Post-transition metals": "These metals show up in packaging, electronics, coatings, solders, and useful alloys.",
  "Transition metals": "They power tools, buildings, catalysts, coins, pigments, magnets, and modern industry.",
  Halogens: "Halogens matter in disinfectants, medicines, plastics, photography, and salts.",
  Lanthanides: "Lanthanides are essential for strong magnets, screens, lasers, and clean-energy technology.",
  Actinides: "Actinides matter in nuclear energy, smoke detectors, space power, and advanced research.",
  "Unknown properties": "Superheavy elements test the limits of the periodic table and help scientists understand atomic nuclei.",
};

const spotlight = {
  B: {
    tagline: "Metalloid of borax, glass, and super-hard materials",
    summary:
      "Boron is a lightweight metalloid found in borates such as borax. It is important in heat-resistant glass, detergents, plant nutrition, and very hard compounds like boron carbide.",
    funFacts: [
      "Boron is element 5, so it has five protons.",
      "Boron compounds can make glass resist heat shock, which is why borosilicate glass is famous in labs and kitchens.",
      "Boron carbide is one of the hardest known materials.",
    ],
    youtubeQuery: "Boron element explained chemistry Periodic Videos",
  },
  C: {
    tagline: "The backbone of life and diamonds",
    summary:
      "Carbon is a nonmetal that forms diamonds, graphite, graphene, fossil fuels, and the molecular backbone of living things.",
  },
  O: {
    tagline: "Breathing, burning, and water chemistry",
    summary:
      "Oxygen is a reactive nonmetal essential for respiration, combustion, water, oxides, and much of Earth's chemistry.",
  },
  Fe: {
    tagline: "The metal of steel, tools, and cities",
    summary:
      "Iron is a transition metal used to make steel, bridges, machines, vehicles, and the hemoglobin that carries oxygen in blood.",
  },
  Au: {
    tagline: "Precious metal that resists corrosion",
    summary:
      "Gold is a dense transition metal valued for jewelry, electronics, coinage, and its remarkable resistance to tarnish.",
  },
  U: {
    tagline: "Heavy actinide used in nuclear energy",
    summary:
      "Uranium is a radioactive actinide used as fuel in nuclear reactors and as a key element in nuclear science.",
  },
};

// Video IDs come from the University of Nottingham Periodic Table of Videos.
// The app uses these IDs for real embedded videos instead of placeholder links.
const videoIds = {
  H: "6rdmpx39PRk",
  He: "M6xZZiaLOV4",
  Li: "LfS10ArXTBA",
  Be: "qy8JyQShZRA",
  B: "JzqdHkpXuy4",
  C: "QuW4_bRHbUk",
  N: "H8XNdqA18-M",
  O: "WuG5WTId-IY",
  F: "vtWp45Eewtw",
  Ne: "ILkvZKSVRI4",
  Na: "7IT2I3LtlNE",
  Mg: "FKkWdizutxI",
  Al: "4AhZ8503WPs",
  Si: "a2aWO5cL410",
  P: "LSYLUat03A4",
  S: "mGMR72X8V-U",
  Cl: "BXCfBl4rmh0",
  Ar: "N0Gw6-xMLlo",
  K: "pPdevJTGAYY",
  Ca: "V9fuY8_ffFg",
  Sc: "gab_2a7gyLU",
  Ti: "MpFTQYynrc4",
  V: "MbCmaQzrZoc",
  Cr: "9NPjdDS11C4",
  Mn: "uTVtBuY9Q-0",
  Fe: "euQUgp5AY-Y",
  Co: "MWtL3pvGC68",
  Ni: "AUmoaZn9bek",
  Cu: "kop1sWzTK-I",
  Zn: "99wPiMb-k0o",
  Ga: "N6ccRvKKwZQ",
  Ge: "osrKWVknkgs",
  As: "yD8Vz-mFHgI",
  Se: "IHrUtKjcAFE",
  Br: "Slt3_5upuSs",
  Kr: "il4OOY7Zseg",
  Rb: "0XLGopBovoI",
  Sr: "d5ztPGrsgNQ",
  Y: "NxbOQ1FhqdQ",
  Zr: "gNJE2MPktvg",
  Nb: "2ciPAsVTq6c",
  Mo: "ZRQ3vBGskds",
  Tc: "ud5c1TVkcnU",
  Ru: "wl5ZYb0hDTc",
  Rh: "PPSO5798k2I",
  Pd: "4ALTGeqmNFM",
  Ag: "pPd5qAb4J50",
  Cd: "boRius1DYdQ",
  In: "TviX7V-ay5I",
  Sn: "rXZscASelkc",
  Sb: "kcc6qNT3BoU",
  Te: "5ChFbVu4Mpk",
  I: "JUBsJLRSM64",
  Xe: "Ejoct_6pQ74",
  Cs: "5aD6HwUE2c0",
  Ba: "9srJdQU3NOo",
  La: "Q21clW0s0B8",
  Ce: "frD3126ry8o",
  Pr: "IL06CzXF3ns",
  Nd: "PBbl-3_R3mk",
  Pm: "HplP_MY78NQ",
  Sm: "RBTO5f8U218",
  Eu: "88YOmg_FUVo",
  Gd: "YIxjFKBl5eg",
  Tb: "On5LjH9TQxY",
  Dy: "8TE3iRXVcmY",
  Ho: "HQahtzCU0BU",
  Er: "E-DY_RT4fJ4",
  Tm: "vS0vhYdOGMc",
  Yb: "H8XtiaWm5eY",
  Lu: "7wrDfRnRHqI",
  Hf: "Qb9f5uBKJhg",
  Ta: "51xFP1Yn3g0",
  W: "59ph6I0DoQE",
  Re: "YOmStzA2azw",
  Os: "AdX-T2Vv68Y",
  Ir: "cuovE4OQi2g",
  Pt: "byzaoji_9kk",
  Au: "CTtf5s2HFkA",
  Hg: "oL0M_6bfzkU",
  Tl: "4SVhSZ-rfLM",
  Pb: "2ERfPN5JLX8",
  Bi: "vyIo-c7VmIM",
  Po: "bbr5yWwsI1o",
  At: "GP8jJgzEmwE",
  Rn: "mTuC_LrEfbU",
  Fr: "hpYxllgfMSg",
  Ra: "5_I6vj-lXNM",
  Ac: "rKm0ShaJNFM",
  Th: "2yZGcr0mpw0",
  Pa: "bsIMMa7iEKU",
  U: "B8vVZTvJNGk",
  Np: "1D75B0_URbE",
  Pu: "89UNPdNtOoE",
  Am: "CC-L-CITg3k",
  Cm: "sZobqPFNcwg",
  Bk: "7p1D9C1qkZY",
  Cf: "E0wtKOG8trE",
  Es: "UdJeLlwrVUI",
  Fm: "SQhI52sqanA",
  Md: "0JlshAo8DuE",
  No: "t_ZpauMxapY",
  Lr: "_zBsnnJOkyA",
  Rf: "dOj9ZjKnJcY",
  Db: "5d4VekfRnMs",
  Sg: "UWq0djr790E",
  Bh: "okJnQIjELY4",
  Hs: "u4GEVxbLego",
  Mt: "N8VR7Qscq4k",
  Ds: "lhvMqva3-7M",
  Rg: "MTq1hzhCF0g",
  Cn: "QHcbQfcwegY",
  Nh: "-HcSEKuYGM8",
  Fl: "5L-NNFPiRog",
  Mc: "ewQAJtbgr7w",
  Lv: "YWKlqO9niuY",
  Ts: "1RGlXh9eC5E",
  Og: "VMv44bIBdQI",
};

const elementRecords = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", atomicMass: "1.008", category: "Reactive nonmetals", group: 1, period: 1, discovered: "1766", uses: "water, fuels, stars, ammonia" },
  { atomicNumber: 2, symbol: "He", name: "Helium", atomicMass: "4.0026", category: "Noble gases", group: 18, period: 1, discovered: "1868", uses: "balloons, cryogenics, leak testing" },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", atomicMass: "6.94", category: "Alkali metals", group: 1, period: 2, discovered: "1817", uses: "rechargeable batteries, medicine, alloys" },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", atomicMass: "9.0122", category: "Alkaline earth metals", group: 2, period: 2, discovered: "1798", uses: "aerospace parts, X-ray windows" },
  { atomicNumber: 5, symbol: "B", name: "Boron", atomicMass: "10.81", category: "Metalloids", group: 13, period: 2, discovered: "1808", uses: "borosilicate glass, detergents, boron carbide" },
  { atomicNumber: 6, symbol: "C", name: "Carbon", atomicMass: "12.011", category: "Reactive nonmetals", group: 14, period: 2, discovered: "Ancient", uses: "life, diamonds, graphite, carbon fiber" },
  { atomicNumber: 7, symbol: "N", name: "Nitrogen", atomicMass: "14.007", category: "Reactive nonmetals", group: 15, period: 2, discovered: "1772", uses: "fertilizer, liquid nitrogen, proteins" },
  { atomicNumber: 8, symbol: "O", name: "Oxygen", atomicMass: "15.999", category: "Reactive nonmetals", group: 16, period: 2, discovered: "1774", uses: "breathing, water, steelmaking, medicine" },
  { atomicNumber: 9, symbol: "F", name: "Fluorine", atomicMass: "18.998", category: "Halogens", group: 17, period: 2, discovered: "1886", uses: "toothpaste fluoride, Teflon, refrigerants" },
  { atomicNumber: 10, symbol: "Ne", name: "Neon", atomicMass: "20.180", category: "Noble gases", group: 18, period: 2, discovered: "1898", uses: "bright signs, lasers, indicators" },
  { atomicNumber: 11, symbol: "Na", name: "Sodium", atomicMass: "22.990", category: "Alkali metals", group: 1, period: 3, discovered: "1807", uses: "salt, street lamps, chemical synthesis" },
  { atomicNumber: 12, symbol: "Mg", name: "Magnesium", atomicMass: "24.305", category: "Alkaline earth metals", group: 2, period: 3, discovered: "1755", uses: "alloys, flares, chlorophyll" },
  { atomicNumber: 13, symbol: "Al", name: "Aluminum", atomicMass: "26.982", category: "Post-transition metals", group: 13, period: 3, discovered: "1825", uses: "aircraft, cans, foil, power lines" },
  { atomicNumber: 14, symbol: "Si", name: "Silicon", atomicMass: "28.085", category: "Metalloids", group: 14, period: 3, discovered: "1824", uses: "computer chips, glass, solar cells" },
  { atomicNumber: 15, symbol: "P", name: "Phosphorus", atomicMass: "30.974", category: "Reactive nonmetals", group: 15, period: 3, discovered: "1669", uses: "DNA, fertilizer, matches" },
  { atomicNumber: 16, symbol: "S", name: "Sulfur", atomicMass: "32.06", category: "Reactive nonmetals", group: 16, period: 3, discovered: "Ancient", uses: "fertilizer, vulcanized rubber, sulfuric acid" },
  { atomicNumber: 17, symbol: "Cl", name: "Chlorine", atomicMass: "35.45", category: "Halogens", group: 17, period: 3, discovered: "1774", uses: "disinfection, PVC plastic, bleach" },
  { atomicNumber: 18, symbol: "Ar", name: "Argon", atomicMass: "39.948", category: "Noble gases", group: 18, period: 3, discovered: "1894", uses: "welding gas, light bulbs, lasers" },
  { atomicNumber: 19, symbol: "K", name: "Potassium", atomicMass: "39.098", category: "Alkali metals", group: 1, period: 4, discovered: "1807", uses: "fertilizer, nerve signals, salt substitutes" },
  { atomicNumber: 20, symbol: "Ca", name: "Calcium", atomicMass: "40.078", category: "Alkaline earth metals", group: 2, period: 4, discovered: "1808", uses: "bones, limestone, cement" },
  { atomicNumber: 21, symbol: "Sc", name: "Scandium", atomicMass: "44.956", category: "Transition metals", group: 3, period: 4, discovered: "1879", uses: "light alloys, sports equipment, lamps" },
  { atomicNumber: 22, symbol: "Ti", name: "Titanium", atomicMass: "47.867", category: "Transition metals", group: 4, period: 4, discovered: "1791", uses: "aircraft, implants, white pigment" },
  { atomicNumber: 23, symbol: "V", name: "Vanadium", atomicMass: "50.942", category: "Transition metals", group: 5, period: 4, discovered: "1801", uses: "strong steel, flow batteries" },
  { atomicNumber: 24, symbol: "Cr", name: "Chromium", atomicMass: "51.996", category: "Transition metals", group: 6, period: 4, discovered: "1797", uses: "stainless steel, chrome plating, pigments" },
  { atomicNumber: 25, symbol: "Mn", name: "Manganese", atomicMass: "54.938", category: "Transition metals", group: 7, period: 4, discovered: "1774", uses: "steelmaking, batteries, pigments" },
  { atomicNumber: 26, symbol: "Fe", name: "Iron", atomicMass: "55.845", category: "Transition metals", group: 8, period: 4, discovered: "Ancient", uses: "steel, tools, hemoglobin" },
  { atomicNumber: 27, symbol: "Co", name: "Cobalt", atomicMass: "58.933", category: "Transition metals", group: 9, period: 4, discovered: "1735", uses: "magnets, blue pigments, batteries" },
  { atomicNumber: 28, symbol: "Ni", name: "Nickel", atomicMass: "58.693", category: "Transition metals", group: 10, period: 4, discovered: "1751", uses: "stainless steel, coins, batteries" },
  { atomicNumber: 29, symbol: "Cu", name: "Copper", atomicMass: "63.546", category: "Transition metals", group: 11, period: 4, discovered: "Ancient", uses: "wiring, plumbing, bronze" },
  { atomicNumber: 30, symbol: "Zn", name: "Zinc", atomicMass: "65.38", category: "Transition metals", group: 12, period: 4, discovered: "Ancient", uses: "galvanizing steel, brass, nutrition" },
  { atomicNumber: 31, symbol: "Ga", name: "Gallium", atomicMass: "69.723", category: "Post-transition metals", group: 13, period: 4, discovered: "1875", uses: "semiconductors, LEDs, thermometers" },
  { atomicNumber: 32, symbol: "Ge", name: "Germanium", atomicMass: "72.630", category: "Metalloids", group: 14, period: 4, discovered: "1886", uses: "fiber optics, infrared optics, electronics" },
  { atomicNumber: 33, symbol: "As", name: "Arsenic", atomicMass: "74.922", category: "Metalloids", group: 15, period: 4, discovered: "Ancient", uses: "semiconductors, wood preservatives" },
  { atomicNumber: 34, symbol: "Se", name: "Selenium", atomicMass: "78.971", category: "Reactive nonmetals", group: 16, period: 4, discovered: "1817", uses: "nutrition, glass, solar cells" },
  { atomicNumber: 35, symbol: "Br", name: "Bromine", atomicMass: "79.904", category: "Halogens", group: 17, period: 4, discovered: "1826", uses: "flame retardants, photography chemicals" },
  { atomicNumber: 36, symbol: "Kr", name: "Krypton", atomicMass: "83.798", category: "Noble gases", group: 18, period: 4, discovered: "1898", uses: "lighting, lasers, photography flashes" },
  { atomicNumber: 37, symbol: "Rb", name: "Rubidium", atomicMass: "85.468", category: "Alkali metals", group: 1, period: 5, discovered: "1861", uses: "research, atomic clocks, specialty glass" },
  { atomicNumber: 38, symbol: "Sr", name: "Strontium", atomicMass: "87.62", category: "Alkaline earth metals", group: 2, period: 5, discovered: "1790", uses: "red fireworks, magnets, medical isotopes" },
  { atomicNumber: 39, symbol: "Y", name: "Yttrium", atomicMass: "88.906", category: "Transition metals", group: 3, period: 5, discovered: "1794", uses: "LEDs, lasers, ceramics" },
  { atomicNumber: 40, symbol: "Zr", name: "Zirconium", atomicMass: "91.224", category: "Transition metals", group: 4, period: 5, discovered: "1789", uses: "nuclear reactors, ceramics, gemstones" },
  { atomicNumber: 41, symbol: "Nb", name: "Niobium", atomicMass: "92.906", category: "Transition metals", group: 5, period: 5, discovered: "1801", uses: "superconductors, steel alloys" },
  { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", atomicMass: "95.95", category: "Transition metals", group: 6, period: 5, discovered: "1778", uses: "strong steel, catalysts, enzymes" },
  { atomicNumber: 43, symbol: "Tc", name: "Technetium", atomicMass: "98", category: "Transition metals", group: 7, period: 5, discovered: "1937", uses: "medical imaging, research" },
  { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", atomicMass: "101.07", category: "Transition metals", group: 8, period: 5, discovered: "1844", uses: "electronics contacts, catalysts" },
  { atomicNumber: 45, symbol: "Rh", name: "Rhodium", atomicMass: "102.91", category: "Transition metals", group: 9, period: 5, discovered: "1803", uses: "catalytic converters, jewelry plating" },
  { atomicNumber: 46, symbol: "Pd", name: "Palladium", atomicMass: "106.42", category: "Transition metals", group: 10, period: 5, discovered: "1803", uses: "catalytic converters, electronics, jewelry" },
  { atomicNumber: 47, symbol: "Ag", name: "Silver", atomicMass: "107.87", category: "Transition metals", group: 11, period: 5, discovered: "Ancient", uses: "jewelry, electronics, mirrors" },
  { atomicNumber: 48, symbol: "Cd", name: "Cadmium", atomicMass: "112.41", category: "Transition metals", group: 12, period: 5, discovered: "1817", uses: "batteries, pigments, coatings" },
  { atomicNumber: 49, symbol: "In", name: "Indium", atomicMass: "114.82", category: "Post-transition metals", group: 13, period: 5, discovered: "1863", uses: "touchscreens, solder, semiconductors" },
  { atomicNumber: 50, symbol: "Sn", name: "Tin", atomicMass: "118.71", category: "Post-transition metals", group: 14, period: 5, discovered: "Ancient", uses: "solder, bronze, tin plating" },
  { atomicNumber: 51, symbol: "Sb", name: "Antimony", atomicMass: "121.76", category: "Metalloids", group: 15, period: 5, discovered: "Ancient", uses: "flame retardants, alloys, semiconductors" },
  { atomicNumber: 52, symbol: "Te", name: "Tellurium", atomicMass: "127.60", category: "Metalloids", group: 16, period: 5, discovered: "1782", uses: "solar panels, alloys, thermoelectrics" },
  { atomicNumber: 53, symbol: "I", name: "Iodine", atomicMass: "126.90", category: "Halogens", group: 17, period: 5, discovered: "1811", uses: "thyroid health, disinfectants, imaging" },
  { atomicNumber: 54, symbol: "Xe", name: "Xenon", atomicMass: "131.29", category: "Noble gases", group: 18, period: 5, discovered: "1898", uses: "lamps, ion engines, anesthesia research" },
  { atomicNumber: 55, symbol: "Cs", name: "Cesium", atomicMass: "132.91", category: "Alkali metals", group: 1, period: 6, discovered: "1860", uses: "atomic clocks, drilling fluids, research" },
  { atomicNumber: 56, symbol: "Ba", name: "Barium", atomicMass: "137.33", category: "Alkaline earth metals", group: 2, period: 6, discovered: "1808", uses: "medical imaging, green fireworks, drilling mud" },
  { atomicNumber: 57, symbol: "La", name: "Lanthanum", atomicMass: "138.91", category: "Lanthanides", group: 3, period: 8, discovered: "1839", uses: "camera lenses, batteries, catalysts" },
  { atomicNumber: 58, symbol: "Ce", name: "Cerium", atomicMass: "140.12", category: "Lanthanides", group: 4, period: 8, discovered: "1803", uses: "polishing powder, lighter flints, catalysts" },
  { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", atomicMass: "140.91", category: "Lanthanides", group: 5, period: 8, discovered: "1885", uses: "magnets, glass coloring, aircraft alloys" },
  { atomicNumber: 60, symbol: "Nd", name: "Neodymium", atomicMass: "144.24", category: "Lanthanides", group: 6, period: 8, discovered: "1885", uses: "powerful magnets, lasers, headphones" },
  { atomicNumber: 61, symbol: "Pm", name: "Promethium", atomicMass: "145", category: "Lanthanides", group: 7, period: 8, discovered: "1945", uses: "research, luminous paint, nuclear batteries" },
  { atomicNumber: 62, symbol: "Sm", name: "Samarium", atomicMass: "150.36", category: "Lanthanides", group: 8, period: 8, discovered: "1879", uses: "magnets, control rods, lasers" },
  { atomicNumber: 63, symbol: "Eu", name: "Europium", atomicMass: "151.96", category: "Lanthanides", group: 9, period: 8, discovered: "1901", uses: "red phosphors, anti-counterfeit inks" },
  { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", atomicMass: "157.25", category: "Lanthanides", group: 10, period: 8, discovered: "1880", uses: "MRI contrast agents, magnets, reactors" },
  { atomicNumber: 65, symbol: "Tb", name: "Terbium", atomicMass: "158.93", category: "Lanthanides", group: 11, period: 8, discovered: "1843", uses: "green phosphors, magnets, sensors" },
  { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", atomicMass: "162.50", category: "Lanthanides", group: 12, period: 8, discovered: "1886", uses: "high-temperature magnets, lasers" },
  { atomicNumber: 67, symbol: "Ho", name: "Holmium", atomicMass: "164.93", category: "Lanthanides", group: 13, period: 8, discovered: "1878", uses: "lasers, magnets, nuclear control rods" },
  { atomicNumber: 68, symbol: "Er", name: "Erbium", atomicMass: "167.26", category: "Lanthanides", group: 14, period: 8, discovered: "1843", uses: "fiber-optic amplifiers, lasers, glass coloring" },
  { atomicNumber: 69, symbol: "Tm", name: "Thulium", atomicMass: "168.93", category: "Lanthanides", group: 15, period: 8, discovered: "1879", uses: "portable X-ray devices, lasers" },
  { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", atomicMass: "173.05", category: "Lanthanides", group: 16, period: 8, discovered: "1878", uses: "atomic clocks, lasers, alloys" },
  { atomicNumber: 71, symbol: "Lu", name: "Lutetium", atomicMass: "174.97", category: "Lanthanides", group: 17, period: 8, discovered: "1907", uses: "PET scan detectors, catalysts, research" },
  { atomicNumber: 72, symbol: "Hf", name: "Hafnium", atomicMass: "178.49", category: "Transition metals", group: 4, period: 6, discovered: "1923", uses: "nuclear control rods, superalloys" },
  { atomicNumber: 73, symbol: "Ta", name: "Tantalum", atomicMass: "180.95", category: "Transition metals", group: 5, period: 6, discovered: "1802", uses: "capacitors, surgical implants, superalloys" },
  { atomicNumber: 74, symbol: "W", name: "Tungsten", atomicMass: "183.84", category: "Transition metals", group: 6, period: 6, discovered: "1783", uses: "hard tools, filaments, weights" },
  { atomicNumber: 75, symbol: "Re", name: "Rhenium", atomicMass: "186.21", category: "Transition metals", group: 7, period: 6, discovered: "1925", uses: "jet engine alloys, catalysts" },
  { atomicNumber: 76, symbol: "Os", name: "Osmium", atomicMass: "190.23", category: "Transition metals", group: 8, period: 6, discovered: "1803", uses: "hard alloys, fountain pen tips" },
  { atomicNumber: 77, symbol: "Ir", name: "Iridium", atomicMass: "192.22", category: "Transition metals", group: 9, period: 6, discovered: "1803", uses: "spark plugs, crucibles, asteroid evidence" },
  { atomicNumber: 78, symbol: "Pt", name: "Platinum", atomicMass: "195.08", category: "Transition metals", group: 10, period: 6, discovered: "1735", uses: "catalytic converters, jewelry, lab equipment" },
  { atomicNumber: 79, symbol: "Au", name: "Gold", atomicMass: "196.97", category: "Transition metals", group: 11, period: 6, discovered: "Ancient", uses: "jewelry, electronics, finance" },
  { atomicNumber: 80, symbol: "Hg", name: "Mercury", atomicMass: "200.59", category: "Transition metals", group: 12, period: 6, discovered: "Ancient", uses: "thermometers, switches, lamps" },
  { atomicNumber: 81, symbol: "Tl", name: "Thallium", atomicMass: "204.38", category: "Post-transition metals", group: 13, period: 6, discovered: "1861", uses: "electronics, optical glass, research" },
  { atomicNumber: 82, symbol: "Pb", name: "Lead", atomicMass: "207.2", category: "Post-transition metals", group: 14, period: 6, discovered: "Ancient", uses: "batteries, radiation shielding, weights" },
  { atomicNumber: 83, symbol: "Bi", name: "Bismuth", atomicMass: "208.98", category: "Post-transition metals", group: 15, period: 6, discovered: "Ancient", uses: "medicines, low-melt alloys, cosmetics" },
  { atomicNumber: 84, symbol: "Po", name: "Polonium", atomicMass: "209", category: "Post-transition metals", group: 16, period: 6, discovered: "1898", uses: "research, static eliminators" },
  { atomicNumber: 85, symbol: "At", name: "Astatine", atomicMass: "210", category: "Halogens", group: 17, period: 6, discovered: "1940", uses: "targeted cancer therapy research" },
  { atomicNumber: 86, symbol: "Rn", name: "Radon", atomicMass: "222", category: "Noble gases", group: 18, period: 6, discovered: "1900", uses: "geology research, radiation studies" },
  { atomicNumber: 87, symbol: "Fr", name: "Francium", atomicMass: "223", category: "Alkali metals", group: 1, period: 7, discovered: "1939", uses: "basic research" },
  { atomicNumber: 88, symbol: "Ra", name: "Radium", atomicMass: "226", category: "Alkaline earth metals", group: 2, period: 7, discovered: "1898", uses: "historical luminous paint, cancer research" },
  { atomicNumber: 89, symbol: "Ac", name: "Actinium", atomicMass: "227", category: "Actinides", group: 3, period: 9, discovered: "1899", uses: "radiation therapy research, neutron sources" },
  { atomicNumber: 90, symbol: "Th", name: "Thorium", atomicMass: "232.04", category: "Actinides", group: 4, period: 9, discovered: "1828", uses: "nuclear fuel research, gas mantles" },
  { atomicNumber: 91, symbol: "Pa", name: "Protactinium", atomicMass: "231.04", category: "Actinides", group: 5, period: 9, discovered: "1913", uses: "research" },
  { atomicNumber: 92, symbol: "U", name: "Uranium", atomicMass: "238.03", category: "Actinides", group: 6, period: 9, discovered: "1789", uses: "nuclear fuel, geology dating, research" },
  { atomicNumber: 93, symbol: "Np", name: "Neptunium", atomicMass: "237", category: "Actinides", group: 7, period: 9, discovered: "1940", uses: "research, neutron detection" },
  { atomicNumber: 94, symbol: "Pu", name: "Plutonium", atomicMass: "244", category: "Actinides", group: 8, period: 9, discovered: "1940", uses: "spacecraft power, nuclear research" },
  { atomicNumber: 95, symbol: "Am", name: "Americium", atomicMass: "243", category: "Actinides", group: 9, period: 9, discovered: "1944", uses: "smoke detectors, research" },
  { atomicNumber: 96, symbol: "Cm", name: "Curium", atomicMass: "247", category: "Actinides", group: 10, period: 9, discovered: "1944", uses: "space power research, alpha sources" },
  { atomicNumber: 97, symbol: "Bk", name: "Berkelium", atomicMass: "247", category: "Actinides", group: 11, period: 9, discovered: "1949", uses: "research, creating heavier elements" },
  { atomicNumber: 98, symbol: "Cf", name: "Californium", atomicMass: "251", category: "Actinides", group: 12, period: 9, discovered: "1950", uses: "neutron sources, metal detection, research" },
  { atomicNumber: 99, symbol: "Es", name: "Einsteinium", atomicMass: "252", category: "Actinides", group: 13, period: 9, discovered: "1952", uses: "research" },
  { atomicNumber: 100, symbol: "Fm", name: "Fermium", atomicMass: "257", category: "Actinides", group: 14, period: 9, discovered: "1952", uses: "research" },
  { atomicNumber: 101, symbol: "Md", name: "Mendelevium", atomicMass: "258", category: "Actinides", group: 15, period: 9, discovered: "1955", uses: "research" },
  { atomicNumber: 102, symbol: "No", name: "Nobelium", atomicMass: "259", category: "Actinides", group: 16, period: 9, discovered: "1958", uses: "research" },
  { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", atomicMass: "266", category: "Actinides", group: 17, period: 9, discovered: "1961", uses: "research" },
  { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: "267", category: "Transition metals", group: 4, period: 7, discovered: "1964", uses: "superheavy element research" },
  { atomicNumber: 105, symbol: "Db", name: "Dubnium", atomicMass: "268", category: "Transition metals", group: 5, period: 7, discovered: "1967", uses: "superheavy element research" },
  { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", atomicMass: "269", category: "Transition metals", group: 6, period: 7, discovered: "1974", uses: "superheavy element research" },
  { atomicNumber: 107, symbol: "Bh", name: "Bohrium", atomicMass: "270", category: "Transition metals", group: 7, period: 7, discovered: "1981", uses: "superheavy element research" },
  { atomicNumber: 108, symbol: "Hs", name: "Hassium", atomicMass: "277", category: "Transition metals", group: 8, period: 7, discovered: "1984", uses: "superheavy element research" },
  { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", atomicMass: "278", category: "Unknown properties", group: 9, period: 7, discovered: "1982", uses: "superheavy element research" },
  { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: "281", category: "Unknown properties", group: 10, period: 7, discovered: "1994", uses: "superheavy element research" },
  { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", atomicMass: "282", category: "Unknown properties", group: 11, period: 7, discovered: "1994", uses: "superheavy element research" },
  { atomicNumber: 112, symbol: "Cn", name: "Copernicium", atomicMass: "285", category: "Transition metals", group: 12, period: 7, discovered: "1996", uses: "superheavy element research" },
  { atomicNumber: 113, symbol: "Nh", name: "Nihonium", atomicMass: "286", category: "Unknown properties", group: 13, period: 7, discovered: "2004", uses: "superheavy element research" },
  { atomicNumber: 114, symbol: "Fl", name: "Flerovium", atomicMass: "289", category: "Unknown properties", group: 14, period: 7, discovered: "1998", uses: "superheavy element research" },
  { atomicNumber: 115, symbol: "Mc", name: "Moscovium", atomicMass: "290", category: "Unknown properties", group: 15, period: 7, discovered: "2003", uses: "superheavy element research" },
  { atomicNumber: 116, symbol: "Lv", name: "Livermorium", atomicMass: "293", category: "Unknown properties", group: 16, period: 7, discovered: "2000", uses: "superheavy element research" },
  { atomicNumber: 117, symbol: "Ts", name: "Tennessine", atomicMass: "294", category: "Unknown properties", group: 17, period: 7, discovered: "2010", uses: "superheavy element research" },
  { atomicNumber: 118, symbol: "Og", name: "Oganesson", atomicMass: "294", category: "Unknown properties", group: 18, period: 7, discovered: "2002", uses: "superheavy element research" },
];

function youtubeWatchUrl(element) {
  const videoId = videoIds[element.symbol];
  return videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(element.youtubeQuery)}`;
}

function youtubeEmbedUrl(element) {
  const videoId = videoIds[element.symbol];
  return videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(element.youtubeQuery)}`;
}

function relatedElements(record) {
  const candidates = [
    record.atomicNumber - 1,
    record.atomicNumber + 1,
    ...elementRecords
      .filter((candidate) => candidate.group === record.group && candidate.atomicNumber !== record.atomicNumber)
      .slice(0, 2)
      .map((candidate) => candidate.atomicNumber),
  ];

  return [...new Set(candidates)]
    .filter((atomicNumber) => elementRecords.some((element) => element.atomicNumber === atomicNumber))
    .slice(0, 3);
}

export const elements = elementRecords.map((record) => {
  const custom = spotlight[record.symbol] ?? {};
  const youtubeQuery = custom.youtubeQuery ?? `${record.name} element explained chemistry Periodic Videos`;
  const element = {
    ...record,
    id: record.symbol.toLowerCase(),
    date: `Atomic #${record.atomicNumber}`,
    tagline: custom.tagline ?? `${record.category} used in ${record.uses}`,
    summary:
      custom.summary ??
      `${record.name} (${record.symbol}) is ${categoryDescriptions[record.category]}. Its atomic number is ${record.atomicNumber}, which means every atom of ${record.name} has ${record.atomicNumber} protons.`,
    whyMatters:
      custom.whyMatters ??
      `${categoryImportance[record.category]} ${record.name} is especially connected to ${record.uses}.`,
    funFacts:
      custom.funFacts ??
      [
        `${record.name}'s atomic symbol is ${record.symbol}.`,
        `Its rounded atomic mass is ${record.atomicMass}.`,
        `Common uses or connections include ${record.uses}.`,
      ],
    youtubeQuery,
  };

  return {
    ...element,
    youtubeEmbedUrl: youtubeEmbedUrl(element),
    youtubeWatchUrl: youtubeWatchUrl(element),
    related: relatedElements(record),
  };
});
