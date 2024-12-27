"use client";

import { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { CartAnimation } from '@/components/animation/CartAnimation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationStartPosition, setAnimationStartPosition] = useState({ x: 0, y: 0 });

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    setAnimationStartPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    
    setShowAnimation(true);
    addToCart(product);
    
    // Remove animation after it completes
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200"></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {showAnimation && (
        <CartAnimation startPosition={animationStartPosition} />
      )}
    </div>
  );
}