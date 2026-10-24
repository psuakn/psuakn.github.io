import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterPublications,
  getPublicationStats,
  filterAlumni,
  formatAcsCitation,
  formatBibtexCitation,
  Publication,
  Alumni,
} from './academicData';

const mockPubs: Publication[] = [
  {
    id: 260,
    number: 260,
    title: 'Polythiophene Derived Nickel Cobaltite Nanocomposite Showing Excellent Photo-switching and Photo-supercapacitor Properties',
    authors: 'U. Basak, P. Ghosh, D. P. Chatterjee, G. Mahapatra, A. Banerjee and A. K. Nandi',
    journal: 'J. Mater Chem. A',
    year: 2025,
    volume: '13',
    pages: '7813 - 7833',
    publisher: 'RSC',
    category: 'Energy & Supercapacitors',
  },
  {
    id: 256,
    number: 256,
    title: 'A review on Self-Assembly Driven Optoelectronic Properties of Polythiophene-Peptide and Polythiophene-Polymer conjugates',
    authors: 'A. K. Nandi',
    journal: 'Langmuir',
    year: 2024,
    volume: '40',
    pages: '9385–9405',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers',
  },
  {
    id: 109,
    number: 109,
    title: 'Physical and Mechanical Properties of Poly(methyl methacrylate) -functionalized Graphene / Poly(vinylidine fluoride) Nanocomposites',
    authors: 'R. K. Layek, S. Samanta, D. P. Chatterjee and A.K. Nandi',
    journal: 'Polymer',
    year: 2010,
    volume: '51',
    pages: '5846-5856',
    publisher: 'Elsevier',
    category: 'Fluoropolymers & PVDF',
  },
  {
    id: 2,
    number: 2,
    title: 'Miscibility of poly(methyl acrylate) and poly(vinyl acetate)',
    authors: 'A. K. Nandi, B. M. Mandal and S. N. Bhattacharyya',
    journal: 'Macromolecules',
    year: 1985,
    volume: '18',
    pages: '1454-1460',
    publisher: 'ACS',
    category: 'Polymer Blends & Thermodynamics',
  },
];

const mockAlumni: Alumni[] = [
  {
    id: 1,
    name: 'Prof. Pralay Maiti',
    period: '1992-96',
    degreeYear: 1995,
    university: 'Jadavpur University',
    thesisTitle: 'Influence of chain structure on the compatibility of poly(vinylidene fluoride)',
    currentAddress: 'Department of Materials Science and Technology, IIT-BHU, Varanasi',
    category: 'Professor / Faculty',
  },
  {
    id: 20,
    name: 'Dr. Shreyam Chatterjee',
    period: '2009-2014',
    degreeYear: 2012,
    university: 'Jadavpur University',
    thesisTitle: 'Nanostructured conducting polymers and their composites towards photovoltaic applications',
    currentAddress: 'Assistant Professor, ISIR, Osaka University, Japan',
    category: 'International Scientist',
  },
];

test('filterPublications filters by text search query', () => {
  const result = filterPublications(mockPubs, 'Cobaltite', 'all', 'all', 'all');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 260);
});

test('filterPublications filters by decade/year filter', () => {
  const res2020s = filterPublications(mockPubs, '', '2020s', 'all', 'all');
  assert.equal(res2020s.length, 2);

  const res1980s = filterPublications(mockPubs, '', '1980s', 'all', 'all');
  assert.equal(res1980s.length, 1);
  assert.equal(res1980s[0].id, 2);
});

test('filterPublications filters by publisher and category', () => {
  const acsPubs = filterPublications(mockPubs, '', 'all', 'ACS', 'all');
  assert.equal(acsPubs.length, 2);

  const energyPubs = filterPublications(mockPubs, '', 'all', 'all', 'Energy & Supercapacitors');
  assert.equal(energyPubs.length, 1);
  assert.equal(energyPubs[0].id, 260);
});

test('getPublicationStats calculates accurate counts and years', () => {
  const stats = getPublicationStats(mockPubs);
  assert.equal(stats.total, 4);
  assert.equal(stats.byPublisher.ACS, 2);
  assert.equal(stats.byPublisher.RSC, 1);
  assert.equal(stats.byPublisher.Elsevier, 1);
  assert.equal(stats.latestYear, 2025);
  assert.equal(stats.earliestYear, 1985);
});

test('filterAlumni filters by keyword and category', () => {
  const searchResult = filterAlumni(mockAlumni, 'Osaka', 'all');
  assert.equal(searchResult.length, 1);
  assert.equal(searchResult[0].name, 'Dr. Shreyam Chatterjee');

  const facultyOnly = filterAlumni(mockAlumni, '', 'Professor / Faculty');
  assert.equal(facultyOnly.length, 1);
  assert.equal(facultyOnly[0].name, 'Prof. Pralay Maiti');
});

test('formatAcsCitation formats clean academic reference', () => {
  const citation = formatAcsCitation(mockPubs[0]);
  assert.match(citation, /U\. Basak/);
  assert.match(citation, /J\. Mater Chem\. A, 2025 13, 7813 - 7833\./);
});

test('formatBibtexCitation generates valid bibtex entry', () => {
  const bibtex = formatBibtexCitation(mockPubs[1]);
  assert.match(bibtex, /@article\{Nandi2024_256/);
  assert.match(bibtex, /title = \{A review on Self-Assembly/);
});
