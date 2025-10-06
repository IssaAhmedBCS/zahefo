// Features section 
import React from 'react';
import { 
  Archive, Building2, BookOpen, Users, Shield, Award, 
  Globe, Heart, Target, Sparkles, CheckCircle2, ArrowRight 
} from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { FeatureCard } from '../shared/Card';
import Button from '../shared/Button';

/**
 * Features Section Component
 * Showcases organization's key features and benefits
 */
const FeaturesSection = () => {
  const features = [
    {
      icon: Archive,
      title: "Records Management",
      description: "Professional information and records management solutions meeting international standards for organizations of all sizes.",
      color: "blue"
    },
    {
      icon: Building2,
      title: "Heritage Conservation",
      description: "Expert preservation of cultural heritage sites using UNESCO-approved methodologies and sustainable practices.",
      color: "amber"
    },
    {
      icon: BookOpen,
      title: "Training Programs",
      description: "Comprehensive capacity building programs developing professional expertise in heritage management.",
      color: "green"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Inclusive programs that involve local communities as active partners in heritage preservation.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO-compliant processes ensuring the highest standards in all our conservation and management services.",
      color: "blue"
    },
    {
      icon: Award,
      title: "International Recognition",
      description: "UNESCO partnership and global recognition for excellence in cultural heritage management.",
      color: "amber"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Professional Excellence",
      description: "25+ years of expertise in heritage conservation and records management"
    },
    {
      icon: CheckCircle2,
      title: "Sustainable Practices",
      description: "Environmentally conscious approaches that ensure long-term preservation"
    },
    {
      icon: CheckCircle2,
      title: "Community Focus",
      description: "Local engagement ensuring cultural authenticity and community ownership"
    },
    {
      icon: CheckCircle2,
      title: "Global Standards",
      description: "UNESCO-approved methodologies and international best practices"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          subtitle="Why Choose ZAHEFO"
          title="Professional Heritage Management"
          description="Comprehensive solutions combining international expertise with local knowledge to preserve Zanzibar's cultural legacy"
        />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits List */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-amber-900 font-semibold text-sm">Our Advantages</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Heritage Conservation in East Africa
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 25 years of experience, ZAHEFO has established itself as the premier 
                organization for cultural heritage preservation in the region, combining 
                international standards with deep local knowledge.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <benefit.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="primary" icon={ArrowRight}>
                  Learn More About Us
                </Button>
              </div>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Archive className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Heritage Sites</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-gray-600 text-sm">Partners</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600 text-sm">Training Programs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", color: "blue" },
              { icon: Heart, title: "Passion", color: "red" },
              { icon: Users, title: "Community", color: "green" },
              { icon: Target, title: "Excellence", color: "amber" }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="group"
              >
                <div className={`
                  w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center
                  bg-gradient-to-br from-${value.color}-100 to-${value.color}-200
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <value.icon className={`w-10 h-10 text-${value.color}-600`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple Features Section (Alternative Layout)
 */
export const SimpleFeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Standards",
      description: "UNESCO-approved methodologies"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Local engagement and ownership"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "ISO-compliant processes"
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Dedicated heritage professionals"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;