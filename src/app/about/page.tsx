export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to our store! We are dedicated to providing high-quality products to customers worldwide.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to deliver exceptional products and outstanding customer service to our global community of shoppers.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Quality First</li>
          <li>Customer Satisfaction</li>
          <li>Global Accessibility</li>
          <li>Sustainable Practices</li>
        </ul>
      </div>
    </div>
  );
}