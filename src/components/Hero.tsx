import React from 'react';
import { BookOpen, GraduationCap, Award, MapPin, Mail, Phone, ExternalLink, ArrowRight, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/professorData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 md:py-20 border-b border-slate-200 dark:border-slate-800">
      {/* Decorative background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Institutional Heritage Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-xs font-semibold text-indigo-900 dark:text-indigo-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>IACS Kolkata · The Cradle of Science in India @ 150 Years (Est. 1876)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Academic Intro & Title */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                {PROFESSOR_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-sm font-semibold text-indigo-700 dark:text-indigo-400">
                <span>FASc (Bangalore)</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span>FRSC (London)</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span>FWAST (Kolkata)</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">ACS Highlighted Author (2012)</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200">
              {PROFESSOR_INFO.designation} · Former Senior Professor & Head
            </p>

            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                {PROFESSOR_INFO.unit}
              </p>
              <p className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 text-slate-400" />
                <span>{PROFESSOR_INFO.institution}, Jadavpur, Kolkata - 700 032, India</span>
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base max-w-3xl">
              {PROFESSOR_INFO.bioOverview}
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-sm shadow-indigo-600/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore 260 Publications</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium text-sm transition-all shadow-xs"
              >
                <span>Research Thrusts</span>
              </a>

              <a
                href="#alumni"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium text-sm transition-all shadow-xs"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>37 Ph.D. Alumni</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact / Reprints</span>
              </a>
            </div>

            {/* Fast direct links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 font-mono">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PROFESSOR_INFO.email}</span>
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{PROFESSOR_INFO.telephone}</span>
              </span>
              <a
                href={PROFESSOR_INFO.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                <span>Google Scholar (h-{PROFESSOR_INFO.hIndex})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Distinguished Academic Visual & Quick Bio Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm">
              <div className="relative mb-5 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 group">
                <img
                  src={PROFESSOR_INFO.portraitUrl}
                  alt="Prof. Arun Kumar Nandi in Polymer Science Laboratory at IACS Kolkata"
                  className="w-full h-80 sm:h-96 object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-indigo-300">
                      Prof. Arun Kumar Nandi, FASc., FRSC
                    </p>
                    <p className="text-xs font-medium text-slate-200">
                      Polymer Science Unit · IACS Kolkata
                    </p>
                  </div>
                </div>
              </div>

              {/* Mentorship & Leadership Highlights */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>40+ Years of Faculty Service</strong> at IACS Kolkata, Burdwan University & North Bengal University.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Postdoctoral Fellowship</strong> at Florida State University alongside polymer giant Prof. Leo Mandelkern.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Indo-French Project Director</strong> & 4-time Visiting Professor at Institut Charles Sadron, Strasbourg, France.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Author of RSC Reference Textbook</strong> on "Polymer Functionalized Graphene" (2021).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Academic Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Research Output</span>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
              {PROFESSOR_INFO.totalPublications}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Refereed Publications (85 ACS · 58 RSC · 40 Wiley · 39 Elsevier)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Mentorship</span>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
              {PROFESSOR_INFO.phdSupervised}+
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Ph.D. Scholars Supervised (Holding faculty & R&D posts globally)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
              <Award className="w-5 h-5" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Citation Impact</span>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
              {PROFESSOR_INFO.hIndex}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              h-index · 2 Nature India Highlights · ~7,000+ Citations
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
              <FileText className="w-5 h-5" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Treatises</span>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
              1 Book + 5
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              RSC Textbook + 5 Book Chapters (CRC, Wiley, Springer)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
