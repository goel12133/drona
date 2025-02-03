export default function About() {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Drona</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl mb-8">
            At Drona, we are passionate about pushing the boundaries of drone technology. Our journey began with a simple idea: to create innovative drone solutions that revolutionize industries and improve lives.
          </p>
          <p className="text-xl mb-8">
            Founded in 2020, Drona has quickly become a leader in the drone industry. Our team of expert engineers, designers, and technicians work tirelessly to develop cutting-edge drone technology for a wide range of applications, from delivery services to environmental monitoring.
          </p>
          <p className="text-xl mb-8">
            We believe in the power of drones to transform the way we work, live, and interact with our environment. Our mission is to make drone technology accessible, efficient, and beneficial for businesses and communities around the world.
          </p>
          <div className="w-full max-w-3xl mx-auto aspect-video bg-gray-300 mb-8">
            {/* Replace this div with an actual video player component */}
            <p className="text-center py-20">Video Placeholder</p>
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-xl mb-8">
            <li>Innovation: We constantly push the boundaries of what's possible with drone technology.</li>
            <li>Quality: We are committed to delivering the highest quality products and services.</li>
            <li>Sustainability: We strive to make our operations and products as eco-friendly as possible.</li>
            <li>Customer-Centric: We put our customers' needs at the heart of everything we do.</li>
          </ul>
          <p className="text-xl">
            Join us on our mission to revolutionize industries and create a better future with drone technology. Explore our services and see how Drona can help you take your projects to new heights.
          </p>
        </div>
      </div>
    </section>
  )
}

