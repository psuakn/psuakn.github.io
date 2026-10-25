const fs = require('fs');

// Read existing professorData.ts to preserve existing verified publications
const profDataRaw = fs.readFileSync('src/data/professorData.ts', 'utf8');

// Read raw paste
const rawPaste = fs.readFileSync('public/assets/aistudio/Paste_October_24__2026_-_8_31PM_84522c49', 'utf8');
const lines = rawPaste.split('\n').slice(234, 2125);

// Publisher helper
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

function getCategory(title, journal) {
  const t = ((title || '') + ' ' + (journal || '')).toLowerCase();
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

// Extract existing publications from professorData.ts
const existingPubs = [];
const pubMatchRegex = /\{\s*id:\s*(\d+),[\s\S]*?category:\s*'([^']+)'(?:,[\s\S]*?highlight:\s*'([^']+)')?\s*\}/g;

let m;
while ((m = pubMatchRegex.exec(profDataRaw)) !== null) {
  const block = m[0];
  try {
    const id = parseInt(m[1], 10);
    const titleM = block.match(/title:\s*'([^']+)'/);
    const authorsM = block.match(/authors:\s*'([^']+)'/);
    const journalM = block.match(/journal:\s*'([^']+)'/);
    const yearM = block.match(/year:\s*(\d+)/);
    const volumeM = block.match(/volume:\s*'([^']+)'/);
    const pagesM = block.match(/pages:\s*'([^']+)'/);
    const publisherM = block.match(/publisher:\s*'([^']+)'/);
    const categoryM = block.match(/category:\s*'([^']+)'/);
    const notesM = block.match(/notes:\s*'([^']+)'/);
    const highlightM = block.match(/highlight:\s*'([^']+)'/);

    if (titleM && authorsM && journalM && yearM) {
      existingPubs.push({
        id,
        number: id,
        title: titleM[1],
        authors: authorsM[1],
        journal: journalM[1],
        year: parseInt(yearM[1], 10),
        volume: volumeM ? volumeM[1] : undefined,
        pages: pagesM ? pagesM[1] : undefined,
        publisher: publisherM ? publisherM[1] : getPublisher(journalM[1]),
        category: categoryM ? categoryM[1] : getCategory(titleM[1], journalM[1]),
        notes: notesM ? notesM[1] : undefined,
        highlight: highlightM ? highlightM[1] : undefined
      });
    }
  } catch (err) {}
}

console.log('Successfully extracted', existingPubs.length, 'existing enriched publications');
fs.writeFileSync('scripts/existingPubs.json', JSON.stringify(existingPubs, null, 2));
