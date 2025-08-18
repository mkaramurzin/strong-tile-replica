import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import About from '../components/About';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SeoLocalBusiness from '../components/SeoLocalBusiness';
import { businessConfig } from '../config/business';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        {businessConfig.features.showReviews && <Reviews />}
        <FAQ />
        <Contact />
        <SeoLocalBusiness />
      </main>
      <Footer />
    </div>
  );
}
