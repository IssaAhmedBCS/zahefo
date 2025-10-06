// Core values 
import React from 'react';
import { Shield, Users, Award, Heart, Target, Compass, Lightbulb, HandHeart } from 'lucide-react';
import { organizationData } from '../../data/organizationData';

/**
 * Core Values Component
 * Displays organization's core values
 */
const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining highest standards in heritage preservation and professional conduct. We uphold ethical practices in all our operations.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Community",
      description: "Engaging local communities as partners in cultural heritage conservation. We believe in inclusive, participatory approaches.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering world-class heritage management services and training programs. We strive for continuous improvement.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated commitment to preserving Zanzibar's unique cultural legacy. Our team is driven by love for heritage.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing modern technologies and methodologies while respecting traditional practices and knowledge.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: HandHeart,
      title: "Collaboration",
      description: "Building strong partnerships with stakeholders, fostering teamwork and shared responsibility for heritage.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Lightbulb,
      title: "Sustainability",
      description: "Ensuring long-term viability of conservation efforts through sustainable practices and resource management.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Compass,
      title: "Transparency",
      description: "Operating with openness and accountability in all our projects, decisions, and communications with stakeholders.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="my-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
          <Heart className="w-4 h-4 text-amber-600" />
          <span className="text-amber-900 font-semibold text-sm uppercase tracking-wide">
            What Drives Us
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Core Values
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The principles that guide our work and define who we are as an organization
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="group relative"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Card */}
            <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                bg-gradient-to-br ${value.color}
                group-hover:scale-110 transition-transform duration-300
              `}>
                <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className={`
                absolute top-0 right-0 w-20 h-20 ${value.bgColor} rounded-bl-full opacity-0 
                group-hover:opacity-20 transition-opacity duration-300 -z-10
              `}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Values Statement */}
      <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
        <h4 className="text-2xl md:text-3xl font-bold mb-6">
          Values in Action
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
          These core values aren't just words on a page—they guide every decision we make, 
          every project we undertake, and every relationship we build. They represent our 
          commitment to excellence, integrity, and sustainable heritage conservation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Ethical", "Professional", "Sustainable", "Inclusive", "Innovative"].map((tag, idx) => (
            <span
              key={idx}
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Compact Core Values (Alternative Layout)
 */
export const CompactCoreValues = () => {
  const values = [
    { icon: Shield, title: "Integrity", color: "blue" },
    { icon: Users, title: "Community", color: "green" },
    { icon: Award, title: "Excellence", color: "amber" },
    { icon: Heart, title: "Passion", color: "red" }
  ];

  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Our Core Values
      </h3>
      
      <div className="grid md:grid-cols-4 gap-8">
        {values.map((value, idx) => (
          <div key={idx} className="text-center group">
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
  );
};

/**
 * Hexagon Values Layout
 */
export const HexagonValues = () => {
  return (
    <div className="py-20 bg-gray-50 rounded-3xl">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
        <p className="text-gray-600 mb-12">The foundation of everything we do</p>
        
        <div className="relative">
          {/* Center Value */}
          <div className="inline-block bg-gradient-to-br from-amber-500 to-amber-600 text-white p-12 rounded-3xl shadow-2xl">
            <Heart className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-2xl font-bold">Heritage First</h4>
          </div>

          {/* Surrounding Values */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: Shield, title: "Integrity" },
              { icon: Users, title: "Community" },
              { icon: Award, title: "Excellence" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <value.icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h5 className="font-bold text-gray-900">{value.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;