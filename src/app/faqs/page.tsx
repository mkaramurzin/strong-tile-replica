import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { businessConfig } from '../../config/business';

export default function FAQsPage() {
  const faqs = [
    {
      question: `What makes your tile installations different from other contractors in ${businessConfig.location.fullLocation}?`,
      answer: "We focus on perfect precision — clean lines, level planes, and tight grout joints. Plus, we maintain organized job sites with surface protection and daily cleanup, showing respect for your home throughout the project.",
      fullAnswer: "We focus on perfect precision — clean lines, level planes, and tight grout joints. Plus, we maintain organized job sites with surface protection and daily cleanup, showing respect for your home throughout the project. Every tile matters, and every line should be perfect. That's how we've built our reputation in the Vancouver area."
    },
    {
      question: `How does ${businessConfig.brand.name} ensure project quality and timeline?`,
      answer: `We stand by our word with clear scope definition, realistic scheduling, and consistent follow-through. Our 3-step process includes thorough planning, proper prep work, and precision installation with final cleanup.`,
      fullAnswer: `We stand by our word with clear scope definition, realistic scheduling, and consistent follow-through. Our 3-step process includes thorough planning, proper prep work, and precision installation with final cleanup. We believe a clean job site shows respect for your home and attention to detail in our work.`
    },
    {
      question: `What types of flooring and tile projects do you handle?`,
      answer: "We specialize in tile installation (showers, backsplashes, large-format floors), tile repair (cracked tiles, regrout, resealing), and flooring installation (LVP, LVT, engineered wood, laminate) with proper subfloor prep and transitions.",
      fullAnswer: "We specialize in tile installation including showers, backsplashes, and large-format floors with proper underlayment and waterproofing. We also handle tile repair work like cracked tiles, regrout, and shower remediation and resealing. For flooring, we install LVP, LVT, engineered wood, and laminate with proper subfloor preparation and clean transitions throughout your home."
    },
    {
      question: `Do you work on commercial projects as well as residential?`,
      answer: `Yes! We're residential specialists now expanding into commercial projects across the Northwest. Whether it's a home bathroom or a commercial space, we bring the same precision and organization to every job.`,
      fullAnswer: `Yes! We're residential specialists now expanding into commercial projects across the Northwest. Whether it's a home bathroom or a commercial space, we bring the same precision and organization to every job. We're not just installing tile - we're creating spaces you'll love for years to come.`
    },
    {
      question: `How can I get started with my flooring project?`,
      answer: `Contact ${businessConfig.brand.name} at ${businessConfig.contact.phone.display} for your free consultation and estimate. We'll measure, plan the layout and materials, then provide a clear scope and timeline for your project.`,
                             fullAnswer: `Contact ${businessConfig.brand.name} at ${businessConfig.contact.phone.display} for your free consultation and estimate. We&apos;ll measure, plan the layout and materials, then provide a clear scope and timeline for your project. Our process starts with understanding your vision and ends with a beautifully finished space.`
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              FAQs About Flooring in {businessConfig.location.fullLocation}
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
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {faq.fullAnswer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Contact us today for your free consultation and estimate. Let&apos;s bring your flooring vision to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href={`tel:${businessConfig.contact.phone.href}`} 
                className="inline-block border-2 border-black text-black px-8 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors"
              >
                Call {businessConfig.contact.phone.display}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Area</h3>
                <p className="text-gray-700 text-lg">
                  Based in {businessConfig.location.city}, {businessConfig.location.state}. Serving {businessConfig.location.serviceAreas.join(", ")} and surrounding areas.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                <address className="text-gray-700 text-lg not-italic">
                  {businessConfig.brand.name}<br />
                  {businessConfig.location.address.street}<br />
                  {businessConfig.location.address.city}, {businessConfig.location.address.state} {businessConfig.location.address.zipCode}
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 