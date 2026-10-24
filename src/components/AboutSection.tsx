import React, { useState } from 'react';
import { GraduationCap, Briefcase, Globe, Award, Calendar, MapPin, Building, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PROFESSOR_INFO, EDUCATION_LIST, CAREER_TIMELINE, VISITING_AND_KEYNOTES } from '../data/professorData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'career' | 'international'>('education');

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Academic Background & Pedigree
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">
            Professional Profile & Scientific Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {PROFESSOR_INFO.bioDetail}
          </p>
        </div>

        {/* Quick Biographical Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Personal Biodata
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Born: {PROFESSOR_INFO.dob}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{PROFESSOR_INFO.birthplace}</span>
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Current Affiliation
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {PROFESSOR_INFO.designation}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Polymer Science Unit, School of Materials Science, IACS Kolkata
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Doctoral Lineage
            </span>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Ph.D. Jadavpur University (1986)
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Under Prof. S. N. Bhattacharyya & Prof. B. M. Mandal (IACS Kolkata)
            </p>
          </div>
        </div>

        {/* Tab Switcher for Section */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-8 space-x-2 sm:space-x-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('education')}
            className={`pb-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'education'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education & Postdoc</span>
          </button>

          <button
            onClick={() => setActiveTab('career')}
            className={`pb-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'career'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Career Appointments & Faculty Timeline</span>
          </button>

          <button
            onClick={() => setActiveTab('international')}
            className={`pb-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'international'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>International Visits & Visiting Professorships ({VISITING_AND_KEYNOTES.length})</span>
          </button>
        </div>

        {/* Tab 1: Education & Postdoctoral Mentorship */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-100/70 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 text-xs font-semibold font-mono mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.year}</span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {edu.institution}
                    </p>
                    {edu.thesis && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                        <span className="font-semibold text-slate-800 dark:text-slate-300">Thesis:</span> “{edu.thesis}”
                      </p>
                    )}
                    {edu.supervisors && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <span className="font-medium">Supervisors:</span> {edu.supervisors}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 text-xs font-medium text-indigo-700 dark:text-indigo-400">
                    {edu.distinction}
                  </div>
                </div>
              ))}
            </div>

            {/* Postdoctoral Spotlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 max-w-4xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-400/30">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Postdoctoral Training in the United States (1988 – 1989)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Collaborative Research with Prof. Leo Mandelkern
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  During 1988–1989, Prof. Nandi worked at the Institute of Molecular Biophysics at Florida State University (FSU), Tallahassee, USA, alongside the globally renowned polymer physicist <strong>Prof. Leo Mandelkern</strong>. Their seminal investigations deciphered the effect of structural chain defects on the equilibrium melting temperature and lamellar morphology of fluoropolymers, yielding widely cited publications in the <em>Journal of Polymer Science: Polymer Physics Edition</em> (1991).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Career Appointments & Faculty Timeline */}
        {activeTab === 'career' && (
          <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-4 md:ml-8 pl-6 md:pl-8 space-y-8">
            {CAREER_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 transition-transform" />

                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 group-hover:border-indigo-300 dark:group-hover:border-indigo-700/60 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-indigo-700 dark:text-indigo-400">
                      {item.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      <span>{item.institution}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: International Visits & Visiting Professorships */}
        {activeTab === 'international' && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Distinguished invited lectures, plenary addresses, and visiting professorships at leading universities and research institutes worldwide:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VISITING_AND_KEYNOTES.map((visit) => (
                <div
                  key={visit.id}
                  className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
                >
                  <div className="mt-1 w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                        {visit.year}
                      </span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {visit.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {visit.eventOrRole}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{visit.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
