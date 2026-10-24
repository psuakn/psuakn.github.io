import React from 'react';
import { Users, Mail, GraduationCap, Sparkles, UserCheck } from 'lucide-react';
import { CURRENT_GROUP } from '../data/professorData';

export const ResearchGroupSection: React.FC = () => {
  return (
    <section id="group" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Research Team & Scholars
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Current Research Group
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            The Polymer Science Unit lab at IACS brings together dedicated doctoral researchers and fellows developing advanced supramolecular gels, 2D nanocomposites, and organic energy devices.
          </p>
        </div>

        {/* Group Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENT_GROUP.map((member) => (
            <div
              key={member.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm shrink-0 border border-indigo-200 dark:border-indigo-800">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {member.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                    <span>{member.degree} · {member.institution}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Investigation: </span>
                  {member.researchFocus}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>{member.email}</span>
                </a>
                <span className="text-[11px] text-slate-400">IACS Fellow</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prospective Student Notice */}
        <div className="mt-12 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white">
              Interested in Doctoral or Postdoctoral Research?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Prospective CSIR/UGC-JRF, INSPIRE, or National Postdoctoral Fellows with an interest in polymer synthesis and functional gels are welcome to inquire.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shrink-0"
          >
            Inquire about Positions
          </a>
        </div>
      </div>
    </section>
  );
};
