import React, { useState } from 'react';
import { Moon, Sun, Menu, X, BookOpen, Award, Users, GraduationCap, Microscope, Mail, FileText, ExternalLink } from 'lucide-react';
import { PROFESSOR_INFO } from '../data/professorData';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDark, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', icon: FileText },
    { name: 'Research', href: '#research', icon: Microscope },
    { name: 'Publications', href: '#publications', icon: BookOpen, badge: '268' },
    { name: 'Group', href: '#group', icon: Users },
    { name: 'Alumni', href: '#alumni', icon: GraduationCap, badge: '37+1' },
    { name: 'Facilities', href: '#facilities', icon: Microscope },
    { name: 'Honors', href: '#honors', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Academic Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xs border border-slate-200 dark:border-slate-700 shrink-0">
              <img
                src={PROFESSOR_INFO.portraitUrl}
                alt="Prof. Arun Kumar Nandi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Prof. Arun K. Nandi
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                FASc, FRSC · Emeritus Scientist (CSIR) · IACS
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action buttons: Dark mode & External links */}
          <div className="flex items-center gap-2">
            <a
              href={PROFESSOR_INFO.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md transition-colors border border-slate-200 dark:border-slate-700"
              title="View Google Scholar Citations Profile"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-700/60"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <IconComponent className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={PROFESSOR_INFO.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-center text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-md"
            >
              Google Scholar Profile (h-index {PROFESSOR_INFO.hIndex})
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
