// Intersection observer hook 
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer API
 * @param {object} options - Intersection Observer options
 * @returns {array} - [ref, isIntersecting, entry]
 */
export const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false
  } = options;

  const [entry, setEntry] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
  const frozen = useRef(false);

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen.current || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && freezeOnceVisible) {
          frozen.current = true;
          observer.unobserve(node);
        }
      },
      observerParams
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return [elementRef, isIntersecting, entry];
};

/**
 * Hook to observe multiple elements
 * @param {object} options - Intersection Observer options
 * @returns {object} - Refs and intersection states
 */
export const useMultipleIntersectionObserver = (count, options = {}) => {
  const [entries, setEntries] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setEntries(prev => {
            const newEntries = [...prev];
            newEntries[index] = {
              isIntersecting: entry.isIntersecting,
              entry
            };
            return newEntries;
          });
        },
        options
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [count, options]);

  const setRef = (index) => (element) => {
    refs.current[index] = element;
  };

  return { setRef, entries };
};

/**
 * Hook to lazy load images
 * @param {string} src - Image source
 * @param {string} placeholder - Placeholder image
 * @returns {object} - Image source and loading state
 */
export const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.01,
    freezeOnceVisible: true
  });

  useEffect(() => {
    if (isIntersecting && src) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
      };

      img.onerror = () => {
        setIsLoading(false);
      };
    }
  }, [isIntersecting, src]);

  return { ref, imageSrc, isLoading };
};

/**
 * Hook for visibility tracking
 * @param {object} options - Tracking options
 * @returns {object} - Visibility data
 */
export const useVisibilityTracking = (options = {}) => {
  const [visibility, setVisibility] = useState({
    isVisible: false,
    hasBeenVisible: false,
    visibilityTime: 0,
    intersectionRatio: 0
  });

  const [ref, isIntersecting, entry] = useIntersectionObserver(options);
  const startTimeRef = useRef(null);
  const hasBeenVisibleRef = useRef(false);

  useEffect(() => {
    if (isIntersecting && !startTimeRef.current) {
      startTimeRef.current = Date.now();
      hasBeenVisibleRef.current = true;
    } else if (!isIntersecting && startTimeRef.current) {
      startTimeRef.current = null;
    }

    const updateVisibility = () => {
      const visibilityTime = startTimeRef.current 
        ? Date.now() - startTimeRef.current 
        : 0;

      setVisibility({
        isVisible: isIntersecting,
        hasBeenVisible: hasBeenVisibleRef.current,
        visibilityTime,
        intersectionRatio: entry?.intersectionRatio || 0
      });
    };

    const interval = setInterval(updateVisibility, 100);
    updateVisibility();

    return () => clearInterval(interval);
  }, [isIntersecting, entry]);

  return { ref, ...visibility };
};

/**
 * Hook for staggered animations
 * @param {number} count - Number of elements
 * @param {number} delay - Delay between animations (ms)
 * @returns {object} - Animation states
 */
export const useStaggeredAnimation = (count, delay = 100) => {
  const [animationStates, setAnimationStates] = useState([]);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  useEffect(() => {
    if (isIntersecting) {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          setAnimationStates(prev => {
            const newStates = [...prev];
            newStates[i] = true;
            return newStates;
          });
        }, i * delay);
      }
    }
  }, [isIntersecting, count, delay]);

  return { ref, animationStates };
};

export default useIntersectionObserver;