'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { contactData } from '@/data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactData.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = contactData.email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          category="Hubungi & Kolaborasi"
          title="Kontak dan Informasi Penghubung"
          description="Terbuka untuk diskusi akademik, kolaborasi penelitian ekonomi pembangunan, inisiatif kebijakan daerah, serta peluang profesional."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                  Pesan Cepat
                </span>
                <h3 className="font-bold text-lg text-text-primary">
                  WhatsApp
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  Komunikasi langsung untuk koordinasi riset dan jadwal diskusi.
                </p>
              </div>
              <p className="font-mono text-sm font-semibold text-text-primary pt-1">
                {contactData.whatsappDisplay}
              </p>
            </div>

            <a
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Kirim Pesan WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* 2. Email Card with Copy-to-clipboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-sm hover:border-accent-brand/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent-brand flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-accent-brand uppercase tracking-wider">
                  Surat Resmi Mahasiswa
                </span>
                <h3 className="font-bold text-lg text-text-primary">
                  Email Institusi
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  Untuk korespondensi formal, publikasi jurnal, atau tawaran kerja sama.
                </p>
              </div>
              <p className="font-mono text-xs font-semibold text-text-primary break-all pt-1">
                {contactData.email}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-border-subtle bg-surface-muted/60 text-xs font-semibold text-text-primary hover:bg-surface-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-600">Alamat Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent-brand" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contactData.email}`}
                aria-label="Kirim email langsung"
                className="p-2.5 rounded-xl bg-accent-brand text-white hover:bg-accent-hover transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-brand"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* 3. Instagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-sm hover:border-pink-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">
                  Media Sosial
                </span>
                <h3 className="font-bold text-lg text-text-primary">
                  Instagram
                </h3>
                <p className="text-xs text-text-muted mt-1">
                  Aktivitas kemahasiswaan, dokumentasi kegiatan, dan jejaring sosial.
                </p>
              </div>
              <p className="font-mono text-sm font-semibold text-text-primary pt-1">
                {contactData.instagram}
              </p>
            </div>

            <a
              href={contactData.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold hover:opacity-95 shadow-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              <span>Kunjungi Profil Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Location & Status Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-surface-muted/60 border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-accent-brand shrink-0" />
            <span>Berbasis di {contactData.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-text-primary">
              Status : Terbuka untuk Kolaborasi Riset & Proyek Pembangunan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
