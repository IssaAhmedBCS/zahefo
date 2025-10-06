// Hero section 
import React from 'react';
import { Globe, ArrowRight, Play, Award, Users, TrendingUp, BookOpen, Archive, CheckCircle2, Clock, Building2  } from 'lucide-react';
import Button from '../shared/Button';
import { organizationData } from '../../data/organizationData';

/**
 * Hero Section Component
 * Main landing section with call-to-action
 * @param {function} setActiveSection - Function to navigate to sections
 */
const Hero = ({ setActiveSection }) => {
  const stats = organizationData.stats;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-amber-900 to-gray-900">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-float"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="space-y-8 animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 animate-fade-in">
            <Globe className="w-5 h-5 text-amber-300" />
            <span className="text-white font-medium">UNESCO World Heritage Partner</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Preserving<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 animate-gradient">
                Zanzibar's Legacy
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {organizationData.tagline}
          </p>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leading heritage conservation in East Africa through professional management, 
            community engagement, and sustainable preservation practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => setActiveSection('services')}
              icon={ArrowRight}
              className="shadow-2xl shadow-amber-500/50"
            >
              Explore Our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setActiveSection('heritage')}
              icon={Play}
            >
              Watch Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto">
            {stats.map((stat, idx) => {
              const Icon = eval(stat.icon);
              return (
                <div 
                  key={idx} 
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`
                    w-12 h-12 bg-gradient-to-br ${stat.color} 
                    rounded-xl flex items-center justify-center mb-3 mx-auto
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Social Proof */}
          <div className="pt-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="text-sm">UNESCO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span className="text-sm">1000+ Community Members</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span className="text-sm">25 Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-4 bg-white/70 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        .animate-float { animation: float linear infinite; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

/**
 * Hero Variant 2 - With Background Image
 */
export const HeroWithImage = ({ setActiveSection }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
          alt="Zanzibar Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Heritage<br />Conservation
        </h1>
        <p className="text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Preserving Zanzibar's cultural legacy for future generations
        </p>
        <Button 
          variant="primary" 
          size="lg" 
          onClick={() => setActiveSection('about')}
          icon={ArrowRight}
        >
          Discover More
        </Button>
      </div>
    </div>
  );
};

/**
 * Hero Variant 3 - Split Screen
 */
export const HeroSplit = ({ setActiveSection }) => {
  return (
    <div className="relative min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Content */}
      <div className="flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="text-amber-900 font-semibold text-sm">Est. 2000</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Zanzibar Heritage Foundation
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Professional heritage conservation services preserving Zanzibar's unique cultural legacy through community engagement and sustainable practices.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setActiveSection('services')}
              icon={ArrowRight}
            >
              Our Services
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setActiveSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-1">25+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Sites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative min-h-[400px] lg:min-h-screen">
        <img 
          src="https://images.unsplash.com/photo-1609198092357-cc7c9f39f1ca?w=1200&q=80"
          alt="Old Fort Zanzibar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;