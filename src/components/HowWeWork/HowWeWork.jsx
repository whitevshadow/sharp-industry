import { motion } from 'framer-motion';
import { HOW_WE_WORK } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const HowWeWork = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="process" className="bg-glacier py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase mb-3">
            OUR PROCESS
          </span>
          <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-4">
            How We Work With Your Business
          </h2>
        </div>

        {/* Timeline Grid */}
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {HOW_WE_WORK.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="bg-white rounded-xl p-8 border border-[rgba(79,70,229,0.08)] shadow-card relative flex flex-col"
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-indigo rounded-full flex items-center justify-center text-white font-grotesk font-bold text-[20px] mb-6 absolute -top-6 shadow-md border-4 border-white">
                {index + 1}
              </div>
              
              <h3 className="font-grotesk font-semibold text-[20px] text-navy mb-4 mt-2">
                {step.title}
              </h3>
              
              <p className="font-inter text-[15px] text-text-body leading-[1.7]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;
