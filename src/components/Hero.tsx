import React from 'react';
import { BookOpen, GraduationCap, Award, MapPin, Mail, Phone, ExternalLink, ArrowRight, Sparkles, FileText, CheckCircle2, BookMarked } from 'lucide-react';
import { PROFESSOR_INFO, FEATURED_BOOKS } from '../data/professorData';

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
                <span>Explore {PROFESSOR_INFO.totalPublications} Publications</span>
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
                <span>{PROFESSOR_INFO.phdSupervised}+1 Ph.D. Alumni</span>
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
                    <strong>40+ Years of Faculty Service</strong> at IACS Kolkata & North Bengal University.
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
                    <strong>Author of Two RSC Reference Textbooks</strong> on "Polymer Functionalized Graphene" (2021) and "Polymer and Supramolecular Gels" (2026).
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
              Refereed Publications (91 ACS · 59 RSC · 41 Elsevier · 40 Wiley · 35 Others)
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 mb-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Mentorship</span>
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
              {PROFESSOR_INFO.phdSupervised} (+{PROFESSOR_INFO.collaborativePhd})
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Ph.D. Degrees Awarded (37 Supervised + 1 Collaborative)
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
              2 Books + 5
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              2 RSC Textbooks + 5 Book Chapters (CRC, Wiley, Springer)
            </p>
          </div>
        </div>

        {/* Front-Page Featured Authored Textbooks Showcase (RSC London) */}
        <div className="mt-12 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 text-xs font-semibold text-amber-900 dark:text-amber-300 mb-2.5">
                <BookMarked className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Featured Treatises · Royal Society of Chemistry (London, UK)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                Authored Reference Textbooks
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                Major reference monographs authored by Prof. Arun Kumar Nandi in the prestigious RSC Polymer Chemistry Series, setting foundational benchmarks for functional graphene and supramolecular polymer networks.
              </p>
            </div>
            <a
              href="#publications"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors shrink-0"
            >
              <span>Explore All Publications & Chapters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {FEATURED_BOOKS.map((book) => (
              <div
                key={book.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-md transition-all p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start"
              >
                {/* 3D-styled Book Cover with Sheen */}
                {book.coverImage && (
                  <div className="relative shrink-0 mx-auto sm:mx-0 w-44 sm:w-48 group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative rounded-r-lg rounded-l-xs overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={book.coverImage}
                        alt={`Book Cover: ${book.title} by Prof. Arun Kumar Nandi`}
                        className="w-full h-auto aspect-[1/1.48] object-cover"
                        loading="lazy"
                      />
                      {/* Spine shading overlay */}
                      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />
                      {/* Gloss sheen overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        RSC Polymer Chemistry Series
                      </span>
                    </div>
                  </div>
                )}

                {/* Book Metadata & Action Links */}
                <div className="flex-1 flex flex-col justify-between h-full space-y-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-600 text-white">
                        RSC Textbook
                      </span>
                      <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">
                        {book.year}
                      </span>
                      {book.series && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          · {book.series}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {book.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Author: {book.authors}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {book.details}
                    </p>

                    <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {book.isbnOrDoi}
                    </div>
                  </div>

                  {/* Direct Bookstore & DOI Action Links */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                    {book.rscUrl && (
                      <a
                        href={book.rscUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors shadow-xs"
                      >
                        <span>View on RSC Books</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {book.doiUrl && (
                      <a
                        href={book.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors border border-slate-200 dark:border-slate-700"
                      >
                        <span>Official DOI</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
