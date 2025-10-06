// Heritage gallery 
import React, { useState } from 'react';
import { Award, MapPin, Calendar, Filter, Grid3x3, List, Search } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';
import HeritageSiteCard from './HeritageSiteCard';
import HeritageModal from './HeritageModal';
import SiteFilters from './SiteFilters';
import { heritageSites } from '../../data/heritageData';
import Button from '../shared/Button';

/**
 * Heritage Gallery Component
 * Main gallery showcasing heritage sites
 */
const HeritageGallery = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter sites based on active filters
  const filteredSites = heritageSites.filter(site => {
    const matchesCategory = filterCategory === 'all' || site.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || site.status === filterStatus;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const categories = ['all', ...new Set(heritageSites.map(site => site.category))];
  const statuses = ['all', ...new Set(heritageSites.map(site => site.status))];

  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <SectionTitle
          subtitle="Cultural Heritage"
          title="Zanzibar's Historic Treasures"
          description="Explore the magnificent heritage sites we preserve and protect for future generations"
        />

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">{heritageSites.length}</div>
            <div className="text-gray-600 text-sm">Heritage Sites</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {heritageSites.filter(s => s.status === 'Preserved').length}
            </div>
            <div className="text-gray-600 text-sm">Preserved</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {heritageSites.filter(s => s.unesco).length}
            </div>
            <div className="text-gray-600 text-sm">UNESCO Sites</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600 text-sm">Categories</div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="flex-1 relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search heritage sites..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2
                  ${showFilters 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>

              {/* View Mode Toggle */}
              <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`
                    p-2 rounded-lg transition-all
                    ${viewMode === 'grid' 
                      ? 'bg-white shadow-md text-amber-600' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`
                    p-2 rounded-lg transition-all
                    ${viewMode === 'list' 
                      ? 'bg-white shadow-md text-amber-600' 
                      : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <SiteFilters
                categories={categories}
                statuses={statuses}
                filterCategory={filterCategory}
                filterStatus={filterStatus}
                onCategoryChange={setFilterCategory}
                onStatusChange={setFilterStatus}
              />
            )}
          </div>

          {/* Active Filters Display */}
          {(filterCategory !== 'all' || filterStatus !== 'all' || searchQuery) && (
            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-gray-600 text-sm font-medium">Active filters:</span>
              {filterCategory !== 'all' && (
                <button
                  onClick={() => setFilterCategory('all')}
                  className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors flex items-center gap-2"
                >
                  {filterCategory}
                  <span className="text-lg">×</span>
                </button>
              )}
              {filterStatus !== 'all' && (
                <button
                  onClick={() => setFilterStatus('all')}
                  className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors flex items-center gap-2"
                >
                  {filterStatus}
                  <span className="text-lg">×</span>
                </button>
              )}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors flex items-center gap-2"
                >
                  Search: "{searchQuery}"
                  <span className="text-lg">×</span>
                </button>
              )}
              <button
                onClick={() => {
                  setFilterCategory('all');
                  setFilterStatus('all');
                  setSearchQuery('');
                }}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{filteredSites.length}</span> of{' '}
            <span className="font-bold text-gray-900">{heritageSites.length}</span> heritage sites
          </p>
        </div>

        {/* Sites Grid/List */}
        {filteredSites.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }>
            {filteredSites.map((site, idx) => (
              <HeritageSiteCard
                key={site.id}
                site={site}
                viewMode={viewMode}
                onClick={() => setSelectedSite(site)}
                style={{ animationDelay: `${idx * 100}ms` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No sites found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setFilterCategory('all');
                setFilterStatus('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Heritage Modal */}
        {selectedSite && (
          <HeritageModal
            site={selectedSite}
            onClose={() => setSelectedSite(null)}
          />
        )}

        {/* Interactive Map Section */}
        <div className="mt-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Heritage Sites on Map
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the geographical distribution of Zanzibar's cultural treasures
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Interactive map coming soon</p>
              <Button variant="primary">
                View Full Map
              </Button>
            </div>
          </div>
        </div>

        {/* Heritage Conservation Info */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
            <Award className="w-12 h-12 mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">UNESCO World Heritage</h3>
            <p className="text-blue-100 mb-6">
              Stone Town of Zanzibar has been a UNESCO World Heritage Site since 2000, 
              recognizing its Outstanding Universal Value and cultural significance.
            </p>
            <Button variant="outline">
              Learn More
            </Button>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-2xl p-8">
            <Calendar className="w-12 h-12 mb-4 text-amber-200" />
            <h3 className="text-2xl font-bold mb-4">Preservation Timeline</h3>
            <p className="text-amber-100 mb-6">
              Our work spans over 25 years, with continuous efforts to preserve and restore 
              Zanzibar's architectural and cultural heritage for future generations.
            </p>
            <Button variant="outline">
              View Timeline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Compact Heritage Gallery (Alternative)
 */
export const CompactHeritageGallery = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Heritage Sites"
          description="Preserving Zanzibar's cultural legacy"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {heritageSites.slice(0, 6).map((site) => (
            <HeritageSiteCard key={site.id} site={site} compact />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeritageGallery;