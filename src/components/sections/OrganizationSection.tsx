'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users2, Calendar, Trophy, Mic, Camera } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SafeImage from '@/components/ui/SafeImage';
import { organizationsData } from '@/data/portfolioData';

interface OrganizationSectionProps {
  onSelectImage: (image: { src: string; title: string; subtitle?: string }) => void;
}

const categories = ['Semua', 'Kepemimpinan', 'Kepanitiaan', 'Public Speaking', 'Dokumentasi', 'Prestasi'];

const getCategoryBadgeIcon = (category: string) => {
  switch (category) {
    case 'Prestasi':
      return <Trophy className="w-3.5 h-3.5 text-amber-500" />;
    case 'Public Speaking':
      return <Mic className="w-3.5 h-3.5 text-purple-500" />;
    case 'Dokumentasi':
      return <Camera className="w-3.5 h-3.5 text-blue-500" />;
    default:
      return <Users2 className="w-3.5 h-3.5 text-accent-brand" />;
  }
};

export default function OrganizationSection({ onSelectImage }: OrganizationSectionProps) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems =
    activeCategory === 'Semua'
      ? organizationsData
      : organizationsData.filter((item) => item.category === activeCategory);

  return (
    <section id="organisasi" className="py-20 md:py-28 bg-surface-muted/30 border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="Kepemimpinan & Kolaborasi"
          title="Pengalaman Kepanitiaan dan Organisasi"
          description="Rekam jejak keaktifan dalam kepemimpinan proyek, koordinasi logistik festival kemahasiswaan, public speaking sebagai MC dan moderator seminar, serta prestasi kompetisi kreatif."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand ${
                activeCategory === cat
                  ? 'bg-accent-brand text-white shadow-sm'
                  : 'bg-surface border border-border-subtle text-text-muted hover:border-accent-brand hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Organization Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() =>
                onSelectImage({
                  src: item.image,
                  title: `${item.role} : ${item.event}`,
                  subtitle: `Tahun ${item.year} • Kategori ${item.category}`,
                })
              }
              className="flex flex-col rounded-2xl bg-surface border border-border-subtle shadow-sm hover:shadow-md hover:border-accent-brand/40 transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              {/* Photo Frame */}
              <div className="relative h-44 w-full bg-surface-muted overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={`${item.role} - ${item.event}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] font-medium text-white">
                    Perbesar Dokumentasi
                  </span>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border-subtle/80 text-[11px] font-semibold text-text-primary flex items-center space-x-1 shadow-sm">
                  {getCategoryBadgeIcon(item.category)}
                  <span>{item.category}</span>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center space-x-1 text-[11px] text-text-muted mb-1">
                    <Calendar className="w-3 h-3 text-accent-brand" />
                    <span>Tahun {item.year}</span>
                  </div>
                  <h4 className="font-bold text-sm text-text-primary group-hover:text-accent-brand transition-colors line-clamp-2">
                    {item.role}
                  </h4>
                  <p className="text-xs text-text-muted line-clamp-2 mt-0.5">
                    {item.event}
                  </p>
                </div>

                <div className="pt-2 border-t border-border-subtle/80 flex items-center justify-between text-[11px] text-accent-brand font-medium">
                  <span>Lihat Dokumentasi</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
