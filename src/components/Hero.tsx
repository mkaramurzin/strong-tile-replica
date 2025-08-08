import Link from 'next/link';

export default function Hero() {
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
          Trusted Flooring Company in<br />
          Federal Way, WA
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-8 font-light">
          Flooring Installation Contractors near me in<br />
          Federal Way
        </h2>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          We offer a variety of tile installation and remodeling services to enhance the design of your home
        </p>
        
        <Link 
          href="/estimate" 
          className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          FREE ESTIMATE →
        </Link>
      </div>
      
      {/* Experience Badge */}
      <div className="absolute bottom-20 left-8 bg-white text-black p-6 rounded-lg shadow-lg hidden md:block">
        <div className="text-3xl font-bold">20</div>
        <div className="text-sm">years</div>
      </div>
    </section>
  );
} 