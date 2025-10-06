// Card component 
import React from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * Reusable Card Component
 * @param {React.ReactNode} children - Card content
 * @param {boolean} hover - Enable hover effect
 * @param {string} className - Additional classes
 * @param {function} onClick - Click handler
 */
const Card = ({ 
  children, 
  hover = false,
  gradient = false,
  bordered = false,
  shadow = 'md',
  rounded = 'xl',
  padding = 'md',
  className = '',
  onClick
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl'
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  return (
    <div
      onClick={onClick}
      className={`
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50' : 'bg-white'}
        ${roundedClasses[rounded]}
        ${shadowClasses[shadow]}
        ${paddingClasses[padding]}
        ${bordered ? 'border-2 border-gray-100' : ''}
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/**
 * Feature Card Component
 */
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
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
    <Card hover className={className}>
      <div className={`
        w-14 h-14 rounded-xl flex items-center justify-center mb-4
        bg-gradient-to-br ${colorClasses[color]}
      `}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  );
};

/**
 * Image Card Component
 */
export const ImageCard = ({ 
  image, 
  title, 
  description, 
  badge,
  onClick,
  className = '' 
}) => {
  return (
    <Card hover padding="none" className={`overflow-hidden ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-semibold text-gray-900">{badge}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {onClick && (
          <button 
            onClick={onClick}
            className="flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all"
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        )}
      </div>
    </Card>
  );
};

/**
 * Stat Card Component
 */
export const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  trend,
  color = 'amber',
  className = '' 
}) => {
  const colorClasses = {
    amber: 'from-amber-500 to-amber-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <Card className={`text-center ${className}`}>
      <div className={`
        w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4
        bg-gradient-to-br ${colorClasses[color]}
      `}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
      {trend && (
        <div className={`
          mt-3 text-sm font-medium
          ${trend > 0 ? 'text-green-600' : 'text-red-600'}
        `}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </Card>
  );
};

/**
 * Testimonial Card Component
 */
export const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  image,
  rating = 5,
  className = '' 
}) => {
  return (
    <Card className={className}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center gap-4">
        {image && (
          <img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default Card;