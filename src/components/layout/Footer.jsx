// Footer component 
import React from 'react';
import { 
  Building2, Phone, Mail, MapPin, Facebook, Twitter, 
  Instagram, Linkedin, ChevronRight, ExternalLink, Heart 
} from 'lucide-react';
import { organizationData } from '../../data/organizationData';

/**
 * Footer Component
 * @param {function} setActiveSection - Function to navigate to sections
 */
const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    organization: {
      title: 'Organization',
      links: [
        { label: 'About Us', action: () => setActiveSection('about') },
        { label: 'Our Vision', action: () => setActiveSection('about') },
        { label: 'Board Members', action: () => setActiveSection('impact') },
        { label: 'Annual Reports', action: () => {} },
        { label: 'Partnerships', action: () => {} }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { label: 'Records Management', action: () => setActiveSection('services') },
        { label: 'Heritage Conservation', action: () => setActiveSection('heritage') },
        { label: 'Training Programs', action: () => setActiveSection('services') },
        { label: 'Consulting Services', action: () => setActiveSection('contact') },
        { label: 'Project Management', action: () => setActiveSection('services') }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Heritage Gallery', action: () => setActiveSection('heritage') },
        { label: 'Publications', action: () => {} },
        { label: 'News & Events', action: () => {} },
        { label: 'Blog Articles', action: () => {} },
        { label: 'Career Opportunities', action: () => {} }
      ]
    }
  };

  const socialLinks = [
    { icon: Facebook, url: organizationData.socialMedia.facebook, label: 'Facebook' },
    { icon: Twitter, url: organizationData.socialMedia.twitter, label: 'Twitter' },
    { icon: Instagram, url: organizationData.socialMedia.instagram, label: 'Instagram' },
    { icon: Linkedin, url: organizationData.socialMedia.linkedin, label: 'LinkedIn' }
  ];

  const handleNavigation = (action) => {
    if (action) {
      action();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">ZAHEFO</h3>
                <p className="text-xs text-gray-400">Heritage Foundation</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              {organizationData.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Columns */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleNavigation(link.action)}
                      className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-y border-gray-700">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center group-hover:bg-amber-600/30 transition-colors">
              <MapPin className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-1">Visit Us</h5>
              <p className="text-gray-400 text-sm">
                {organizationData.contact.address}
                <br />
                {organizationData.contact.city}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-1">Call Us</h5>
              <a 
                href={`tel:${organizationData.contact.phone}`}
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                {organizationData.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-1">Email Us</h5>
              <a 
                href={`mailto:${organizationData.contact.email}`}
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              >
                {organizationData.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-b border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest heritage conservation news and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Zanzibar Heritage Foundation.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="hidden sm:inline">in Zanzibar</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <button className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-amber-400 transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-amber-400 transition-colors">
                Cookie Policy
              </button>
              <button className="hover:text-amber-400 transition-colors flex items-center gap-1">
                Sitemap
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Credits */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              UNESCO World Heritage Partner · Preserving Culture Since {organizationData.established}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;