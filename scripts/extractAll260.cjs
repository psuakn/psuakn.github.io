const fs = require('fs');

const raw = fs.readFileSync('public/assets/aistudio/Paste_October_24__2026_-_8_31PM_84522c49', 'utf8');
const lines = raw.split('\n');

// Publication section is between line 234 and 2125
const slice = lines.slice(234, 2125);

// Let's identify the blocks
const entries = [];
let currentYear = 2025;
let currentItem = null;

// Helper to determine publisher
function getPublisher(journal) {
  const j = (journal || '').toLowerCase();
  if (j.includes('acs') || j.includes('macromolecules') || j.includes('langmuir') || j.includes('j. phys. chem') || j.includes('biomacromolecules') || j.includes('j. am. chem. soc') || j.includes('inorg. chem') || j.includes('crystal growth')) {
    return 'ACS';
  }
  if (j.includes('chem. commun') || j.includes('soft matter') || j.includes('j. mater. chem') || j.includes('rsc adv') || j.includes('new j. chem') || j.includes('faraday') || j.includes('pccp') || j.includes('phys. chem. chem. phys') || j.includes('polymer chemistry') || j.includes('nanoscale')) {
    return 'RSC';
  }
  if (j.includes('macromol. chem') || j.includes('macromol. rapid') || j.includes('macromol. symp') || j.includes('j. polym. sci') || j.includes('adv. mater') || j.includes('adv. funct') || j.includes('small') || j.includes('angew')) {
    return 'Wiley';
  }
  if (j.includes('polymer') || j.includes('carbon') || j.includes('synth. met') || j.includes('synthetic metals') || j.includes('eur. polym') || j.includes('colloids and surfaces') || j.includes('prog. polym') || j.includes('mater. sci. eng') || j.includes('acta')) {
    return 'Elsevier';
  }
  if (j.includes('springer') || j.includes('colloid polym') || j.includes('journal of materials science') || j.includes('nature')) {
    return 'Springer';
  }
  return 'Other';
}

// Helper to categorize
function getCategory(title, journal) {
  const t = (title + ' ' + journal).toLowerCase();
  if (t.includes('gel') || t.includes('gelation') || t.includes('thixotrop') || t.includes('fret') || t.includes('organogel') || t.includes('hydrogel')) {
    return 'Supramolecular Gels';
  }
  if (t.includes('pvdf') || t.includes('vinylidene fluoride') || t.includes('atrp') || t.includes('fluoropolymer') || t.includes('trifluoroethylene')) {
    return 'Fluoropolymers & PVDF';
  }
  if (t.includes('graphene') || t.includes('nanocomposite') || t.includes('cnt') || t.includes('nanotube') || t.includes('nanosheet') || t.includes('mos2') || t.includes('clay')) {
    return 'Graphene & 2D Materials';
  }
  if (t.includes('supercapacitor') || t.includes('solar') || t.includes('photovoltaic') || t.includes('battery') || t.includes('energy storage')) {
    return 'Energy & Supercapacitors';
  }
  if (t.includes('dna') || t.includes('rna') || t.includes('protein') || t.includes('chitosan') || t.includes('peptide') || t.includes('folic acid') || t.includes('biomacromolecule') || t.includes('bi-component')) {
    return 'Biomolecular Hybrids';
  }
  if (t.includes('thiophene') || t.includes('polyaniline') || t.includes('conducting polymer') || t.includes('optoelectronic') || t.includes('photo-switching') || t.includes('photoresponsive')) {
    return 'Optoelectronics & Conducting Polymers';
  }
  return 'Polymer Blends & Thermodynamics';
}

let expectedNum = 260;

for (let i = 0; i < slice.length; i++) {
  const line = slice[i].trim();
  if (!line) continue;

  // Year check
  if (/^(19|20)\d\d$/.test(line)) {
    currentYear = parseInt(line, 10);
    continue;
  }

  // Check if starts with a number e.g. "260. Polythiophene..." or "260." or "4*"
  const numMatch = line.match(/^(\d+)\*?\.?\s*(.*)$/);
  if (numMatch && numMatch[1] && parseInt(numMatch[1], 10) <= 260 && parseInt(numMatch[1], 10) > 0) {
    const num = parseInt(numMatch[1], 10);
    const rest = numMatch[2] ? numMatch[2].trim() : '';

    if (currentItem) {
      entries.push(currentItem);
    }

    expectedNum = num;
    currentItem = {
      id: num,
      number: num,
      year: currentYear,
      rawTitle: rest,
      rawAuthors: '',
      rawJournal: '',
      lines: []
    };
    if (rest) {
      currentItem.lines.push(rest);
    }
  } else if (currentItem) {
    currentItem.lines.push(line);
  } else {
    // Unnumbered line before first entry
  }
}

if (currentItem) {
  entries.push(currentItem);
}

console.log('Total entries parsed with number headers:', entries.length);
fs.writeFileSync('scripts/parsedEntries.json', JSON.stringify(entries, null, 2));
