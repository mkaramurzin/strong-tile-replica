import Image from 'next/image';
import { businessConfig } from '../config/business';

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR FLOORING SERVICES
          </h2>
        </div>

        {/* Service 1: Tile Installation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {businessConfig.content.servicesContent.tileInstallation.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-medium">
              {businessConfig.content.servicesContent.tileInstallation.subtitle}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {businessConfig.content.servicesContent.tileInstallation.description}
            </p>
          </div>
          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional tile installation worker applying adhesive"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service 2: Tile Repair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="White subway tile wall installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {businessConfig.content.servicesContent.tileRepair.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-medium">
              {businessConfig.content.servicesContent.tileRepair.subtitle}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {businessConfig.content.servicesContent.tileRepair.description}
            </p>
          </div>
        </div>

        {/* Service 3: Flooring Installation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {businessConfig.content.servicesContent.flooringInstallation.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-medium">
              {businessConfig.content.servicesContent.flooringInstallation.subtitle}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {businessConfig.content.servicesContent.flooringInstallation.description}
            </p>
          </div>
          {/* Image */}
          <div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/gallery/ai/stair-landing-transition.jpg"
                alt="Professional flooring installation with stair landing transition"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Simple 3-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessConfig.content.processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 