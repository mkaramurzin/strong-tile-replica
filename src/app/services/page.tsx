import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

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
              We offer a variety of tile installation and remodeling services to enhance the design of your home
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tile Installation
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Looking for a reliable <strong>tile installation contractor</strong> or <strong>flooring contractor near me</strong>? 
                  Enhance your home with our expert tile installation services. Our experienced team delivers{' '}
                  <strong>exceptional quality and attention to detail</strong>, transforming bathrooms, kitchens, 
                  and backsplashes with precision and style. From accurate measurements to flawless finishes, we 
                  ensure a smooth, efficient installation process every time. Contact us today for your free estimate 
                  and take the first step toward a beautifully tiled space!
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
                    alt="Tile repair work in progress"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tile Repair
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Our skilled professionals at Strong Tile specialize in expert tile repair services to help 
                  restore the beauty and functionality of your tiled surfaces. Whether you have cracked, chipped, 
                  or loose tiles, we are here to provide high-quality repairs with precision and attention to detail. 
                  Contact us today to schedule your tile repair service and bring new life to your space.
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>

            {/* Service 3: Home Remodel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Home Remodel
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  At Strong Tile, we not only specialize in exceptional tile work but also offer a wide range 
                  of home remodeling services. Our experienced team is dedicated to transforming your space into 
                  the home of your dreams. From kitchen remodels to bathroom renovations, we pay attention to 
                  every detail to ensure your project is completed to the highest standards. Let us bring your 
                  vision to life with our professional home remodeling services.
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  LEARN MORE →
                </Link>
              </div>
              {/* Image */}
              <div>
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern kitchen remodel with white cabinets and pendant lights"
                    fill
                    className="object-cover"
                  />
                </div>
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Contact us today for your free estimate and consultation
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