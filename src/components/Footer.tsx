import React from 'react';
import { ArrowUp, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/professorData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Academic Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-800 border border-slate-700 shrink-0">
                <img
                  src={PROFESSOR_INFO.portraitUrl}
                  alt="Prof. Arun Kumar Nandi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">
                  {PROFESSOR_INFO.fullName}
                </div>
                <div className="text-xs text-indigo-400 font-medium">
                  {PROFESSOR_INFO.designation} · IACS Kolkata
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Polymer Science Unit, School of Materials Science, Indian Association for the Cultivation of Science. Four decades of pioneering contributions in macromolecular physics, supramolecular hydrogels, and polymer-functionalized graphene.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">h-index: {PROFESSOR_INFO.hIndex}</span>
              <span className="text-slate-600">·</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">260 Publications</span>
              <span className="text-slate-600">·</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">37 Ph.D. Alumni</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Academic Background & Education
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">
                  Core Research Thrusts
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  Refereed Publications (260)
                </a>
              </li>
              <li>
                <a href="#group" className="hover:text-white transition-colors">
                  Current Research Group
                </a>
              </li>
              <li>
                <a href="#alumni" className="hover:text-white transition-colors">
                  Doctoral Alumni (37 Scholars)
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Experimental Instrumentation
                </a>
              </li>
              <li>
                <a href="#honors" className="hover:text-white transition-colors">
                  Honors, Awards & Symposia
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Reprints
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Heritage */}
          <div className="md:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-950/80 text-indigo-300 text-xs font-semibold border border-indigo-800/80">
              <Sparkles className="w-3.5 h-3.5" />
              <span>IACS Heritage (Est. 1876)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The Indian Association for the Cultivation of Science (IACS), founded in 1876 by Dr. Mahendralal Sircar, is India’s oldest scientific research institute, celebrated as the historic birthplace of Sir C.V. Raman’s Nobel Prize-winning discovery of the Raman Effect (1930).
            </p>
            <div className="pt-2">
              <a
                href={PROFESSOR_INFO.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium"
              >
                <span>Google Scholar Citation Metrics</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Prof. Arun Kumar Nandi. Indian Association for the Cultivation of Science (IACS). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
