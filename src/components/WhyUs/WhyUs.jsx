import { motion } from 'framer-motion';
import { Award, Gavel, ShieldCheck, MapPin } from 'lucide-react';
import { WHY_US } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const iconMap = {
  Award,
  Gavel,
  ShieldCheck,
  MapPin,
};

const WhyUs = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="why-us" className="bg-glacier py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center">
          <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-4">
            Why Businesses Choose Sharp Industries
          </h2>
          <p className="font-inter text-[16px] md:text-[18px] text-text-muted max-w-[560px]">
            Compliance consultancies are common. One backed by a practising labour law advocate is not.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {WHY_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            
            return (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl p-8 border border-[rgba(79,70,229,0.08)] shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-lavender rounded-xl flex items-center justify-center mb-5">
                  {Icon && <Icon className="text-indigo" size={24} />}
                </div>
                
                <h3 className="font-grotesk font-semibold text-[20px] text-navy mb-2">
                  {item.title}
                </h3>
                
                <p className="font-inter text-[15px] text-text-body leading-[1.7]">
                  {item.desc}
                </p>
                
                <div className="w-10 h-[2px] bg-indigo mt-6" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUs;
