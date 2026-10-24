import React, { useState } from 'react';
import { Award, BookOpen, Users, Calendar, ShieldCheck, CheckCircle2, Star, Sparkles, Building } from 'lucide-react';
import { AWARDS_AND_HONORS, CONFERENCES_ORGANIZED, PROFESSOR_INFO } from '../data/professorData';

export const HonorsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fellowship' | 'award' | 'editorial'>('all');

  const filteredAwards = AWARDS_AND_HONORS.filter((item) => {
    if (activeFilter === 'fellowship') return item.category === 'Fellowship';
    if (activeFilter === 'award') return item.category === 'Society Award' || item.category === 'National Recognition';
    if (activeFilter === 'editorial') return item.category === 'Editorial & Service';
    return true;
  });

  return (
    <section id="honors" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Professional Distinctions & Leadership
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Honors, Awards & Editorial Service
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Recognizing lifetime leadership in polymer chemistry, elected fellowships in premier national and international academies, and service to major scientific bodies.
          </p>
        </div>

        {/* Major Academy Fellowships Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROFESSOR_INFO.fellowships.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/50 dark:from-slate-850 dark:to-slate-900 border border-indigo-100 dark:border-slate-800 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                  Elected {f.year}
                </span>
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                {f.title}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                {f.name}
              </p>
              <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Elected Academy Fellow
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Accolades ({AWARDS_AND_HONORS.length})
          </button>
          <button
            onClick={() => setActiveFilter('award')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeFilter === 'award'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Medals & National Awards
          </button>
          <button
            onClick={() => setActiveFilter('fellowship')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeFilter === 'fellowship'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Academy Fellowships
          </button>
          <button
            onClick={() => setActiveFilter('editorial')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeFilter === 'editorial'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Editorial Boards & Advisory
          </button>
        </div>

        {/* Awards & Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredAwards.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-850/50 border border-slate-200/90 dark:border-slate-800 flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0 font-mono font-bold text-xs mt-0.5">
                {item.year.includes('–') ? item.year.split(' ')[0] : item.year}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-indigo-700 dark:text-indigo-400">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* International & National Conferences Organized */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white">
              Major Conferences & Symposia Chaired
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Leadership roles in convening international IUPAC congresses and bilateral Indo-French symposia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONFERENCES_ORGANIZED.map((conf, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                    {conf.year}
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] uppercase">
                    {conf.role}
                  </span>
                </div>
                <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white leading-snug">
                  {conf.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Venue: {conf.venue}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                  {conf.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
