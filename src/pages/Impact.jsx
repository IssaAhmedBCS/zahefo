// Impact page 
import React from 'react';
import ImpactSection from '../components/impact/ImpactSection';
import { TrendingUp, Heart, Users, Target } from 'lucide-react';

/**
 * Impact Page
 * Complete impact and achievements page
 */
const Impact = ({ setActiveSection }) => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] "></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-green-300" />
              <span className="font-semibold text-sm">Our Impact</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Making a Real
              <br />
              <span className="text-green-300">Difference</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Measuring our success through tangible results and lasting positive 
              change in communities across Zanzibar and East Africa.
            </p>
          </div>

          {/* Impact Pillars */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Community Impact",
                description: "1000+ people engaged"
              },
              {
                icon: Target,
                title: "Heritage Protected",
                description: "50+ sites preserved"
              },
              {
                icon: Heart,
                title: "Lives Changed",
                description: "Sustainable livelihoods"
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "25+ years excellence"
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <pillar.icon className="w-12 h-12 text-green-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-green-200 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Impact Content */}
      <ImpactSection setActiveSection={setActiveSection} />

      {/* Impact Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every statistic is a story of positive change
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Empowering Local Communities",
                story: "Through our training programs, we've equipped over 500 local community members with skills in heritage management, creating sustainable employment opportunities and fostering local ownership of conservation efforts.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              },
              {
                title: "Preserving Architectural Heritage",
                story: "Our restoration projects have saved 50+ historic structures from decay, revitalizing entire neighborhoods and boosting cultural tourism while maintaining architectural authenticity and community character.",
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Simple Impact Page
 */
export const SimpleImpact = ({ setActiveSection }) => {
  return (
    <div className="py-20">
      <ImpactSection setActiveSection={setActiveSection} />
    </div>
  );
};

export default Impact;