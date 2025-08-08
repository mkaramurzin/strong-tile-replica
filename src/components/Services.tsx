import Link from 'next/link';
import Image from 'next/image';

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
            <Link 
              href="/services/tile-installation" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium mb-6 transition-colors"
            >
              LEARN MORE →
            </Link>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tile Installation
            </h3>
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
                alt="White subway tile wall installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tile Repair
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our skilled professionals at Strong Tile specialize in expert tile repair services to help 
              restore the beauty and functionality of your tiled surfaces. Whether you have cracked, chipped, 
              or loose tiles, we are here to provide high-quality repairs with precision and attention to detail. 
              Contact us today to schedule your tile repair service and bring new life to your space.
            </p>
            <Link 
              href="/services/tile-repair" 
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Home Remodel
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At Strong Tile, we not only specialize in exceptional tile work but also offer a wide range 
              of home remodeling services. Our experienced team is dedicated to transforming your space into 
              the home of your dreams. From kitchen remodels to bathroom renovations, we pay attention to 
              every detail to ensure your project is completed to the highest standards. Let us bring your 
              vision to life with our professional home remodeling services.
            </p>
            <Link 
              href="/services/home-remodel" 
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
  );
} 