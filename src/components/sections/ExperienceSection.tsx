'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import { experiencesData } from '@/data/portfolioData';

interface ExperienceSectionProps {
  onSelectImage?: (image: { src: string; title: string; subtitle?: string }) => void;
}

export default function ExperienceSection({ onSelectImage }: ExperienceSectionProps) {
  return (
    <section id="pengalaman" className="py-20 md:py-28 bg-background border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Mirroring style.png Dari daftar sampai bot berjalan) */}
        <div className="max-w-2xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
            Dari kampus sampai kebijakan nyata
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
            Pengalaman nyata dalam birokrasi perencanaan daerah di BAPPEDA Kabupaten Bengkalis serta advokasi lingkungan hidup bersama WALHI Riau.
          </p>
        </div>

        {/* 2 Main Pillar Columns with Numbers 1 and 2 (Exact style.png step layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="space-y-6 pt-6 border-t border-border-subtle"
            >
              {/* Massive Bold Step Number */}
              <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
                {idx + 1}
              </div>

              {/* Title & Organization */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold tracking-tight text-text-primary">
                  {exp.organization}
                </h3>
                <p className="text-xs font-semibold text-text-muted">
                  {exp.role} • {exp.period}
                </p>
              </div>

              {/* Bullet Descriptions */}
              <div className="space-y-2.5 text-xs sm:text-sm text-text-muted leading-relaxed">
                {exp.description.map((item, i) => (
                  <p key={i} className="flex items-start space-x-2">
                    <span className="text-accent-brand font-bold shrink-0">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {/* Photo Previews with Click to Zoom */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {exp.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    onClick={() =>
                      onSelectImage &&
                      onSelectImage({
                        src: img,
                        title: exp.organization,
                        subtitle: `${exp.role} : ${exp.period}`,
                      })
                    }
                    className="relative h-32 rounded-xl overflow-hidden bg-surface-muted border border-border-subtle cursor-pointer group shadow-sm"
                  >
                    <SafeImage
                      src={img}
                      alt={`${exp.organization} dokumentasi`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[11px] font-medium text-white px-2 py-1 rounded bg-black/60">
                        Perbesar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
