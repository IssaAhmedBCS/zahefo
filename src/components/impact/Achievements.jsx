// Achievements 
import React from 'react';
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';

/**
 * Achievements Component
 * Showcases organization's awards and recognition
 */
const Achievements = () => {
  const achievements = [
    {
      year: "2023",
      title: "UNESCO Heritage Conservation Award",
      description: "Excellence in cultural heritage preservation and community engagement",
      icon: Award,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      year: "2022",
      title: "East African Heritage Leadership Award",
      description: "Regional recognition for innovative conservation methodologies",
      icon: Trophy,
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2021",
      title: "Sustainable Tourism Excellence",
      description: "Balancing heritage preservation with responsible tourism development",
      icon: Star,
      color: "from-green-400 to-green-600"
    },
    {
      year: "2020",
      title: "Community Engagement Award",
      description: "Outstanding partnership with local communities in heritage protection",
      icon: Medal,
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2019",
      title: "Digital Heritage Innovation",
      description: "Pioneering digital archiving and virtual heritage experiences",
      icon: Zap,
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2018",
      title: "Training Excellence Award",
      description: "Impact in capacity building and professional development",
      icon: Target,
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      year: "2020"
    },
    {
      name: "UNESCO Partnership",
      description: "World Heritage Centre",
      year: "2005"
    },
    {
      name: "Green Building Certification",
      description: "Sustainable Conservation Practices",
      year: "2019"
    },
    {
      name: "African Union Recognition",
      description: "Cultural Heritage Excellence",
      year: "2021"
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h3>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg">
          Our commitment to excellence has been recognized nationally and internationally
        </p>
      </div>

      {/* Awards Timeline */}
      <div className="relative mb-20">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-400 transform -translate-x-1/2"></div>

        {/* Awards */}
        <div className="space-y-12">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                idx % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-gradient-to-r ${achievement.color}`}>
                    <achievement.icon className="w-5 h-5 text-white" />
                    <span className="text-white font-bold">{achievement.year}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-200 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg bg-gradient-to-r ${achievement.color}`}></div>
              </div>

              {/* Spacer for alternating layout */}
              {idx % 2 === 0 && <div className="hidden lg:block"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
        <h4 className="text-2xl font-bold text-center mb-8">Certifications & Partnerships</h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h5 className="font-bold mb-2">{cert.name}</h5>
              <p className="text-sm text-gray-300 mb-2">{cert.description}</p>
              <p className="text-xs text-amber-300">Since {cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {[
          { label: "International Awards", value: "15+", icon: Trophy },
          { label: "Publications", value: "50+", icon: Star },
          { label: "Media Features", value: "100+", icon: Medal }
        ].map((metric, idx) => (
          <div
            key={idx}
            className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
          >
            <metric.icon className="w-12 h-12 text-amber-300 mx-auto mb-4" />
            <div className="text-5xl font-bold mb-2">{metric.value}</div>
            <div className="text-gray-200">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Simple Achievements List (Alternative)
 */
export const SimpleAchievements = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-6">Recent Awards</h3>
      {[
        { year: "2023", title: "UNESCO Heritage Award", icon: Award },
        { year: "2022", title: "Regional Leadership Award", icon: Trophy },
        { year: "2021", title: "Sustainable Tourism Excellence", icon: Star }
      ].map((award, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
        >
          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
            <award.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="font-bold text-white">{award.title}</div>
            <div className="text-sm text-gray-300">{award.year}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Achievements Carousel (Alternative)
 */
export const AchievementsCarousel = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-12 border border-white/20">
      <h3 className="text-3xl font-bold text-center mb-8">Celebrating Excellence</h3>
      
      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 bg-white/5 rounded-2xl p-8"
          >
            <Award className="w-16 h-16 text-amber-300 mb-4" />
            <h4 className="text-xl font-bold mb-2">Award Title</h4>
            <p className="text-gray-300 text-sm">Award description and recognition details</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;