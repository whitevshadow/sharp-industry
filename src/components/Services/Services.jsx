import { motion } from 'framer-motion';
import { BarChart2, ShieldCheck, Users, ClipboardList, TrendingUp, AlertTriangle, Gavel } from 'lucide-react';
import { SERVICES } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, fadeUp } from '../../constants/animations';

const iconMap = {
  BarChart2,
  ShieldCheck,
  Users,
  ClipboardList,
  TrendingUp,
  AlertTriangle,
  Gavel,
};

const Services = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="services" className="bg-glacier py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-indigo font-inter font-medium text-[12px] tracking-wider uppercase mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-navy mb-4">
            End-to-End Labour Law & Compliance Services
          </h2>
          <p className="font-inter text-[16px] md:text-[18px] text-text-muted max-w-[560px]">
            From monthly filings to court representation — Sharp Industries manages your compliance end to end so your operations stay uninterrupted and penalty-free.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            return (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="group relative bg-white rounded-xl p-7 border border-[rgba(79,70,229,0.08)] shadow-card transition-all duration-300 hover:border-indigo hover:shadow-hover hover:-translate-y-1 overflow-hidden"
              >
                {/* Indigo top border on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-indigo opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
                
                <div className="w-12 h-12 bg-lavender rounded-lg flex items-center justify-center mb-5">
                  {Icon && <Icon className="text-indigo" size={22} />}
                </div>
                
                <h3 className="font-grotesk font-semibold text-[18px] text-navy mb-2">
                  {service.title}
                </h3>
                
                <p className="font-inter text-[15px] text-text-body leading-[1.7] mb-4">
                  {service.desc}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1 text-indigo font-inter font-medium text-[13px] hover:text-indigo-dark transition-colors"
                >
                  Learn More <span>&rarr;</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
