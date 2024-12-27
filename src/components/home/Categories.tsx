export function Categories() {
  const categories = [
    { id: 1, name: 'Electronics', image: '/electronics.jpg' },
    { id: 2, name: 'Fashion', image: '/fashion.jpg' },
    { id: 3, name: 'Home & Garden', image: '/home.jpg' },
    { id: 4, name: 'Sports', image: '/sports.jpg' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}