// Impact section 
import React from 'react';
import { TrendingUp, Award, Users, Globe, Target, Heart, Lightbulb, Shield } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import StatsGrid from './StatsGrid';
import BoardMembers from './BoardMembers';
import Achievements from './Achievements';
import { organizationData } from '../../data/organizationData';

/**
 * Impact Section Component
 * Main section showcasing organization's impact
 */
const ImpactSection = () => {
  const impactAreas = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Our work has been recognized internationally, establishing ZAHEFO as a leader in heritage conservation across East Africa.",
      metrics: ["UNESCO Partnership", "15+ International Awards", "Regional Leadership"]
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "We've engaged over 1,000 community members in heritage preservation, creating local ownership and sustainable practices.",
      metrics: ["30+ Communities", "500+ Training Hours", "Local Employment"]
    },
    {
      icon: Shield,
      title: "Heritage Protection",
      description: "Successfully preserved and restored 50+ heritage sites, preventing cultural loss and promoting sustainable tourism.",
      metrics: ["50+ Sites Protected", "98% Success Rate", "Zero Major Loss"]
    },
    {
      icon: Lightbulb,
      title: "Knowledge Transfer",
      description: "Delivered 100+ training programs, building local capacity in heritage management and conservation techniques.",
      metrics: ["100+ Programs", "1,000+ Trained", "5 Countries"]
    }
  ];

  const testimonials = [
    {
      quote: "ZAHEFO's work has transformed how we approach heritage conservation in our community. Their inclusive methods ensure everyone benefits from preservation efforts.",
      author: "Dr. Amina Mohammed",
      role: "Director, National Museum of Tanzania",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      quote: "The training programs provided by ZAHEFO equipped our team with cutting-edge skills in records management. Outstanding professional development.",
      author: "John Kimani",
      role: "Records Manager, Government Agency",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      quote: "As a local community leader, I've seen firsthand how ZAHEFO's approach preserves our heritage while creating economic opportunities.",
      author: "Fatma Ali",
      role: "Community Leader, Stone Town",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <TrendingUp className="w-4 h-4 text-amber-300" />
            <span className="text-white font-semibold text-sm uppercase tracking-wide">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Making a Difference
          </h2>
          <div className="w-24 h-1.5 bg-amber-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Measuring success through tangible results and lasting positive change in communities across Zanzibar and East Africa
          </p>
        </div>

        {/* Stats Grid */}
        <StatsGrid />

        {/* Impact Areas */}
        <div className="my-20">
          <h3 className="text-3xl font-bold text-center mb-12">Areas of Impact</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3">{area.title}</h4>
                    <p className="text-gray-200 mb-4 leading-relaxed">{area.description}</p>
                    
                    <div className="space-y-2">
                      {area.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Story */}
        <div className="my-20 bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200 font-semibold text-sm">Success Story</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6">
                Transforming Stone Town's Heritage Landscape
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                In 2015, we embarked on our most ambitious project yet - the comprehensive restoration 
                of Stone Town's historic core. Through collaboration with local communities, international 
                partners, and innovative conservation techniques, we've successfully preserved 25 historic 
                structures while creating 150+ local jobs.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-4xl font-bold text-amber-300 mb-1">25</div>
                  <div className="text-sm text-gray-300">Sites Restored</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-300 mb-1">150+</div>
                  <div className="text-sm text-gray-300">Jobs Created</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-300 mb-1">$2M</div>
                  <div className="text-sm text-gray-300">Investment</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-amber-400 pl-6 italic text-gray-200">
                "This project didn't just save buildings - it revitalized our entire community and gave 
                us pride in our heritage."
                <footer className="mt-2 text-sm text-gray-300">- Local Community Leader</footer>
              </blockquote>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
                alt="Stone Town Heritage"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <div className="font-bold">UNESCO Award</div>
                    <div className="text-sm text-gray-600">2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Board Members */}
        <BoardMembers />

        {/* Achievements */}
        <Achievements />

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">What People Say</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-200 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-300">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <Target className="w-16 h-16 text-amber-300 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Be Part of Our Impact</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Whether through partnership, volunteering, 
            or support, your contribution helps preserve heritage for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-900 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white/10 rounded-xl font-semibold transition-all">
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Compact Impact Section (Alternative)
 */
export const CompactImpactSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact in Numbers</h2>
        <StatsGrid />
      </div>
    </div>
  );
};

export default ImpactSection;