import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants/data';
import { useActiveSection } from '../../hooks/useActiveSection';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionIds = ['home', 'services', 'about', 'why-us', 'clients', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionId = (link) => {
    if (link === 'Why Us') return 'why-us';
    if (link === 'Clients') return 'clients';
    if (link === 'About') return 'about';
    if (link === 'Services') return 'services';
    if (link === 'Contact') return 'contact';
    return link.toLowerCase();
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white shadow-card py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={600} 
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/src/assets/logo.svg" alt="Diamond Logo" className="w-8 h-8" />
          <div className="flex items-baseline">
            <span className="font-grotesk font-bold text-[20px] text-navy">Sharp</span>
            <span className="font-grotesk font-light text-[20px] text-indigo ml-1">Industries</span>
          </div>
        </Link>

        {/* CENTER: Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = getSectionId(link);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link}
                to={sectionId}
                offset={-80}
                smooth={true}
                duration={600}
                className={`font-inter text-[14px] cursor-pointer transition-colors relative ${
                  isActive ? 'text-indigo' : 'text-text-muted hover:text-indigo'
                }`}
              >
                {link}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: CTA */}
        <div className="hidden md:block">
          <Link
            to="contact"
            offset={-80}
            smooth={true}
            duration={600}
            className="bg-indigo text-white font-inter font-medium text-[14px] rounded-full px-5 py-2.5 cursor-pointer hover:bg-indigo-dark transition-colors"
          >
            Schedule a Call
          </Link>
        </div>

        {/* MOBILE: Hamburger */}
        <button 
          className="md:hidden text-navy p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>

      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[200] flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-navy p-2"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link) => {
                const sectionId = getSectionId(link);
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link}
                    to={sectionId}
                    offset={-80}
                    smooth={true}
                    duration={600}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-grotesk text-2xl ${
                      isActive ? 'text-indigo font-bold' : 'text-navy font-medium'
                    }`}
                  >
                    {link}
                  </Link>
                );
              })}
              <Link
                to="contact"
                offset={-80}
                smooth={true}
                duration={600}
                onClick={() => setMobileMenuOpen(false)}
                className="bg-indigo text-white font-inter font-medium text-lg rounded-full px-8 py-3 mt-4"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
