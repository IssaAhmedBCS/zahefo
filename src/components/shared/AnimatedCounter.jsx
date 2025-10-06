// Animated counter component 
import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * Animated Counter Component
 * @param {number} end - Final count value
 * @param {number} start - Starting value
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Text after number (e.g., '+', '%')
 * @param {string} prefix - Text before number (e.g., '$')
 * @param {boolean} decimals - Show decimal places
 * @param {string} separator - Thousands separator
 * @param {string} className - Additional classes
 */
const AnimatedCounter = ({ 
  end, 
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  separator = ',',
  triggerOnView = true,
  className = ''
}) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true
  });

  useEffect(() => {
    if (!triggerOnView || (isIntersecting && !hasAnimated)) {
      setHasAnimated(true);
      let startTime = null;
      const startValue = start;
      const endValue = end;
      const difference = endValue - startValue;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = startValue + (difference * easeOut);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isIntersecting, hasAnimated, start, end, duration, triggerOnView]);

  const formatNumber = (num) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    
    // Add thousand separators
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    
    return parts.join('.');
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

/**
 * Stat Counter Component (with icon and label)
 */
export const StatCounter = ({ 
  icon: Icon, 
  end, 
  label, 
  suffix = '',
  color = 'amber',
  className = '' 
}) => {
  const colorClasses = {
    amber: 'from-amber-500 to-amber-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600'
  };

  return (
    <div className={`text-center ${className}`}>
      <div className={`
        w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4
        bg-gradient-to-br ${colorClasses[color]}
      `}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        <AnimatedCounter end={end} suffix={suffix} duration={2500} />
      </div>
      <div className="text-gray-600 text-sm md:text-base">{label}</div>
    </div>
  );
};

/**
 * Progress Counter Component (with progress bar)
 */
export const ProgressCounter = ({ 
  label, 
  current, 
  max, 
  showPercentage = true,
  color = 'amber',
  className = '' 
}) => {
  const percentage = Math.round((current / max) * 100);
  
  const colorClasses = {
    amber: 'bg-amber-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    red: 'bg-red-600'
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
        {showPercentage && (
          <span className="text-gray-600 font-semibold">
            <AnimatedCounter end={percentage} suffix="%" decimals={0} />
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

/**
 * Circular Progress Counter
 */
export const CircularCounter = ({ 
  end, 
  size = 120,
  strokeWidth = 10,
  color = '#d97706',
  className = '' 
}) => {
  const [progress, setProgress] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true
  });

  useEffect(() => {
    if (isIntersecting) {
      setTimeout(() => setProgress(end), 100);
    }
  }, [isIntersecting, end]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">
          <AnimatedCounter end={progress} suffix="%" />
        </span>
      </div>
    </div>
  );
};

export default AnimatedCounter;