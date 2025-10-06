// About section 
import React from 'react';
import { Building2, Users, Award, TrendingUp, Globe, Heart, Target, Shield } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import { organizationData } from '../../data/organizationData';
import VisionMissionCards from './VisionMissionCards';
import CoreValues from './CoreValues';

/**
 * About Section Component
 * Main about section with organization overview
 */
const AboutSection = () => {
  const milestones = [
    {
      year: "2000",
      title: "Foundation Established",
      description: "ZAHEFO was founded to preserve Zanzibar's cultural heritage"
    },
    {
      year: "2005",
      title: "UNESCO Partnership",
      description: "Became official UNESCO World Heritage partner"
    },
    {
      year: "2010",
      title: "50th Heritage Site",
      description: "Successfully preserved our 50th heritage site"
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Received global awards for conservation excellence"
    },
    {
      year: "2020",
      title: "Digital Archive Launch",
      description: "Launched comprehensive digital heritage archive"
    },
    {
      year: "2025",
      title: "25 Years of Excellence",
      description: "Celebrating a quarter century of heritage preservation"
    }
  ];

  const achievements = [
    {
      icon: Building2,
      value: "50+",
      label: "Heritage Sites Preserved",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Users,
      value: "1000+",
      label: "Community Members Engaged",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      value: "15+",
      label: "International Awards",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      value: "100+",
      label: "Training Programs Delivered",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          subtitle="About ZAHEFO"
          title="Heritage Preservation Leaders"
          description="Established in 2000, we've been at the forefront of cultural heritage conservation in East Africa"
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Side - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
                alt="ZAHEFO Heritage Work"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-1">25+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Heritage Sites</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6 w-fit">
              <Globe className="w-4 h-4 text-amber-600" />
              <span className="text-amber-900 font-semibold text-sm">Est. {organizationData.established}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {organizationData.description}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We pursue our mission through community engagement and partnership with National 
              heritage institutions and other stakeholders in order to safeguard the integrity 
              and create sustainable use of the diverse Zanzibar cultural heritage resources.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { icon: Shield, text: "ISO-compliant heritage management processes" },
                { icon: Users, text: "Community-centered conservation approach" },
                { icon: Award, text: "UNESCO World Heritage partnership" },
                { icon: Globe, text: "International best practices and standards" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <VisionMissionCards />

        {/* Achievements Section */}
        <div className="my-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact by the Numbers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
                  bg-gradient-to-br ${achievement.color}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="my-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Journey
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From our founding to today, explore the milestones that shaped ZAHEFO into 
            East Africa's leading heritage conservation organization
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="inline-block bg-amber-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-amber-900 font-bold">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  {idx % 2 === 0 && <div className="hidden lg:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <CoreValues />

        {/* Partners Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Partners & Collaborators
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Working together with leading organizations to preserve cultural heritage
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "UNESCO", logo: "🏛️" },
              { name: "World Monuments Fund", logo: "🌍" },
              { name: "Ministry of Culture", logo: "🏛️" },
              { name: "Tourism Board", logo: "✈️" },
              { name: "National Museum", logo: "🎨" },
              { name: "University Partners", logo: "🎓" },
              { name: "NGO Network", logo: "🤝" },
              { name: "Private Sector", logo: "💼" }
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <div className="text-sm font-medium text-gray-700">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Compact About Section (Alternative)
 */
export const CompactAboutSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle
          title="About ZAHEFO"
          description={organizationData.description}
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">25+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Heritage Sites</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
            <div className="text-gray-600">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;