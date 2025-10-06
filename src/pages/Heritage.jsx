// Heritage page 
import React from 'react';
import HeritageGallery from '../components/heritage/HeritageGallery';
import { Award, MapPin, Calendar, Globe } from 'lucide-react';

/**
 * Heritage Page
 * Complete heritage sites showcase page
 */
const Heritage = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHptMCA4aDR2LTRoLTR2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] "></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-purple-300" />
              <span className="font-semibold text-sm">Heritage Sites</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Zanzibar's Historic
              <br />
              <span className="text-purple-300">Treasures</span>
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore the magnificent heritage sites we preserve and protect, 
              each telling a unique story of Zanzibar's rich cultural legacy.
            </p>
          </div>

          {/* Heritage Highlights */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                value: "6",
                label: "UNESCO Sites"
              },
              {
                icon: MapPin,
                value: "50+",
                label: "Sites Protected"
              },
              {
                icon: Calendar,
                value: "18th-19th",
                label: "Century Heritage"
              },
              {
                icon: Globe,
                value: "World",
                label: "Heritage Status"
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <stat.icon className="w-10 h-10 text-purple-300 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Heritage Gallery */}
      <HeritageGallery />

      {/* Conservation Message */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h2 className="text-4xl font-bold mb-6">
            Protecting Heritage for Future Generations
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Every site we preserve is a testament to Zanzibar's unique cultural identity. 
            Through careful conservation and community engagement, we ensure these 
            treasures remain for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-900 rounded-xl font-semibold hover:bg-gray-100 transition-all">
              Support Conservation
            </button>
            <button className="px-8 py-4 border-2 border-white hover:bg-white/10 rounded-xl font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

/**
 * Simple Heritage Page
 */
export const SimpleHeritage = () => {
  return (
    <div className="py-20">
      <HeritageGallery />
    </div>
  );
};

export default Heritage;