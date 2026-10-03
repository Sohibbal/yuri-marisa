'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import { personalData } from '@/data/portfolioData';

export default function HeroSection() {
  const words = ['Yuri Marisa', 'Yuriee', 'Urr'];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 65 : 110;

    if (!isDeleting && currentText === currentWord) {
      // Pause at full word for 1.8 seconds before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === '') {
      // Pause briefly at empty before typing next word
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 250);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Typography with Boxed Looping Typewriter Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Minimal Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-muted border border-border-subtle text-xs font-medium text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-brand" />
              <span>Ekonomi Pembangunan • Universitas Riau</span>
            </div>

            {/* Display Headline with Boxed Background & Looping Typewriter Name */}
            <div>
              <div className="inline-block p-1.5 sm:p-2.5 rounded-2xl bg-surface-muted border border-border-subtle shadow-sm">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary px-3 sm:px-4 py-1 flex items-center min-h-[1.25em]">
                  <span>{currentText}</span>
                  <span className="inline-block w-[3px] h-[0.85em] bg-text-primary ml-1.5 animate-pulse" />
                </h1>
              </div>
            </div>

            {/* Clean Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl font-normal">
              Mahasiswa tingkat akhir Universitas Riau dengan keahlian analisis ekonometri time-series, evaluasi perencanaan pembangunan desa berbasis IDM dan SDGs, serta rekam jejak magang di BAPPEDA Kabupaten Bengkalis.
            </p>

            {/* Clean Action Buttons: CV button with target="_blank" and Contact link */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-accent-brand text-background font-bold text-sm hover:opacity-90 shadow-sm transition-all duration-200 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand"
              >
                <span>Buka CV Lengkap</span>
                <span className="text-xs opacity-75 font-normal">(PDF)</span>
                <span className="text-sm font-normal ml-0.5">↗</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('kontak')}
                className="inline-flex items-center space-x-1.5 text-sm font-semibold text-text-primary hover:text-text-muted transition-colors py-2"
              >
                <span>Hubungi Saya</span>
                <span className="text-base font-normal">→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Layered Offset Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Offset Accent Backdrop Container */}
              <div className="absolute top-4 -right-4 w-full h-full rounded-2xl bg-surface-muted border border-border-subtle" />

              {/* Front Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-border-subtle shadow-xl aspect-[3/4]">
                <SafeImage
                  src={personalData.portraitImage}
                  alt="Yuri Marisa - Portofolio Riset Ekonomi Pembangunan"
                  fill
                  priority
                  className="object-cover object-top"
                />

                {/* Bottom Minimalist Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-border-subtle flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-text-primary">Yuri Marisa</p>
                    <p className="text-[11px] text-text-muted">FEB Universitas Riau</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-muted font-medium text-[10px] text-text-primary">
                    Semester 7
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-Metric Divider Row Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 pt-8 border-t border-border-subtle grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
        >
          {/* Metric 1 */}
          <div className="md:pr-8 space-y-1">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              3 Riset
            </h3>
            <p className="text-xs sm:text-sm text-text-muted font-normal">
              artikel ilmiah terpublikasi di jurnal nasional terakreditasi
            </p>
          </div>

          {/* Metric 2 */}
          <div className="md:px-8 md:border-l border-border-subtle space-y-1">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              47 OPD
            </h3>
            <p className="text-xs sm:text-sm text-text-muted font-normal">
              dokumen Renja divalidasi selama magang di BAPPEDA Bengkalis
            </p>
          </div>

          {/* Metric 3 */}
          <div className="md:pl-8 md:border-l border-border-subtle space-y-1">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              EViews 12
            </h3>
            <p className="text-xs sm:text-sm text-text-muted font-normal">
              pemodelan regresi linier berganda dan data time-series
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
