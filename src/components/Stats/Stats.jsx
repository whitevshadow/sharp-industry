import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants/data';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const StatCard = ({ numberStr, label, delay }) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollAnimation();
  
  // Extract number and suffix
  const numMatch = numberStr.match(/\d+/);
  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = numberStr.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center text-center relative"
    >
      <div className="w-8 h-[2px] bg-white mb-4" />
      <div className="font-grotesk font-bold text-[48px] text-white leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="font-inter text-[14px] text-white/70">
        {label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="bg-indigo py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">
          
          {STATS.map((stat, index) => (
            <div key={index} className="relative flex items-center justify-center">
              <StatCard numberStr={stat.number} label={stat.label} delay={index * 0.1} />
              
              {/* Divider (hidden on mobile, and not on the last item) */}
              {index !== STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-white/20" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;
