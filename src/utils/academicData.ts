/**
 * Pure helper logic for academic portfolio: publications searching, filtering,
 * citation formatting, and alumni queries.
 */

export interface Publication {
  id: number;
  number?: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  publisher?: 'ACS' | 'RSC' | 'Elsevier' | 'Wiley' | 'Springer' | 'Other';
  category?: 'Supramolecular Gels' | 'Fluoropolymers & PVDF' | 'Optoelectronics & Conducting Polymers' | 'Graphene & 2D Materials' | 'Biomolecular Hybrids' | 'Energy & Supercapacitors' | 'Polymer Blends & Thermodynamics';
  highlight?: string;
}

export interface Alumni {
  id: number;
  name: string;
  period: string;
  degreeYear: number;
  university: string;
  thesisTitle: string;
  currentAddress: string;
  email?: string;
  category: 'Professor / Faculty' | 'International Scientist' | 'Industry Leader' | 'Postdoctoral Fellow';
}

export function filterPublications(
  publications: Publication[],
  query: string,
  yearFilter: string,
  publisherFilter: string,
  categoryFilter: string
): Publication[] {
  const cleanQuery = query.trim().toLowerCase();

  return publications.filter((pub) => {
    // Text search
    if (cleanQuery) {
      const matchTitle = pub.title.toLowerCase().includes(cleanQuery);
      const matchAuthors = pub.authors.toLowerCase().includes(cleanQuery);
      const matchJournal = pub.journal.toLowerCase().includes(cleanQuery);
      const matchYear = pub.year.toString().includes(cleanQuery);
      const matchHighlight = pub.highlight ? pub.highlight.toLowerCase().includes(cleanQuery) : false;
      if (!matchTitle && !matchAuthors && !matchJournal && !matchYear && !matchHighlight) {
        return false;
      }
    }

    // Year Filter
    if (yearFilter && yearFilter !== 'all') {
      if (yearFilter === '2020s' && pub.year < 2020) return false;
      if (yearFilter === '2010s' && (pub.year < 2010 || pub.year > 2019)) return false;
      if (yearFilter === '2000s' && (pub.year < 2000 || pub.year > 2009)) return false;
      if (yearFilter === '1990s' && (pub.year < 1990 || pub.year > 1999)) return false;
      if (yearFilter === '1980s' && pub.year > 1989) return false;
    }

    // Publisher Filter
    if (publisherFilter && publisherFilter !== 'all') {
      if (pub.publisher !== publisherFilter) return false;
    }

    // Category Filter
    if (categoryFilter && categoryFilter !== 'all') {
      if (pub.category !== categoryFilter) return false;
    }

    return true;
  });
}

export function getPublicationStats(publications: Publication[]) {
  const byPublisher: Record<string, number> = {
    ACS: 0,
    RSC: 0,
    Elsevier: 0,
    Wiley: 0,
    Other: 0,
  };

  const byYear: Record<number, number> = {};

  publications.forEach((pub) => {
    const pubKey = pub.publisher && byPublisher[pub.publisher] !== undefined ? pub.publisher : 'Other';
    byPublisher[pubKey] = (byPublisher[pubKey] || 0) + 1;
    byYear[pub.year] = (byYear[pub.year] || 0) + 1;
  });

  return {
    total: publications.length,
    byPublisher,
    byYear,
    latestYear: publications.length > 0 ? Math.max(...publications.map((p) => p.year)) : 2025,
    earliestYear: publications.length > 0 ? Math.min(...publications.map((p) => p.year)) : 1983,
  };
}

export function filterAlumni(
  alumniList: Alumni[],
  query: string,
  categoryFilter: string
): Alumni[] {
  const cleanQuery = query.trim().toLowerCase();

  return alumniList.filter((item) => {
    if (cleanQuery) {
      const matchName = item.name.toLowerCase().includes(cleanQuery);
      const matchTitle = item.thesisTitle.toLowerCase().includes(cleanQuery);
      const matchAddr = item.currentAddress.toLowerCase().includes(cleanQuery);
      const matchUni = item.university.toLowerCase().includes(cleanQuery);
      if (!matchName && !matchTitle && !matchAddr && !matchUni) {
        return false;
      }
    }

    if (categoryFilter && categoryFilter !== 'all') {
      if (item.category !== categoryFilter) return false;
    }

    return true;
  });
}

export function formatAcsCitation(pub: Publication): string {
  const vol = pub.volume ? ` ${pub.volume}` : '';
  const pp = pub.pages ? `, ${pub.pages}` : '';
  return `${pub.authors}. ${pub.title}. ${pub.journal}, ${pub.year}${vol}${pp}.`;
}

export function formatBibtexCitation(pub: Publication): string {
  const cleanKey = `Nandi${pub.year}_${pub.id}`;
  return `@article{${cleanKey},
  title = {${pub.title}},
  author = {${pub.authors}},
  journal = {${pub.journal}},
  year = {${pub.year}},
  volume = {${pub.volume || ''}},
  pages = {${pub.pages || ''}}
}`;
}
