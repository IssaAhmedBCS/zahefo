// Badge component 
import React from 'react';
import { X } from 'lucide-react';

/**
 * Reusable Badge Component
 * @param {React.ReactNode} children - Badge content
 * @param {string} variant - Badge color variant
 * @param {string} size - Badge size
 * @param {boolean} removable - Show remove button
 * @param {function} onRemove - Remove handler
 * @param {React.Component} icon - Icon component
 * @param {string} className - Additional classes
 */
const Badge = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  removable = false,
  onRemove,
  icon: Icon,
  dot = false,
  pill = true,
  className = ''
}) => {
  const variants = {
    primary: 'bg-amber-100 text-amber-900 border-amber-200',
    secondary: 'bg-gray-100 text-gray-900 border-gray-200',
    success: 'bg-green-100 text-green-900 border-green-200',
    warning: 'bg-yellow-100 text-yellow-900 border-yellow-200',
    danger: 'bg-red-100 text-red-900 border-red-200',
    info: 'bg-blue-100 text-blue-900 border-blue-200',
    purple: 'bg-purple-100 text-purple-900 border-purple-200',
    dark: 'bg-gray-800 text-white border-gray-700'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  const dotColors = {
    primary: 'bg-amber-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
    purple: 'bg-purple-500',
    dark: 'bg-gray-900'
  };

  return (
    <span className={`
      inline-flex items-center gap-2 font-medium border
      ${pill ? 'rounded-full' : 'rounded-lg'}
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}>
      {dot && (
        <span className={`w-2 h-2 rounded-full ${dotColors[variant]} animate-pulse`} />
      )}
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};

/**
 * Badge Group Component
 */
export const BadgeGroup = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Status Badge Component
 */
export const StatusBadge = ({ status, className = '' }) => {
  const statusConfig = {
    active: { variant: 'success', label: 'Active', dot: true },
    inactive: { variant: 'secondary', label: 'Inactive', dot: false },
    pending: { variant: 'warning', label: 'Pending', dot: true },
    error: { variant: 'danger', label: 'Error', dot: false },
    success: { variant: 'success', label: 'Success', dot: false },
    processing: { variant: 'info', label: 'Processing', dot: true }
  };

  const config = statusConfig[status] || statusConfig.inactive;

  return (
    <Badge 
      variant={config.variant} 
      dot={config.dot}
      className={className}
    >
      {config.label}
    </Badge>
  );
};

/**
 * Count Badge Component (for notifications)
 */
export const CountBadge = ({ count, max = 99, className = '' }) => {
  const displayCount = count > max ? `${max}+` : count;

  return (
    <span className={`
      inline-flex items-center justify-center
      min-w-[20px] h-5 px-1.5
      bg-red-500 text-white text-xs font-bold
      rounded-full
      ${className}
    `}>
      {displayCount}
    </span>
  );
};

/**
 * Icon Badge Component
 */
export const IconBadge = ({ 
  icon: Icon, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const variants = {
    primary: 'bg-amber-100 text-amber-600',
    secondary: 'bg-gray-100 text-gray-600',
    success: 'bg-green-100 text-green-600',
    warning: 'bg-yellow-100 text-yellow-600',
    danger: 'bg-red-100 text-red-600',
    info: 'bg-blue-100 text-blue-600'
  };

  return (
    <span className={`
      inline-flex items-center justify-center rounded-full
      ${sizeClasses[size]}
      ${variants[variant]}
      ${className}
    `}>
      <Icon className={iconSizes[size]} />
    </span>
  );
};

export default Badge;