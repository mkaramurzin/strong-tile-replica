import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '../../config/business';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Flooring Services in ${businessConfig.location.fullLocation} - Tile Installation & Repair`,
  description: `Professional tile installation, tile repair, and flooring services in ${businessConfig.location.fullLocation}. ${businessConfig.brand.name} offers expert tile work, waterproofing, and flooring installation serving ${businessConfig.location.serviceAreas.join(", ")} with precision and organization.`,
  keywords: [
    'tile installation',
    'tile repair',
    'flooring installation',
    'bathroom tile',
    'kitchen backsplash',
    'shower tile',
    'LVP installation',
    businessConfig.location.city + ' tile',
    businessConfig.location.state + ' flooring',
    'commercial flooring',
    'waterproofing'
  ],
  openGraph: {
    title: `Flooring Services in ${businessConfig.location.fullLocation} - Tile Installation & Repair`,
    description: businessConfig.brand.tagline,
    url: 'https://vantatileflooring.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Flooring Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {businessConfig.brand.tagline}
            </p>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Service 1: Tile Installation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <Link 
                  href="#" 
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium mb-6 transition-colors"
                >
                  LEARN MORE →
                </Link>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {businessConfig.content.servicesContent.tileInstallation.title}
                </h2>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {businessConfig.content.servicesContent.tileRepair.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  {businessConfig.content.servicesContent.tileRepair.subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {businessConfig.content.servicesContent.tileRepair.description}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>

            {/* Service 3: Flooring Installation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <Link 
                  href="#" 
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium mb-6 transition-colors"
                >
                  LEARN MORE →
                </Link>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {businessConfig.content.servicesContent.flooringInstallation.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 font-medium">
                  {businessConfig.content.servicesContent.flooringInstallation.subtitle}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {businessConfig.content.servicesContent.flooringInstallation.description}
                </p>
              </div>
              {/* Image */}
              <div className="order-1 lg:order-2">
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

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Professional Flooring Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Durability</h3>
                <p className="text-gray-700">Professionally installed flooring withstands daily wear and tear, maintaining its beauty for years.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Increased Property Value</h3>
                <p className="text-gray-700">Quality flooring boosts the aesthetic and market value of your property.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Aesthetics</h3>
                <p className="text-gray-700">Custom designs ensure your flooring complements your space perfectly.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Peace of Mind</h3>
                <p className="text-gray-700">With expert craftsmanship and premium materials, you can trust your flooring will last.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact us today for your free consultation and estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                GET FREE ESTIMATE
              </Link>
              <a 
                href={`tel:${businessConfig.contact.phone.href}`}
                className="inline-block border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-black transition-colors"
              >
                Call {businessConfig.contact.phone.display}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 