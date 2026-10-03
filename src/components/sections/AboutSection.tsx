'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, LineChart, BookMarked, FileText, Palette, Video } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { personalData, toolsData } from '@/data/portfolioData';

const getToolIcon = (iconType: string) => {
  switch (iconType) {
    case 'eviews':
      return <LineChart className="w-6 h-6 text-blue-600" />;
    case 'excel':
      return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />;
    case 'mendeley':
      return <BookMarked className="w-6 h-6 text-red-600" />;
    case 'word':
      return <FileText className="w-6 h-6 text-sky-600" />;
    case 'canva':
      return <Palette className="w-6 h-6 text-cyan-600" />;
    case 'capcut':
      return <Video className="w-6 h-6 text-purple-600" />;
    default:
      return <LineChart className="w-6 h-6 text-accent-brand" />;
  }
};

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-surface-muted/30 border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="Profil Akademik & Teknis"
          title="Tentang Yuri Marisa"
          description="Dedikasi riset pada dinamika ekonomi regional, formulasi kebijakan pembangunan desa, serta pemodelan ekonometri kuantitatif."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Academic Narration & Key Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border-subtle shadow-sm space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-text-primary">
                Latar Belakang & Fokus Studi
              </h3>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                {personalData.bio}
              </p>
              <div className="pt-4 border-t border-border-subtle/80 flex flex-wrap gap-2 text-xs font-medium text-text-muted">
                <span className="px-3 py-1 rounded-full bg-surface-muted border border-border-subtle">
                  Semester 7 FEB UNRI
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-muted border border-border-subtle">
                  Analisis Kebijakan Publik
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-muted border border-border-subtle">
                  Ekonometri Terapan
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-muted border border-border-subtle">
                  Advokasi Lingkungan
                </span>
              </div>
            </div>

            {/* 3 Core Competency Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-surface border border-border-subtle shadow-sm">
                <h4 className="font-bold text-sm text-text-primary mb-1">Riset Ilmiah</h4>
                <p className="text-xs text-text-muted leading-snug">
                  Evaluasi perencanaan berbasis IDM dan SDGs Desa serta analisis modal manusia.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-border-subtle shadow-sm">
                <h4 className="font-bold text-sm text-text-primary mb-1">Birokrasi Daerah</h4>
                <p className="text-xs text-text-muted leading-snug">
                  Verifikasi dan validasi Renja 47 OPD pada BAPPEDA Bengkalis.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-border-subtle shadow-sm">
                <h4 className="font-bold text-sm text-text-primary mb-1">Kepemimpinan</h4>
                <p className="text-xs text-text-muted leading-snug">
                  Project Leader proker divisi, public speaking, dan advokasi WALHI Riau.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tools & Software Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="mb-2">
              <h3 className="text-xl font-bold tracking-tight text-text-primary">
                Tools & Perangkat Lunak
              </h3>
              <p className="text-xs md:text-sm text-text-muted">
                Perangkat lunak yang dioperasikan dalam analisis data, penyusunan publikasi, dan komunikasi visual.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {toolsData.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-surface border border-border-subtle shadow-sm hover:border-accent-brand/50 transition-colors group flex items-start space-x-3.5"
                >
                  <div className="p-2.5 rounded-lg bg-surface-muted border border-border-subtle shrink-0 group-hover:scale-105 transition-transform">
                    {getToolIcon(tool.iconType)}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-text-primary">
                        {tool.name}
                      </h4>
                    </div>
                    <span className="inline-block text-[11px] font-semibold text-accent-brand">
                      {tool.category}
                    </span>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
