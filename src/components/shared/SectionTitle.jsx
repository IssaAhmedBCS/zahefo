// Section title component 
import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Reusable Section Title Component
 * @param {string} subtitle - Small text above title
 * @param {string} title - Main heading
 * @param {string} description - Paragraph below title
 * @param {boolean} centered - Center align text
 * @param {boolean} dark - Dark theme
 * @param {string} className - Additional classes
 */
const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  dark = false,
  showDivider = true,
  animate = true,
  className = '' 
}) => {
  const textAlign = centered ? 'text-center' : 'text-left';
  const dividerAlign = centered ? 'mx-auto' : '';
  const descriptionAlign = centered ? 'mx-auto' : '';

  return (
    <div 
      className={`
        mb-16 
        ${textAlign} 
        ${animate ? 'animate-fade-in-up' : ''} 
        ${className}
      `}
    >
      {subtitle && (
        <div 
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4
            ${dark ? 'bg-white/10 border border-white/20' : 'bg-amber-50'}
          `}
        >
          <Sparkles className={`w-4 h-4 ${dark ? 'text-amber-300' : 'text-amber-600'}`} />
          <span className={`
            font-semibold text-sm uppercase tracking-wide
            ${dark ? 'text-white' : 'text-amber-900'}
          `}>
            {subtitle}
          </span>
        </div>
      )}
      
      <h2 className={`
        text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight
        ${dark ? 'text-white' : 'text-gray-900'}
      `}>
        {title}
      </h2>
      
      {showDivider && (
        <div className={`
          w-24 h-1.5 rounded-full mb-6
          ${dividerAlign}
          ${dark 
            ? 'bg-gradient-to-r from-amber-400 to-amber-300' 
            : 'bg-gradient-to-r from-amber-600 to-amber-400'
          }
        `} />
      )}
      
      {description && (
        <p className={`
          text-xl max-w-3xl leading-relaxed
          ${descriptionAlign}
          ${dark ? 'text-gray-200' : 'text-gray-600'}
        `}>
          {description}
        </p>
      )}
    </div>
  );
};

/**
 * Simple Title Component (no subtitle or description)
 */
export const SimpleTitle = ({ children, dark = false, className = '' }) => {
  return (
    <h2 className={`
      text-3xl md:text-4xl lg:text-5xl font-bold mb-6
      ${dark ? 'text-white' : 'text-gray-900'}
      ${className}
    `}>
      {children}
    </h2>
  );
};

/**
 * Page Title Component (larger for page headers)
 */
export const PageTitle = ({ title, subtitle, description, className = '' }) => {
  return (
    <div className={`text-center py-20 ${className}`}>
      {subtitle && (
        <p className="text-amber-600 font-semibold uppercase tracking-wide mb-4">
          {subtitle}
        </p>
      )}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;