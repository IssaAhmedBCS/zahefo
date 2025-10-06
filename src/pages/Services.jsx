// Services page 
import React from 'react';
import ServicesSection from '../components/services/ServicesSection';
import { Archive, Building2, BookOpen, CheckCircle2 } from 'lucide-react';
import { NewsletterCTA } from '../components/home/CTASection';

/**
 * Services Page
 * Complete services page
 */
const Services = ({ setActiveSection }) => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] "></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Archive className="w-5 h-5 text-blue-300" />
              <span className="font-semibold text-sm">Our Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional Heritage
              <br />
              <span className="text-blue-300">Management Solutions</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive services designed to preserve cultural heritage and 
              manage organizational records with international standards.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Archive,
                title: "Records Management",
                count: "8+ Services"
              },
              {
                icon: Building2,
                title: "Heritage Conservation",
                count: "8+ Services"
              },
              {
                icon: BookOpen,
                title: "Training Programs",
                count: "8+ Services"
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <category.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-blue-200 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Content */}
      <ServicesSection />

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our Services Stand Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes ZAHEFO the preferred choice for heritage management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ISO Certified",
                description: "All services meet international quality standards"
              },
              {
                title: "Expert Team",
                description: "25+ years combined professional experience"
              },
              {
                title: "Proven Track Record",
                description: "500+ successful projects completed"
              },
              {
                title: "Ongoing Support",
                description: "Continuous assistance after project completion"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterCTA />
    </div>
  );
};

/**
 * Simple Services Page
 */
export const SimpleServices = () => {
  return (
    <div className="py-20">
      <ServicesSection />
    </div>
  );
};

export default Services;