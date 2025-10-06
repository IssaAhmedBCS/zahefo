// Button component 
import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Reusable Button Component
 * @param {string} variant - Button style variant
 * @param {string} size - Button size
 * @param {boolean} fullWidth - Full width button
 * @param {boolean} disabled - Disabled state
 * @param {boolean} loading - Loading state
 * @param {React.Component} icon - Icon component
 * @param {string} className - Additional classes
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl focus:ring-amber-200',
    secondary: 'bg-white text-amber-900 border-2 border-amber-600 hover:bg-amber-50 focus:ring-amber-200',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-amber-900 focus:ring-white/50',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-200',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg focus:ring-red-200',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-lg focus:ring-green-200',
    dark: 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg focus:ring-gray-300'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const baseStyles = 'rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 focus:outline-none focus:ring-4';

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </button>
  );
};

/**
 * Button Group Component
 */
export const ButtonGroup = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Icon Button Component
 */
export const IconButton = ({ 
  icon: Icon, 
  variant = 'ghost', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        rounded-full flex items-center justify-center
        transition-all duration-300 hover:scale-110
        ${variant === 'primary' ? 'bg-amber-600 hover:bg-amber-700 text-white' : ''}
        ${variant === 'ghost' ? 'hover:bg-gray-100 text-gray-600' : ''}
        ${variant === 'outline' ? 'border-2 border-gray-300 hover:border-amber-600 text-gray-600' : ''}
        ${className}
      `}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </button>
  );
};

export default Button;