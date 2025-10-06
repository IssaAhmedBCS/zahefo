// Site filters 
import React from 'react';
import { Filter, X } from 'lucide-react';

/**
 * Site Filters Component
 * Filter controls for heritage sites
 * @param {array} categories - Available categories
 * @param {array} statuses - Available statuses
 * @param {string} filterCategory - Active category filter
 * @param {string} filterStatus - Active status filter
 * @param {function} onCategoryChange - Category change handler
 * @param {function} onStatusChange - Status change handler
 */
const SiteFilters = ({
  categories,
  statuses,
  filterCategory,
  filterStatus,
  onCategoryChange,
  onStatusChange
}) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200 animate-slide-down">
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  px-4 py-2 rounded-xl font-medium transition-all transform hover:scale-105
                  ${filterCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Filter by Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={`
                  px-4 py-2 rounded-xl font-medium transition-all transform hover:scale-105
                  ${filterStatus === status
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {status === 'all' ? 'All Statuses' : status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Quick Filters
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              onCategoryChange('all');
              onStatusChange('all');
            }}
            className="px-4 py-2 bg-purple-100 text-purple-900 rounded-xl font-medium hover:bg-purple-200 transition-colors"
          >
            UNESCO Sites Only
          </button>
          <button
            onClick={() => onCategoryChange('Historic District')}
            className="px-4 py-2 bg-green-100 text-green-900 rounded-xl font-medium hover:bg-green-200 transition-colors"
          >
            Historic Districts
          </button>
          <button
            onClick={() => onStatusChange('Preserved')}
            className="px-4 py-2 bg-blue-100 text-blue-900 rounded-xl font-medium hover:bg-blue-200 transition-colors"
          >
            Preserved Sites
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Compact Filter Bar (Alternative)
 */
export const CompactFilterBar = ({ 
  categories, 
  filterCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all
            ${filterCategory === category
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
        >
          {category === 'all' ? 'All' : category}
        </button>
      ))}
    </div>
  );
};

/**
 * Dropdown Filters (Alternative)
 */
export const DropdownFilters = ({
  categories,
  statuses,
  filterCategory,
  filterStatus,
  onCategoryChange,
  onStatusChange
}) => {
  return (
    <div className="flex gap-4">
      <select
        value={filterCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category === 'all' ? 'All Categories' : category}
          </option>
        ))}
      </select>

      <select
        value={filterStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status === 'all' ? 'All Statuses' : status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SiteFilters;