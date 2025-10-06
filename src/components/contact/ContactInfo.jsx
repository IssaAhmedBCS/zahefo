// Contact info 
import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin, Clock, MessageCircle } from 'lucide-react';
import { organizationData } from '../../data/organizationData';

/**
 * Contact Info Component
 * Displays organization contact information
 * @param {boolean} compact - Compact version
 */
const ContactInfo = ({ compact = false }) => {
  const contactDetails = [
    {
      icon: MapPin,
      label: 'Address',
      value: `${organizationData.contact.address}\n${organizationData.contact.city}`,
      link: '#map',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: organizationData.contact.phone,
      link: `tel:${organizationData.contact.phone}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: organizationData.contact.email,
      link: `mailto:${organizationData.contact.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      label: 'Website',
      value: organizationData.contact.website,
      link: `https://${organizationData.contact.website}`,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: organizationData.socialMedia.facebook, label: 'Facebook' },
    { icon: Twitter, url: organizationData.socialMedia.twitter, label: 'Twitter' },
    { icon: Instagram, url: organizationData.socialMedia.instagram, label: 'Instagram' },
    { icon: Linkedin, url: organizationData.socialMedia.linkedin, label: 'LinkedIn' }
  ];

  if (compact) {
    return (
      <div className="space-y-4">
        {contactDetails.map((detail, idx) => (
          <a
            key={idx}
            href={detail.link}
            className="flex items-center gap-4 text-gray-700 hover:text-amber-600 transition-colors"
          >
            <detail.icon className="w-5 h-5" />
            <div>
              <div className="font-semibold text-sm">{detail.label}</div>
              <div className="text-sm whitespace-pre-line">{detail.value}</div>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white shadow-xl">
      <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
      <p className="text-amber-100 mb-8">
        Reach out to us through any of these channels. We're here to help!
      </p>

      {/* Contact Details */}
      <div className="space-y-6 mb-8">
        {contactDetails.map((detail, idx) => (
          <a
            key={idx}
            href={detail.link}
            className="flex items-start gap-4 group"
          >
            <div className={`
              w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
              bg-gradient-to-br ${detail.color}
              group-hover:scale-110 transition-transform duration-300 shadow-lg
            `}>
              <detail.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1 group-hover:text-amber-100 transition-colors">
                {detail.label}
              </h4>
              <p className="text-amber-100 text-sm whitespace-pre-line">
                {detail.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Social Media */}
      <div className="pt-8 border-t border-white/20">
        <h4 className="font-semibold mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Response Promise */}
      <div className="mt-8 pt-8 border-t border-white/20">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-200 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold mb-1">Quick Response Guarantee</h4>
            <p className="text-amber-100 text-sm">
              We aim to respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Contact Info Cards (Alternative - Grid Layout)
 */
export const ContactInfoCards = () => {
  const contacts = [
    {
      icon: Phone,
      title: 'Call Us',
      value: organizationData.contact.phone,
      action: `tel:${organizationData.contact.phone}`,
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: organizationData.contact.email,
      action: `mailto:${organizationData.contact.email}`,
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: organizationData.contact.city,
      action: '#',
      color: 'red'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Chat with us',
      action: '#',
      color: 'purple'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contacts.map((contact, idx) => (
        <a
          key={idx}
          href={contact.action}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center group"
        >
          <div className={`
            w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
            bg-${contact.color}-100 group-hover:bg-${contact.color}-200 transition-colors
          `}>
            <contact.icon className={`w-8 h-8 text-${contact.color}-600`} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
          <p className="text-gray-600 text-sm">{contact.value}</p>
        </a>
      ))}
    </div>
  );
};

/**
 * Contact Info List (Alternative - Simple)
 */
export const ContactInfoList = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-amber-600" />
          <a href={`tel:${organizationData.contact.phone}`} className="text-gray-700 hover:text-amber-600">
            {organizationData.contact.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-amber-600" />
          <a href={`mailto:${organizationData.contact.email}`} className="text-gray-700 hover:text-amber-600">
            {organizationData.contact.email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-amber-600 mt-1" />
          <span className="text-gray-700">
            {organizationData.contact.address}<br />
            {organizationData.contact.city}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;