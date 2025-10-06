// Page wrapper component 
import React, { useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Page Wrapper Component
 * Provides common layout and scroll functionality
 * @param {React.ReactNode} children - Page content
 * @param {string} title - Page title
 * @param {string} className - Additional classes
 */
const PageWrapper = ({ 
  children, 
  title,
  showScrollToTop = true,
  className = '' 
}) => {
  const { scrollY, isScrolled } = useScrollAnimation(300);

  // Set page title
  useEffect(() => {
    if (title) {
      document.title = `${title} | ZAHEFO - Zanzibar Heritage Foundation`;
    }
  }, [title]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${className}`}>
      {children}

      {/* Scroll to Top Button */}
      {showScrollToTop && isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300"
          style={{ width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div>
    </div>
  );
};

/**
 * Section Wrapper Component
 * Wraps individual sections with consistent spacing
 */
export const SectionWrapper = ({ 
  children, 
  id,
  background = 'white',
  className = '' 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
    primary: 'bg-gradient-to-br from-amber-50 to-white'
  };

  return (
    <section 
      id={id}
      className={`
        py-20 md:py-24 lg:py-28
        ${backgrounds[background]}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

/**
 * Container Component
 * Standard content container with max-width
 */
export const Container = ({ 
  children, 
  size = 'default',
  className = '' 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-[1400px]',
    full: 'max-w-full'
  };

  return (
    <div className={`
      ${sizes[size]} 
      mx-auto 
      px-4 sm:px-6 lg:px-8
      ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * Grid Layout Component
 * Responsive grid system
 */
export const Grid = ({ 
  children, 
  cols = { sm: 1, md: 2, lg: 3 },
  gap = 6,
  className = '' 
}) => {
  return (
    <div className={`
      grid 
      grid-cols-${cols.sm}
      md:grid-cols-${cols.md}
      lg:grid-cols-${cols.lg}
      gap-${gap}
      ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * Flex Layout Component
 * Flexible layout with common patterns
 */
export const Flex = ({ 
  children, 
  direction = 'row',
  align = 'center',
  justify = 'start',
  gap = 4,
  wrap = false,
  className = '' 
}) => {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse'
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline'
  };

  const justifications = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  return (
    <div className={`
      flex
      ${directions[direction]}
      ${alignments[align]}
      ${justifications[justify]}
      gap-${gap}
      ${wrap ? 'flex-wrap' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * Spacer Component
 * Adds vertical spacing
 */
export const Spacer = ({ size = 'md' }) => {
  const sizes = {
    xs: 'h-4',
    sm: 'h-8',
    md: 'h-16',
    lg: 'h-24',
    xl: 'h-32'
  };

  return <div className={sizes[size]} />;
};

/**
 * Divider Component
 * Visual separator
 */
export const Divider = ({ 
  orientation = 'horizontal',
  className = '' 
}) => {
  if (orientation === 'vertical') {
    return <div className={`w-px bg-gray-200 ${className}`} />;
  }

  return <div className={`h-px bg-gray-200 ${className}`} />;
};

export default PageWrapper;