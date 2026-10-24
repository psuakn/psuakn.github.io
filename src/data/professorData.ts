import { Publication, Alumni } from '../utils/academicData';

export interface BookItem {
  id: number;
  type: 'Textbook' | 'Book Chapter';
  title: string;
  authors: string;
  publisher: string;
  year: number;
  details: string;
  isbnOrDoi?: string;
}

export interface PopularArticle {
  id: number;
  title: string;
  authors: string;
  outlet: string;
  year: number;
  pages: string;
}

export interface ResearchGroupMember {
  id: number;
  name: string;
  role: 'Senior Research Fellow' | 'Junior Research Fellow' | 'Postdoctoral Fellow';
  degree: string;
  institution: string;
  researchFocus: string;
  email: string;
}

export interface Facility {
  id: number;
  name: string;
  model: string;
  category: 'Thermal & Mechanical' | 'Spectroscopy & Optical' | 'Electrical & Electrochemical' | 'Processing & Synthesis';
  description: string;
  applications: string[];
}

export interface VisitAbroad {
  id: number;
  year: string;
  eventOrRole: string;
  location: string;
  type: 'PostDoc' | 'Visiting Professor' | 'Invited Talk' | 'Plenary / Keynote' | 'Oral Presentation';
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  category: 'Fellowship' | 'Society Award' | 'National Recognition' | 'Editorial & Service';
}

export const PROFESSOR_INFO = {
  name: 'Prof. Arun Kumar Nandi',
  fullName: 'Prof. Arun Kumar Nandi, FASc., FRSC',
  portraitUrl: './assets/aistudio/WhatsApp_Image_2026-10-24_at_9.44.42_PM_4bd7d769.jpg',
  designation: 'Emeritus Scientist, CSIR',
  formerRole: 'Senior Professor & Head (Former)',
  unit: 'Polymer Science Unit, School of Materials Science',
  institution: 'Indian Association for the Cultivation of Science (IACS)',
  institutionTagline: 'The Cradle of Science in India — Established 1876',
  address: '2A & 2B Raja S.C. Mullick Road, Jadavpur, Kolkata - 700 032, West Bengal, India',
  dob: '21.02.1955',
  birthplace: 'Belboni, Bankura, West Bengal, India',
  telephone: '+91 (033) 2473-4971 (Extn. 1561)',
  fax: '+91 (033) 2473-2805',
  email: 'psuakn@iacs.res.in',
  scholarUrl: 'https://scholar.google.co.in/citations?user=en_rKaoAAAAJ&hl=en',
  iacsProfileUrl: 'http://iacs.res.in',
  hIndex: 61,
  totalPublications: 260,
  phdSupervised: 37,
  collaborativePhd: 1,
  totalCitations: '7,000+',
  avgCitation: '16.7',
  yearsActive: '45+',
  fellowships: [
    { title: 'FASc', name: 'Indian Academy of Sciences, Bangalore', year: '2009' },
    { title: 'FRSC', name: 'Royal Society of Chemistry, London, UK', year: '2014' },
    { title: 'FWAST', name: 'West Bengal Academy of Science and Technology', year: '2006' }
  ],
  bioOverview: `Prof. Arun Kumar Nandi, FASc, FRSC, is an internationally acclaimed polymer scientist and Emeritus Scientist (CSIR) at the Indian Association for the Cultivation of Science (IACS), Kolkata. Over four decades of groundbreaking research, Prof. Nandi has pioneered foundational concepts in polymer crystallization, thermoreversible supramolecular gelation, polymer-functionalized graphene, biomolecular hybrids, and organic mixed ion-electron conductors for energy storage and optoelectronics.`,
  bioDetail: `With over 260 research papers in top-tier journals (including 85 ACS and 58 RSC publications), an h-index of 61, and having mentored 37 Ph.D. scholars who currently hold faculty and scientific leadership posts globally, Prof. Nandi has shaped the trajectory of macromolecular chemistry in India and abroad. His postdoctoral work at Florida State University alongside legendary polymer physicist Prof. Leo Mandelkern established critical insights into polymer equilibrium melting and defect distributions. He later pioneered "nanojacketing" of DNA, smart thixotropic photoluminescent gels, piezoelectric β-PVDF polymorph nanocomposites, and high-efficiency hybrid supercapacitors.`
};

export const EDUCATION_LIST = [
  {
    degree: 'Ph.D. in Polymer Physical Chemistry',
    institution: 'Jadavpur University / IACS Kolkata',
    year: '1986',
    thesis: 'Thermodynamics of Polymer – Polymer and Polymer-Solvent Mixing',
    supervisors: 'Prof. S. N. Bhattacharyya & Prof. B. M. Mandal',
    distinction: 'Pioneered inverse gas chromatography & phase boundary calorimetry in binary polymer systems.'
  },
  {
    degree: 'M.Sc. in Chemistry (Physical Chemistry)',
    institution: 'University of Burdwan',
    year: '1977',
    thesis: '',
    supervisors: '',
    distinction: 'First Class, Rank: 2nd (67.8%) · Awarded National Merit Scholarship'
  },
  {
    degree: 'B.Sc. (Honours in Chemistry)',
    institution: 'University of Burdwan',
    year: '1975',
    thesis: '',
    supervisors: '',
    distinction: 'First Class, Rank: 5th (70.2%)'
  }
];

export const CAREER_TIMELINE = [
  {
    period: '2020 – Present',
    role: 'Emeritus Scientist, CSIR',
    institution: 'Indian Association for the Cultivation of Science (IACS), Kolkata',
    description: 'Leading advanced research on hybrid polymer gels for energy applications, organic mixed ion-electron conductors, and optoelectronic polythiophenes.'
  },
  {
    period: '2007 – 2020',
    role: 'Senior Professor (HAG)',
    institution: 'Polymer Science Unit, School of Materials Science, IACS Kolkata',
    description: 'Directed major national and international research programs, DST Unit on Nanoscience, and mentored doctoral research fellows.'
  },
  {
    period: '2003 – 2007',
    role: 'Professor',
    institution: 'Polymer Science Unit, IACS Kolkata',
    description: 'Promoted to full Professor; served as Indo-French Project Director on polymer materials with multiscale porosity.'
  },
  {
    period: '1997 – 2003',
    role: 'Reader',
    institution: 'Polymer Science Unit, IACS Kolkata',
    description: 'Pioneered thermoreversible conducting polyaniline gels and regioregular poly(3-alkyl thiophene) gelation thermodynamics.'
  },
  {
    period: '1992 – 1997',
    role: 'Senior Lecturer',
    institution: 'Polymer Science Unit, IACS Kolkata',
    description: 'Initiated research group on PVDF crystallization kinetics, polymer blend miscibility, and co-crystallization mechanisms.'
  },
  {
    period: '1988 – 1989',
    role: 'Postdoctoral Research Fellow',
    institution: 'Institute of Molecular Biophysics, Florida State University, Tallahassee, FL, USA',
    description: 'Worked alongside legendary polymer pioneer Prof. Leo Mandelkern on polymer morphology, defect distribution in lamellae, and equilibrium melting thermodynamics.'
  },
  {
    period: '1986 – 1992',
    role: 'Lecturer / Senior Lecturer',
    institution: 'North Bengal University, Darjeeling, West Bengal',
    description: 'Taught postgraduate courses in physical chemistry and macromolecular science.'
  },
  {
    period: '1983 – 1986',
    role: 'Lecturer in Chemistry',
    institution: 'Shyamsunder College & Sripat Singh College (W.B.)',
    description: 'Undergraduate chemistry teaching across honors curricula while completing doctoral investigations.'
  },
  {
    period: '1980 – 1983',
    role: 'Research Fellow',
    institution: 'Indian Association for the Cultivation of Science (IACS), Kolkata',
    description: 'Doctoral research fellowship exploring polymer solution thermodynamics and calorimetry.'
  }
];

export const RESEARCH_THRUSTS = [
  {
    id: 'thrust-1',
    title: 'Controlled Polymer Grafting & ATRP Synthesis',
    subtitle: 'High-Density Functional Macromolecules & Super-Glues',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    description: 'Pioneering atom transfer radical polymerization (ATRP) directly from the robust >CF2 centers of Poly(vinylidene fluoride) (PVDF) backbones. Generated water-soluble amphiphilic graft copolymers with 45x elongation, 1970% higher toughness, and exceptional super-gluing capabilities.',
    tags: ['ATRP Grafting', 'PVDF Copolymers', 'Biomimetic Glues', 'Membrane Separation', 'Stimuli-Responsive Polymers'],
    keyPaper: 'Macromolecules (2009), 42, 3112–3120',
    impact: 'Established the gold standard for fluoropolymer surface functionalization without compromising mechanical integrity.'
  },
  {
    id: 'thrust-2',
    title: 'Supramolecular Gels & Photoluminescent Networks',
    subtitle: 'Smart Hydrogels, FRET Networks & Molecular Logic Gates',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    description: 'Elucidating gelation mechanisms via percolation theory and fibrillar crystallization. Developed stimuli-responsive hydrogels using riboflavin, melamine, gallic acid, and peptides that exhibit dramatic photoluminescence enhancement, white light emission, and molecular AND logic gate functionality.',
    tags: ['Supramolecular Hydrogels', 'Percolation Theory', 'Molecular Logic Gates', 'FRET Emission', 'Thixotropic Networks'],
    keyPaper: 'Chem. Commun. (2006, 2012) & Soft Matter (2009, 2014)',
    impact: 'Pioneered thermo- and pH-reversible bi-component optical materials for optical switching and sensing.'
  },
  {
    id: 'thrust-3',
    title: 'Polymer-Functionalized Graphene & 2D Nanomaterials',
    subtitle: 'From Sono-Fenton Quantum Dots to Piezoelectric β-Polymorphs',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'Authored the definitive Royal Society of Chemistry textbook on "Polymer functionalized graphene" (2021). Created functionalized graphene and MoS2 quantum dots that nucleate the electroactive piezoelectric β-polymorph in PVDF, yielding order-of-magnitude gains in dielectric permittivity and conductivity.',
    tags: ['Graphene Functionalization', 'MoS2 Quantum Dots', 'Piezoelectric β-PVDF', 'Dielectric Nanocomposites', 'RSC Book'],
    keyPaper: 'RSC Polymer Chemistry Book (2021) & Polymer (2010)',
    impact: 'Provides theoretical models for interfacial stress transfer and phonon modulation in 2D-polymer hybrids.'
  },
  {
    id: 'thrust-4',
    title: 'Biomolecular Hybrids & DNA Nanojacketing',
    subtitle: 'Preserving Nucleic Acid Conformation & Diagnostic Biosensors',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    description: 'First to discover the phenomenon of "nanojacketing" ds-DNA and RNA with conducting polymer nanolayers (~5nm metallic silver and POMA coatings) without conformational denaturing. Highlighted twice by Nature India for groundbreaking biosensing and negative differential resistance.',
    tags: ['DNA Nanojacketing', 'Nature India Highlight', 'RNA Hybrid Biosensors', 'Negative Differential Resistance', 'FRET Sensing'],
    keyPaper: 'Langmuir (2010), PCCP (2011), Highlighted in Nature India',
    impact: 'Opened non-destructive characterization techniques for genetic materials and multiplexed heavy metal sensing.'
  },
  {
    id: 'thrust-5',
    title: 'Optoelectronic Conjugates & Mixed Conductors (OMEIC)',
    subtitle: 'Photo-Switching, Photo-Supercapacitors & Solar Cells',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: 'Designed tailored polythiophene conjugates, peptide-linked chromophores, and organic mixed ion-electron conductors (OMEIC) exhibiting reproducible photo-switching and electrical rectification. Demonstrated perovskite solar cell interfacial engineering and dye-sensitized solar cells (DSC).',
    tags: ['Polythiophenes', 'Mixed Conduction (OMEIC)', 'Perovskite Solar Cells', 'Photo-switching', 'Photo-supercapacitors'],
    keyPaper: 'J. Mater. Chem. A (2025, 2023) & ACS Appl. Electron. Mater. (2024)',
    impact: 'Enabled photo-responsive energy conversion devices with integrated charge storage capability.'
  },
  {
    id: 'thrust-6',
    title: 'Polymer Crystallization & Thermodynamics of Blends',
    subtitle: 'Cocrystallization Kinetics, Regioregularity & Kinetic Immiscibility',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
    description: 'Systematic exploration of regioregularity, chain defects, and crystallization kinetics in poly(3-alkyl thiophenes) and fluoropolymer blends. Discovered the fundamental principle of kinetic immiscibility in polymer-polymer blends and co-crystal formation with controlled chain extension.',
    tags: ['Crystallization Kinetics', 'Regioregular P3AT', 'Polymer Miscibility', 'Defect Thermodynamics', 'Mandelkern Legacy'],
    keyPaper: 'Macromolecules (1985, 1995, 2001, 2003) & Polymer (1994, 1998)',
    impact: 'Established predictive models for head-to-head structural defects in fluoropolymer lamellae.'
  }
];

export const VISITING_AND_KEYNOTES: VisitAbroad[] = [
  { id: 1, year: '1988 – 1989', eventOrRole: 'Postdoctoral Research Associate (with Prof. Leo Mandelkern)', location: 'Institute of Molecular Biophysics, Florida State University, Tallahassee, USA', type: 'PostDoc' },
  { id: 2, year: '2003, 2004, 2005, 2007', eventOrRole: 'Visiting Professor (Indo-French Project on Multiscale Porosity)', location: 'Institut Charles Sadron (CNRS), Strasbourg, France', type: 'Visiting Professor' },
  { id: 3, year: '1996', eventOrRole: '1st International Conference on Polymer-Solvent Complexes', location: 'Meyrueis, France', type: 'Oral Presentation' },
  { id: 4, year: '2002', eventOrRole: '4th International Conference on Polymer-Solvent Systems', location: 'Prague, Czech Republic', type: 'Invited Talk' },
  { id: 5, year: '2004', eventOrRole: '5th International Conference on Polymer-Solvent Complexes', location: 'Lorient, France', type: 'Invited Talk' },
  { id: 6, year: '2004', eventOrRole: '40th IUPAC International Symposium on Macromolecules (Macro 2004)', location: 'Paris, France', type: 'Oral Presentation' },
  { id: 7, year: '2005', eventOrRole: 'Indo-French Symposium "Fibrillar Networks as Advanced Materials"', location: 'Strasbourg, France', type: 'Plenary / Keynote' },
  { id: 8, year: '2006', eventOrRole: '6th International Conference on Polymer-Solvent Systems', location: 'Manchester, England, UK', type: 'Plenary / Keynote' },
  { id: 9, year: '2008', eventOrRole: 'Gordon Research Conference on Composites', location: 'Ventura, California, USA', type: 'Oral Presentation' },
  { id: 10, year: '2014', eventOrRole: '248th American Chemical Society (ACS) National Meeting', location: 'San Francisco, CA, USA', type: 'Invited Talk' },
  { id: 11, year: '2014', eventOrRole: 'Institut Charles Sadron Special Lecture Series', location: 'Strasbourg, France', type: 'Invited Talk' },
  { id: 12, year: '2014', eventOrRole: '10th International Conference on Polymer-Solvent Complexes (Polysolvat-10)', location: 'Salerno, Italy', type: 'Plenary / Keynote' },
  { id: 13, year: '2016', eventOrRole: 'Indo-French Symposium "Functional Polymers and Self-assembled Systems"', location: 'Institut Charles Sadron, Strasbourg, France', type: 'Invited Talk' },
  { id: 14, year: '2016', eventOrRole: 'Leibniz-Institut für Polymerforschung Dresden e.V. (IPF)', location: 'Dresden, Germany', type: 'Invited Talk' },
  { id: 15, year: '2017', eventOrRole: 'International Conference on Microelectronics & Smart Materials (iCMEMS 2017)', location: 'Western Sydney University, Sydney, Australia', type: 'Invited Talk' },
  { id: 16, year: '2018', eventOrRole: '12th IUPAC International Conference (Polysolvat-12)', location: 'Institut Laue-Langevin (ILL), Grenoble, France', type: 'Invited Talk' },
  { id: 17, year: '2018', eventOrRole: 'International Conference on Advanced Energy Materials (AEM-2018)', location: 'University of Surrey, Guildford, United Kingdom', type: 'Invited Talk' }
];

export const AWARDS_AND_HONORS: AwardItem[] = [
  {
    year: '2014',
    title: 'Fellow of the Royal Society of Chemistry (FRSC)',
    organization: 'Royal Society of Chemistry, London, United Kingdom',
    description: 'Admitted as Fellow in recognition of substantial contributions to macromolecular chemistry and global leadership in polymer science.',
    category: 'Fellowship'
  },
  {
    year: '2009',
    title: 'Fellow of the Indian Academy of Sciences (FASc)',
    organization: 'Indian Academy of Sciences, Bangalore, India',
    description: 'Elected Fellow for foundational research on polymer thermodynamics, gelation kinetics, and functional polymer nanocomposites.',
    category: 'Fellowship'
  },
  {
    year: '2006',
    title: 'Fellow of West Bengal Academy of Science and Technology (FWAST)',
    organization: 'W.B. Academy of Science and Technology, Kolkata',
    description: 'Elected for distinguished scientific achievements in materials science within the state and nationally.',
    category: 'Fellowship'
  },
  {
    year: '2012',
    title: 'American Chemical Society Highlighted Author',
    organization: 'American Chemical Society (ACS Publications)',
    description: 'Honored as one among only 28-30 selected Indian scientists nationwide publishing high-impact research in ACS journals (ACS & India: Partners in Progress).',
    category: 'National Recognition'
  },
  {
    year: '2015',
    title: 'Prof. J. N. Mukherjee Memorial Award & Endowment Lecture',
    organization: 'Indian Chemical Society',
    description: 'Prestigious national memorial award recognizing lifetime excellence in physical and materials chemistry research.',
    category: 'Society Award'
  },
  {
    year: '2006',
    title: 'CRSI Bronze Medal',
    organization: 'Chemical Research Society of India (CRSI)',
    description: 'Awarded for exceptional contributions to chemical sciences research in India.',
    category: 'Society Award'
  },
  {
    year: '2004',
    title: 'MRSI Bronze Medal',
    organization: 'Materials Research Society of India (MRSI)',
    description: 'Conferred for landmark contributions to materials chemistry, polymer gels, and conducting polymer blends.',
    category: 'Society Award'
  },
  {
    year: '2004',
    title: 'Prof. M. Santappa Award in Polymer Science',
    organization: 'The Society for Polymer Science, India (SPSI)',
    description: 'Top national accolade in polymer science in India awarded for innovative synthesis and physical characterization.',
    category: 'Society Award'
  },
  {
    year: '2013 – Present',
    title: 'Editorial Advisory Board Member',
    organization: 'Journal of Materials Chemistry A (Royal Society of Chemistry, UK)',
    description: 'Advising on high-impact publications in materials for energy storage, catalysis, and sustainability.',
    category: 'Editorial & Service'
  },
  {
    year: '2014 – 2017',
    title: 'Editorial Advisory Board Member',
    organization: 'Chemical Sciences (Indian Academy of Sciences, Bangalore)',
    description: 'Overseeing peer review and editorial standards for leading scientific proceedings.',
    category: 'Editorial & Service'
  },
  {
    year: '2015 – Present',
    title: 'Editorial Advisory Board Member',
    organization: 'Defence Science Journal (DRDO, New Delhi)',
    description: 'Evaluating strategic applications of polymers, composites, and high-performance dielectric materials.',
    category: 'Editorial & Service'
  },
  {
    year: '2011 – 2015',
    title: 'Expert Project Advisory Member (CSIR & DST)',
    organization: 'Council of Scientific & Industrial Research / Department of Science and Technology',
    description: 'Member of Project Monitoring Committee for Organic, Medicinal & Chemical Technology (CSIR 2011-14) and DST Organic Chemistry (2012-15).',
    category: 'Editorial & Service'
  }
];

export const CONFERENCES_ORGANIZED = [
  {
    title: 'Polysolvat-11: 11th IUPAC International Conference on Polymer-Solvent Complexes & Intercalates',
    role: 'Chairman',
    year: 'January 2016',
    venue: 'IACS, Kolkata, India',
    scope: 'Brought together world-leading researchers across 20+ countries to discuss supramolecular gels, solvates, and polymer thermodynamics.'
  },
  {
    title: 'Macro-2015: International Conference on Polymer Science and Technology',
    role: 'Chairman',
    year: 'January 2015',
    venue: 'IACS, Kolkata, India',
    scope: 'Organized under the aegis of the Society for Polymer Science, India (SPSI), featuring 450+ delegates and international plenary speakers.'
  },
  {
    title: 'National Conference on Polymer Science (Polymer-2006)',
    role: 'Secretary & Convener',
    year: '2006',
    venue: 'IACS, Kolkata, India',
    scope: 'Coordinated national forum on conducting polymers, nanocomposites, and biomaterials.'
  },
  {
    title: 'Indo-French Symposium on Fibrillar Networks as Advanced Materials',
    role: 'Indian Convener (Jointly with Prof. J. M. Guenet)',
    year: '2005',
    venue: 'Institut Charles Sadron, Strasbourg, France',
    scope: 'High-level bilateral colloquium funded by Indo-French Centre for the Promotion of Advanced Research (IFCPAR).'
  }
];

export const BOOKS_AND_CHAPTERS: BookItem[] = [
  {
    id: 1,
    type: 'Textbook',
    title: 'Polymer Functionalized Graphene',
    authors: 'Prof. Arun Kumar Nandi',
    publisher: 'Royal Society of Chemistry (RSC), London, UK',
    year: 2021,
    details: 'Polymer Chemistry Series, Volume 35, 340 pages. Authoritative monograph covering covalent and non-covalent functionalization routes, self-assembly, electrical conductivity, and energy storage.',
    isbnOrDoi: 'ISBN: 978-1-78801-879-1 | DOI: 10.1039/9781788019675'
  },
  {
    id: 2,
    type: 'Book Chapter',
    title: 'Grafting of Electroactive Polymers',
    authors: 'A. K. Nandi, R. Ghosh, and D. P. Chatterjee',
    publisher: 'Springer Nature, USA',
    year: 2020,
    details: 'In "Reactive and Functional Polymers", edited by Dr. T. J. Gutiérrez, Volume 2, Chapter 10, pp. 283–324.',
    isbnOrDoi: 'DOI: 10.1007/978-3-030-45135-6_10'
  },
  {
    id: 3,
    type: 'Book Chapter',
    title: 'Energy: Polymer-Functionalized Graphene',
    authors: 'A. K. Nandi, P. Chal, and A. Shit',
    publisher: 'CRC Press, Taylor & Francis Group, New York, USA',
    year: 2019,
    details: 'In "Encyclopedia of Polymer Applications", edited by Dr. M. Mishra, Volume 2, pp. 1009–1034.',
    isbnOrDoi: 'Cat #K20509'
  },
  {
    id: 4,
    type: 'Book Chapter',
    title: 'A Concise Account on Poly(vinylidene fluoride) Nanocomposites',
    authors: 'A. K. Nandi and S. Manna',
    publisher: 'John Wiley & Sons, Hoboken, NJ, USA',
    year: 2018,
    details: 'In "Encyclopedia of Polymer Science and Technology", edited by Dr. C. Strickland.',
    isbnOrDoi: 'DOI: 10.1002/0471440264.pst392.pub2'
  },
  {
    id: 5,
    type: 'Book Chapter',
    title: 'Functionalization and Properties of Graphene',
    authors: 'A. K. Nandi, A. Kundu, and R. K. Layek',
    publisher: 'CRC Press, Taylor & Francis Group, Boca Raton, FL, USA',
    year: 2015,
    details: 'In "Handbook of Graphene Science", edited by Aliofkhazraei et al., Volume 5, Chapter 14, pp. 187–213.',
    isbnOrDoi: 'Cat #K20509'
  },
  {
    id: 6,
    type: 'Book Chapter',
    title: 'Polymer functionalized graphene via ATRP route for graphene based polymer nanocomposites',
    authors: 'A. K. Nandi, R. K. Layek, S. Samanta, and D. P. Chatterjee',
    publisher: 'CRC Press, Taylor & Francis Group, Boca Raton, FL, USA',
    year: 2013,
    details: 'In "Graphite, Graphene, and Their Polymer Nanocomposites", edited by P. Mukhopadhyay and R. K. Gupta, pp. 393–422.',
    isbnOrDoi: 'ISBN: 978-1-4398-2779-6'
  }
];

export const POPULAR_ARTICLES: PopularArticle[] = [
  {
    id: 1,
    title: 'Current Research Achievements in Polymer Science Unit, IACS',
    authors: 'A. K. Nandi',
    outlet: 'Chemical Weekly',
    year: 2016,
    pages: 'February 23, 2016, pp. 215–216'
  },
  {
    id: 2,
    title: 'Prof. S. R. Palit, A Pioneer in Polymer Research in India',
    authors: 'A. K. Nandi',
    outlet: 'Polymers Communique',
    year: 2015,
    pages: 'October–November 2015, pp. 60–63'
  },
  {
    id: 3,
    title: 'IACS DST Unit on Nano Science: Intensified Research in Many Fields',
    authors: 'A. K. Nandi, A. Ghosh, and D. Chakraborty',
    outlet: 'Nanodigest',
    year: 2015,
    pages: 'January 2015, pp. 22–25'
  },
  {
    id: 4,
    title: 'History of Polymer Science in India (Chemical Science)',
    authors: 'A. K. Nandi',
    outlet: 'History of Science in India, Vol. III (Jointly Published by NASI & RK Mission)',
    year: 2014,
    pages: 'pp. 136–140'
  },
  {
    id: 5,
    title: 'Fibrillar Networks as Advanced Materials',
    authors: 'A. K. Nandi and J. M. Guenet',
    outlet: 'Macromolecular Chemistry and Physics (Editorial Foreword)',
    year: 2006,
    pages: 'Vol. 207, p. 125'
  },
  {
    id: 6,
    title: 'Polymer Blends Provide Myriad of New Materials',
    authors: 'A. K. Nandi',
    outlet: 'Science Reporter (CSIR-NISCAIR)',
    year: 1988,
    pages: 'March 1988, pp. 143–145'
  }
];

export const CURRENT_GROUP: ResearchGroupMember[] = [
  {
    id: 1,
    name: 'Arnab Shit',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Sikkim University',
    researchFocus: 'Conducting Polymer Hybrids for Photovoltaic Applications & DSSC',
    email: 'psuas2@iacs.res.in'
  },
  {
    id: 2,
    name: 'Nirmal Maity',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Vidyasagar University',
    researchFocus: 'Graphene Polymer Nanocomposites & Dielectric Engineering',
    email: 'psunm@iacs.res.in'
  },
  {
    id: 3,
    name: 'Nabasmita Maity',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Vidyasagar University',
    researchFocus: 'Functionalization of Graphene with Specialty Polymers and Self-Assembly',
    email: 'psunm2@iacs.res.in'
  },
  {
    id: 4,
    name: 'Sanjoy Mondal',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Indian Institute of Technology (IIT) Guwahati',
    researchFocus: 'Synthesis and Optoelectronic Response of Supramolecular Gels & Organogels',
    email: 'psusm4@iacs.res.in'
  },
  {
    id: 5,
    name: 'Pousali Chal',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Indian Institute of Technology (IIT) Kanpur',
    researchFocus: 'Optoelectronic and Photovoltaic Properties of Organic Hybrid Systems',
    email: 'psupc2@iacs.res.in'
  },
  {
    id: 6,
    name: 'Radhakanta Ghosh',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'The University of Burdwan',
    researchFocus: 'Polythiophene-Based Graft Copolymers for Analytical & Biosensing Applications',
    email: 'psurg@iacs.res.in'
  },
  {
    id: 7,
    name: 'Sujoy Das',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Vidyasagar University',
    researchFocus: 'Graphene Oxide-Based Hybrid Supramolecular Gels for Flexible Supercapacitors',
    email: 'psusd2@iacs.res.in'
  },
  {
    id: 8,
    name: 'Debasish Mandal',
    role: 'Senior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Vidyasagar University',
    researchFocus: '2D Transition Metal Oxides & MoS2 Hybrids for High-Energy Supercapacitors',
    email: 'psudm2@iacs.res.in'
  },
  {
    id: 9,
    name: 'Aditi Panja',
    role: 'Junior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'Visva-Bharati University, Santiniketan',
    researchFocus: 'Optoelectronics and Photovoltaics of Metal-Organic Hydrogels & Assemblies',
    email: 'psuap@iacs.res.in'
  },
  {
    id: 10,
    name: 'Mahuya Pakhira',
    role: 'Junior Research Fellow',
    degree: 'M.Sc. in Chemistry',
    institution: 'IIEST, Shibpur',
    researchFocus: 'PVDF-Based Random Graft Copolymers for Antifouling & Lectin Sensing',
    email: 'psump@iacs.res.in'
  }
];

export const PHD_ALUMNI: Alumni[] = [
  {
    id: 1,
    name: 'Prof. Pralay Maiti',
    period: '1992 – 1996',
    degreeYear: 1995,
    university: 'Jadavpur University',
    thesisTitle: 'Influence of Chain Structure on the Compatibility of Poly(vinylidene fluoride) from Crystallization Behaviour of its Blends with Poly(methyl acrylate)',
    currentAddress: 'Professor, Dept. of Materials Science & Technology, Indian Institute of Technology (BHU), Varanasi, India',
    email: 'pralay_maiti@yahoo.com',
    category: 'Professor / Faculty'
  },
  {
    id: 2,
    name: 'Dr. (Mrs.) Jhunu Chatterjee',
    period: '1992 – 1996',
    degreeYear: 1996,
    university: 'Calcutta University',
    thesisTitle: 'Studies on Cocrystallization of Poly(vinylidene fluoride) and Vinylidene Fluoride – Tetrafluoroethylene Copolymers',
    currentAddress: 'Department of Chemical Engineering, Florida State University, Tallahassee, FL, USA',
    email: 'jhunu.chatterjee@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 3,
    name: 'Dr. Sukumar Mal',
    period: '1993 – 1998',
    degreeYear: 1997,
    university: 'Jadavpur University',
    thesisTitle: 'Thermoreversible Gelation of Poly(vinylidene fluoride)',
    currentAddress: 'Associate Professor, Department of Chemistry, Sripat Singh College, Jiaganj, Murshidabad, W.B.',
    email: '',
    category: 'Professor / Faculty'
  },
  {
    id: 4,
    name: 'Dr. Ashok K. Dikshit',
    period: '1993 – 1998',
    degreeYear: 1999,
    university: 'Jadavpur University',
    thesisTitle: 'Thermoreversible Gelation of Poly(vinylidene fluoride) and its Blends in Diesters',
    currentAddress: 'General Manager, National Council for Cement and Building Materials (NCCBM), Faridabad, India',
    email: 'adikshit01@gmail.com',
    category: 'Industry Leader'
  },
  {
    id: 5,
    name: 'Prof. Md. Habibur Rahman',
    period: '1998 – 2000',
    degreeYear: 2002,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on the Crystalline Polymer Blends',
    currentAddress: 'Professor, Department of Chemistry, University of Rajshahi, Rajshahi 6205, Bangladesh',
    email: 'psumhr@gmail.com',
    category: 'Professor / Faculty'
  },
  {
    id: 6,
    name: 'Prof. Tushar Jana',
    period: '1997 – 2000',
    degreeYear: 2000,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Thermoreversible Gelation of Conducting Polymers',
    currentAddress: 'Senior Professor, School of Chemistry, University of Hyderabad, Hyderabad 500046, India',
    email: 'tjsc@uohyd.ernet.in',
    category: 'Professor / Faculty'
  },
  {
    id: 7,
    name: 'Dr. Sudip Malik',
    period: '1998 – 2002',
    degreeYear: 2002,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on the Crystallization and Gelation Behaviour of Poly(3-alkyl thiophenes)',
    currentAddress: 'Senior Professor, School of Applied and Interdisciplinary Sciences, IACS Kolkata, India',
    email: 'psusm2@iacs.res.in',
    category: 'Professor / Faculty'
  },
  {
    id: 8,
    name: 'Dr. Susmita Pal',
    period: '1999 – 2003',
    degreeYear: 2004,
    university: 'Jadavpur University',
    thesisTitle: 'Crystallization and Conductance Studies of Poly(3-alkyl thiophene) Blends',
    currentAddress: 'Senior Research Scientist, Florida, USA',
    email: '',
    category: 'International Scientist'
  },
  {
    id: 9,
    name: 'Dr. Arnab Dawn',
    period: '2001 – 2006',
    degreeYear: 2005,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Biomolecular Hybrid of Poly(o-methoxyaniline)',
    currentAddress: 'Senior Research Scientist, James L. Winkle College of Pharmacy, University of Cincinnati, OH, USA',
    email: 'arnabdawn16@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 10,
    name: 'Dr. Biplab K. Kuila',
    period: '2002 – 2007',
    degreeYear: 2007,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Poly(3-alkyl thiophene) Nanocomposites',
    currentAddress: 'Associate Professor, Department of Chemistry, Banaras Hindu University (BHU), Varanasi, India',
    email: 'biplab.kuila@yahoo.com',
    category: 'Professor / Faculty'
  },
  {
    id: 11,
    name: 'Dr. Debarshi Dasgupta',
    period: '2002 – 2007',
    degreeYear: 2007,
    university: 'Jadavpur University',
    thesisTitle: 'Multiporous Polymeric Materials from Thermoreversible Poly(vinylidene fluoride) Gels and Intercalates',
    currentAddress: 'Lead Scientist, Momentive Performance Materials Inc., India Technology Centre, Electronic City, Bangalore',
    email: '',
    category: 'Industry Leader'
  },
  {
    id: 12,
    name: 'Dr. Swarup Manna',
    period: '2002 – 2007',
    degreeYear: 2007,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Nanocomposites of Poly(vinylidene fluoride)',
    currentAddress: 'Associate Professor, Department of Chemistry, BKC College, Kolkata, India',
    email: 'smanna2003@yahoo.co.in',
    category: 'Professor / Faculty'
  },
  {
    id: 13,
    name: 'Dr. Ashesh Garai',
    period: '2003 – 2008',
    degreeYear: 2008,
    university: 'Jadavpur University',
    thesisTitle: 'Polyaniline Gel Nanocomposites',
    currentAddress: 'Assistant Professor, Department of Chemistry, Rammohan College, Kolkata, India',
    email: 'asesh_123@yahoo.co.in',
    category: 'Professor / Faculty'
  },
  {
    id: 14,
    name: 'Dr. Abhijit Saha',
    period: '2004 – 2009',
    degreeYear: 2009,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Supramolecular Organization of Vitamin Riboflavin',
    currentAddress: 'Senior Research Scientist, Department of Chemistry, University of Washington, Seattle, WA, USA',
    email: 'asaha@uw.edu',
    category: 'International Scientist'
  },
  {
    id: 15,
    name: 'Dr. Pratap Mukherjee',
    period: '2006 – 2011',
    degreeYear: 2009,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Conducting Polymer Nano-Biocomposites',
    currentAddress: 'Associate Professor, Government Engineering College, Salt Lake, Kolkata, India',
    email: 'pratap_muk@yahoo.com',
    category: 'Professor / Faculty'
  },
  {
    id: 16,
    name: 'Dr. Sanjoy Samanta',
    period: '2007 – 2012',
    degreeYear: 2011,
    university: 'Jadavpur University',
    thesisTitle: 'Grafting on Poly(vinylidene fluoride) and its Applications',
    currentAddress: 'Senior Research Chemist, TPI Polene Public Company Limited, Bangkok, Thailand',
    email: 'sanjoy_sam11@yahoo.co.in',
    category: 'Industry Leader'
  },
  {
    id: 17,
    name: 'Dr. Parimal Routh',
    period: '2007 – 2012',
    degreeYear: 2010,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Conducting Polymer-RNA Hybrids',
    currentAddress: 'Assistant Professor, Department of Chemistry, Charuchandra College, Kolkata, India',
    email: 'parimal_chem@yahoo.co.in',
    category: 'Professor / Faculty'
  },
  {
    id: 18,
    name: 'Dr. Amit Mandal',
    period: '2008 – 2013',
    degreeYear: 2012,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Conducting Polymer Blends',
    currentAddress: 'Assistant Professor, Department of Chemistry, Behala College, Kolkata, India',
    email: 'amitmandal2005@yahoo.com',
    category: 'Professor / Faculty'
  },
  {
    id: 19,
    name: 'Dr. Rama Kanta Layek',
    period: '2008 – 2013',
    degreeYear: 2012,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Polymer Nanocomposite with Graphene',
    currentAddress: 'Assistant Professor & Senior Scientist, Lappeenranta University of Technology (LUT), Finland',
    email: 'rama.layek@lut.fi',
    category: 'International Scientist'
  },
  {
    id: 20,
    name: 'Dr. Shreyam Chatterjee',
    period: '2009 – 2014',
    degreeYear: 2012,
    university: 'Jadavpur University',
    thesisTitle: 'Nanostructured Conducting Polymers and Their Composites Towards Photovoltaic Applications',
    currentAddress: 'Assistant Professor, Department of Soft Nanomaterials, ISIR, Osaka University, Japan',
    email: 'shreyam00754@sanken.osaka-u.ac.jp',
    category: 'International Scientist'
  },
  {
    id: 21,
    name: 'Dr. Bappaditya Roy',
    period: '2009 – 2014',
    degreeYear: 2013,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Photoluminescence Active Supramolecular Gels',
    currentAddress: 'Senior Scientist, R&D Department, Axio Biosolutions, Ahmedabad, India',
    email: 'bappaditya75@gmail.com',
    category: 'Industry Leader'
  },
  {
    id: 22,
    name: 'Dr. Partha Bairi',
    period: '2009 – 2014',
    degreeYear: 2013,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Photoluminescence Active Supramolecular Gels and FRET Systems',
    currentAddress: 'Senior Researcher, International Center for Materials Nanoarchitectonics (WPI-MANA), NIMS, Tsukuba, Japan',
    email: 'par.chem08@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 23,
    name: 'Dr. Aniruddha Kundu',
    period: '2010 – 2015',
    degreeYear: 2015,
    university: 'Jadavpur University',
    thesisTitle: 'Functionalized Graphene-Polymer Systems: Properties and Application',
    currentAddress: 'Postdoctoral Fellow & Senior Researcher, Yonsei University, Seoul, South Korea',
    email: 'write2aknow@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 24,
    name: 'Dr. Sandip Das',
    period: '2011 – 2016',
    degreeYear: 2016,
    university: 'Jadavpur University',
    thesisTitle: 'Multifunctional Polymers by Polymer Modification Using ATRP Technique',
    currentAddress: 'Assistant Professor, WPI Nano Life Science Institute (Nano-LSI), Kanazawa University, Japan',
    email: 'sandichem@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 25,
    name: 'Dr. Priyadarshi Chakraborty',
    period: '2011 – 2016',
    degreeYear: 2016,
    university: 'Jadavpur University',
    thesisTitle: 'Hybrids of Supramolecular Gels and Covalent Polymers',
    currentAddress: 'Senior Research Associate, Dept. of Molecular Microbiology & Biotechnology, Tel Aviv University, Israel',
    email: 'priyadarshi.chakraborty@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 26,
    name: 'Dr. Sudipta Nandi',
    period: '2010 – 2016',
    degreeYear: 2016,
    university: 'Jadavpur University',
    thesisTitle: 'Studies on Graphene-Based DNA Sensing and DNA – Nanomaterial Hybrids',
    currentAddress: 'Research Scientist, PSU, IACS Kolkata, India',
    email: 'sudiptanandi20@gmail.com',
    category: 'Postdoctoral Fellow'
  },
  {
    id: 27,
    name: 'Dr. Atanu Kuila',
    period: '2011 – 2017',
    degreeYear: 2016,
    university: 'Jadavpur University',
    thesisTitle: 'Synthesis and Properties of Hydrophilic Polymer Grafted Poly(vinylidene fluoride)',
    currentAddress: 'Assistant Professor, Department of Chemical Engineering, Haldia Institute of Technology, W.B.',
    email: 'kuilaatanu7@gmail.com',
    category: 'Professor / Faculty'
  },
  {
    id: 28,
    name: 'Dr. Nirmal Maity',
    period: '2013 – 2018',
    degreeYear: 2018,
    university: 'University of Calcutta',
    thesisTitle: 'Graphene Polymer Hybrids with Improved Physical and Mechanical Properties',
    currentAddress: 'Postdoctoral Fellow & Senior Chemist, Kolkata, India',
    email: 'nmaity.nirmal@gmail.com',
    category: 'Postdoctoral Fellow'
  },
  {
    id: 29,
    name: 'Dr. Arnab Shit',
    period: '2013 – 2019',
    degreeYear: 2018,
    university: 'Jadavpur University',
    thesisTitle: 'Conducting Polymer Hybrids for Photovoltaic and Energy Storage Devices',
    currentAddress: 'Senior Postdoctoral Fellow, Seoul National University, South Korea',
    email: 'arnabshit@yahoo.in',
    category: 'International Scientist'
  },
  {
    id: 30,
    name: 'Dr. Nabasmita Maiti',
    period: '2013 – 2018',
    degreeYear: 2018,
    university: 'Jadavpur University',
    thesisTitle: 'Surface Modification of Graphene by Polymer Functionalization: Properties and Applications',
    currentAddress: 'Postdoctoral Researcher, The Hebrew University of Jerusalem, Israel',
    email: 'nabasmitamaity.89@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 31,
    name: 'Dr. Radhakanta Ghosh',
    period: '2014 – 2019',
    degreeYear: 2019,
    university: 'University of Calcutta',
    thesisTitle: 'Polythiophene-Graft-Copolymers for Different Optoelectronic Applications',
    currentAddress: 'Postdoctoral Fellow, The Hebrew University of Jerusalem, Israel',
    email: 'onlyradhakanta@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 32,
    name: 'Dr. Pousali Chal',
    period: '2014 – 2018',
    degreeYear: 2019,
    university: 'University of Calcutta',
    thesisTitle: 'Polymeric Hybrid Systems for Optoelectronic and Photovoltaic Applications',
    currentAddress: 'Research Scientist & Postdoctoral Fellow, Kolkata, India',
    email: 'pousali.chal@gmail.com',
    category: 'Postdoctoral Fellow'
  },
  {
    id: 33,
    name: 'Dr. Sanjoy Mondal',
    period: '2014 – 2019',
    degreeYear: 2019,
    university: 'University of Calcutta',
    thesisTitle: 'Studies on Optoelectronic Properties of Synthetic Supramolecular Gel',
    currentAddress: 'Postdoctoral Fellow, Department of Chemistry, University of Calcutta',
    email: 'sanjoy.mdl@gmail.com',
    category: 'Postdoctoral Fellow'
  },
  {
    id: 34,
    name: 'Dr. Sujoy Das',
    period: '2014 – 2019',
    degreeYear: 2019,
    university: 'University of Calcutta',
    thesisTitle: 'Conducting Polymer Hybrid Gels for Energy Storage Applications',
    currentAddress: 'Postdoctoral Researcher, Weizmann Institute of Science, Rehovot, Israel',
    email: 's.das648@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 35,
    name: 'Dr. Debasish Mandal',
    period: '2014 – 2020',
    degreeYear: 2019,
    university: 'Jadavpur University',
    thesisTitle: 'Synthesis of 2D Oxide Materials for Supercapacitor Application',
    currentAddress: 'Postdoctoral Research Associate, Yonsei University, Seoul, South Korea',
    email: 'chemdebasishmandal@gmail.com',
    category: 'International Scientist'
  },
  {
    id: 36,
    name: 'Dr. Ujjal Basak',
    period: '2018 – 2024',
    degreeYear: 2024,
    university: 'University of Calcutta',
    thesisTitle: 'Block Sequence Dependent Self-Assembly and Optoelectronic Behaviour of Polythiophene Copolymers and Hybrid Hydrogels',
    currentAddress: 'Postdoctoral Fellow, IACS Kolkata & Assistant Professor',
    email: '',
    category: 'Postdoctoral Fellow'
  },
  {
    id: 37,
    name: 'Dr. Souvik Hazra',
    period: '2018 – 2024',
    degreeYear: 2023,
    university: 'University of Calcutta',
    thesisTitle: 'Organic Mixed Ion-Electron Conductivity and Optoelectronic Properties in Polymer-Peptide Hybrid Systems',
    currentAddress: 'Senior Researcher, Organic Electronics Division',
    email: '',
    category: 'Postdoctoral Fellow'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 1,
    name: 'Differential Scanning Calorimeter',
    model: 'Perkin-Elmer Diamond DSC-7 with Pyris Software',
    category: 'Thermal & Mechanical',
    description: 'High-precision thermal analysis system for determining glass transition temperatures (Tg), melting enthalpies, crystallization kinetics, and polymer blend miscibility curves.',
    applications: ['Phase transitions', 'Crystallization kinetics', 'Blend miscibility', 'Heat capacity measurements']
  },
  {
    id: 2,
    name: 'Dynamic Mechanical Analyzer (DMA)',
    model: 'TA Instruments DMA Q800',
    category: 'Thermal & Mechanical',
    description: 'State-of-the-art instrument for measuring viscoelastic properties, storage modulus (E’), loss modulus (E’’), and tan δ across temperature ranges from -150°C to 600°C.',
    applications: ['Viscoelasticity of gels', 'Storage modulus of nanocomposites', 'Polymer relaxation transitions', 'Damping factor']
  },
  {
    id: 3,
    name: 'Impedance Gain-Phase Analyzer',
    model: 'Solartron SI 1260',
    category: 'Electrical & Electrochemical',
    description: 'Premier wide-frequency impedance analyzer (10 µHz to 32 MHz) for determining dielectric relaxation, AC/DC conductivity, and non-destructive nanojacketing verification.',
    applications: ['Dielectric permittivity', 'Ionic conductivity of gel electrolytes', 'DNA nanojacketing characterization', 'Cole-Cole plots']
  },
  {
    id: 4,
    name: 'Electrochemical Workstation / Potentiostat',
    model: 'CH Instruments CHI 600E',
    category: 'Electrical & Electrochemical',
    description: 'Comprehensive electrochemical analyzer supporting cyclic voltammetry (CV), chronopotentiometry, electrochemical impedance spectroscopy, and charge-discharge cycling.',
    applications: ['Supercapacitor capacitance evaluation', 'Electrocatalytic hydrogen evolution', 'Photo-current transient response', 'Redox behavior']
  },
  {
    id: 5,
    name: 'Precision SourceMeter Unit',
    model: 'Keithley 2401 SourceMeter',
    category: 'Electrical & Electrochemical',
    description: 'High-precision current-voltage (I-V) characterization instrument for organic semiconducting thin films, negative differential resistance (NDR), and photo-switching devices.',
    applications: ['I-V characterization', 'Photo-switching rectification', 'Threshold voltage determination', 'Organic electronic memory']
  },
  {
    id: 6,
    name: 'High Resistance Electrometer',
    model: 'Keithley 617 Programmable Electrometer',
    category: 'Electrical & Electrochemical',
    description: 'Ultra-sensitive femtoampere current and high resistivity measurement unit suited for insulating polymers, virgin PVDF matrices, and low-percolation nanocomposites.',
    applications: ['High-resistance measurements', 'Low leakage currents', 'Static charge analysis', 'Percolation threshold mapping']
  },
  {
    id: 7,
    name: 'Class-AAA Solar Simulator',
    model: 'Newport Oriel 67005 Xenon Arc System',
    category: 'Electrical & Electrochemical',
    description: 'AM 1.5G calibrated spectral solar simulator for photovoltaic efficiency testing in dye-sensitized solar cells (DSC) and perovskite solar cells.',
    applications: ['Photovoltaic efficiency (PCE)', 'J-V curves under illumination', 'Fill factor (FF) determination', 'Photo-current stability']
  },
  {
    id: 8,
    name: 'Gel Permeation Chromatography (GPC)',
    model: 'Waters 1515 Isocratic System with Styragel Columns',
    category: 'Processing & Synthesis',
    description: 'Advanced size-exclusion chromatography with RI detection for accurate determination of molecular weight distribution (Mn, Mw) and polydispersity indices (PDI).',
    applications: ['Molecular weight calibration', 'Polydispersity analysis', 'ATRP copolymer architecture validation', 'Degradation tracking']
  },
  {
    id: 9,
    name: 'UV–Vis Spectrophotometer',
    model: 'Shimadzu UV-2600 Double Beam',
    category: 'Spectroscopy & Optical',
    description: 'Broadband spectrophotometer for UV-Vis absorption, bandgap estimation, sol-to-gel optical density transitions, and metal nanoparticle surface plasmon resonance.',
    applications: ['Optical bandgap (Tauc plot)', 'SPR of Ag and Au nanoparticles', 'FRET donor-acceptor spectral overlap', 'Sol-gel thermo-reversibility']
  },
  {
    id: 10,
    name: 'Polarized Optical Microscope (POM)',
    model: 'Leitz Orthoplan Fitted with Leitz Biomed Digital Camera',
    category: 'Spectroscopy & Optical',
    description: 'High-resolution polarized microscopy equipped with hot-stage for real-time observation of spherulite growth, birefringence, and fibrillar supramolecular networks.',
    applications: ['Giant spherulite observation', 'Spherulite growth kinetics', 'Liquid crystal textures', 'Fibrillar network morphologies']
  },
  {
    id: 11,
    name: 'Thin Film Spin Coating Unit',
    model: 'Apex Instruments SCU-2008 Precision Coater',
    category: 'Processing & Synthesis',
    description: 'Microprocessor-controlled spin coater with programmable multi-step ramp rates for uniform organic semiconductor and nanocomposite thin film fabrication.',
    applications: ['Uniform thin films', 'Organic diode fabrication', 'Substrate surface coating', 'Nanoscale thickness control']
  },
  {
    id: 12,
    name: 'Rotary Evaporators & Ultrasound Bath',
    model: 'Buchi Rotavapor R-II & Elma Sonic Cleaners',
    category: 'Processing & Synthesis',
    description: 'Complete synthesis infrastructure for rapid solvent stripping, cavitation-driven exfoliation of graphene, and ultrasonic sonogel preparation.',
    applications: ['Sono-Fenton exfoliation', 'Controlled organogel preparation', 'High-vacuum synthesis', 'Nanoparticle dispersion']
  }
];

export const ALL_PUBLICATIONS: Publication[] = [
  // 2025
  {
    id: 260,
    number: 260,
    title: 'Polythiophene Derived Nickel Cobaltite Nanocomposite Showing Excellent Photo-switching and Photo-supercapacitor Properties',
    authors: 'U. Basak, P. Ghosh, D. P. Chatterjee, G. Mahapatra, A. Banerjee and A. K. Nandi',
    journal: 'J. Mater. Chem. A',
    year: 2025,
    volume: '13',
    pages: '7813 - 7833',
    publisher: 'RSC',
    category: 'Energy & Supercapacitors',
    highlight: 'Novel integrated photo-rechargeable supercapacitor showing multi-state photo-switching.'
  },

  // 2024
  {
    id: 259,
    number: 259,
    title: 'Development of Organic Mixed Ion−Electron Conductive and Photo responsive Property in a Peptide Linked Boronic Acid Conjugated Naphthalimide Derivative',
    authors: 'P. Ghosh, K. Gayen, N. Hazra, B. Hansda, G. Mahapatra, S. Das, S. Das, A. K. Nandi and A. Banerjee',
    journal: 'ACS Applied Electronic Materials',
    year: 2024,
    volume: '6',
    pages: '9154 - 9164',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 258,
    number: 258,
    title: 'Enhanced Optoelectronic Properties of Polythiophene–g–Poly(dimethyl amino ethyl methacrylate)–b–Poly(diethylene glycol methyl ether methacrylate) Copolymers using ‘Grafting onto’ Synthetic Strategy',
    authors: 'U. Basak, D. P. Chatterjee and A. K. Nandi',
    journal: 'ACS Appl. Mater. Interfaces',
    year: 2024,
    volume: '16',
    pages: '48854 - 48869',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 257,
    number: 257,
    title: 'Emulsion Polymerized Sulfonic Acid Doped Polyaniline-co-Polythiophene Showing Photo-Switching Property by in situ Growth of Silver Nanocluster',
    authors: 'S. Mondal, U. Basak and A. K. Nandi',
    journal: 'ACS Applied Polymer Materials',
    year: 2024,
    volume: '6',
    pages: '10121 - 10135',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 256,
    number: 256,
    title: 'A review on Self-Assembly Driven Optoelectronic Properties of Polythiophene-Peptide and Polythiophene-Polymer conjugates',
    authors: 'A. K. Nandi',
    journal: 'Langmuir',
    year: 2024,
    volume: '40',
    pages: '9385 - 9405',
    publisher: 'ACS',
    category: 'Supramolecular Gels',
    highlight: 'Comprehensive invited feature review on molecular self-assembly principles for bio-hybrid electronics.'
  },
  {
    id: 255,
    number: 255,
    title: 'Peptide Appended Perylene Bisimide Containing Silver Nanoparticle-Based Trihybrid System with GO: Improvement of Photocatalytic and Photo-Switching Behavior',
    authors: 'P. Ghosh, S. Hazra, K. Gayen, N. Hazra, A. K. Nandi and A. Banerjee',
    journal: 'New J. Chemistry',
    year: 2024,
    volume: '48',
    pages: '9805 - 9813',
    publisher: 'RSC',
    category: 'Graphene & 2D Materials'
  },
  {
    id: 254,
    number: 254,
    title: 'Block Sequence Dependent Self-assembly and Optoelectronic Behavior of Thermo- and pH-sensitive Polythiophene-graft-Poly(diethylene glycol methyl ether methacrylate) -block- Poly(dimethyl amino ethyl methacrylate) Copolymers',
    authors: 'U. Basak, D. P. Chatterjee and A. K. Nandi',
    journal: 'Eur. Polym. J.',
    year: 2024,
    volume: '208',
    pages: '112863',
    publisher: 'Elsevier',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 253,
    number: 253,
    title: 'Emulsion Polymerized Polyaniline-(dinonylnapthyl disulphonic acid) hydrogel showing Improved Supercapacitor and Photo-Current Performance by in situ Growth of AgNPs',
    authors: 'U. Basak, A. Das, S. Maity, D. P. Chatterjee and A. K. Nandi',
    journal: 'Colloids and Surfaces A: Physicochemical and Engineering Aspects',
    year: 2024,
    volume: '685',
    pages: '133193',
    publisher: 'Elsevier',
    category: 'Energy & Supercapacitors'
  },

  // 2023
  {
    id: 252,
    number: 252,
    title: 'Synthesis of carbohydrate based polythiophene graft poly(N,N-dimethyl aminoethyl methacrylate)-co-poly(GLU-HEM) copolymer for lectin sensing',
    authors: 'M. Pakhira, A. Karmakar, D. P. Chatterjee and A. K. Nandi',
    journal: 'J. Macromol. Sci., Part A: Pure and Applied Chemistry',
    year: 2023,
    volume: '60',
    pages: 'Doi: 10.1080/10601325.2023.2249032',
    publisher: 'Wiley',
    category: 'Biomolecular Hybrids'
  },
  {
    id: 251,
    number: 251,
    title: 'Peptide-tethered Perylenebisimide Aggregates with Copper Nanoclusters showing Thermoresponsive and Photoresponsive Properties',
    authors: 'S. Hazra, D. Bairagi, N. Hazra, A. K. Nandi and A. Banerjee',
    journal: 'ChemistrySelect',
    year: 2023,
    volume: '8',
    pages: 'e202301822',
    publisher: 'Wiley',
    category: 'Supramolecular Gels'
  },
  {
    id: 250,
    number: 250,
    title: 'Controlled Grafting of polythiophene and poly(vinylidene fluoride)',
    authors: 'A. K. Nandi, U. Basak and D. P. Chatterjee',
    journal: 'J. Macromol. Sci. Part A: Pure and Applied Chemistry',
    year: 2023,
    volume: '60',
    pages: '525 - 547',
    publisher: 'Wiley',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 249,
    number: 249,
    title: 'Light and Solvent Effect on Isomerization and Excimer Formation of Pyrene - Schiff Base Conjugate Sensing Aromatic Analytes',
    authors: 'S. Mondal, A. Panja and A. K. Nandi',
    journal: 'Macromol. Symp.',
    year: 2023,
    volume: '408',
    pages: '2100500',
    publisher: 'Wiley',
    category: 'Supramolecular Gels'
  },
  {
    id: 248,
    number: 248,
    title: 'Polythiophene-g-Poly(methacrylic acid) and Perylene Diimide Appended Peptide Conjugates with Tuneable Photoluminescence, OMEIC and Photo-switching Properties',
    authors: 'S. Hazra, R. Ghosh, A. Palui, A. Ghosh, A. Banerjee and A. K. Nandi',
    journal: 'J. Mater. Chem. C',
    year: 2023,
    volume: '11',
    pages: '4808 - 4819',
    publisher: 'RSC',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 247,
    number: 247,
    title: 'Hybrid Polymer Gels for Energy Applications',
    authors: 'A. K. Nandi and D. P. Chatterjee',
    journal: 'J. Mater. Chem. A (10th Anniversary Issue)',
    year: 2023,
    volume: '11',
    pages: '12593 - 12642',
    publisher: 'RSC',
    category: 'Energy & Supercapacitors',
    highlight: 'Invited 10th Anniversary Review celebrating leading advances in gel supercapacitors and batteries.'
  },

  // 2022
  {
    id: 246,
    number: 246,
    title: 'Organic Mixed Ion-Electron Conductivity in Polymer Hybrid Systems',
    authors: 'S. Hazra, A. Banerjee and A. K. Nandi',
    journal: 'ACS Omega',
    year: 2022,
    volume: '7',
    pages: '32849 - 32862',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 245,
    number: 245,
    title: 'Synthesis of PVDF Based Graft Copolymeric Antifouling Membranes Showing Affinity Driven Immobilization of Nucleobases',
    authors: 'U. Basak, M. Pakhira, S. Sahoo, S. Majumdar, R. Ghosh, J. Kundu, T. Ghosh, A. K. Nandi and D. P. Chatterjee',
    journal: 'ACS Appl. Polym. Mater.',
    year: 2022,
    volume: '4',
    pages: '5756 - 5771',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 244,
    number: 244,
    title: 'Development of poly(vinylidene fluoride) graft random copolymer membrane for antifouling and antimicrobial applications',
    authors: 'M. Pakhira, S. Ghosh, Surajit Ghosh, D. P. Chatterjee and A. K. Nandi',
    journal: 'J. Ind. Eng. Chem.',
    year: 2022,
    volume: '112',
    pages: '171 - 181',
    publisher: 'Elsevier',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 243,
    number: 243,
    title: 'Tuning of optoelectronic properties in Nano-hybrids of peptide appended perylenebisimides and carbon-nanodots',
    authors: 'S. Hazra, S. Paul, K. Basu, A. K. Nandi and A. Banerjee',
    journal: 'J. Phys. Chem. C',
    year: 2022,
    volume: '126',
    pages: '5906 - 5915',
    publisher: 'ACS',
    category: 'Graphene & 2D Materials'
  },
  {
    id: 242,
    number: 242,
    title: 'Tailor made synthesis of water-soluble polythiophene-graft-poly(caprolactone-block-dimethylaminoethyl methacrylate) copolymer and their pH tunable self-assembly and optoelectronic properties',
    authors: 'U. Haldar, S. Mondal, S. Hazra, S. Guin, L. Yeasmin, D. P. Chatterjee and A. K. Nandi',
    journal: 'Eur. Polym. J.',
    year: 2022,
    volume: '168',
    pages: '111124',
    publisher: 'Elsevier',
    category: 'Optoelectronics & Conducting Polymers'
  },

  // 2021
  {
    id: 241,
    number: 241,
    title: 'Isomerization-induced Excimer Formation of Pyrene based Acylhydrazone Controlled by Light and Solvent Sensing Aromatic Analytes',
    authors: 'S. Mondal, A. Panja, D. Halder, P. Bairi and A. K. Nandi',
    journal: 'J. Phys. Chem. B',
    year: 2021,
    volume: '125',
    pages: '13804 - 13816',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },
  {
    id: 240,
    number: 240,
    title: 'Development of Polythiophene-Tripeptide Covalent Conjugates Showing Excellent Structure Dependent Photophysical and Photocurrent Properties',
    authors: 'S. Mondal, S. Hazra, A. Shit, D. P. Chatterjee, A. Banerjee and A. K. Nandi',
    journal: 'J. Phys. Chem. C',
    year: 2021,
    volume: '125',
    pages: '17518 - 17529',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 239,
    number: 239,
    title: 'A Review on Recent Advances on Hybrid Supercapacitors',
    authors: 'D. P. Chatterjee and A. K. Nandi',
    journal: 'J. Mater. Chem. A',
    year: 2021,
    volume: '9',
    pages: '15880 - 15918',
    publisher: 'RSC',
    category: 'Energy & Supercapacitors',
    highlight: 'Comprehensive critical review with over 300 citations on pseudocapacitive hybrid architectures.'
  },
  {
    id: 238,
    number: 238,
    title: 'Reversible Stimuli-Dependent Aggregation-Induced Emission from a “Nonfluorescent” Amphiphilic PVDF Graft Copolymer',
    authors: 'M. Pakhira, D. P. Chatterjee, D. Mallick, R. Ghosh and A. K. Nandi',
    journal: 'Langmuir',
    year: 2021,
    volume: '37',
    pages: '4953 - 4963',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },

  // 2020
  {
    id: 237,
    number: 237,
    title: 'Fluorescence in “Nonfluorescent” Polymers',
    authors: 'D. P. Chatterjee, M. Pakhira and A. K. Nandi',
    journal: 'ACS Omega',
    year: 2020,
    volume: '5',
    pages: '30747 - 30766',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },
  {
    id: 236,
    number: 236,
    title: 'A Robust Stimuli Responsive Eu 3+ - Metalo Organic Hydrogel and Xerogel Emitting White Light',
    authors: 'A. Panja, P. Bairi, D. Halder, S. Das and A. K. Nandi',
    journal: 'J. Colloid and Interface Science',
    year: 2020,
    volume: '579',
    pages: '531 - 540',
    publisher: 'Elsevier',
    category: 'Supramolecular Gels'
  },
  {
    id: 235,
    number: 235,
    title: 'Modulation of optoelectronic properties in a donor -acceptor conjugate between a cationic polythiophene and a peptide appended perylenebisimide amphiphile',
    authors: 'S. Hazra, A. Shit, R. Ghosh, K. Basu, A. Banerjee and A. K. Nandi',
    journal: 'J. Mater. Chem. C',
    year: 2020,
    volume: '8',
    pages: '3748 - 3757',
    publisher: 'RSC',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 234,
    number: 234,
    title: 'A Review on Recent Advances in Polymer and Peptide Hydrogels',
    authors: 'S. Mondal, S. Das and A. K. Nandi',
    journal: 'Soft Matter',
    year: 2020,
    volume: '16',
    pages: '1404 - 1454',
    publisher: 'RSC',
    category: 'Supramolecular Gels'
  },

  // 2019
  {
    id: 233,
    number: 233,
    title: 'Influence of Poly(Vinylidene Fluoride) on Photovoltaic Performance of Interfacially Engineered Band Gap Modulated P3TAA-co-P3HT Perovskite Solar Cell at Ambient Condition',
    authors: 'A. Shit, P. Chal, S. Mandal and A. K. Nandi',
    journal: 'Polymer',
    year: 2019,
    volume: '185',
    pages: '121973',
    publisher: 'Elsevier',
    category: 'Energy & Supercapacitors'
  },
  {
    id: 232,
    number: 232,
    title: 'Flexible Solid State Symmetric Supercapacitor Using HxWO3@rGO Composite with High Volumetric Energy and Power Density',
    authors: 'D. Mandal, P. Routh, A. K. Mahato and A. K. Nandi',
    journal: 'ChemElectroChem',
    year: 2019,
    volume: '6',
    pages: '5136 - 5148',
    publisher: 'Wiley',
    category: 'Energy & Supercapacitors'
  },
  {
    id: 231,
    number: 231,
    title: 'Self-assembled Nanostructure MoS2 Quantum Dots Polyaniline Hybrid Gels for High Performance Solid State Flexible Supercapacitor',
    authors: 'S. Das, R. Ghosh, D. Mandal and A. K. Nandi',
    journal: 'ACS Appl. Energy Mater.',
    year: 2019,
    volume: '2',
    pages: '6642 - 6654',
    publisher: 'ACS',
    category: 'Energy & Supercapacitors'
  },
  {
    id: 230,
    number: 230,
    title: 'Electrochemically Modified Graphite Paper as an Advanced Electrode substrate for Supercapacitor Application',
    authors: 'D. Mandal, P. Routh, A. K. Mahato and A. K. Nandi',
    journal: 'J. Mater. Chem. A',
    year: 2019,
    volume: '7',
    pages: '17547 - 17560',
    publisher: 'RSC',
    category: 'Energy & Supercapacitors'
  },
  {
    id: 225,
    number: 225,
    title: 'Conducting Gels: A Chronicle of Technological Advances',
    authors: 'P. Chakraborty, S. Das and A. K. Nandi',
    journal: 'Progress in Polymer Science',
    year: 2019,
    volume: '88',
    pages: '189 - 219',
    publisher: 'Elsevier',
    category: 'Supramolecular Gels',
    highlight: 'Major flagship monograph review in Progress in Polymer Science (Impact Factor > 25).'
  },
  {
    id: 224,
    number: 224,
    title: 'Physical and Dielectric Properties of Poly(vinylidene fluoride) / Polybenzimidazole Functionalized Graphene Nanocomposites',
    authors: 'N. Maity, A. Mandal, K. Roy and A. K. Nandi',
    journal: 'J. Polym. Sci. Part B: Polym. Phys. Ed.',
    year: 2019,
    volume: '57',
    pages: '189 - 201',
    publisher: 'Wiley',
    category: 'Fluoropolymers & PVDF'
  },

  // 2018
  {
    id: 222,
    number: 222,
    title: 'Light Induced Conformational Change of Uracil Anchored Polythiophene Regulating Thermo Responsiveness',
    authors: 'R. Ghosh, S. Das, K. Bhattacharyya, D. P. Chatterjee, A. Biswas and A. K. Nandi',
    journal: 'Langmuir',
    year: 2018,
    volume: '34',
    pages: '12401 - 12411',
    publisher: 'ACS',
    category: 'Biomolecular Hybrids'
  },
  {
    id: 221,
    number: 221,
    title: 'Injectable Hydrogel of Vitamin B9 for Controlled Release of Both Hydrophilic and Hydrophobic Anticancer Drugs',
    authors: 'A. Panja, S. Das, A. Chakraborty, P. Chakraborty, S. Pal and A. K. Nandi',
    journal: 'ChemMedChem',
    year: 2018,
    volume: '13',
    pages: '2427 - 2436',
    publisher: 'Wiley',
    category: 'Biomolecular Hybrids'
  },
  {
    id: 218,
    number: 218,
    title: 'Supramolecular Grafting of Doped Polyaniline Leads to an Unprecedented Solubility Enhancement, Radical Cation Stabilization, and Morphology Transformation',
    authors: 'N. Maity, A. Dawn, A. Kuila and A. K. Nandi',
    journal: 'J. Mater. Chem. A',
    year: 2018,
    volume: '6',
    pages: '12654 - 12662',
    publisher: 'RSC',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 212,
    number: 212,
    title: 'Optoelectronic Properties of Self-assembled Nanostructures of Polymer Functionalized Polythiophene and Graphene',
    authors: 'N. Maity, R. Ghosh and A. K. Nandi',
    journal: 'Langmuir',
    year: 2018,
    volume: '34',
    pages: '7585 - 7597',
    publisher: 'ACS',
    category: 'Graphene & 2D Materials',
    highlight: 'Selected as Langmuir Editors’ Choice Article.'
  },
  {
    id: 211,
    number: 211,
    title: 'A New Facile Synthesis of Tungsten Oxide from Tungsten Disulfide: Structure Dependent Supercapacitor and Negative Differential Resistance Properties',
    authors: 'D. Mandal, P. Routh and A. K. Nandi',
    journal: 'Small',
    year: 2018,
    volume: '14',
    pages: '1702881',
    publisher: 'Wiley',
    category: 'Energy & Supercapacitors'
  },

  // 2017
  {
    id: 206,
    number: 206,
    title: 'Multi-functional Poly(vinylidene fluoride) graft Copolymers',
    authors: 'A. Kuila, D. P. Chatterjee, N. Maity and A. K. Nandi',
    journal: 'J. Polym. Sci. Part A: Polym. Chem. Ed.',
    year: 2017,
    volume: '55',
    pages: '2569 - 2584',
    publisher: 'Wiley',
    category: 'Fluoropolymers & PVDF',
    highlight: 'Featured as Highlight Article in Journal of Polymer Science.'
  },
  {
    id: 205,
    number: 205,
    title: 'Nucleic Acid Based Polymer and Nanoparticle Conjugates: Synthesis, Properties and Applications',
    authors: 'A. Kundu, S. Nandi and A. K. Nandi',
    journal: 'Progress in Materials Science',
    year: 2017,
    volume: '88',
    pages: '136 - 185',
    publisher: 'Elsevier',
    category: 'Biomolecular Hybrids',
    highlight: 'Comprehensive landmark treatise on nucleic acid biomaterial conjugates (Impact Factor ~35).'
  },
  {
    id: 200,
    number: 200,
    title: 'Water Soluble Ionic Polythiophenes for Biological and Analytical Applications',
    authors: 'S. Das, P. Routh, R. Ghosh, D. P. Chatterjee and A. K. Nandi',
    journal: 'Polymer International',
    year: 2017,
    volume: '66',
    pages: '623 - 639',
    publisher: 'Wiley',
    category: 'Biomolecular Hybrids'
  },

  // 2016
  {
    id: 198,
    number: 198,
    title: 'An Insight into the Hybrid Dye-Sensitized Solar Cell from Polyaniline-CdS Nanotubes through Impedance Spectroscopy',
    authors: 'A. Shit, P. Chal and A. K. Nandi',
    journal: 'Physical Chemistry Chemical Physics',
    year: 2016,
    volume: '18',
    pages: '31732 - 31743',
    publisher: 'RSC',
    category: 'Energy & Supercapacitors'
  },
  {
    id: 197,
    number: 197,
    title: 'Enhancement of Energy Storage and Photoresponse Properties of Folic acid / Polyaniline Hybrid Hydrogel by in-situ Growth of Ag-Nanoparticles',
    authors: 'S. Das, P. Chakraborty, S. Mondal, A. Shit and A. K. Nandi',
    journal: 'ACS Applied Materials and Interfaces',
    year: 2016,
    volume: '8',
    pages: '28055 - 28067',
    publisher: 'ACS',
    category: 'Energy & Supercapacitors'
  },
  {
    id: 196,
    number: 196,
    title: 'Hierarchical nanostructured polyaniline functionalized graphene / poly(vinylidene fluoride) composites for improved dielectric performances',
    authors: 'N. Maity, A. Mandal and A. K. Nandi',
    journal: 'Polymer',
    year: 2016,
    volume: '103',
    pages: '83 - 97',
    publisher: 'Elsevier',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 185,
    number: 185,
    title: 'Nanoengineering of a Supramolecular Gel by Co-polymer Incorporation: Enhancement of Gelation Rate, Mechanical Property, Fluorescence and Conductivity',
    authors: 'P. Chakraborty, S. Das, S. Mondal, P. Bairi and A. K. Nandi',
    journal: 'Langmuir',
    year: 2016,
    volume: '32',
    pages: '1871 - 1880',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },

  // 2015
  {
    id: 176,
    number: 176,
    title: 'Light Induced E-Z Isomerization in a Multi-responsive Organogel : Elucidation from 1H NMR Spectroscopy',
    authors: 'S. Mondal, P. Chakraborty, P. Bairi, D. P. Chatterjee and A. K. Nandi',
    journal: 'Chem. Commun.',
    year: 2015,
    volume: '51',
    pages: '10680 - 10683',
    publisher: 'RSC',
    category: 'Supramolecular Gels'
  },
  {
    id: 175,
    number: 175,
    title: 'Thermosensitive Antifouling Property of a Water-Soluble Poly(vinylidene fluoride) Graft Copolymer',
    authors: 'A. Kuila, N. Maity, D. P. Chatterjee and A. K. Nandi',
    journal: 'J. Mater. Chem. A',
    year: 2015,
    volume: '3',
    pages: '13546 - 13555',
    publisher: 'RSC',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 171,
    number: 171,
    title: 'Fluorescent Graphene Oxide via Polymer Grafting: An Efficient Nanocarrier for Both Hydrophilic and Hydrophobic Drug',
    authors: 'A. Kundu, S. Nandi, P. Das and A. K. Nandi',
    journal: 'ACS Appl. Mater. & Interfaces',
    year: 2015,
    volume: '7',
    pages: '3512 - 3523',
    publisher: 'ACS',
    category: 'Graphene & 2D Materials'
  },

  // 2014
  {
    id: 165,
    number: 165,
    title: 'Co-assembly of a Small Molecular Gelator of Pyromellitic Dianhydride Derivative with Polyaniline: A New Generation Gel with Exciting Optoelectronic and Photovoltaic Properties',
    authors: 'P. Bairi, P. Chakraborty, A. Shit, S. Mondal, B. Roy and A. K. Nandi',
    journal: 'Langmuir',
    year: 2014,
    volume: '30',
    pages: '7547 - 7555',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 162,
    number: 162,
    title: 'Nanojacketing and Dejacketing of ds-DNA: A Non-destructive Characterization of Nanojacketed Sample by Impedance Spectroscopy',
    authors: 'S. Nandi, P. Mukherjee, A. Kundu and A. K. Nandi',
    journal: 'J. Phys. Chem. B',
    year: 2014,
    volume: '118',
    pages: '2649 - 2661',
    publisher: 'ACS',
    category: 'Biomolecular Hybrids',
    highlight: 'Pioneered non-destructive impedance technique to verify DNA intactness during polymer sheath removal.'
  },
  {
    id: 161,
    number: 161,
    title: 'Controlled Grafting of Poly(vinylidene fluoride) by Coupled Atom Transfer Radical Addition and Atom Transfer Radical Polymerization',
    authors: 'A. Kuila, D. P. Chatterjee, R. K. Layek and A. K. Nandi',
    journal: 'J. Polym. Sci. Part A: Polym. Chem. Ed.',
    year: 2014,
    volume: '52',
    pages: '995 - 1008',
    publisher: 'Wiley',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 160,
    number: 160,
    title: 'Improved Mechanical and Electronic Properties of Co-assembled Folic Acid Gel with Aniline and Polyaniline',
    authors: 'P. Chakraborty, P. Bairi, B. Roy and A. K. Nandi',
    journal: 'ACS Appl. Mater. & Interfaces',
    year: 2014,
    volume: '6',
    pages: '3615 - 3622',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },

  // 2013
  {
    id: 156,
    number: 156,
    title: 'Graphene Quantum Dots from Sono-Fenton Reaction and its Hybrid with a Polythiophene graft Copolymer towards Photovoltaic Application',
    authors: 'P. Routh, S. Das, A. Shit, P. Bairi, P. Das and A. K. Nandi',
    journal: 'ACS Appl. Mater. & Interfaces',
    year: 2013,
    volume: '5',
    pages: '12672 - 12680',
    publisher: 'ACS',
    category: 'Graphene & 2D Materials'
  },
  {
    id: 154,
    number: 154,
    title: 'Ionic Liquid Integrated Multiwalled Carbon Nanotube in Poly(vinylidene fluoride) Matrix: Formation of Piezoelectric β-Polymorph with Significant Reinforcement and Conductivity Improvement',
    authors: 'A. Mandal and A. K. Nandi',
    journal: 'ACS Appl. Mater. & Interfaces',
    year: 2013,
    volume: '5',
    pages: '747 - 760',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 150,
    number: 150,
    title: 'A Review on Synthesis and Properties of Polymer Functionalized Graphene',
    authors: 'R. K. Layek and A. K. Nandi',
    journal: 'Polymer (Feature Article)',
    year: 2013,
    volume: '54',
    pages: '5083 - 5103',
    publisher: 'Elsevier',
    category: 'Graphene & 2D Materials',
    highlight: 'Invited Polymer Feature Article with over 800 citations worldwide.'
  },
  {
    id: 148,
    number: 148,
    title: 'Co-assembled White Light Emitting Hydrogel of Melamine',
    authors: 'P. Bairi, B. Roy, P. Chakraborty and A. K. Nandi',
    journal: 'ACS Appl. Mater. and Interfaces',
    year: 2013,
    volume: '5',
    pages: '5478 - 5485',
    publisher: 'ACS',
    category: 'Supramolecular Gels',
    highlight: 'Landmark fabrication of single-phase pure white light emission through multi-fluorophore FRET cascades.'
  },

  // 2012
  {
    id: 141,
    number: 141,
    title: 'Light Harvesting Bi-component Hydrogel with Tunable FRET Emission',
    authors: 'P. Bairi, B. Roy and A. K. Nandi',
    journal: 'Chem. Commun.',
    year: 2012,
    volume: '48',
    pages: '10850 - 10852',
    publisher: 'RSC',
    category: 'Supramolecular Gels'
  },
  {
    id: 140,
    number: 140,
    title: 'A Comparison of Ethidium Bromide Adsorbed Graphene Templates as a Platform for Preferential Sensing of DNA',
    authors: 'S. Nandi, P. Routh, R. K. Layek and A. K. Nandi',
    journal: 'Biomacromolecules',
    year: 2012,
    volume: '10',
    pages: '3181 - 3188',
    publisher: 'ACS',
    category: 'Biomolecular Hybrids'
  },
  {
    id: 139,
    number: 139,
    title: 'Highly Fluorescent Graphene Oxide-Poly(vinyl alcohol) Hybrid: An Effective Material For Specific Au3+ Ion Sensor',
    authors: 'A. Kundu, R. K. Layek, A. Kuila and A. K. Nandi',
    journal: 'ACS Appl. Mater. Interfaces',
    year: 2012,
    volume: '4',
    pages: '5576 - 5582',
    publisher: 'ACS',
    category: 'Graphene & 2D Materials'
  },
  {
    id: 138,
    number: 138,
    title: 'Improved Mechanical and Photophysical Properties of Chitosan Incorporated Folic Acid gel Possessing the Characteristics of Dye and Metal Ion Absorption',
    authors: 'P. Chakraborty, B. Roy, P. Bairi and A. K. Nandi',
    journal: 'J. Mater. Chem.',
    year: 2012,
    volume: '22',
    pages: '20291 - 20298',
    publisher: 'RSC',
    category: 'Supramolecular Gels'
  },
  {
    id: 134,
    number: 134,
    title: 'Polythiophene-g-Poly(dimethylaminoethyl methacrylate) Doped Methyl Cellulose Hydrogel Behaving like a Polymeric AND Logic Gate',
    authors: 'S. Samanta, S. Das, R. K. Layek, D. P. Chatterjee and A. K. Nandi',
    journal: 'Soft Matter',
    year: 2012,
    volume: '8',
    pages: '6066 - 6072',
    publisher: 'RSC',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 131,
    number: 131,
    title: 'Dendritic morphology in graphene sulphonic acid / poly(vinyl alcohol) composite',
    authors: 'R. K. Layek, S. Samanta and A. K. Nandi',
    journal: 'Carbon',
    year: 2012,
    volume: '50',
    pages: '815 - 827',
    publisher: 'Elsevier',
    category: 'Graphene & 2D Materials'
  },

  // 2011
  {
    id: 120,
    number: 120,
    title: 'Enhanced Photoluminescence and Negative Differential Resistance of Polyaniline Sulfonic Acid - RNA - Au Nanobiocomposites',
    authors: 'P. Routh, A. Garai and A. K. Nandi',
    journal: 'Physical Chemistry Chemical Physics',
    year: 2011,
    volume: '13',
    pages: '13670',
    publisher: 'RSC',
    category: 'Biomolecular Hybrids',
    highlight: 'Highlighted in Nature India (doi:10.1038/nindia.2011.124).'
  },
  {
    id: 118,
    number: 118,
    title: 'Selective colorimetric sensing of mercury (II) using turn off - turn on mechanism from riboflavin stabilized silver nanoparticles in aqueous medium',
    authors: 'B. Roy, P. Bairi and A. K. Nandi',
    journal: 'Analyst',
    year: 2011,
    volume: '136',
    pages: '3605 - 3607',
    publisher: 'RSC',
    category: 'Biomolecular Hybrids'
  },
  {
    id: 112,
    number: 112,
    title: 'Melamine recognition through riboflavin (vitamin B2) stabilized gold nanoparticles',
    authors: 'B. Roy, A. Saha and A. K. Nandi',
    journal: 'Analyst',
    year: 2011,
    volume: '136',
    pages: '67 - 70',
    publisher: 'RSC',
    category: 'Biomolecular Hybrids'
  },

  // 2010
  {
    id: 109,
    number: 109,
    title: 'Physical and Mechanical Properties of Poly(methyl methacrylate) -functionalized Graphene / Poly(vinylidine fluoride) Nanocomposites : Piezoelectric β Polymorph Formation',
    authors: 'R. K. Layek, S. Samanta, D. P. Chatterjee and A. K. Nandi',
    journal: 'Polymer',
    year: 2010,
    volume: '51',
    pages: '5846 - 5856',
    publisher: 'Elsevier',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 101,
    number: 101,
    title: 'RNA - poly(o-methoxy aniline) hybrid templated growth of Ag-nanoparticles and nanojacketting : Physical and electronic properties',
    authors: 'P. Routh, P. Mukherjee and A. K. Nandi',
    journal: 'Langmuir',
    year: 2010,
    volume: '26',
    pages: '5093 - 5010',
    publisher: 'ACS',
    category: 'Biomolecular Hybrids',
    highlight: 'Coined the scientific term "nanojacketting"; highlighted in Nature India (doi:10.1038/nindia.2010.53).'
  },
  {
    id: 100,
    number: 100,
    title: 'Aucore-Agshell Bimetallic Nanoparticles from a Simple Interfacial Redox Process Using a Conducting Polymer',
    authors: 'Pratap Mukherjee and Arun K. Nandi',
    journal: 'J. Colloid & Interface Science',
    year: 2010,
    volume: '344',
    pages: '30 - 36',
    publisher: 'Elsevier',
    category: 'Optoelectronics & Conducting Polymers'
  },

  // 2009
  {
    id: 89,
    number: 89,
    title: 'Multifunctional Hydrophilic Poly(vinylidene fluoride) Graft Copolymer with Super-toughness and Super-gluing Properties',
    authors: 'S. Samanta, D. P. Chatterjee, S. Manna, A. Mandal, A. Garai and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2009,
    volume: '42',
    pages: '3112 - 3120',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF',
    highlight: 'Groundbreaking ATRP grafting of DMAEMA from >CF2 groups yielding 1970% toughness increase.'
  },
  {
    id: 88,
    number: 88,
    title: 'Two-Component Thermoreversible Hydrogels of Melamine and Gallic Acid',
    authors: 'A. Saha, B. Roy, A. Garai and A. K. Nandi',
    journal: 'Langmuir',
    year: 2009,
    volume: '25',
    pages: '8457 - 8461',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },

  // 2008
  {
    id: 87,
    number: 87,
    title: 'Morphology, Structure, Rheology and Thermodynamics of Piezoelectric Poly(vinylidene fluoride)/ Ethylene Carbonate Thermoreversible Gel',
    authors: 'D. Dasgupta, S. Manna, A. Garai, A. Dawn, C. Rochas, J. M. Guenet and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2008,
    volume: '41',
    pages: '779 - 787',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },

  // 2007
  {
    id: 82,
    number: 82,
    title: 'A Mechanistic Approach on Self-organization of the Two-Component Thermoreversible Hydrogel of Riboflavin and Melamine',
    authors: 'A. Saha, S. Manna and A. K. Nandi',
    journal: 'Langmuir',
    year: 2007,
    volume: '23',
    pages: '13126 - 13135',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },
  {
    id: 80,
    number: 80,
    title: 'Piezoelectric β-Polymorph in Poly(vinylidene fluoride)-Functionalized Multiwalled Carbon Nanotube Nanocomposite',
    authors: 'S. Manna and A. K. Nandi',
    journal: 'J. Phys. Chem. C',
    year: 2007,
    volume: '111',
    pages: '14670 - 14680',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 76,
    number: 76,
    title: 'In-Situ Synthesis of Soluble Poly(3-Hexyl Thiophene) / Multi-walled Carbon Nanotube Composite : Physical, Mechanical and Conductivity properties',
    authors: 'B. K. Kuila, S. Malik, S. K. Batabyal and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2007,
    volume: '40',
    pages: '278 - 287',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },

  // 2006
  {
    id: 70,
    number: 70,
    title: 'A two Component Thermoreversible Hydrogel of Riboflavin and Melamine: Enhancement of Photoluminescence in the Gel form',
    authors: 'S. Manna, A. Saha and A. K. Nandi',
    journal: 'Chem. Commun.',
    year: 2006,
    volume: '41',
    pages: '4285 - 4287',
    publisher: 'RSC',
    category: 'Supramolecular Gels'
  },
  {
    id: 64,
    number: 64,
    title: 'DNA - Poly(o-methoxyaniline) Hybrid: Structure, Morphology and Uncoiling of Poly(o-methoxyaniline) on DNA surface',
    authors: 'A. Dawn and A. K. Nandi',
    journal: 'Langmuir',
    year: 2006,
    volume: '22',
    pages: '3273 - 3279',
    publisher: 'ACS',
    category: 'Biomolecular Hybrids'
  },

  // 2005
  {
    id: 62,
    number: 62,
    title: 'Slow Doping Rate in DNA - Poly(o-methoxyaniline) Hybrid: Uncoiling of Poly(o-methoxyaniline) Chain on DNA Template',
    authors: 'A. Dawn and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2005,
    volume: '38',
    pages: '10067 - 10073',
    publisher: 'ACS',
    category: 'Biomolecular Hybrids'
  },
  {
    id: 59,
    number: 59,
    title: 'Multiporous Polymeric Materials from Thermoreversible Poly(vinylidene fluoride) Gels',
    authors: 'D. Dasgupta and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2005,
    volume: '38',
    pages: '6504 - 6512',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },

  // 2004
  {
    id: 53,
    number: 53,
    title: 'Physical, Mechanical, and Conductivity Properties of Poly(3-hexylthiophene)-Montmorillonite Clay Nanocomposites Produced by the Solvent Casting Method',
    authors: 'B. Kuila and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2004,
    volume: '37',
    pages: '8577 - 8584',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },
  {
    id: 52,
    number: 52,
    title: 'Supramolecular Organization of ± Camphor-10-sulfonic acid and N,N Dimethyl Formamide into Giant Spherulites',
    authors: 'S. Manna and A. K. Nandi',
    journal: 'J. Phys. Chem. B (Letters)',
    year: 2004,
    volume: '108',
    pages: '6932 - 6934',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },

  // 2003
  {
    id: 48,
    number: 48,
    title: 'Cocrystallization behaviour of poly(3-alkyl thiophenes): Influence of alkyl chain length and head to tail regioregularity',
    authors: 'S. Pal and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2003,
    volume: '36',
    pages: '8426 - 8432',
    publisher: 'ACS',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 44,
    number: 44,
    title: 'Supramolecular Organization of Poly(vinylidene fluoride)–Camphor sulfonic acid Blends: Giant Spherulites',
    authors: 'M. H. Rahman and A. K. Nandi',
    journal: 'Langmuir',
    year: 2003,
    volume: '19',
    pages: '7056 - 7060',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },

  // 2002
  {
    id: 37,
    number: 37,
    title: 'On the crystallization mechanism of poly(ethylene terepthalate) in its blends with poly(vinylidene fluoride)',
    authors: 'M. H. Rahaman and A. K. Nandi',
    journal: 'Polymer',
    year: 2002,
    volume: '43',
    pages: '6863 - 6870',
    publisher: 'Elsevier',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 36,
    number: 36,
    title: 'Crystallization mechanism of regioregular poly(3-alkyl thiophene)s',
    authors: 'S. Malik and A. K. Nandi',
    journal: 'J. Polym. Sci., Polym. Phys. Ed.',
    year: 2002,
    volume: '40',
    pages: '2073 - 2085',
    publisher: 'Wiley',
    category: 'Polymer Blends & Thermodynamics'
  },

  // 2001
  {
    id: 32,
    number: 32,
    title: 'Sulphonic acid doped thermoreversible polyaniline gels: 2. Influence of sulfonic acid content on the morphological, thermodynamical and conductivity properties',
    authors: 'T. Jana and A. K. Nandi',
    journal: 'Langmuir',
    year: 2001,
    volume: '17',
    pages: '5768 - 5774',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },
  {
    id: 29,
    number: 29,
    title: 'Thermoreversible gelation of Regioregular Poly(3-hexylthiophene) in Xylene',
    authors: 'S. Malik, T. Jana and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2001,
    volume: '34',
    pages: '275 - 282',
    publisher: 'ACS',
    category: 'Optoelectronics & Conducting Polymers'
  },

  // 2000
  {
    id: 27,
    number: 27,
    title: 'Thermoreversible gelation of poly(vinylidene fluoride) in diesters: Influence of intermittent length on morphology and thermodynamics of gelation',
    authors: 'A. K. Dikshit and A. K. Nandi',
    journal: 'Macromolecules',
    year: 2000,
    volume: '33',
    pages: '2616 - 2625',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 26,
    number: 26,
    title: 'Sulphonic acid doped thermoreversible polyaniline gels: Morphological, Structural and thermodynamical investigations',
    authors: 'T. Jana and A. K. Nandi',
    journal: 'Langmuir',
    year: 2000,
    volume: '16',
    pages: '3141 - 3147',
    publisher: 'ACS',
    category: 'Supramolecular Gels'
  },

  // 1990s
  {
    id: 23,
    number: 23,
    title: 'Thermoreversible gelation of poly(vinylidine fluoride) in diethyl adipate: A concerted mechanism',
    authors: 'A. K. Dikshit and A. K. Nandi',
    journal: 'Macromolecules',
    year: 1998,
    volume: '31',
    pages: '8886 - 8892',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 17,
    number: 17,
    title: 'Influence of chain structure on the crystallization mechanism of poly(vinylidene fluoride)/poly(methyl acrylate) blends; Evidence of chain extension due to blending',
    authors: 'Pralay Maiti and Arun K. Nandi',
    journal: 'Polymer',
    year: 1998,
    volume: '39',
    pages: '413 - 421',
    publisher: 'Elsevier',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 15,
    number: 15,
    title: 'Kinetic immiscibility in crystalline polymer and amorphous polymer blends',
    authors: 'A. K. Nandi and Pralay Maiti',
    journal: 'Polymer',
    year: 1997,
    volume: '38',
    pages: '2171 - 2174',
    publisher: 'Elsevier',
    category: 'Polymer Blends & Thermodynamics',
    highlight: 'Introduced the foundational concept of kinetic immiscibility in aged polymer blends.'
  },
  {
    id: 12,
    number: 12,
    title: 'Influence of chain structure on the miscibility of poly(vinylidene fluoride) with poly(methyl acrylate)',
    authors: 'P. Maiti and A. K. Nandi',
    journal: 'Macromolecules',
    year: 1995,
    volume: '28',
    pages: '8511 - 8516',
    publisher: 'ACS',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 11,
    number: 11,
    title: 'On the gelation rates of thermoreversible poly(vinylidene fluoride) gels',
    authors: 'S. Mal, P. Maiti and A. K. Nandi',
    journal: 'Macromolecules',
    year: 1995,
    volume: '28',
    pages: '2371 - 2376',
    publisher: 'ACS',
    category: 'Fluoropolymers & PVDF'
  },
  {
    id: 10,
    number: 10,
    title: 'Co-crystallization of poly(vinylidene fluoride) and vinylidene fluoride – tetrafluoroethylene copolymers',
    authors: 'J. Datta and A. K. Nandi',
    journal: 'Polymer',
    year: 1994,
    volume: '35',
    pages: '4804 - 4812',
    publisher: 'Elsevier',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 5,
    number: 5,
    title: 'The influence of chain structure on the equilibrium melting temperature of poly(vinylidene fluoride)',
    authors: 'A. K. Nandi and L. Mandelkern',
    journal: 'J. Polym. Sci. (Polymer Physics Ed.)',
    year: 1991,
    volume: '29',
    pages: '1287 - 1297',
    publisher: 'Wiley',
    category: 'Polymer Blends & Thermodynamics',
    highlight: 'Groundbreaking collaboration with Prof. Leo Mandelkern at Florida State University.'
  },

  // 1980s
  {
    id: 4,
    number: 4,
    title: 'On the occurrence of cusps in the Tg – composition diagrams of compatible polymer pairs',
    authors: 'A. K. Nandi, B. M. Mandal, S. N. Bhattacharyya and S. K. Roy',
    journal: 'Polymer Communications',
    year: 1986,
    volume: '27',
    pages: '151 - 153',
    publisher: 'Elsevier',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 3,
    number: 3,
    title: 'Cloud point diagrams of semicrystalline polymer-diluent system: Poly (ε - caprolactone) + some binary cononsolvents',
    authors: 'A. K. Nandi',
    journal: 'J. Polym. Materials',
    year: 1985,
    volume: '2',
    pages: '216 - 222',
    publisher: 'Other',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 2,
    number: 2,
    title: 'Miscibility of poly(methyl acrylate) and poly(vinyl acetate): Incompatibility in solution and thermodynamic characterization by inverse gas chromatography',
    authors: 'A. K. Nandi, B. M. Mandal and S. N. Bhattacharyya',
    journal: 'Macromolecules',
    year: 1985,
    volume: '18',
    pages: '1454 - 1460',
    publisher: 'ACS',
    category: 'Polymer Blends & Thermodynamics'
  },
  {
    id: 1,
    number: 1,
    title: 'Co-nonsolvent systems for poly(ε-caprolactone) and poly(methyl methacrylate)',
    authors: 'A. K. Nandi, U. K. Sen, S. N. Bhattacharyya and B. M. Mandal',
    journal: 'Eur. Polym. J.',
    year: 1983,
    volume: '19',
    pages: '283 - 286',
    publisher: 'Elsevier',
    category: 'Polymer Blends & Thermodynamics',
    highlight: 'First seminal journal paper by Prof. Nandi on co-nonsolvent phenomena.'
  }
];
