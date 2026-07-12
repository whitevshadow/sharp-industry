import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { INDUSTRIES } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const Industries = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="industries" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase mb-3">
            WHO WE WORK WITH
          </span>
          <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-4">
            Built for Maharashtra's Manufacturing Belt
          </h2>
          <p className="font-inter text-[16px] md:text-[18px] text-text-muted max-w-[700px]">
            From single-unit factories in Chakan to multi-location manufacturers across Pune, Shirdi, and Maharashtra — Sharp Industries understands the compliance environment your business actually operates in.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-center"
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="bg-glacier rounded-xl p-6 border border-[rgba(79,70,229,0.08)] shadow-sm hover:border-indigo hover:shadow-card transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-indigo group-hover:bg-indigo group-hover:text-white transition-colors shrink-0">
                <Building2 size={24} />
              </div>
              <h3 className="font-inter font-medium text-[15px] text-navy">
                {industry}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;
