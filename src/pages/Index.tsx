
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Teachers } from '@/components/Teachers';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Reviews } from '@/components/Reviews';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Teachers />
        <Gallery />
        <Contact />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
