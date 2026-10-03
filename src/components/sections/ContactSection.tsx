'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id="kontak" className="py-20 md:py-28 bg-background border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Full-width Signature CTA Banner (Exact replica of style.png bottom banner) */}
        <div className="rounded-3xl p-8 sm:p-12 bg-surface-muted border border-border-subtle flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
              Mari berdiskusi dan berkolaborasi.
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
              Terbuka untuk kolaborasi riset ekonomi pembangunan, penyusunan naskah kebijakan, maupun inisiatif kemahasiswaan dan karir profesional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-accent-brand text-background font-bold text-sm hover:opacity-90 shadow-sm transition-all text-center"
            >
              Hubungi via WhatsApp
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-xl bg-surface border border-border-subtle text-text-primary font-bold text-sm hover:bg-surface-muted transition-all"
            >
              {copied ? 'Email Tersalin!' : 'Salin Alamat Email'}
            </button>
          </div>
        </div>

        {/* 3 Contact Detail Rows (Minimalist, clean, without icon clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* WhatsApp */}
          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Pesan Instan
            </span>
            <h3 className="font-bold text-lg text-text-primary">
              WhatsApp
            </h3>
            <p className="font-mono text-sm text-text-primary">
              {contactData.whatsappDisplay}
            </p>
            <div className="pt-2">
              <a
                href={contactData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-text-primary hover:opacity-80 inline-flex items-center space-x-1"
              >
                <span>Buka Percakapan</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Surat Akademik
            </span>
            <h3 className="font-bold text-lg text-text-primary">
              Email Institusi
            </h3>
            <p className="font-mono text-xs text-text-primary break-all">
              {contactData.email}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-bold text-text-primary hover:opacity-80 inline-flex items-center space-x-1"
              >
                <span>{copied ? 'Tersalin' : 'Salin Email'}</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Instagram */}
          <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Jejaring Sosial
            </span>
            <h3 className="font-bold text-lg text-text-primary">
              Instagram
            </h3>
            <p className="font-mono text-sm text-text-primary">
              {contactData.instagram}
            </p>
            <div className="pt-2">
              <a
                href={contactData.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-text-primary hover:opacity-80 inline-flex items-center space-x-1"
              >
                <span>Kunjungi Profil</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
