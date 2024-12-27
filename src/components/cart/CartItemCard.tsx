"use client";

import { CartItem } from '@/types/cart';
import { useCart } from '@/context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

interface CartItemCardProps {
  item: CartItem;
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-6">
      <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"></div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded">
            <button
              className="px-3 py-1 hover:bg-gray-100"
              onClick={() => updateQuantity(product.id, quantity - 1)}
            >
              -
            </button>
            <span className="px-3 py-1 border-x">{quantity}</span>
            <button
              className="px-3 py-1 hover:bg-gray-100"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-red-600 hover:text-red-700"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="text-xl font-bold">${product.price * quantity}</div>
    </div>
  );
}