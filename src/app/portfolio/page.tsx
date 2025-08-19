import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioImage from '../../components/PortfolioImage';
import Link from 'next/link';
import { portfolioItems } from '../../data/portfolio';
import { businessConfig } from '../../config/business';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Portfolio - ${businessConfig.brand.name} Tile & Flooring Work in ${businessConfig.location.fullLocation}`,
  description: `View our precision tile installation and flooring projects in ${businessConfig.location.fullLocation}. See completed bathroom renovations, kitchen backsplashes, and commercial flooring work by ${businessConfig.brand.name} serving ${businessConfig.location.serviceAreas.join(", ")}.`,
  keywords: [
    'tile portfolio',
    'flooring gallery',
    'bathroom renovation',
    'kitchen backsplash',
    'tile work examples',
    'flooring projects',
    businessConfig.location.city + ' tile work',
    'Vancouver tile installation',
    'commercial flooring portfolio'
  ],
  openGraph: {
    title: `Portfolio - ${businessConfig.brand.name} Tile & Flooring Work in ${businessConfig.location.fullLocation}`,
    description: `See our precision tile work and organized installations across ${businessConfig.location.serviceAreas.join(", ")} and surrounding areas.`,
    url: 'https://vantatileflooring.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See our precision tile work and organized installations across {businessConfig.location.serviceAreas.join(", ")} and surrounding areas.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {/* Main Image */}
                  <div className="relative h-64 w-full bg-gray-100">
                    <PortfolioImage
                      src={item.images[0].src}
                      alt={item.images[0].alt}
                      width={item.images[0].width}
                      height={item.images[0].height}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Note */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {item.note}
                    </p>
                    
                    {/* Completion Date */}
                    {item.completedDate && (
                      <p className="text-sm text-gray-500">
                        Completed: {new Date(item.completedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </p>
                    )}
                    
                    {/* Additional Images Indicator */}
                    {item.images.length > 1 && (
                      <div className="mt-4 flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        +{item.images.length - 1} more {item.images.length === 2 ? 'image' : 'images'}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Placeholder Cards for Future Projects */}
              {[...Array(1)].map((_, index) => (
                <div key={`placeholder-${index}`} className="bg-gray-50 rounded-lg shadow-sm border-2 border-dashed border-gray-200 flex items-center justify-center h-96">
                  <div className="text-center text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p className="text-lg font-medium">More Projects</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Let us bring the same precision and organization to your tile and flooring project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
              >
                Get Free Estimate
              </Link>
              <a 
                href={`tel:${businessConfig.contact.phone.href}`}
                className="inline-block border-2 border-black text-black px-8 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors"
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