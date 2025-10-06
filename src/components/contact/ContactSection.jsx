// Contact section 
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import MapEmbed from './MapEmbed';
import { organizationData } from '../../data/organizationData';

/**
 * Contact Section Component
 * Main contact page section
 */
const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: organizationData.contact.phone,
      action: `tel:${organizationData.contact.phone}`,
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      value: organizationData.contact.email,
      action: `mailto:${organizationData.contact.email}`,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      value: `${organizationData.contact.address}, ${organizationData.contact.city}`,
      action: "#map",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      value: "Schedule Online",
      action: "#schedule",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const faq = [
    {
      question: "How long does a typical heritage project take?",
      answer: "Project timelines vary depending on scope, but most projects take 3-6 months from initial consultation to completion."
    },
    {
      question: "Do you work with international organizations?",
      answer: "Yes, we regularly collaborate with international partners including UNESCO, World Bank, and various NGOs."
    },
    {
      question: "What areas do you serve?",
      answer: "While based in Zanzibar, we serve clients across East Africa including Tanzania, Kenya, Uganda, and beyond."
    },
    {
      question: "How can I support your heritage conservation work?",
      answer: "There are many ways to support us: donations, volunteering, partnerships, or simply spreading awareness about heritage preservation."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? We'd love to hear from you. Contact us today to discuss how we can help preserve your heritage."
        />

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.action}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`
                w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                bg-gradient-to-br ${method.color}
                group-hover:scale-110 transition-transform duration-300
              `}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="text-gray-900 font-semibold text-sm">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Form */}
          <div>
            {formSubmitted ? (
              <div className="bg-green-50 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <ContactForm onSuccess={() => setFormSubmitted(true)} />
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <ContactInfo />
            
            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-gray-600 flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>For urgent matters outside office hours, please send an email and we'll respond as soon as possible.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <MapEmbed />

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faq.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-amber-600 text-xl flex-shrink-0">Q:</span>
                  <span>{item.question}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed ml-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your question answered?
            </p>
            <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              View Full FAQ →
            </button>
          </div>
        </div>

        {/* Alternative Contact Options */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Prefer to Meet in Person?</h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation at our office or request a site visit for your heritage project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-900 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Schedule Office Visit
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white/10 rounded-xl font-semibold transition-all">
              Request Site Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple Contact Section (Alternative)
 */
export const SimpleContactSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          description="Get in touch with our team"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo compact />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;