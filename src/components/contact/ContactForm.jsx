// Contact form 
import React, { useState } from 'react';
import { Send, User, Mail as MailIcon, MessageSquare, Briefcase } from 'lucide-react';
import Button from '../shared/Button';
import { validateContactForm } from '../../utils/validators';

/**
 * Contact Form Component
 * Form for user inquiries
 * @param {function} onSuccess - Success callback
 */
const ContactForm = ({ onSuccess, compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Records & Information Management',
    'Cultural Heritage Management',
    'Training & Capacity Building',
    'Consultation Services',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        service: '',
        message: ''
      });
      
      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  };

  return (
    <div className={`bg-white rounded-2xl ${compact ? 'p-6' : 'p-8 shadow-xl'}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
        <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`
                w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all
                ${errors.name 
                  ? 'border-red-500 focus:ring-4 focus:ring-red-100' 
                  : 'border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'
                }
              `}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MailIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`
                w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all
                ${errors.email 
                  ? 'border-red-500 focus:ring-4 focus:ring-red-100' 
                  : 'border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'
                }
              `}
              placeholder="john@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        {!compact && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              placeholder="+255 777 123456"
            />
          </div>
        )}

        {/* Service Selection */}
        {!compact && (
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Service Interested In <span className="text-gray-400 text-sm">(Optional)</span>
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all appearance-none bg-white"
              >
                <option value="">Select a service</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Subject Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 rounded-xl border-2 outline-none transition-all
              ${errors.subject 
                ? 'border-red-500 focus:ring-4 focus:ring-red-100' 
                : 'border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'
              }
            `}
            placeholder="How can we help you?"
          />
          {errors.subject && (
            <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={compact ? "4" : "6"}
              className={`
                w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all resize-none
                ${errors.message 
                  ? 'border-red-500 focus:ring-4 focus:ring-red-100' 
                  : 'border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'
                }
              `}
              placeholder="Tell us more about your inquiry..."
            ></textarea>
          </div>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-600">
            By submitting this form, you agree to our{' '}
            <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
              Privacy Policy
            </a>
            . We respect your privacy and will never share your information.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          icon={Send}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {/* Alternative Contact */}
      {!compact && (
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Prefer to email directly?{' '}
            <a 
              href="mailto:info@zahefo.com" 
              className="text-amber-600 hover:text-amber-700 font-semibold"
            >
              info@zahefo.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * Inline Contact Form (Alternative - Minimal)
 */
export const InlineContactForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;