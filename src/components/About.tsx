import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern kitchen with white cabinets and marble countertops"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              ABOUT STRONG TILE - YOUR FLOORING PARTNER
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Welcome to Strong Tile, your premier tile and remodeling contractor in the Pacific Northwest. 
                With a passion for craftsmanship and a commitment to excellence, Strong Tile has been transforming 
                homes and commercial spaces with stunning tile work and innovative remodeling solutions. Our skilled 
                team specializes in custom tile installations, kitchen and bathroom remodels, and comprehensive 
                renovation services.
              </p>
              
              <p>
                We take pride in our attention to detail, using only the highest quality materials to ensure lasting 
                beauty and durability. At Strong Tile, we believe in turning your vision into reality, creating spaces 
                that are not only functional but also inspiring. Let us bring your next project to life with our 
                expertise, creativity, and dedication to superior service.
              </p>
            </div>

            <div className="mt-10">
              <Link 
                href="/estimate" 
                className="inline-flex items-center bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                FREE ESTIMATE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 