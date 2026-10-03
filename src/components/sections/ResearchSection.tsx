'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import { publicationsData } from '@/data/portfolioData';

interface ResearchSectionProps {
  onSelectImage?: (image: { src: string; title: string; subtitle?: string }) => void;
}

export default function ResearchSection({ onSelectImage }: ResearchSectionProps) {
  return (
    <section id="riset" className="py-20 md:py-28 bg-background border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Exact style.png layout) */}
        <div className="max-w-2xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
            Publikasi riset & karya ilmiah
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
            Tiga naskah penelitian akademik yang telah disusun dan dipublikasikan pada jurnal ilmiah terakreditasi di bidang ekonomi pembangunan.
          </p>
        </div>

        {/* 3 Publication Cards (Mirroring style.png 3-card layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {publicationsData.map((pub, idx) => {
            const isFeatured = idx === 1; // Middle card featured like style.png 'Max' card
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                  isFeatured
                    ? 'bg-surface border-text-primary shadow-lg ring-1 ring-text-primary/10'
                    : 'bg-surface border-border-subtle shadow-sm hover:border-text-primary/40'
                }`}
              >
                <div className="space-y-5">
                  {/* Category Pill Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-text-primary">
                      {pub.journal}
                    </span>
                    {isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-accent-soft text-text-primary text-[10px] font-bold">
                        Ekonometri Terapan
                      </span>
                    )}
                  </div>

                  {/* Research Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-text-primary leading-snug">
                    {pub.title}
                  </h3>

                  {/* Paper Preview Frame with Click to Zoom */}
                  <div
                    onClick={() =>
                      onSelectImage &&
                      onSelectImage({
                        src: pub.previewImage,
                        title: pub.title,
                        subtitle: pub.journal,
                      })
                    }
                    className="relative h-44 rounded-xl overflow-hidden bg-surface-muted border border-border-subtle cursor-pointer group shadow-inner"
                  >
                    <SafeImage
                      src={pub.previewImage}
                      alt={pub.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[11px] font-medium text-white px-3 py-1.5 rounded-lg bg-black/70">
                        Klik untuk Pratinjau Naskah
                      </span>
                    </div>
                  </div>

                  {/* Authors & Description */}
                  <div className="space-y-2 pt-1 text-xs text-text-muted leading-relaxed">
                    <p className="font-medium text-text-primary">
                      Penulis : <span className="font-normal">{pub.authors.join(', ')}</span>
                    </p>
                    <p className="line-clamp-3 font-normal">
                      {pub.abstract}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button (Exact style.png card button) */}
                <div className="pt-6 mt-6 border-t border-border-subtle">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectImage &&
                      onSelectImage({
                        src: pub.previewImage,
                        title: pub.title,
                        subtitle: pub.journal,
                      })
                    }
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center space-x-1.5 ${
                      isFeatured
                        ? 'bg-accent-brand text-background hover:opacity-90'
                        : 'bg-surface-muted border border-border-subtle text-text-primary hover:bg-surface-muted/80'
                    }`}
                  >
                    <span>Lihat Naskah Lengkap</span>
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
