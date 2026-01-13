import { useEffect, useState } from 'react';

export const useCountUp = (end, duration = 2000, start = 0, isActive = false) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isActive) return;

    let startTime = null;
    const startValue = start;
    const endValue = end;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = startValue + (endValue - startValue) * easeProgress;
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, isActive]);

  return count;
};