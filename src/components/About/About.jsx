import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-scroll';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          
          {/* LEFT COLUMN (Visual) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-glacier rounded-2xl p-8 relative">
              {/* Floating top-left badge */}
              <div className="absolute -top-4 -left-4 bg-indigo text-white font-inter font-medium text-[14px] rounded-lg p-3 shadow-card z-10">
                Est. 2010
              </div>
              
              {/* Photo Placeholder */}
              {/* Needs a real photo of Adv. Atmaram R. Bochare */}
              <div className="w-full aspect-video bg-gradient-to-br from-indigo to-lavender opacity-30 rounded-xl" />
              
              {/* Floating bottom-right badge */}
              <div className="absolute -bottom-4 -right-4 bg-white text-indigo font-inter font-medium text-[14px] rounded-lg p-3 shadow-card z-10 flex items-center gap-2">
                ISO Certified <CheckCircle size={16} />
              </div>
            </div>

            {/* Row of chips */}
            <div className="flex flex-wrap gap-3">
              {['Pune, Maharashtra', 'PAN India', 'Est. 2017', 'ISO Registered'].map((chip, idx) => (
                <div key={idx} className="bg-lavender text-indigo font-inter text-[12px] rounded-full px-4 py-1.5 font-medium">
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Text) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase block mb-3">
              ABOUT SHARP INDUSTRIES
            </span>
            
            <h2 className="font-grotesk font-bold text-[32px] md:text-[38px] text-navy mb-6 leading-tight">
              A Compliance Firm With Legal Expertise Built In
            </h2>
            
            <div className="space-y-4 font-inter text-[16px] text-text-body leading-[1.7] mb-8">
              <p>
                Sharp Industries is a Pune-based management and labour law consultancy helping factories, manufacturers, and service enterprises stay fully compliant across all applicable Maharashtra and central labour legislation. We handle everything from monthly ESI and PF filings to Factory Inspector coordination and labour court representation — under one roof.
              </p>
              <p>
                What sets us apart is simple: our practice is led by a qualified advocate. Adv. Atmaram R. Bochare holds LLB (Labour Laws), M.S.W. (Labour Welfare), and is a Member of the Bar Council of Maharashtra & Goa and a Registered Government Labour Welfare Officer. Your compliance is not managed by a generalist — it is managed by someone qualified to represent you in court if it ever comes to that.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Full-scope compliance across Factories Act, CLRA, BOCW, PF/ESI, POSH & more",
                "Direct Labour Office and Factory Inspector coordination included",
                "Legal representation available if disputes escalate to court"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-indigo" size={20} />
                  <span className="font-inter font-bold text-[15px] text-navy">{item}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="contact"
              smooth={true}
              duration={600}
              className="inline-flex items-center gap-2 text-indigo font-inter font-medium text-[15px] cursor-pointer hover:text-indigo-dark transition-colors"
            >
              Talk to Our Team <span>&rarr;</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
