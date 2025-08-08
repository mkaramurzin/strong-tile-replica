'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

  const faqs = [
    {
      question: "How should one compare flooring estimates for premiere floors in Federal Way, WA?",
      answer: "Compare estimates based on material quality, labor costs, project timelines, and reviews of the contractor's previous work."
    },
    {
      question: "How does Strong Tile LLC guide customers from start to finish of a flooring project?",
      answer: "Strong Tile LLC offers personalized consultations, expert recommendations, precise installation, and ongoing support throughout the project."
    },
    {
      question: "What services does Strong Tile LLC's flooring installations offer?",
      answer: "Our services include tile installation, flooring repairs, custom design solutions, and both residential and commercial flooring projects."
    },
    {
      question: "How can I get started on my free estimate with flooring contractors in Federal Way, WA?",
      answer: "Contact Strong Tile LLC at 253-249-8524 or visit our website to schedule your consultation and free estimate."
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
                  Strong Tile LLC is located at <strong>3937 SW 328th Pl, Federal Way, WA, 98023</strong>.
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
                  We are open <strong>Monday to Friday from 08:00 am to 05:00 pm</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    For additional questions, you can call us at{' '}
                    <a href="tel:253-249-8524" className="text-blue-600 hover:text-blue-800 font-semibold">
                      253-249-8524
                    </a>
                  </p>
                  <p>
                    or check our{' '}
                    <a 
                      href="https://www.google.com/search?q=Strong+Tile+LLC+reviews" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      reviews on Google
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Find Us in Federal Way, WA</h3>
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.123!2d-122.312!3d47.308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDE4JzI5LjAiTiAxMjLCsDE4JzQzLjAiVw!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Strong Tile LLC Location - Federal Way, WA"
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