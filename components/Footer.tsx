import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-saffron-600 rounded-full flex items-center justify-center text-white">
                 <Heart size={16} fill="currentColor" />
               </div>
               <span className="text-xl font-bold font-serif">Gau Seva Dham</span>
             </div>
             <p className="text-orange-100/80 text-sm leading-relaxed">
               Dedicated to the service, protection, and welfare of cows. Join us in our mission to create a compassionate India.
             </p>
             <div className="flex space-x-4 mt-6">
               <a href="#" className="text-orange-200 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-orange-200 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-orange-200 hover:text-white transition-colors"><Twitter size={20} /></a>
             </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-saffron-500 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-orange-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#impact" className="text-orange-100 hover:text-white transition-colors">Our Impact</a></li>
              <li><a href="#donate" className="text-orange-100 hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="text-orange-100 hover:text-white transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-saffron-500 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-saffron-500" />
                <span className="text-orange-100">Village Gopalpur, Vrindavan Road, Mathura, UP - 281121</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-saffron-500" />
                <span className="text-orange-100">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-saffron-500" />
                <span className="text-orange-100">seva@gausevadham.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-saffron-500 uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-orange-100/80 text-sm mb-4">Subscribe for weekly updates on our rescued cows.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder-orange-200/50 focus:outline-none focus:ring-1 focus:ring-saffron-500"
              />
              <button className="bg-saffron-600 px-4 py-2 rounded-r-md hover:bg-saffron-700 transition-colors font-medium">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-orange-200/60">
          <p>&copy; 2024 Gau Seva Dham. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
