/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ResearchThrusts } from './components/ResearchThrusts';
import { PublicationsSection } from './components/PublicationsSection';
import { ResearchGroupSection } from './components/ResearchGroupSection';
import { AlumniSection } from './components/AlumniSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { HonorsSection } from './components/HonorsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const getInitialTheme = (): boolean => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem('akn_portfolio_theme');
      if (stored === 'dark') return true;
      if (stored === 'light') return false;
    }
  } catch {
    // Ignore iframe security error
  }
  return false; // Default to white theme
};

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        window.localStorage?.setItem('akn_portfolio_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        window.localStorage?.setItem('akn_portfolio_theme', 'light');
      }
    } catch {
      // Ignore iframe security error
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'research', 'publications', 'group', 'alumni', 'facilities', 'honors', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors">
      <Navbar isDark={isDark} toggleDark={toggleDark} activeSection={activeSection} />
      <main>
        <Hero />
        <AboutSection />
        <ResearchThrusts />
        <PublicationsSection />
        <ResearchGroupSection />
        <AlumniSection />
        <FacilitiesSection />
        <HonorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
