'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, BookOpen, GraduationCap, Building2, Award } from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';
import { personalData } from '@/data/portfolioData';

export default function HeroSection() {
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-soft/40 dark:bg-accent-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Persona & Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle shadow-sm text-xs font-semibold text-text-primary">
              <span className="w-2 h-2 rounded-full bg-accent-brand animate-pulse" />
              <span>{personalData.role}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.08]">
                {personalData.name}
              </h1>
              <p className="text-base sm:text-lg text-accent-brand font-medium">
                {personalData.major} • {personalData.faculty} {personalData.university}
              </p>
            </div>

            {/* Short Narrative Bio */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
              {personalData.quote}
            </p>

            {/* Real Evidence Pills (Antislop compliant: real facts from PDF) */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-xl bg-surface border border-border-subtle shadow-sm flex flex-col items-start">
                <BookOpen className="w-4 h-4 text-accent-brand mb-1.5" />
                <span className="text-xs text-text-muted">Publikasi Riset</span>
                <span className="font-bold text-sm text-text-primary">3 Jurnal Ilmiah</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border-subtle shadow-sm flex flex-col items-start">
                <Building2 className="w-4 h-4 text-accent-brand mb-1.5" />
                <span className="text-xs text-text-muted">Praktik Lapangan</span>
                <span className="font-bold text-sm text-text-primary">BAPPEDA Bengkalis</span>
              </div>
              <div className="p-3 rounded-xl bg-surface border border-border-subtle shadow-sm flex flex-col items-start">
                <Award className="w-4 h-4 text-accent-brand mb-1.5" />
                <span className="text-xs text-text-muted">Keahlian Olah Data</span>
                <span className="font-bold text-sm text-text-primary">EViews & Excel</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => scrollTo('riset')}
                className="px-6 py-3.5 rounded-full bg-accent-brand text-white font-semibold text-sm hover:bg-accent-hover shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand"
              >
                <span>Jelajahi Publikasi Riset</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('kontak')}
                className="px-6 py-3.5 rounded-full bg-surface text-text-primary border border-border-subtle font-semibold text-sm hover:border-accent-brand hover:text-accent-brand shadow-sm transition-all duration-200 flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Yuri Portrait in Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer decorative subtle rim */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-brand/20 to-border-subtle rounded-3xl blur-sm group-hover:blur-md transition-all duration-300 opacity-70" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-surface border border-border-subtle shadow-xl aspect-[3/4] flex items-center justify-center">
                <SafeImage
                  src={personalData.portraitImage}
                  alt="Yuri Marisa - Mahasiswa Ekonomi Pembangunan Universitas Riau"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />

                {/* Bottom glass badge on portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-surface/90 backdrop-blur-md border border-border-subtle/80 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center text-accent-brand font-bold shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-primary">
                        Yuri Marisa
                      </p>
                      <p className="text-[11px] text-text-muted">
                        Ekonomi Pembangunan FEB UNRI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
