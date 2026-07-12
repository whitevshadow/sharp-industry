import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-white pt-28 pb-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo rounded-full opacity-[0.06] blur-[60px] pointer-events-none aria-hidden" />
      <div className="absolute top-10 left-10 w-[80px] h-[80px] bg-indigo rotate-45 opacity-[0.05] pointer-events-none aria-hidden" />
      <div className="absolute bottom-10 right-20 w-[200px] h-[200px] bg-indigo rounded-full opacity-[0.04] pointer-events-none aria-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* LEFT COLUMN */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex bg-lavender text-indigo font-inter font-medium text-[12px] rounded-full px-4 py-1.5 mb-6">
              Labour Law & Compliance Consultancy — Pune, Maharashtra
            </div>
            
            <h1 className="font-grotesk font-bold text-[36px] md:text-[48px] lg:text-[56px] text-navy leading-[1.1]">
              Your Compliance.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-indigo-light">
                Fully Handled.
              </span>
            </h1>
            
            <p className="font-inter text-text-body text-[16px] md:text-[18px] leading-[1.7] max-w-[520px] mt-6">
              Sharp Industries is a Pune-based labour law and compliance consultancy serving manufacturers, contractors, and enterprises across Maharashtra. Every engagement is backed by an in-house advocate with LLB (Labour Laws) and active Bar Council membership — giving you legal depth that most consultancies simply cannot offer.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="contact" 
                smooth={true} 
                duration={600} 
                className="bg-indigo text-white font-grotesk font-medium px-7 py-3.5 rounded-full hover:scale-105 hover:shadow-hover transition-all cursor-pointer"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="services" 
                smooth={true} 
                duration={600} 
                className="border border-indigo text-indigo bg-transparent font-grotesk font-medium px-7 py-3.5 rounded-full hover:bg-lavender transition-colors cursor-pointer"
              >
                View Services
              </Link>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-dark flex items-center justify-center text-white text-[10px] border-2 border-white font-medium z-30">RM</div>
                <div className="w-8 h-8 rounded-full bg-indigo flex items-center justify-center text-white text-[10px] border-2 border-white font-medium z-20">PN</div>
                <div className="w-8 h-8 rounded-full bg-indigo-light flex items-center justify-center text-white text-[10px] border-2 border-white font-medium z-10">AD</div>
              </div>
              <p className="font-inter text-[13px] text-text-muted">
                Trusted by Aptive Components, Ramkrishna Forgings, Nible India Ltd & more
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            className="lg:col-span-5 relative w-full hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-[500px]"
            >
              {/* Replace src with the actual image path once provided */}
              <img 
                src={heroImage} 
                alt="Tech Consultancy - Building the Future" 
                className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
