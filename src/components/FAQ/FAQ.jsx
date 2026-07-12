import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const FAQ = () => {
  const { ref, isInView } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase mb-3">
            COMMON QUESTIONS
          </span>
          <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-4">
            Frequently Asked
          </h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="bg-white border border-[rgba(79,70,229,0.15)] rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-grotesk font-semibold text-[16px] text-navy pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-indigo"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 font-inter text-[15px] text-text-body leading-[1.7]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
