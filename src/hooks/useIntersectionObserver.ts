import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const registerElement = (element: Element | null) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return { visibleItems, registerElement };
};
