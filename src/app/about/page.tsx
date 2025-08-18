import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '../../config/business';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {businessConfig.brand.name} - Your Flooring Partner
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              {businessConfig.content.about.intro}
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {businessConfig.content.about.story}
                </p>
                
                {/* Owner Quotes */}
                <div className="space-y-4 mb-8">
                  {businessConfig.content.ownerQuotes.map((quote, index) => (
                    <blockquote key={index} className="italic text-gray-600 border-l-4 border-gray-300 pl-4">
                      &quot;{quote}&quot;
                    </blockquote>
                  ))}
                </div>
              </div>
              {/* Image */}
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional tile installation team at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose {businessConfig.brand.name} in {businessConfig.location.fullLocation}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessConfig.content.whyChoose.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-gray-800 rounded-full mt-3 mr-4"></div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Area
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Based in {businessConfig.location.city}, {businessConfig.location.state}. Serving {businessConfig.location.serviceAreas.join(", ")} and surrounding areas.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                {businessConfig.content.commercial.description}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with the Best?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact {businessConfig.brand.name} today and let us bring your vision to life
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              FREE ESTIMATE →
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 