// Media query hook 
import { useState, useEffect } from 'react';

/**
 * Custom hook for media queries
 * @param {string} query - Media query string
 * @returns {boolean} - Whether media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } 
    // Fallback for older browsers
    else {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
};

/**
 * Hook for common breakpoints
 * @returns {object} - Breakpoint states
 */
export const useBreakpoint = () => {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1280px)');
  const isXLDesktop = useMediaQuery('(min-width: 1536px)');

  // Specific breakpoints
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isXl = useMediaQuery('(min-width: 1280px)');
  const is2Xl = useMediaQuery('(min-width: 1536px)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isXLDesktop,
    // Tailwind-style breakpoints
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    // Current device type
    device: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
  };
};

/**
 * Hook for device orientation
 * @returns {object} - Orientation state
 */
export const useOrientation = () => {
  const [orientation, setOrientation] = useState({
    isPortrait: window.innerHeight > window.innerWidth,
    isLandscape: window.innerWidth > window.innerHeight,
    angle: window.screen?.orientation?.angle || 0
  });

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation({
        isPortrait: window.innerHeight > window.innerWidth,
        isLandscape: window.innerWidth > window.innerHeight,
        angle: window.screen?.orientation?.angle || 0
      });
    };

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return orientation;
};

/**
 * Hook for window size
 * @returns {object} - Window dimensions
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

/**
 * Hook to detect if touch device
 * @returns {boolean} - Whether device supports touch
 */
export const useTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    checkTouch();
    window.addEventListener('touchstart', checkTouch, { once: true });

    return () => {
      window.removeEventListener('touchstart', checkTouch);
    };
  }, []);

  return isTouch;
};

/**
 * Hook for dark mode preference
 * @returns {boolean} - Whether user prefers dark mode
 */
export const useDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

/**
 * Hook for reduced motion preference
 * @returns {boolean} - Whether user prefers reduced motion
 */
export const useReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Hook for high contrast preference
 * @returns {boolean} - Whether user prefers high contrast
 */
export const useHighContrast = () => {
  return useMediaQuery('(prefers-contrast: high)');
};

/**
 * Hook for network information
 * @returns {object} - Network state
 */
export const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState({
    isOnline: navigator.onLine,
    effectiveType: null,
    downlink: null,
    rtt: null,
    saveData: false
  });

  useEffect(() => {
    const updateNetworkStatus = () => {
      const connection = navigator.connection || 
                        navigator.mozConnection || 
                        navigator.webkitConnection;

      setNetworkStatus({
        isOnline: navigator.onLine,
        effectiveType: connection?.effectiveType || null,
        downlink: connection?.downlink || null,
        rtt: connection?.rtt || null,
        saveData: connection?.saveData || false
      });
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    const connection = navigator.connection || 
                      navigator.mozConnection || 
                      navigator.webkitConnection;
    
    if (connection) {
      connection.addEventListener('change', updateNetworkStatus);
    }

    updateNetworkStatus();

    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
      if (connection) {
        connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);

  return networkStatus;
};

/**
 * Hook to detect if element is hoverable
 * @returns {boolean} - Whether device can hover
 */
export const useHover = () => {
  return useMediaQuery('(hover: hover) and (pointer: fine)');
};

export default useMediaQuery;