// Main App component 
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import AboutSection from './components/about/AboutSection';
import ServicesSection from './components/services/ServicesSection';
import HeritageGallery from './components/heritage/HeritageGallery';
import ImpactSection from './components/impact/ImpactSection';
import ContactSection from './components/contact/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="heritage">
          <HeritageGallery />
        </section>
        
        <section id="impact">
          <ImpactSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}