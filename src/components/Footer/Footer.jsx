import { Link } from 'react-scroll';
import { CheckCircle2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-white/10 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-14">
          
          {/* Column 1: About */}
          <div className="flex flex-col items-start">
            <h4 className="font-grotesk font-bold text-[18px] text-white mb-1">
              Sharp Industries
            </h4>
            <div className="font-inter text-[14px] text-white/60 leading-[1.8]">
              <div>Labour Law & Compliance Consultancy</div>
              <div className="mt-2">Pune, Maharashtra | Serving PAN India</div>
              <div>MSME Registered | GST Active | D&B Listed</div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-inter font-medium text-[13px] text-white/50 tracking-wider mb-4">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                "Labour Law Compliance",
                "Contract Labour Audit",
                "Labour Court Representation",
                "HR & People Advisory",
                "Statutory Audits",
                "Management & Risk Consulting"
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to="services" smooth={true} duration={600} className="font-inter text-[14px] text-white/70 hover:text-indigo-light transition-colors cursor-pointer">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-inter font-medium text-[13px] text-white/50 tracking-wider mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="font-inter text-[14px] text-white/70">📞 9011022124 / 7720052124</li>
              <li className="font-inter text-[14px] text-white/70">✉️ adv.arbochare@gmail.com</li>
              <li className="font-inter text-[14px] text-white/70">📍 Plot No 82, Sant Nagar, Moshi Prabhakaran, Pune — 412105</li>
            </ul>
          </div>

          {/* Column 4: Credentials */}
          <div>
            <h4 className="font-inter font-medium text-[13px] text-white/50 tracking-wider mb-4">
              CREDENTIALS
            </h4>
            <ul className="space-y-3">
              {[
                "GST Registered",
                "MSME / UDYAM Certified",
                "D&B Globally Listed"
              ].map((badge, idx) => (
                <li key={idx}>
                  <div className="inline-flex items-center gap-2 bg-navy border border-white/10 shadow-sm rounded-full px-3.5 py-1.5">
                    <CheckCircle2 size={15} className="text-indigo shrink-0" />
                    <span className="font-inter text-[13px] text-white/80">{badge}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col items-center">
          <p className="font-inter text-[13px] text-white/50 text-center">
            &copy; 2025 Sharp Industrial Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
