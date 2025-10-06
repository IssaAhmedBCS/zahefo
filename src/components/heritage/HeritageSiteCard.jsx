// Heritage site card 
import React from 'react';
import { Award, MapPin, Calendar, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';
import Badge from '../shared/Badge';

/**
 * Heritage Site Card Component
 * Individual card for heritage site display
 * @param {object} site - Heritage site data
 * @param {string} viewMode - Display mode ('grid' or 'list')
 * @param {function} onClick - Click handler
 * @param {boolean} compact - Compact version
 */
const HeritageSiteCard = ({ site, viewMode = 'grid', onClick, compact = false, ...props }) => {
  // Status color mapping
  const statusColors = {
    'Preserved': 'success',
    'Under Restoration': 'info',
    'Active Heritage Area': 'purple',
    'Active': 'success'
  };

  if (compact) {
    return (
      <div
        onClick={onClick}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        {...props}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={site.image}
            alt={site.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {site.unesco && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
              <Award className="w-3 h-3 text-blue-600" />
              <span className="text-xs font-semibold text-gray-900">UNESCO</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{site.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mt-2">{site.description}</p>
        </div>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div
        onClick={onClick}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in-up"
        {...props}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0">
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Year Badge */}
            <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold">
              {site.year}
            </div>

            {/* UNESCO Badge */}
            {site.unesco && (
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-gray-900">UNESCO</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="primary" size="sm">
                {site.category}
              </Badge>
              <Badge variant={statusColors[site.status]} size="sm">
                {site.status}
              </Badge>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
              {site.name}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
              {site.description}
            </p>

            {/* Highlights */}
            {site.highlights && (
              <div className="space-y-2 mb-4">
                {site.highlights.slice(0, 3).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {site.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Stone Town
                </span>
              </div>
              <button className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                <span>Explore</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up"
      {...props}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* UNESCO Badge */}
        {site.unesco && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-gray-900">UNESCO</span>
          </div>
        )}
        
        {/* Year Badge */}
        <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
          {site.year}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          <Badge variant="primary" size="sm" className="backdrop-blur-sm">
            {site.category}
          </Badge>
          <Badge variant={statusColors[site.status]} size="sm" className="backdrop-blur-sm">
            {site.status}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
          {site.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {site.description}
        </p>

        {/* Highlights Preview */}
        {site.highlights && site.highlights.length > 0 && (
          <div className="mb-4 text-sm text-gray-500">
            <Clock className="w-4 h-4 inline mr-1" />
            {site.highlights[0]}
          </div>
        )}
        
        {/* Footer */}
        <button className="flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:gap-3 transition-all">
          <span>Explore Site</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/**
 * Heritage Site Card Horizontal (Alternative)
 */
export const HeritageSiteCardHorizontal = ({ site, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {site.name}
          </h3>
          {site.unesco && (
            <Award className="w-5 h-5 text-blue-600" />
          )}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {site.description}
        </p>
        
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {site.year}
          </span>
          <Badge variant="primary" size="sm">
            {site.category}
          </Badge>
        </div>
      </div>
    </div>
  );
};

/**
 * Heritage Site Card Minimal
 */
export const HeritageSiteCardMinimal = ({ site }) => {
  return (
    <div className="group">
      <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {site.unesco && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Award className="w-5 h-5 text-blue-600" />
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{site.name}</h3>
      <p className="text-sm text-gray-600">{site.year} • {site.category}</p>
    </div>
  );
};

export default HeritageSiteCard;