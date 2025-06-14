import { useState, useEffect } from 'react';

export const useCountUp = (
  end: string,
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    const startCount = 0;
    const endCount = parseInt(end.replace(/\D/g, ''));

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentCount = Math.floor(startCount + (endCount - startCount) * progress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldStart, end, duration]);

  return shouldStart ? (end.includes('+') ? `${count}+` : count.toString()) : '0';
};