import React, { useState, useMemo } from 'react';
import { GraduationCap, Search, Globe, Building2, MapPin, ExternalLink, Mail, Award, BookOpen } from 'lucide-react';
import { PHD_ALUMNI } from '../data/professorData';
import { filterAlumni, Alumni } from '../utils/academicData';

export const AlumniSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredAlumni = useMemo(() => {
    return filterAlumni(PHD_ALUMNI, searchQuery, categoryFilter);
  }, [searchQuery, categoryFilter]);

  const categoryCounts = useMemo(() => {
    return {
      all: PHD_ALUMNI.length,
      faculty: PHD_ALUMNI.filter(a => a.category === 'Professor / Faculty').length,
      international: PHD_ALUMNI.filter(a => a.category === 'International Scientist').length,
      industry: PHD_ALUMNI.filter(a => a.category === 'Industry Leader').length,
      postdoc: PHD_ALUMNI.filter(a => a.category === 'Postdoctoral Fellow').length,
    };
  }, []);

  return (
    <section id="alumni" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Academic Legacy & Mentorship
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
              Doctoral Alumni Directory ({PHD_ALUMNI.length} Ph.D. Scholars)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Prof. Arun Kumar Nandi has supervised 37 doctoral graduates (plus 1 collaborative) who now lead academic departments, research labs, and industrial technology divisions across the USA, Japan, Europe, Israel, and India.
            </p>
          </div>

          {/* Quick Mentorship Stat Badge */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
            <div className="text-xs text-slate-500 dark:text-slate-400">Doctoral Output</div>
            <div className="text-2xl font-serif font-bold text-indigo-600 dark:text-indigo-400">
              37 Ph.D. Degrees
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Jadavpur University & Calcutta University
            </div>
          </div>
        </div>

        {/* Global Placement Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Professors & Faculty</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">
              {categoryCounts.faculty} Scholars
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              IIT-BHU · Univ of Hyderabad · IACS · Rajshahi
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">International Scientists</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">
              {categoryCounts.international} Scholars
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Osaka Univ · Tel Aviv · NIMS · LUT Finland
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Industry Leaders</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">
              {categoryCounts.industry} Leaders
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Momentive · Axio Biosolutions · TPI Polene
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Postdoctoral Fellows</div>
            <div className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-0.5">
              {categoryCounts.postdoc} Researchers
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Weizmann Institute · Hebrew Univ · Yonsei
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search alumni by name, thesis topic, current institution (e.g. Osaka, BHU, Hyderabad, Tel Aviv)..."
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

            {/* Category Filter Buttons */}
            <div className="md:col-span-5 flex flex-wrap gap-1.5 justify-start md:justify-end">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  categoryFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                All ({PHD_ALUMNI.length})
              </button>
              <button
                onClick={() => setCategoryFilter('Professor / Faculty')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  categoryFilter === 'Professor / Faculty'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Faculty ({categoryCounts.faculty})
              </button>
              <button
                onClick={() => setCategoryFilter('International Scientist')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  categoryFilter === 'International Scientist'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Global Labs ({categoryCounts.international})
              </button>
              <button
                onClick={() => setCategoryFilter('Industry Leader')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  categoryFilter === 'Industry Leader'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Industry ({categoryCounts.industry})
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400">
            Showing <strong>{filteredAlumni.length}</strong> of {PHD_ALUMNI.length} doctoral alumni
          </div>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumnus) => (
            <div
              key={alumnus.id}
              className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-850/60 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-2.5">
                {/* Header: Index number & Degree Year */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-slate-400">
                    #{String(alumnus.id).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/80 dark:border-indigo-800/80">
                    Ph.D. {alumnus.degreeYear}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                  {alumnus.name}
                </h3>

                {/* Stay Period & University */}
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span>Stay: {alumnus.period}</span> · <span>{alumnus.university}</span>
                </div>

                {/* Current Post & Location */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Current Affiliation:</span>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {alumnus.currentAddress}
                  </p>
                </div>

                {/* Thesis Title */}
                <div className="pt-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Thesis:</span> “{alumnus.thesisTitle}”
                </div>
              </div>

              {/* Email / Category footer */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {alumnus.category}
                </span>

                {alumnus.email ? (
                  <a
                    href={`mailto:${alumnus.email}`}
                    className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-slate-400" />
                    <span>Contact</span>
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 italic">IACS Alumni</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
