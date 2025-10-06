// Contact page 
import React from 'react';
import ContactSection from '../components/contact/ContactSection';
import { Mail, Phone, MapPin, MessageCircle, Clock, Calendar } from 'lucide-react';

/**
 * Contact Page
 * Complete contact page
 */
const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] "></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-5 h-5 text-cyan-300" />
              <span className="font-semibold text-sm">Get In Touch</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Work
              <br />
              <span className="text-cyan-300">Together</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Have a heritage project in mind? We'd love to hear from you. 
              Contact us today to discuss how we can help.
            </p>

            {/* Quick Contact Options */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+255777430985"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl border border-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:info@zahefo.com"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl border border-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl border border-white/20 transition-all">
                <Calendar className="w-5 h-5" />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>

          {/* Response Time */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Quick Response Guarantee</h3>
            <p className="text-cyan-100">
              We respond to all inquiries within 24 hours during business days
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Content */}
      <ContactSection />

      {/* Additional Contact Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our team in real-time during office hours",
                action: "Start Chat",
                color: "blue"
              },
              {
                icon: Calendar,
                title: "Book Consultation",
                description: "Schedule a free 30-minute consultation call",
                action: "Schedule Now",
                color: "green"
              },
              {
                icon: MapPin,
                title: "Visit Office",
                description: "Come see us at our Stone Town location",
                action: "Get Directions",
                color: "red"
              }
            ].map((method, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className={`w-16 h-16 bg-${method.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className={`w-8 h-8 text-${method.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <button className={`px-6 py-3 bg-${method.color}-600 text-white rounded-xl font-semibold hover:bg-${method.color}-700 transition-all`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Simple Contact Page
 */
export const SimpleContact = () => {
  return (
    <div className="py-20">
      <ContactSection />
    </div>
  );
};

export default Contact;