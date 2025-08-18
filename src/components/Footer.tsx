import Link from 'next/link';
import { businessConfig } from '../config/business';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                <span className="inline-block w-8 h-8 bg-gray-800 mr-2 transform rotate-45"></span>
                {businessConfig.brand.name}
              </div>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              {businessConfig.brand.tagline}
            </p>
          </div>

          {/* Center Column - Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Discover more
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/areas" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            <div className="mb-6">
              <address className="text-gray-600 not-italic leading-relaxed">
                {businessConfig.location.address.street}, {businessConfig.location.address.city},<br />
                {businessConfig.location.address.state} {businessConfig.location.address.zipCode}, {businessConfig.location.address.country}
              </address>
            </div>

            <div className="space-y-4">
              {businessConfig.features.showEmailCTA && businessConfig.contact.email.primary && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Email Us</div>
                    <a 
                      href={`mailto:${businessConfig.contact.email.primary}`} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {businessConfig.contact.email.primary}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Call Us</div>
                  <a 
                    href={`tel:${businessConfig.contact.phone.href}`} 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {businessConfig.contact.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 {businessConfig.brand.name.toLowerCase().replace(' ', '')} – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
} 