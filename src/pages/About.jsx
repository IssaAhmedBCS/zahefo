// About page 
import React from 'react';
import AboutSection from '../components/about/AboutSection';
import { SimpleCTA } from '../components/home/CTASection';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

/**
 * About Page
 * Complete about page with all sections
 */
const About = ({ setActiveSection }) => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-gray-900 text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] "></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-amber-300" />
            <span className="font-semibold text-sm">About ZAHEFO</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Heritage Preservation
            <br />
            <span className="text-amber-300">Leaders</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Established in 2000, we've been at the forefront of cultural heritage 
            conservation in East Africa for over 25 years.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              { icon: Award, value: "25+", label: "Years Experience" },
              { icon: Users, value: "1000+", label: "People Trained" },
              { icon: Target, value: "50+", label: "Sites Preserved" },
              { icon: TrendingUp, value: "98%", label: "Success Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <stat.icon className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <AboutSection />

      {/* Call to Action */}
      <SimpleCTA setActiveSection={setActiveSection} />
    </div>
  );
};

/**
 * Simple About Page
 */
export const SimpleAbout = () => {
  return (
    <div className="py-20">
      <AboutSection />
    </div>
  );
};

export default About;