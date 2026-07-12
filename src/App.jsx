import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import About from './components/About/About';
import WhyUs from './components/WhyUs/WhyUs';
import HowWeWork from './components/HowWeWork/HowWeWork';
import Acts from './components/Acts/Acts';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industries />
        <About />
        <WhyUs />
        <HowWeWork />
        <Acts />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
