import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS, CLIENTS } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const Testimonials = () => {
  const { ref, isInView } = useScrollAnimation();

  // Helper to extract initials
  const getInitials = (name) => {
    if (!name || name === 'Representative') return 'R';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  };

  return (
    <section id="clients" className="bg-glacier py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase mb-3">
            CLIENT TRUST
          </span>
          <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-4">
            Trusted Across Pune's Industrial Belt
          </h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="bg-white rounded-xl border border-[rgba(79,70,229,0.08)] shadow-card p-8 relative overflow-hidden flex flex-col h-full"
            >
              {/* Left border accent */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-indigo" />
              
              <Quote className="text-lavender mb-4" size={32} fill="currentColor" />
              
              <p className="font-inter text-[16px] text-text-body italic leading-[1.8] flex-1">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo rounded-full flex items-center justify-center text-white font-inter font-medium text-[14px]">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <div className="font-grotesk font-semibold text-[15px] text-navy leading-tight">
                    {testimonial.name}, {testimonial.company}
                  </div>
                  <div className="font-inter text-[13px] text-text-muted mt-0.5">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Trust Strip */}
        <div className="overflow-hidden bg-white rounded-2xl py-8 px-6 border border-[rgba(79,70,229,0.05)] shadow-sm">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
            {CLIENTS.map((client, i) => (
              <div 
                key={i} 
                className="font-inter text-[14px] font-medium text-text-muted text-center whitespace-nowrap"
              >
                {client.split(' — ')[0]}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
