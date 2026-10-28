import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  ExternalLink, 
  Quote, 
  Sparkles, 
  RotateCcw, 
  ArrowUp, 
  Bookmark, 
  Layers, 
  Check, 
  FileText 
} from 'lucide-react';
import { 
  ALL_PUBLICATIONS, 
  BOOKS_AND_CHAPTERS, 
  POPULAR_ARTICLES, 
  PROFESSOR_INFO 
} from '../data/professorData';
import { 
  filterPublications, 
  getPublicationStats, 
  Publication 
} from '../utils/academicData';
import { CitationModal } from './CitationModal';

export const PublicationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'journals' | 'books' | 'popular'>('journals');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [publisherFilter, setPublisherFilter] = useState('all');
  const [decadeFilter, setDecadeFilter] = useState('all');

  const [selectedForCitation, setSelectedForCitation] = useState<Publication | null>(null);

  // Categories list
  const categories = [
    'all',
    'Supramolecular Gels',
    'Fluoropolymers & PVDF',
    'Optoelectronics & Conducting Polymers',
    'Graphene & 2D Materials',
    'Biomolecular Hybrids',
    'Energy & Supercapacitors',
    'Polymer Blends & Thermodynamics'
  ];

  // Publishers list
  const publishers = ['all', 'ACS', 'RSC', 'Elsevier', 'Wiley'];

  // Decades
  const decades = [
    { label: 'All Decades', value: 'all' },
    { label: '2020s', value: '2020s' },
    { label: '2010s', value: '2010s' },
    { label: '2000s', value: '2000s' },
    { label: '1990s', value: '1990s' },
    { label: '1980s', value: '1980s' },
  ];

  // Filtered publications
  const filteredPublications = useMemo(() => {
    return filterPublications(
      ALL_PUBLICATIONS,
      searchQuery,
      decadeFilter,
      publisherFilter,
      categoryFilter
    );
  }, [searchQuery, decadeFilter, publisherFilter, categoryFilter]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setPublisherFilter('all');
    setDecadeFilter('all');
  };

  const scrollToPublicationsTop = () => {
    const el = document.getElementById('publications-list');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="publications" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Scholarly Output & Peer-Reviewed Archive
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
              Publications & Monographs ({PROFESSOR_INFO.totalPublications})
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              Spanning four decades of macromolecular chemistry, supramolecular gel physics, and advanced nanomaterials.
            </p>
          </div>

          {/* Google Scholar Quick Card */}
          <a
            href={PROFESSOR_INFO.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm">
              h-{PROFESSOR_INFO.hIndex}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                ~7,000+ citations · 16.7 avg/paper
              </div>
            </div>
          </a>
        </div>

        {/* Publisher Statistics Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">ACS Journals</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">91 Articles</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
              Langmuir (27) · Macromolecules (17) · JPC-B (17) · ACS AMI (10) · JPC-C (7)
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">RSC Journals</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">59 Articles</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
              JMCA (15) · Soft Matter (8) · JMC (8) · RSC Adv (8) · Chem Comm (7) · PCCP (4)
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Elsevier Journals</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">41 Articles</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
              Polymer (20) · Synth. Metals (8) · Carbon (3) · Eur. Polym. J. (3) · JICS (3)
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Wiley Journals</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">40 Articles</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
              Macromol. Chem. Phys. (13) · J. Polym. Sci. (13) · ChemSelect (3) · Small (1)
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 col-span-2 sm:col-span-1">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Other Journals</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">35 Articles</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
              J. Macromol. Sci. (2) · J. Chem. Phys. (1) · Peer-Reviewed Journals (32)
            </div>
          </div>
        </div>

        {/* View Switcher: Journal Articles / Books & Chapters / Popular Science */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 space-x-2 sm:space-x-4">
          <button
            onClick={() => setActiveTab('journals')}
            className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'journals'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Refereed Articles ({ALL_PUBLICATIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('books')}
            className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'books'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Books & Chapters ({BOOKS_AND_CHAPTERS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('popular')}
            className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'popular'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Popular Articles & Reports ({POPULAR_ARTICLES.length})</span>
          </button>
        </div>

        {/* Tab 1: Journal Articles with Live Filter & Search */}
        {activeTab === 'journals' && (
          <div className="space-y-6">
            {/* Search Bar & Primary Filters */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                {/* Search Input */}
                <div className="md:col-span-6 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, co-author (e.g. Basak, Chatterjee, Mandelkern), journal, or keyword..."
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Publisher Select */}
                <div className="md:col-span-3">
                  <label htmlFor="pub-select" className="sr-only">Publisher Filter</label>
                  <select
                    id="pub-select"
                    value={publisherFilter}
                    onChange={(e) => setPublisherFilter(e.target.value)}
                    className="w-full py-2 px-3 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Publishers (ACS, RSC, Elsevier...)</option>
                    <option value="ACS">ACS (American Chemical Society)</option>
                    <option value="RSC">RSC (Royal Society of Chemistry)</option>
                    <option value="Wiley">Wiley-VCH</option>
                    <option value="Elsevier">Elsevier</option>
                  </select>
                </div>

                {/* Decade Select */}
                <div className="md:col-span-3">
                  <label htmlFor="decade-select" className="sr-only">Decade Filter</label>
                  <select
                    id="decade-select"
                    value={decadeFilter}
                    onChange={(e) => setDecadeFilter(e.target.value)}
                    className="w-full py-2 px-3 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  >
                    {decades.map((d) => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Research Category Filter Pills */}
              <div className="pt-2 border-t border-slate-200/80 dark:border-slate-700/60 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Category:</span>
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                      categoryFilter === cat
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cat === 'all' ? 'All Research Areas' : cat}
                  </button>
                ))}
              </div>

              {/* Status and Reset Bar */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span>
                  Showing all <strong>{filteredPublications.length}</strong> of {ALL_PUBLICATIONS.length} publications (numbered #1, #2, #3... newest to earliest)
                  {(searchQuery || categoryFilter !== 'all' || publisherFilter !== 'all' || decadeFilter !== 'all') && (
                    <span className="ml-1 text-indigo-600 dark:text-indigo-400 font-semibold">(Filtered)</span>
                  )}
                </span>
                {(searchQuery || categoryFilter !== 'all' || publisherFilter !== 'all' || decadeFilter !== 'all') && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>
            </div>

            {/* Publication List */}
            {filteredPublications.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  No publications matched your search criteria.
                </p>
                <p className="text-xs text-slate-500">
                  Try adjusting your query, publisher filter, or category.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div id="publications-list" className="space-y-4">
                {filteredPublications.map((pub) => (
                  <article
                    key={pub.id}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      {/* Meta header: Number, Year, Publisher, Category */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          #{pub.number || pub.id}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono font-semibold text-indigo-700 dark:text-indigo-400">
                          {pub.year}
                        </span>
                        {pub.publisher && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {pub.publisher}
                            </span>
                          </>
                        )}
                        {pub.category && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-600 dark:text-slate-400 font-medium">
                              {pub.category}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white leading-snug">
                        {pub.title}
                      </h3>

                      {/* Authors */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {pub.authors}
                      </p>

                      {/* Journal and details */}
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 italic">
                        {pub.journal}
                        {pub.volume && `, Vol. ${pub.volume}`}
                        {pub.pages && `, pp. ${pub.pages}`}
                      </p>

                      {/* Highlight if available (e.g. Nature India) */}
                      {pub.highlight && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 text-xs font-medium border border-amber-200/80 dark:border-amber-800/80">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>{pub.highlight}</span>
                        </div>
                      )}
                    </div>

                    {/* Actions: Cite / Scholar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setSelectedForCitation(pub)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-colors"
                      >
                        <Quote className="w-3.5 h-3.5 text-slate-500" />
                        <span>Cite (BibTeX / ACS)</span>
                      </button>

                      <a
                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                      >
                        <span>Search Scholar</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* End of Continuous Stream Banner & Back to Top */}
            {filteredPublications.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 mt-8 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    Displaying all <strong>{filteredPublications.length}</strong> peer-reviewed publications (numbered #1 to #{filteredPublications.length}, newest first).
                  </span>
                </div>
                <button
                  onClick={scrollToPublicationsTop}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 font-medium transition-colors shadow-2xs"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top of Publications</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Books & Book Chapters */}
        {activeTab === 'books' && (
          <div className="space-y-6">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Authored reference textbooks published by the Royal Society of Chemistry (RSC) and peer-reviewed chapters in international encyclopedias:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BOOKS_AND_CHAPTERS.map((book) => (
                <div
                  key={book.id}
                  className="p-6 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                        book.type === 'Textbook' 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {book.type}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                        {book.year}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white leading-snug">
                      {book.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {book.authors}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {book.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {book.publisher}
                    </span>
                    {book.isbnOrDoi && (
                      <span className="font-mono text-[10px] text-indigo-700 dark:text-indigo-400 break-all">
                        {book.isbnOrDoi}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Popular Scientific Articles & Reports */}
        {activeTab === 'popular' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Popular scientific outreach, historical treatises on polymer science in India, and national reports:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {POPULAR_ARTICLES.map((art) => (
                <div
                  key={art.id}
                  className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                      {art.year}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {art.outlet}
                    </span>
                  </div>
                  <h3 className="text-sm font-serif font-bold text-slate-900 dark:text-white">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {art.authors} · {art.pages}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Citation Modal */}
      {selectedForCitation && (
        <CitationModal
          publication={selectedForCitation}
          onClose={() => setSelectedForCitation(null)}
        />
      )}
    </section>
  );
};
