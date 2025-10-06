// Services section 
import React, { useState } from 'react';
import { Archive, Building2, BookOpen, CheckCircle2, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import ServiceCard from './ServiceCard';
import ServiceFeatures from './ServiceFeatures';
import { servicesData } from '../../data/servicesData';

/**
 * Services Section Component
 * Main services showcase section
 */
const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Initial meeting to understand your needs and objectives"
    },
    {
      number: "02",
      title: "Assessment",
      description: "Comprehensive evaluation and feasibility study"
    },
    {
      number: "03",
      title: "Planning",
      description: "Detailed project plan and resource allocation"
    },
    {
      number: "04",
      title: "Implementation",
      description: "Professional execution with ongoing monitoring"
    },
    {
      number: "05",
      title: "Evaluation",
      description: "Performance review and continuous improvement"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          subtitle="What We Do"
          title="Professional Heritage Services"
          description="Comprehensive solutions for heritage conservation, records management, and capacity building"
        />

        {/* Services Grid */}
        <div className="space-y-12 mb-20">
          {servicesData.map((service, idx) => {
            const Icon = eval(service.icon);
            const isReverse = idx % 2 !== 0;
            
            return (
              <div
                key={service.id}
                className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Service Content */}
                <div className="flex-1">
                  <ServiceCard service={service} onLearnMore={() => setSelectedService(service)} />
                </div>

                {/* Service Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl transform ${isReverse ? 'rotate-3' : '-rotate-3'} group-hover:${isReverse ? 'rotate-6' : '-rotate-6'} transition-transform duration-500 opacity-20`}></div>
                    <img
                      src={`https://images.unsplash.com/photo-${
                        idx === 0 ? '1568667256549-094345857637' : 
                        idx === 1 ? '1564501049412-61c2a3083791' : 
                        '1523240795612-9a054b0db644'
                      }?w=800&q=80`}
                      alt={service.title}
                      className="relative rounded-3xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Features Section */}
        {selectedService && (
          <ServiceFeatures service={selectedService} onClose={() => setSelectedService(null)} />
        )}

        {/* Process Section */}
        <div className="my-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology ensuring successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 z-0"></div>
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform relative z-10">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="my-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ZAHEFO Services
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Excellence",
                description: "ISO-compliant processes and UNESCO-approved methodologies"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "25+ years of combined experience in heritage management"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "500+ successful projects across East Africa"
              },
              {
                icon: CheckCircle2,
                title: "Client Focused",
                description: "Tailored solutions meeting your specific requirements"
              }
            ].map((reason, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-10 h-10 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="my-20 bg-gradient-to-br from-amber-900 to-amber-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Service Packages
            </h3>
            <p className="text-amber-100 max-w-2xl mx-auto">
              Choose the package that best fits your needs, or let us create a custom solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "From $5,000",
                description: "Perfect for small projects and organizations",
                features: [
                  "Initial consultation",
                  "Basic assessment",
                  "Project planning",
                  "Implementation support",
                  "3 months follow-up"
                ]
              },
              {
                name: "Professional",
                price: "From $15,000",
                description: "Comprehensive solution for medium projects",
                features: [
                  "Everything in Starter",
                  "Detailed feasibility study",
                  "Full implementation",
                  "Staff training",
                  "6 months support"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-scale solutions for large organizations",
                features: [
                  "Everything in Professional",
                  "Dedicated project manager",
                  "Custom development",
                  "Ongoing consultation",
                  "12 months support"
                ]
              }
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`
                  relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2
                  ${pkg.popular ? 'border-amber-300 scale-105' : 'border-white/20'}
                  hover:bg-white/15 transition-all
                `}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-300 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold mb-4">{pkg.price}</div>
                <p className="text-amber-100 mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "primary" : "outline"}
                  fullWidth
                  icon={ArrowRight}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div className="my-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            We Serve Diverse Clients
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our services are tailored to meet the unique needs of various organizations
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏛️", name: "Government Agencies", count: "15+" },
              { icon: "🏢", name: "Private Companies", count: "30+" },
              { icon: "🎓", name: "Educational Institutions", count: "20+" },
              { icon: "🤝", name: "NGOs & Non-Profits", count: "25+" }
            ].map((client, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-5xl mb-4">{client.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{client.name}</h4>
                <p className="text-amber-600 font-semibold">{client.count} Clients</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help preserve your heritage and manage your records
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Compact Services Section (Alternative)
 */
export const CompactServicesSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          description="Professional heritage management solutions"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = eval(service.icon);
            return (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="ghost" icon={ArrowRight}>
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;