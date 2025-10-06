// Service card 
import React from 'react';
import { CheckCircle2, ArrowRight, Star, Archive, Building2, BookOpen } from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

/**
 * Service Card Component
 * Individual service card with details
 * @param {object} service - Service data object
 * @param {function} onLearnMore - Learn more callback
 */
const ServiceCard = ({ service, onLearnMore, compact = false }) => {
  const Icon = eval(service.icon);

  if (compact) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
        <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm">{service.description}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Header */}
      <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full mb-6`}>
        <Icon className="w-6 h-6" />
        <span className="font-semibold">{service.tagline}</span>
      </div>
      
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.description}</p>
      
      {/* Features List */}
      <div className="space-y-3 mb-6">
        <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
        {service.features.slice(0, 4).map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
        {service.features.length > 4 && (
          <button 
            onClick={onLearnMore}
            className="text-amber-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-2"
          >
            <span>+{service.features.length - 4} more features</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Benefits Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.benefits.map((benefit, i) => (
          <Badge key={i} variant="primary" size="sm">
            {benefit}
          </Badge>
        ))}
      </div>

      {/* CTA */}
      <div className="flex gap-3">
        <Button variant="primary" icon={ArrowRight} onClick={onLearnMore}>
          Learn More
        </Button>
        <Button variant="secondary">
          Request Quote
        </Button>
      </div>
    </div>
  );
};

/**
 * Service Card Grid Item
 * Card optimized for grid layouts
 */
export const ServiceCardGrid = ({ service, onClick }) => {
  const Icon = eval(service.icon);

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
    >
      {/* Header with Gradient */}
      <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <Icon className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-white/90 text-sm">{service.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Quick Features */}
        <div className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <button className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/**
 * Service Card with Pricing
 */
export const ServiceCardWithPricing = ({ service, pricing }) => {
  const Icon = eval(service.icon);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-amber-400 transition-all">
      {/* Header */}
      <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white`}>
        <Icon className="w-10 h-10 mb-4" />
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">{pricing.amount}</span>
          <span className="text-white/80">/ {pricing.period}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="space-y-3 mb-8">
          {service.features.slice(0, 5).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <Button variant="primary" fullWidth icon={ArrowRight}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

/**
 * Service Comparison Card
 */
export const ServiceComparisonCard = ({ service, featured = false }) => {
  const Icon = eval(service.icon);

  return (
    <div className={`
      relative bg-white rounded-2xl p-8 
      ${featured ? 'border-4 border-amber-400 shadow-2xl scale-105' : 'border-2 border-gray-100 shadow-lg'}
      transition-all duration-300
    `}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-900 px-6 py-2 rounded-full font-bold text-sm">
          Recommended
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <Star className="w-5 h-5 text-amber-400 fill-current" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={featured ? "primary" : "secondary"} 
        fullWidth
      >
        Select Plan
      </Button>
    </div>
  );
};

export default ServiceCard;