"use client";

import { CartItem } from '@/types/cart';

interface CartSummaryProps {
  items: CartItem[];
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = 10; // Fixed shipping cost
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 font-bold flex justify-between">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
}