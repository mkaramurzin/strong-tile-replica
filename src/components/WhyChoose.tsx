import { businessConfig } from '../config/business';

export default function WhyChoose() {
  const features = [
    {
      title: "Perfect Precision",
      description: "Clean lines, level planes, tight grout joints — every detail matters in our installations.",
      icon: "🔧"
    },
    {
      title: "Organized Job Sites", 
      description: "Surface protection, daily tidy-ups, and respect for your home throughout the project.",
      icon: "🎨"
    },
    {
      title: "We Stand by Our Word",
      description: "Clear scope, realistic schedules, and consistent follow-through on every commitment we make.",
      icon: "🔨"
    },
    {
      title: "Quality Materials",
      description: "We use premium-grade tiles and materials sourced from trusted suppliers, guaranteeing durability and elegance in every project.",
      icon: "💎"
    },
    {
      title: "Commercial Expansion",
      description: "Residential specialists now expanding into commercial projects across the Northwest.",
      icon: "🏢"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose {businessConfig.brand.name} in {businessConfig.location.fullLocation}?
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

        {/* Why Choose Points */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessConfig.content.whyChoose.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full mt-3 mr-4"></div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area */}
        <div className="text-center bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Service Area
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Based in {businessConfig.location.city}, {businessConfig.location.state}. Serving {businessConfig.location.serviceAreas.join(", ")} and surrounding areas. {businessConfig.content.commercial.description}
          </p>
        </div>
      </div>
    </section>
  );
} 