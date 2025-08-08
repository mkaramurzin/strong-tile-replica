import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              FAQs About Flooring in Federal Way, WA
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get answers to the most frequently asked questions about our flooring services
            </p>
          </div>
        </section>

        {/* FAQs Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              
              {/* FAQ 1 */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  How should one compare flooring estimates for premiere floors in Federal Way, WA?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Compare estimates based on material quality, labor costs, project timelines, and reviews of the 
                  contractor&apos;s previous work. Don&apos;t just look at the bottom line - consider the value you&apos;re getting 
                  for your investment. Quality materials and expert installation may cost more upfront but provide 
                  better long-term value and durability.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  How does Strong Tile LLC guide customers from start to finish of a flooring project?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Strong Tile LLC offers personalized consultations, expert recommendations, precise installation, 
                  and ongoing support throughout the project. We begin with an in-home consultation to understand 
                  your needs and vision, provide detailed estimates, help you select the best materials, manage 
                  the entire installation process, and ensure your complete satisfaction with the finished result.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  What services does Strong Tile LLC&apos;s flooring installations offer?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our services include tile installation, flooring repairs, custom design solutions, and both 
                  residential and commercial flooring projects. We specialize in bathroom and kitchen tile work, 
                  backsplash installation, home remodeling, tile repair services, and complete flooring renovations. 
                  Whether it&apos;s a small repair or a full-scale remodel, we have the expertise to handle projects 
                  of any size.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  How can I get started on my free estimate with flooring contractors in Federal Way, WA?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Contact Strong Tile LLC at{' '}
                  <a href="tel:253-249-8524" className="text-blue-600 hover:text-blue-800 font-medium">
                    253-249-8524
                  </a>{' '}
                  or visit our website to schedule your consultation and free estimate. We&apos;ll arrange a convenient 
                  time to visit your property, discuss your project goals, take measurements, and provide you with 
                  a detailed estimate at no cost.
                </p>
              </div>

              {/* Additional FAQ */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  What types of tile materials do you work with?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We work with a wide variety of tile materials including ceramic, porcelain, natural stone (marble, 
                  granite, travertine), glass tiles, and specialty tiles. Our team has experience with both traditional 
                  and modern tile options, and we can help you choose the best material for your specific needs, 
                  budget, and design preferences.
                </p>
              </div>

              {/* Additional FAQ */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  How long does a typical tile installation project take?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Project timelines vary depending on the size and complexity of the job. A standard bathroom 
                  renovation typically takes 3-7 days, while kitchen backsplashes can often be completed in 1-2 days. 
                  Larger projects like full home remodels may take several weeks. We provide detailed timelines 
                  during the estimate process and keep you informed throughout the project.
                </p>
              </div>

              {/* Additional FAQ */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Do you offer warranties on your work?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Yes, we stand behind our work with comprehensive warranties. We offer warranties on both our 
                  installation workmanship and the materials we provide. The specific terms depend on the project 
                  scope and materials used, but we&apos;re committed to ensuring your complete satisfaction with every 
                  project we complete.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Have More Questions?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Don&apos;t see your question answered here? Contact us directly and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href="tel:253-249-8524" 
                className="inline-block border-2 border-black text-black px-8 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors"
              >
                Call (253) 249-8524
              </a>
            </div>
          </div>
        </section>

        {/* Business Hours & Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <p className="text-gray-700 text-lg">
                  Monday to Friday<br />
                  08:00 am to 05:00 pm
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <address className="text-gray-700 text-lg not-italic">
                  Strong Tile LLC<br />
                  3937 SW 328th Pl<br />
                  Federal Way, WA 98023
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
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