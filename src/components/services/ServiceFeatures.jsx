// Service features 
import React from 'react';
import { X, CheckCircle2, Download, Users, Clock, Award, ArrowRight } from 'lucide-react';
import Button from '../shared/Button';

/**
 * Service Features Component
 * Detailed modal/section showing all service features
 * @param {object} service - Service data
 * @param {function} onClose - Close callback
 */
const ServiceFeatures = ({ service, onClose }) => {
  const Icon = eval(service.icon);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className={`bg-gradient-to-br ${service.gradient} p-8 md:p-12 text-white sticky top-0 z-10`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <div className="text-white/90 font-semibold mb-2">{service.tagline}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
              <p className="text-white/90 text-lg">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Clients Served</div>
                <div className="font-bold text-gray-900">200+</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Avg. Timeline</div>
                <div className="font-bold text-gray-900">3-6 months</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Success Rate</div>
                <div className="font-bold text-gray-900">98%</div>
              </div>
            </div>
          </div>

          {/* All Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Feature List</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
            <div className="flex flex-wrap gap-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-full text-amber-900 font-medium"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Delivery Process</h3>
            <div className="space-y-4">
              {[
                { title: "Initial Consultation", description: "Understanding your requirements and goals" },
                { title: "Needs Assessment", description: "Comprehensive evaluation and feasibility study" },
                { title: "Solution Design", description: "Custom plan tailored to your organization" },
                { title: "Implementation", description: "Professional execution with quality assurance" },
                { title: "Training & Support", description: "Team training and ongoing assistance" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1 border-l-2 border-gray-200 pl-6 pb-6">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Story</h3>
            <p className="text-gray-700 mb-4">
              "ZAHEFO's {service.title.toLowerCase()} transformed our organization. Their professional 
              approach and attention to detail exceeded our expectations. We saw immediate improvements 
              in efficiency and effectiveness."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <div className="font-bold text-gray-900">John Doe</div>
                <div className="text-sm text-gray-600">Director, Heritage Museum</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-amber-100 mb-6">
              Let's discuss how this service can benefit your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" icon={ArrowRight}>
                Schedule Consultation
              </Button>
              <Button 
                variant="primary" 
                size="lg" 
                icon={Download}
                className="bg-white text-amber-900 hover:bg-gray-100"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Service Features Grid (Alternative - Non-Modal)
 */
export const ServiceFeaturesGrid = ({ service }) => {
  const Icon = eval(service.icon);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full mb-6`}>
            <Icon className="w-6 h-6" />
            <span className="font-semibold">{service.title}</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features designed to deliver exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
              <p className="text-gray-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Service Features List (Compact)
 */
export const ServiceFeaturesList = ({ features }) => {
  return (
    <div className="space-y-3">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;