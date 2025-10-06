// Stats grid 
import React from 'react';
import { Clock, Building2, BookOpen, Users, Award, Globe, TrendingUp, Target } from 'lucide-react';
import AnimatedCounter from '../shared/AnimatedCounter';
import { organizationData } from '../../data/organizationData';

/**
 * Stats Grid Component
 * Displays key statistics and metrics
 */
const StatsGrid = () => {
  const stats = [
    {
      icon: Clock,
      value: 25,
      suffix: "+",
      label: "Years of Excellence",
      description: "Leading heritage conservation since 2000",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      value: 50,
      suffix: "+",
      label: "Heritage Sites Preserved",
      description: "Protecting cultural treasures across Zanzibar",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: BookOpen,
      value: 100,
      suffix: "+",
      label: "Training Programs Delivered",
      description: "Building capacity in heritage management",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      value: 30,
      suffix: "+",
      label: "Community Partners",
      description: "Collaborative preservation efforts",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "International Awards",
      description: "Recognition for conservation excellence",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Globe,
      value: 5,
      suffix: "",
      label: "Countries Reached",
      description: "Regional impact across East Africa",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      description: "Successful heritage interventions",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Target,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Excellence in project delivery",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center group"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className={`
            w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center
            bg-gradient-to-br ${stat.color}
            group-hover:scale-110 transition-transform duration-300
          `}>
            <stat.icon className="w-8 h-8 text-white" />
          </div>
          
          <div className="text-5xl font-bold mb-2">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
          </div>
          
          <div className="text-white font-semibold mb-2">{stat.label}</div>
          <div className="text-sm text-gray-300">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

/**
 * Simple Stats Grid (Alternative)
 */
export const SimpleStatsGrid = () => {
  const simpleStats = organizationData.stats;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {simpleStats.map((stat, idx) => {
        const Icon = eval(stat.icon);
        return (
          <div key={idx} className="text-center">
            <Icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">
              <AnimatedCounter end={parseInt(stat.value)} suffix={stat.value.replace(/[0-9]/g, '')} />
            </div>
            <div className="text-gray-200">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

/**
 * Stats Cards (Detailed Version)
 */
export const StatsCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Clock, value: "25+", label: "Years", color: "blue", trend: "+5%" },
        { icon: Building2, value: "50+", label: "Sites", color: "amber", trend: "+12%" },
        { icon: BookOpen, value: "100+", label: "Programs", color: "green", trend: "+8%" },
        { icon: Users, value: "30+", label: "Partners", color: "purple", trend: "+15%" }
      ].map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-6">
            <div className={`w-14 h-14 bg-${stat.color}-100 rounded-xl flex items-center justify-center`}>
              <stat.icon className={`w-7 h-7 text-${stat.color}-600`} />
            </div>
            <div className="text-green-600 font-semibold text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {stat.trend}
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

/**
 * Stats Timeline (Interactive)
 */
export const StatsTimeline = () => {
  const timelineData = [
    { year: "2000", sites: 0, programs: 0 },
    { year: "2005", sites: 10, programs: 20 },
    { year: "2010", sites: 25, programs: 50 },
    { year: "2015", sites: 35, programs: 75 },
    { year: "2020", sites: 45, programs: 90 },
    { year: "2025", sites: 50, programs: 100 }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Growth Over Time</h3>
      
      <div className="space-y-6">
        {timelineData.map((data, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <div className="w-20 font-bold text-gray-900">{data.year}</div>
            
            <div className="flex-1">
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Heritage Sites</span>
                  <span className="font-bold text-amber-600">{data.sites}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-1000"
                    style={{ width: `${(data.sites / 50) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Training Programs</span>
                  <span className="font-bold text-green-600">{data.programs}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-1000"
                    style={{ width: `${(data.programs / 100) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;