// Navbar component 
import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../shared/Button';

/**
 * Main Navigation Component
 * @param {string} activeSection - Currently active section
 * @param {function} setActiveSection - Function to set active section
 */
const Navbar = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { isScrolled } = useScrollAnimation(50);

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', hasDropdown: false },
    { id: 'about', label: 'About', hasDropdown: false },
    { 
      id: 'services', 
      label: 'Services', 
      hasDropdown: true,
      dropdownItems: [
        { id: 'records-management', label: 'Records Management' },
        { id: 'heritage-management', label: 'Heritage Management' },
        { id: 'training', label: 'Training & Capacity Building' }
      ]
    },
    { id: 'heritage', label: 'Heritage', hasDropdown: false },
    { id: 'impact', label: 'Impact', hasDropdown: false },
    { id: 'contact', label: 'Contact', hasDropdown: false }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`
        fixed w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4' 
          : 'bg-transparent py-6'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center 
                transition-all duration-300 shadow-lg
                ${isScrolled 
                  ? 'bg-gradient-to-br from-amber-600 to-amber-700' 
                  : 'bg-white'
                }
                group-hover:scale-110
              `}>
                <Building2 className={`
                  w-7 h-7 transition-colors
                  ${isScrolled ? 'text-white' : 'text-amber-600'}
                `} />
              </div>
              <div>
                <h1 className={`
                  text-2xl font-bold transition-colors
                  ${isScrolled ? 'text-gray-900' : 'text-white'}
                `}>
                  ZAHEFO
                </h1>
                <p className={`
                  text-xs transition-colors
                  ${isScrolled ? 'text-gray-600' : 'text-gray-200'}
                `}>
                  Heritage Foundation
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        className={`
                          px-4 py-2 rounded-lg text-sm font-medium 
                          transition-all duration-300 flex items-center gap-1
                          ${activeSection === item.id
                            ? isScrolled 
                              ? 'bg-amber-100 text-amber-900' 
                              : 'bg-white/20 text-white backdrop-blur-sm'
                            : isScrolled 
                              ? 'text-gray-700 hover:bg-gray-100' 
                              : 'text-white/90 hover:bg-white/10'
                          }
                        `}
                      >
                        {item.label}
                        <ChevronDown className={`
                          w-4 h-4 transition-transform duration-300
                          ${servicesDropdownOpen ? 'rotate-180' : ''}
                        `} />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-down">
                          {item.dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem.id}
                              onClick={() => handleNavClick('services')}
                              className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                            >
                              {dropdownItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium 
                        transition-all duration-300
                        ${activeSection === item.id
                          ? isScrolled 
                            ? 'bg-amber-100 text-amber-900' 
                            : 'bg-white/20 text-white backdrop-blur-sm'
                          : isScrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white/90 hover:bg-white/10'
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button 
                variant={isScrolled ? 'primary' : 'outline'} 
                size="sm" 
                onClick={() => handleNavClick('contact')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
                lg:hidden p-2 rounded-xl transition-colors
                ${isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
                }
              `}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 bottom-0 w-80 bg-white z-50 
        transform transition-transform duration-300 ease-in-out
        lg:hidden shadow-2xl
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">ZAHEFO</h2>
                <p className="text-xs text-gray-600">Heritage Foundation</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl 
                    transition-all duration-300 font-medium
                    ${activeSection === item.id
                      ? 'bg-amber-50 text-amber-900'
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  {item.label}
                </button>
                
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && activeSection === item.id && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <button
                        key={dropdownItem.id}
                        onClick={() => handleNavClick('services')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <Button 
              variant="primary" 
              fullWidth
              onClick={() => handleNavClick('contact')}
            >
              Get Started
            </Button>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Contact Us</p>
              <p className="text-xs text-gray-500">(+255) 777 430985</p>
              <p className="text-xs text-gray-500">info@zahefo.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;