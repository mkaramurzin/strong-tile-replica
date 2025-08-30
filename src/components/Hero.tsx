import Link from 'next/link';
import { businessConfig } from '../config/business';

export default function Hero() {
  const telHref = (phone: string) => `tel:${phone}`;

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {businessConfig.content.hero.title}
        </h1>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {businessConfig.content.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300"
          >
            Get a Free Estimate
          </Link>
          <a 
            href={telHref(businessConfig.contact.phone.href)}
            className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Call {businessConfig.contact.phone.display}
          </a>
        </div>

        {/* Credibility Chips - Fixed for readability */}
        <ul className="flex flex-wrap justify-center gap-3 text-sm">
          {businessConfig.content.credibilityChips.map((chip, index) => (
            <li key={index} className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium shadow-lg">
              {chip}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Commercial Badge */}
      <div className="absolute top-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hidden md:block">
        {businessConfig.content.commercial.badge}
      </div>
    </section>
  );
} 