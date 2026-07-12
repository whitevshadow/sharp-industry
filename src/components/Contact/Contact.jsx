import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const Linkedin = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const Twitter = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const Instagram = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming simple validation (HTML5 required handles basic empty checks)
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="bg-navy py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-16 items-start"
        >
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-indigo-light font-inter font-medium text-[12px] tracking-wider uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="font-grotesk font-bold text-[32px] md:text-[42px] text-white mb-6 leading-tight">
              Ready to Resolve Your Compliance?
            </h2>
            <p className="font-inter text-[16px] text-white/70 mb-10 max-w-[480px] leading-[1.7]">
              Whether you need monthly retainer compliance, a one-time statutory audit, or direct court representation — speak directly with Adv. Atmaram R. Bochare.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <Phone className="text-indigo mt-0.5" size={24} />
                <span className="font-inter text-[16px] text-white">9011022124 / 7720052124</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-indigo mt-0.5" size={24} />
                <span className="font-inter text-[16px] text-white">adv.arbochare@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-indigo mt-0.5" size={24} />
                <span className="font-inter text-[16px] text-white">Plot No 82, Sant Nagar, Moshi Prabhakaran, Pune — 412105</span>
              </div>
            </div>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((SocialIcon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-9 h-9 bg-lavender rounded-full flex items-center justify-center text-indigo hover:bg-indigo hover:text-white transition-colors"
                >
                  <SocialIcon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN (Form) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-card"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500" size={32} />
                </div>
                <h3 className="font-grotesk font-bold text-[24px] text-navy mb-2">Message Sent!</h3>
                <p className="font-inter text-[15px] text-text-muted">
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter font-medium text-[13px] text-navy mb-1">Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full font-inter text-[14px] border border-[rgba(79,70,229,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium text-[13px] text-navy mb-1">Email</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full font-inter text-[14px] border border-[rgba(79,70,229,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter font-medium text-[13px] text-navy mb-1">Company</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full font-inter text-[14px] border border-[rgba(79,70,229,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium text-[13px] text-navy mb-1">Phone</label>
                    <input 
                      required 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full font-inter text-[14px] border border-[rgba(79,70,229,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-medium text-[13px] text-navy mb-1">Service Needed</label>
                  <select 
                    required 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full font-inter text-[14px] border border-[rgba(79,70,229,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all bg-white"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Management Consulting">Management Consulting</option>
                    <option value="Labour Compliance">Labour Compliance</option>
                    <option value="HR Advisory">HR Advisory</option>
                    <option value="Statutory Audit">Statutory Audit</option>
                    <option value="Process Optimisation">Process Optimisation</option>
                    <option value="Risk Advisory">Risk Advisory</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter font-medium text-[13px] text-navy mb-1">Message</label>
                  <textarea 
                    required 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full font-inter text-[14px] border border-[rgba(79,70,229,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-indigo focus:ring-2 focus:ring-indigo/20 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-indigo text-white font-grotesk font-semibold text-[16px] py-3.5 rounded-full hover:bg-indigo-dark transition-colors mt-2"
                >
                  Schedule a Call
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
