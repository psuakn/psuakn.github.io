import React, { useState } from 'react';
import { Microscope, ArrowUpRight, Zap, Layers, Sparkles, Check, ChevronDown } from 'lucide-react';
import { RESEARCH_THRUSTS } from '../data/professorData';

export const ResearchThrusts: React.FC = () => {
  const [selectedThrustId, setSelectedThrustId] = useState<string | null>(null);

  return (
    <section id="research" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Scientific Frontiers & Breakthroughs
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Core Research Thrusts
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Prof. Arun Kumar Nandi's laboratory investigates the intersection of polymer physics, macromolecular synthesis, and nanomaterials chemistry. Explore the six foundational pillars of the research group below.
          </p>
        </div>

        {/* Grid of 6 Research Thrusts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_THRUSTS.map((thrust) => {
            const isExpanded = selectedThrustId === thrust.id;
            return (
              <div
                key={thrust.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200"
              >
                <div>
                  {/* Card Visual Image with overlay */}
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={thrust.image}
                      alt={thrust.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                      <div>
                        <span className="text-[11px] font-semibold text-indigo-300 uppercase tracking-wider">
                          {thrust.subtitle}
                        </span>
                        <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
                          {thrust.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {thrust.description}
                    </p>

                    {/* Scientific tags without pills (clean text with subtle borders) */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {thrust.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Impact detail */}
                    <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                      <strong className="text-slate-700 dark:text-slate-300">Significance: </strong>
                      {thrust.impact}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Landmark Citation */}
                <div className="p-4 bg-slate-50/80 dark:bg-slate-850/60 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-indigo-700 dark:text-indigo-400 truncate max-w-[200px] sm:max-w-[240px]">
                    {thrust.keyPaper}
                  </span>
                  <a
                    href="#publications"
                    className="inline-flex items-center gap-0.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
                  >
                    <span>Papers</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Innovations Highlight Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interdisciplinary Synergy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                From Fundamental Polymer Thermodynamics to Scalable Green Energy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By bridging classical Flory-Huggins thermodynamics with state-of-the-art living radical polymerizations (ATRP, RAFT) and 2D nanomaterials (graphene, MoS2, transition metal oxides), the Nandi laboratory delivers functional materials with tailored optoelectronic, dielectric, and energy-storage characteristics.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="#facilities"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Microscope className="w-4 h-4 text-indigo-600" />
                <span>View Characterization Facilities</span>
              </a>
              <a
                href="#publications"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-800/80 hover:bg-indigo-700/80 text-white border border-indigo-600/50 font-semibold text-xs sm:text-sm transition-colors"
              >
                <span>Filter 260 Refereed Papers</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
