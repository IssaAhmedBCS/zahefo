// Vision and mission cards 
import React from 'react';
import { Target, Heart, Compass, Sparkles } from 'lucide-react';
import { organizationData } from '../../data/organizationData';

/**
 * Vision & Mission Cards Component
 * Displays organization's vision and mission in card format
 */
const VisionMissionCards = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 my-20">
      
      {/* Vision Card */}
      <div className="relative group">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
        
        {/* Card Content */}
        <div className="relative bg-white rounded-3xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Future Focus</h3>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {organizationData.vision}
          </p>

          {/* Key Points */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            {[
              "Sustainable heritage utilization",
              "Long-term preservation strategies",
              "Future generations focus"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Card */}
      <div className="relative group">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-20"></div>
        
        {/* Card Content */}
        <div className="relative bg-white rounded-3xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-1">
                <Compass className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Daily Purpose</h3>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {organizationData.mission}
          </p>

          {/* Key Points */}
          <div className="space-y-3 border-t border-gray-100 pt-6">
            {[
              "Community engagement priority",
              "Partnership-driven approach",
              "Added value creation"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Simple Vision Mission Layout (Alternative)
 */
export const SimpleVisionMission = () => {
  return (
    <div className="py-16 bg-gray-50 rounded-3xl">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-8">
          {/* Vision */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-amber-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">{organizationData.vision}</p>
            </div>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Mission */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">{organizationData.mission}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Split Vision Mission Layout
 */
export const SplitVisionMission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-0">
      {/* Vision Side */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-12 flex items-center justify-center">
        <div className="max-w-md">
          <Target className="w-12 h-12 mb-6 text-amber-200" />
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-amber-100 text-lg leading-relaxed">
            {organizationData.vision}
          </p>
        </div>
      </div>

      {/* Mission Side */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-12 flex items-center justify-center">
        <div className="max-w-md">
          <Heart className="w-12 h-12 mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            {organizationData.mission}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionCards;