'use client';

import React, { useState } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import OrganizationSection from '@/components/sections/OrganizationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import ImageModal from '@/components/ui/ImageModal';

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: '',
    subtitle: '',
  });

  const handleOpenModal = (image: { src: string; title: string; subtitle?: string }) => {
    setModalState({
      isOpen: true,
      imageSrc: image.src,
      title: image.title,
      subtitle: image.subtitle,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent-soft selection:text-accent-brand">
      {/* 1. Kinetic Monogram Loading Screen */}
      <LoadingScreen />

      {/* 2. Sticky Glass Navbar & Theme Switcher */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ResearchSection onSelectImage={handleOpenModal} />
        <ExperienceSection onSelectImage={handleOpenModal} />
        <CertificatesSection onSelectImage={handleOpenModal} />
        <OrganizationSection onSelectImage={handleOpenModal} />
        <ContactSection />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Image Lightbox Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        subtitle={modalState.subtitle}
      />
    </div>
  );
}
