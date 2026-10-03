'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SafeImage from '@/components/ui/SafeImage';
import { publicationsData } from '@/data/portfolioData';

interface ResearchSectionProps {
  onSelectImage?: (image: { src: string; title: string; subtitle?: string }) => void;
}

export default function ResearchSection({ onSelectImage }: ResearchSectionProps) {
  return (
    <section id="riset" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="Publikasi Ilmiah & Studi Regional"
          title="Riset dan Penelitian Akademik"
          description="Pengalaman dalam menyusun dan mempublikasikan artikel ilmiah di bidang ekonomi pembangunan, meliputi evaluasi kebijakan desa, regresi ekonometri modal manusia, serta daya saing agroindustri lokal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {publicationsData.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col rounded-2xl bg-surface border border-border-subtle shadow-sm hover:shadow-md hover:border-accent-brand/40 transition-all duration-300 overflow-hidden group"
            >
              {/* Paper Cover Preview Image */}
              <div
                className="relative h-48 w-full bg-surface-muted overflow-hidden cursor-pointer"
                onClick={() =>
                  onSelectImage &&
                  onSelectImage({
                    src: pub.previewImage,
                    title: pub.title,
                    subtitle: pub.journal,
                  })
                }
              >
                <SafeImage
                  src={pub.previewImage}
                  alt={pub.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border-subtle/80 text-[11px] font-semibold text-accent-brand shadow-sm">
                  {pub.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Journal Name */}
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-accent-brand">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>{pub.journal}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base md:text-lg text-text-primary leading-snug group-hover:text-accent-brand transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <div className="flex items-start space-x-2 text-xs text-text-muted">
                    <Users className="w-3.5 h-3.5 shrink-0 mt-0.5 text-accent-brand" />
                    <p className="line-clamp-2">
                      <span className="font-semibold text-text-primary">Yuri Marisa</span>
                      {pub.authors.filter((a) => a !== 'Yuri Marisa').length > 0 &&
                        `, ${pub.authors.filter((a) => a !== 'Yuri Marisa').join(', ')}`}
                    </p>
                  </div>

                  {/* Abstract snippet */}
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-4">
                    {pub.abstract}
                  </p>
                </div>

                {/* Key Research Focus & View Button */}
                <div className="pt-4 border-t border-border-subtle/80 space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-text-muted leading-tight">
                      {pub.focus}
                    </p>
                  </div>

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
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-muted/60 text-xs font-semibold text-text-primary hover:bg-accent-brand hover:text-white hover:border-accent-brand transition-all duration-200"
                  >
                    <span>Lihat Naskah Publikasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
