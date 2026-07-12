import { motion } from 'framer-motion';
import { ACTS } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const Acts = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="acts" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase mb-3 block">
              REGULATORY EXPERTISE
            </span>
            <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-6 leading-tight">
              Every Act. Every Filing. Handled.
            </h2>
            <p className="font-inter text-[16px] text-text-body leading-[1.7]">
              Sharp Industries maintains active working knowledge of all central and Maharashtra state labour legislation. Adv. Bochare's LLB specialisation in Labour Laws means interpretations are legally sound — not just procedurally compliant.
            </p>
          </motion.div>

          {/* Tags Grid */}
          <motion.div 
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3"
          >
            {ACTS.map((act, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-lavender text-indigo font-inter text-[14px] rounded-full px-5 py-2 font-medium border border-indigo/10 shadow-sm"
              >
                {act}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Acts;
