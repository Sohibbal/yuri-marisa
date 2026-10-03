'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Trees, Calendar, MapPin, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SafeImage from '@/components/ui/SafeImage';
import { experiencesData } from '@/data/portfolioData';

interface ExperienceSectionProps {
  onSelectImage?: (image: { src: string; title: string; subtitle?: string }) => void;
}

export default function ExperienceSection({ onSelectImage }: ExperienceSectionProps) {
  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-surface-muted/30 border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="Pengalaman Kerja & Lapangan"
          title="Praktik Lapangan & Kebijakan Publik"
          description="Penerapan kompetensi analisis pembangunan dalam evaluasi birokrasi daerah di BAPPEDA Kabupaten Bengkalis serta advokasi lingkungan hidup di kawasan pesisir bersama WALHI Riau."
        />

        <div className="space-y-12">
          {experiencesData.map((exp, idx) => {
            const isBappeda = exp.id.includes('bappeda');
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 md:p-8 rounded-3xl bg-surface border border-border-subtle shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Organization Details & Bullet Points */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Header Info */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-accent-soft text-accent-brand">
                          {isBappeda ? (
                            <Building2 className="w-5 h-5" />
                          ) : (
                            <Trees className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider">
                            {exp.role}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text-primary">
                            {exp.organization}
                          </h3>
                        </div>
                      </div>

                      {/* Meta: Period & Location */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted pt-1">
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-accent-brand" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center space-x-1.5">
                            <MapPin className="w-3.5 h-3.5 text-accent-brand" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-3 pt-2">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3 text-sm text-text-muted">
                          <CheckCircle className="w-4 h-4 text-accent-brand shrink-0 mt-0.5" />
                          <p className="leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-surface-muted border border-border-subtle text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Documentation Photos */}
                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    {exp.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() =>
                          onSelectImage &&
                          onSelectImage({
                            src: img,
                            title: exp.organization,
                            subtitle: `Dokumentasi Kegiatan : ${exp.period}`,
                          })
                        }
                        className="relative h-44 rounded-2xl overflow-hidden bg-surface-muted border border-border-subtle cursor-pointer group shadow-sm"
                      >
                        <SafeImage
                          src={img}
                          alt={`${exp.organization} dokumentasi ${imgIdx + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <span className="text-[11px] font-medium text-white">
                            Perbesar Foto
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
