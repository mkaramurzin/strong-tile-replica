import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '../config/business';

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
              ABOUT {businessConfig.brand.name.toUpperCase()} - YOUR FLOORING PARTNER
            </h2>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                {businessConfig.content.about.intro}
              </p>
              
              <p>
                {businessConfig.content.about.story}
              </p>

              {/* Owner Quotes */}
              <div className="space-y-4 mt-8">
                {businessConfig.content.ownerQuotes.map((quote, index) => (
                  <blockquote key={index} className="italic text-gray-600 border-l-4 border-gray-300 pl-4">
                    "{quote}"
                  </blockquote>
                ))}
              </div>
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