import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { businessConfig } from '../config/business';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 flex-1">
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="max-w-md mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* VANTA Logo */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <Image
                src="/vanta-logo.png"
                alt={`${businessConfig.brand.name} Logo`}
                fill
                className="object-contain"
              />
            </div>

            {/* 404 Content */}
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sorry, the page you&apos;re looking for doesn&apos;t exist. But we&apos;re here to help with your flooring needs!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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

            {/* Navigation Links */}
            <div className="space-y-2">
              <p className="text-sm text-gray-500 mb-4">Or visit one of these pages:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Portfolio
                </Link>
                <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors">
                  About
                </Link>
                <Link href="/faqs" className="text-blue-600 hover:text-blue-800 transition-colors">
                  FAQs
                </Link>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 