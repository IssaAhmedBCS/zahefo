// Home page 
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import CTASection from '../components/home/CTASection';
import { CompactAboutSection } from '../components/about/AboutSection';
import { SimpleServicesSection } from '../components/services/ServicesSection';
import { CompactHeritageGallery } from '../components/heritage/HeritageGallery';
import { CompactImpactSection } from '../components/impact/ImpactSection';

/**
 * Home Page
 * Main landing page combining all sections
 */
const Home = ({ setActiveSection }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero setActiveSection={setActiveSection} />

      {/* About Preview */}
      <CompactAboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Services Preview */}
      <section id="services-preview">
        <SimpleServicesSection />
      </section>

      {/* Heritage Preview */}
      <section id="heritage-preview">
        <CompactHeritageGallery />
      </section>

      {/* Impact Preview */}
      <section id="impact-preview">
        <CompactImpactSection />
      </section>

      {/* Call to Action */}
      <CTASection setActiveSection={setActiveSection} />
    </div>
  );
};

/**
 * Alternative Home Page Layout
 */
export const HomeAlt = ({ setActiveSection }) => {
  return (
    <div>
      <Hero setActiveSection={setActiveSection} />
      
      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preserving Heritage, Building Future
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over 25 years, ZAHEFO has been at the forefront of cultural heritage 
            conservation in East Africa, combining international expertise with deep 
            local knowledge to protect Zanzibar's unique cultural legacy.
          </p>
        </div>
      </section>

      <FeaturesSection />
      <CTASection setActiveSection={setActiveSection} />
    </div>
  );
};

/**
 * Minimal Home Page
 */
export const MinimalHome = ({ setActiveSection }) => {
  return (
    <div>
      <Hero setActiveSection={setActiveSection} />
      <FeaturesSection />
      <CTASection setActiveSection={setActiveSection} />
    </div>
  );
};

export default Home;