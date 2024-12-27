export function Hero() {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Quality Products for Global Customers
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover our wide range of products shipped worldwide
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}