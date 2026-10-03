'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SafeImage from '@/components/ui/SafeImage';
import { certificatesData } from '@/data/portfolioData';

interface CertificatesSectionProps {
  onSelectImage: (image: { src: string; title: string; subtitle?: string }) => void;
}

export default function CertificatesSection({ onSelectImage }: CertificatesSectionProps) {
  return (
    <section id="sertifikat" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="Kredensial & Lisensi Resmi"
          title="Sertifikat dan Penghargaan"
          description="Sertifikasi resmi kepengurusan lembaga riset ilmiah kampus, penyelesaian magang instansi pemerintah daerah dengan predikat baik, serta lokakarya keahlian perangkat lunak ekonometri."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              onClick={() =>
                onSelectImage({
                  src: cert.image,
                  title: cert.title,
                  subtitle: `${cert.issuer} • ${cert.date}`,
                })
              }
              className="flex flex-col rounded-2xl bg-surface border border-border-subtle shadow-sm hover:shadow-lg hover:border-accent-brand/50 transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Certificate Preview Image Frame */}
              <div className="relative h-56 w-full bg-surface-muted overflow-hidden flex items-center justify-center p-3 border-b border-border-subtle/80">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
                  <SafeImage
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-accent-brand/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-surface/95 text-text-primary text-xs font-semibold shadow-md flex items-center space-x-1.5 border border-border-subtle">
                    <ExternalLink className="w-3.5 h-3.5 text-accent-brand" />
                    <span>Lihat Ukuran Penuh</span>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="absolute top-4 right-4 p-1.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-sm backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-accent-brand shrink-0" />
                    <span>{cert.date}</span>
                  </div>

                  <h3 className="font-bold text-base text-text-primary group-hover:text-accent-brand transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-medium text-accent-brand line-clamp-1">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle/80 flex items-center justify-between text-xs font-semibold text-text-primary group-hover:text-accent-brand">
                  <span className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-accent-brand" />
                    <span>Dokumen Terverifikasi</span>
                  </span>
                  <span className="text-[11px] text-text-muted">Klik untuk perbesar</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
