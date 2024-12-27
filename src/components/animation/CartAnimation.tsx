"use client";

import { useEffect, useState } from 'react';

interface CartAnimationProps {
  startPosition: { x: number; y: number };
}

export function CartAnimation({ startPosition }: CartAnimationProps) {
  const [position, setPosition] = useState(startPosition);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Get cart icon position
    const cartIcon = document.querySelector('.cart-icon');
    if (!cartIcon) return;
    
    const cartRect = cartIcon.getBoundingClientRect();
    const endPosition = {
      x: cartRect.left + cartRect.width / 2,
      y: cartRect.top + cartRect.height / 2,
    };

    // Animate
    const startTime = Date.now();
    const duration = 800;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Bezier curve for smooth arc motion
      const x = startPosition.x + (endPosition.x - startPosition.x) * progress;
      const y = startPosition.y + (endPosition.y - startPosition.y) * progress - Math.sin(progress * Math.PI) * 100;

      setPosition({ x, y });
      setOpacity(1 - progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [startPosition]);

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        opacity: opacity,
      }}
    >
      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
    </div>
  );
}