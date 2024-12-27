import Link from 'next/link';
import { CartIcon } from './CartIcon';

export function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Store Name
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link href="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-gray-900">
            Categories
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-gray-900">
            <CartIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}