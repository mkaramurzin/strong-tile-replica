export default function WhyChoose() {
  const features = [
    {
      title: "Expertise in Tile Installation",
      description: "With years of experience, we specialize in precision tile installation for kitchens, bathrooms, and other spaces, ensuring a flawless finish that lasts.",
      icon: "🔧"
    },
    {
      title: "Custom Flooring Solutions", 
      description: "We understand every property is unique. Our team works closely with you to design and implement custom flooring solutions that reflect your style and meet your functional requirements.",
      icon: "🎨"
    },
    {
      title: "Repairs and Maintenance",
      description: "From minor tile repairs to complete overhauls, we handle it all. We restore damaged flooring to its original condition, extending its lifespan and maintaining its aesthetic appeal.",
      icon: "🔨"
    },
    {
      title: "High-Quality Materials",
      description: "We use premium-grade tiles and materials sourced from trusted suppliers, guaranteeing durability and elegance in every project.",
      icon: "💎"
    },
    {
      title: "Excellent Customer Service",
      description: "Our commitment to customer satisfaction is unwavering. From consultation to project completion, we ensure clear communication, timely execution, and a hassle-free experience.",
      icon: "⭐"
    }
  ];

  const benefits = [
    "Enhanced Durability: Professionally installed flooring withstands daily wear and tear, maintaining its beauty for years.",
    "Increased Property Value: Quality flooring boosts the aesthetic and market value of your property.",
    "Personalized Aesthetics: Custom designs ensure your flooring complements your space perfectly.",
    "Peace of Mind: With expert craftsmanship and premium materials, you can trust your flooring will last."
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Strong Tile LLC As your Flooring Company in Federal Way, WA?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Benefits of Professional Flooring Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full mt-3 mr-4"></div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Flooring Matters */}
        <div className="text-center bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Flooring Matters
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Your flooring is more than just a surface; it&apos;s a foundation for your everyday life. Whether you&apos;re looking to update a single room or revamp your entire property, Strong Tile LLC provides the expertise and solutions to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
} 