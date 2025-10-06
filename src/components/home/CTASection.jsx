// Call to action section 
import React from 'react';
import { ArrowRight, Mail, Phone, MessageSquare, Calendar, Download, FileText } from 'lucide-react';
import Button, { ButtonGroup } from '../shared/Button';
import { organizationData } from '../../data/organizationData';

/**
 * Call-to-Action Section Component
 * Encourages user engagement and conversion
 * @param {function} setActiveSection - Function to navigate to sections
 */
const CTASection = ({ setActiveSection }) => {
  return (
    <div className="py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC41Ij48cGF0aCBkPSJNMzYgMzRWMTRoLTJ2MjBoMnptMC0zMGgydjEwaC0yVjR6bTAgNDBoMnYxMGgtMnYtMTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] "></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            <span className="font-semibold text-sm">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Preserve Heritage?
          </h2>
          
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Partner with Zanzibar's leading heritage conservation organization. 
            Let's work together to protect cultural treasures for future generations.
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Option 1: Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all border border-white/20 group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Start a Project</h3>
            <p className="text-amber-100 mb-6">
              Discuss your heritage conservation needs with our expert team.
            </p>
            <Button 
              variant="outline" 
              fullWidth
              onClick={() => setActiveSection('contact')}
              icon={ArrowRight}
            >
              Contact Us
            </Button>
          </div>

          {/* Option 2: Schedule */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all border border-white/20 group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Book Consultation</h3>
            <p className="text-amber-100 mb-6">
              Schedule a free consultation to explore collaboration opportunities.
            </p>
            <Button 
              variant="outline" 
              fullWidth
              icon={ArrowRight}
            >
              Schedule Now
            </Button>
          </div>

          {/* Option 3: Resources */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all border border-white/20 group">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Download className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Get Resources</h3>
            <p className="text-amber-100 mb-6">
              Download our comprehensive guide to heritage preservation.
            </p>
            <Button 
              variant="outline" 
              fullWidth
              icon={Download}
            >
              Download Guide
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-3 text-amber-300" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <a 
                href={`tel:${organizationData.contact.phone}`}
                className="text-amber-100 hover:text-white transition-colors"
              >
                {organizationData.contact.phone}
              </a>
            </div>

            <div>
              <Mail className="w-8 h-8 mx-auto mb-3 text-amber-300" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <a 
                href={`mailto:${organizationData.contact.email}`}
                className="text-amber-100 hover:text-white transition-colors"
              >
                {organizationData.contact.email}
              </a>
            </div>

            <div>
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-amber-300" />
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-amber-100">
                {organizationData.contact.address}<br />
                {organizationData.contact.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple CTA Section (Alternative Layout)
 */
export const SimpleCTA = ({ setActiveSection }) => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Preserve Heritage Together
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join us in protecting Zanzibar's cultural treasures for future generations
        </p>
        <ButtonGroup className="justify-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => setActiveSection('contact')}
            icon={ArrowRight}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setActiveSection('services')}
          >
            Learn More
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

/**
 * Newsletter CTA Section
 */
export const NewsletterCTA = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <FileText className="w-16 h-16 mx-auto mb-6 text-white/90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Updated on Heritage News
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Subscribe to our newsletter for the latest conservation updates and insights
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-amber-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-white/70 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default CTASection;