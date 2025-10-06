// Scroll animation hook 
import { useState, useEffect } from 'react';

/**
 * Custom hook to detect scroll position and direction
 * @param {number} threshold - Scroll threshold to trigger state change
 * @returns {object} - Scroll state object
 */
export const useScrollAnimation = (threshold = 100) => {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollDirection: 'up',
    isScrolled: false,
    isAtTop: true,
    isAtBottom: false
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.pageYOffset;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = scrollY > threshold;
      const isAtTop = scrollY < 10;
      const isAtBottom = 
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 10;

      setScrollState({
        scrollY,
        scrollDirection,
        isScrolled,
        isAtTop,
        isAtBottom
      });

      lastScrollY = scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    updateScrollState(); // Initial call

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrollState;
};

/**
 * Hook to animate element on scroll into view
 * @param {object} options - Animation options
 * @returns {object} - Ref and animated state
 */
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, triggerOnce, rootMargin]);

  return [setRef, isVisible];
};

/**
 * Hook to get scroll progress percentage
 * @returns {number} - Scroll progress (0-100)
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = documentHeight - windowHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };

    window.addEventListener('scroll', calculateProgress);
    calculateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return progress;
};

/**
 * Hook to detect if element is in viewport
 * @param {React.RefObject} ref - Element reference
 * @param {number} offset - Offset in pixels
 * @returns {boolean} - Whether element is in viewport
 */
export const useIsInViewport = (ref, offset = 0) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const checkViewport = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;

      const isVisible = (
        rect.top >= -offset &&
        rect.left >= -offset &&
        rect.bottom <= windowHeight + offset &&
        rect.right <= windowWidth + offset
      );

      setIsInViewport(isVisible);
    };

    window.addEventListener('scroll', checkViewport);
    window.addEventListener('resize', checkViewport);
    checkViewport(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkViewport);
      window.removeEventListener('resize', checkViewport);
    };
  }, [ref, offset]);

  return isInViewport;
};

/**
 * Hook to smooth scroll to element
 * @returns {function} - Scroll to element function
 */
export const useSmoothScroll = () => {
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return { scrollToElement, scrollToTop, scrollToBottom };
};

export default useScrollAnimation;