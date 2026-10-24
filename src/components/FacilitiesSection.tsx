import React, { useState } from 'react';
import { Microscope, Zap, Thermometer, Layers, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { FACILITIES } from '../data/professorData';

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { label: 'All Instruments (12)', value: 'all' },
    { label: 'Thermal & Mechanical', value: 'Thermal & Mechanical' },
    { label: 'Electrical & Electrochemical', value: 'Electrical & Electrochemical' },
    { label: 'Spectroscopy & Optical', value: 'Spectroscopy & Optical' },
    { label: 'Processing & Synthesis', value: 'Processing & Synthesis' },
  ];

  const filteredFacilities = selectedCategory === 'all'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === selectedCategory);

  return (
    <section id="facilities" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Experimental Infrastructure
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Instrumental Facilities & Characterization Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            The Polymer Science Unit houses advanced instrumentation for thermal analysis, dynamic rheology, high-frequency impedance spectroscopy, and photovoltaic device fabrication.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setSelectedCategory(c.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === c.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80">
                    {fac.category}
                  </span>
                  <Activity className="w-4 h-4 text-slate-400" />
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white leading-snug">
                    {fac.name}
                  </h3>
                  <p className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                    {fac.model}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {fac.description}
                </p>

                {/* Applications list */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Key Research Applications:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {fac.applications.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Polymer Science Unit</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Operational</span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Instrumental Facility Note */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white">
              DST Unit on Nano Science & Central Research Facilities at IACS
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl">
              Prof. Nandi served as Joint Coordinator of the multi-faculty "Unit of Nanoscience Project" funded by the Department of Science and Technology (DST), providing access to state-of-the-art FE-SEM, HR-TEM, XRD, AFM, and NMR spectrometers across IACS.
            </p>
          </div>
          <a
            href="http://iacs.res.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shrink-0"
          >
            <span>IACS Instrumental Centre</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
