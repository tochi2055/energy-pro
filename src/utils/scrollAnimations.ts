import { useEffect, useState, useRef, RefObject } from 'react';
import { Variants, Variant, Transition } from 'framer-motion';

type InViewOptions = {
  threshold: number;
  triggerOnce: boolean;
};

// Custom hook to detect when an element is in viewport
export const useInView = (
  options: Partial<InViewOptions> = {}
): [RefObject<HTMLDivElement>, boolean] => {
  const defaultOptions: InViewOptions = {
    threshold: 0.1,
    triggerOnce: true,
    ...options
  };
  
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (defaultOptions.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!defaultOptions.triggerOnce) {
          setIsInView(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: defaultOptions.threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.triggerOnce]);

  return [ref, isInView];
};

// Animation variants for framer-motion
export const scrollAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hiddenLeft: { opacity: 0, x: -30 },
  visibleLeft: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hiddenRight: { opacity: 0, x: 30 },
  visibleRight: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hiddenScale: { opacity: 0, scale: 0.9 },
  visibleScale: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// For list items or grid items
export const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
