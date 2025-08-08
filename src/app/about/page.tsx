import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

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
              About Strong Tile - Your Flooring Partner
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Welcome to Strong Tile, your premier tile and remodeling contractor in the Pacific Northwest
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  With a passion for craftsmanship and a commitment to excellence, Strong Tile has been transforming 
                  homes and commercial spaces with stunning tile work and innovative remodeling solutions. Our skilled 
                  team specializes in custom tile installations, kitchen and bathroom remodels, and comprehensive 
                  renovation services.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We take pride in our attention to detail, using only the highest quality materials to ensure 
                  lasting beauty and durability. At Strong Tile, we believe in turning your vision into reality, 
                  creating spaces that are not only functional but also inspiring. Let us bring your next project 
                  to life with our expertise, creativity, and dedication to superior service.
                </p>
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

        {/* Why Choose Strong Tile Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Strong Tile LLC As Your Flooring Company in Federal Way, WA?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Expertise */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expertise in Tile Installation
                </h3>
                <p className="text-gray-700">
                  With years of experience, we specialize in precision tile installation for kitchens, bathrooms, 
                  and other spaces, ensuring a flawless finish that lasts.
                </p>
              </div>

              {/* Custom Solutions */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Custom Flooring Solutions
                </h3>
                <p className="text-gray-700">
                  We understand every property is unique. Our team works closely with you to design and implement 
                  custom flooring solutions that reflect your style and meet your functional requirements.
                </p>
              </div>

              {/* Repairs */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Repairs and Maintenance
                </h3>
                <p className="text-gray-700">
                  From minor tile repairs to complete overhauls, we handle it all. We restore damaged flooring 
                  to its original condition, extending its lifespan and maintaining its aesthetic appeal.
                </p>
              </div>

              {/* Materials */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  High-Quality Materials
                </h3>
                <p className="text-gray-700">
                  We use premium-grade tiles and materials sourced from trusted suppliers, guaranteeing 
                  durability and elegance in every project.
                </p>
              </div>

              {/* Customer Service */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Excellent Customer Service
                </h3>
                <p className="text-gray-700">
                  Our commitment to customer satisfaction is unwavering. From consultation to project completion, 
                  we ensure clear communication, timely execution, and a hassle-free experience.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Years of Experience</h3>
                  <p className="text-gray-700">
                    Two decades of expertise in transforming homes and commercial spaces throughout the Pacific Northwest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Flooring Matters Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Beautiful modern home interior with quality flooring"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Flooring Matters
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Your flooring is more than just a surface; it&apos;s a foundation for your everyday life. Whether 
                  you&apos;re looking to update a single room or revamp your entire property, Strong Tile LLC provides 
                  the expertise and solutions to bring your vision to life.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Quality flooring enhances the aesthetic appeal of your space while providing durability and 
                  functionality that lasts for years. With professional installation and premium materials, 
                  your investment will continue to add value and beauty to your home.
                </p>
              </div>
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
              Contact Strong Tile LLC today and let us bring your vision to life
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