'use client';

import { useState } from 'react';
import { businessConfig } from '../config/business';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

  const faqs = [
    {
      question: `What makes your tile installations different from other contractors in ${businessConfig.location.fullLocation}?`,
      answer: "We focus on perfect precision — clean lines, level planes, and tight grout joints. Plus, we maintain organized job sites with surface protection and daily cleanup, showing respect for your home throughout the project."
    },
    {
      question: `How does ${businessConfig.brand.name} ensure project quality and timeline?`,
      answer: `We stand by our word with clear scope definition, realistic scheduling, and consistent follow-through. Our 3-step process includes thorough planning, proper prep work, and precision installation with final cleanup.`
    },
    {
      question: `What types of flooring and tile projects do you handle?`,
      answer: "We specialize in tile installation (showers, backsplashes, large-format floors), tile repair (cracked tiles, regrout, resealing), and flooring installation (LVP, LVT, engineered wood, laminate) with proper subfloor prep and transitions."
    },
    {
      question: `Do you work on commercial projects as well as residential?`,
      answer: `Yes! We're residential specialists now expanding into commercial projects across the Northwest. Whether it's a home bathroom or a commercial space, we bring the same precision and organization to every job.`
    },
    {
      question: `How can I get started with my flooring project?`,
      answer: `Contact ${businessConfig.brand.name} at ${businessConfig.contact.phone.display} for your free consultation and estimate. We'll measure, plan the layout and materials, then provide a clear scope and timeline for your project.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQs About Flooring in Federal Way, WA
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Business Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Location</h3>
                <p className="text-gray-700">
                  {businessConfig.brand.name} is located at <strong>{businessConfig.location.address.full}</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Services</h3>
                <p className="text-gray-700 mb-2">We are specialized in the following services:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• <strong>Tile Installation</strong></li>
                  <li>• <strong>Flooring Installation</strong></li>
                </ul>
              </div>
            </div>

            {/* Right Column - Hours & Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                <p className="text-gray-700">
                  We are open <strong>{businessConfig.contact.businessHours.weekdays}</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    For additional questions, you can call us at{' '}
                    <a href={`tel:${businessConfig.contact.phone.href}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                      {businessConfig.contact.phone.display}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Find Us in {businessConfig.location.fullLocation}</h3>
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.123!2d-122.312!3d47.308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDE4JzI5LjAiTiAxMjLCsDE4JzQzLjAiVw!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${businessConfig.brand.name} Location - ${businessConfig.location.fullLocation}`}
              className="rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/dir//3937+SW+328th+Pl,+Federal+Way,+WA+98023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 