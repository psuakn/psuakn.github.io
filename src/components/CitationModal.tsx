import React, { useState } from 'react';
import { X, Copy, Check, Quote, Code } from 'lucide-react';
import { Publication, formatAcsCitation, formatBibtexCitation } from '../utils/academicData';

interface CitationModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ publication, onClose }) => {
  const [copiedType, setCopiedType] = useState<'text' | 'bibtex' | null>(null);

  if (!publication) return null;

  const acsCitation = formatAcsCitation(publication);
  const bibtexCitation = formatBibtexCitation(publication);

  const handleCopy = (text: string, type: 'text' | 'bibtex') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
              Cite this Publication
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close citation dialog"
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper Title Preview */}
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
          #{publication.number || publication.id}. {publication.title} ({publication.year})
        </div>

        {/* ACS / Standard Academic Format */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              ACS / Standard Text Citation
            </span>
            <button
              onClick={() => handleCopy(acsCitation, 'text')}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
            >
              {copiedType === 'text' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Citation</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 text-xs bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-sans border border-slate-200 dark:border-slate-700 select-all">
            {acsCitation}
          </pre>
        </div>

        {/* BibTeX Format */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" />
              <span>BibTeX Format</span>
            </span>
            <button
              onClick={() => handleCopy(bibtexCitation, 'bibtex')}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            >
              {copiedType === 'bibtex' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied BibTeX!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 text-xs font-mono bg-slate-900 text-slate-200 rounded-lg whitespace-pre-wrap overflow-x-auto border border-slate-800 select-all">
            {bibtexCitation}
          </pre>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end pt-2 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
