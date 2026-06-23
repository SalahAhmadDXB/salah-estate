import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import InvestmentCase from '@/components/InvestmentCase';
import Portfolio from '@/components/Portfolio';
import Developers from '@/components/Developers';
import Calculator from '@/components/Calculator';
import Lifestyle from '@/components/Lifestyle';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustStrip />
      <About />
      <InvestmentCase />
      <Portfolio />
      <Developers />
      <Calculator />
      <Lifestyle />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
