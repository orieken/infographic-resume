import { useState, useEffect } from 'react';

export const useLoading = (initialTimeout = 1500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), initialTimeout);
    return () => clearTimeout(timer);
  }, [initialTimeout]);

  return { isLoading };
};
