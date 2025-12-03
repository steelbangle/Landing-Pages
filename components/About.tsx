import React from 'react';
import { ShieldCheck, Clock, FileHeart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 relative">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1541600279520-22d6402377a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Injured cow shelter" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">Every Soul Matters</p>
                    <p className="text-sm opacity-90">We don't just treat wounds; we heal hearts.</p>
                  </div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-100">
                   <ShieldCheck className="w-6 h-6 text-saffron-600 mx-auto mb-1" />
                   <p className="text-xs font-bold text-gray-700">Verified NGO</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-100">
                   <FileHeart className="w-6 h-6 text-saffron-600 mx-auto mb-1" />
                   <p className="text-xs font-bold text-gray-700">80G Tax Benefits</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-center border border-orange-100">
                   <Clock className="w-6 h-6 text-saffron-600 mx-auto mb-1" />
                   <p className="text-xs font-bold text-gray-700">24/7 Care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <span className="text-saffron-600 font-bold uppercase tracking-wider text-sm">The Bitter Truth</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 font-serif leading-tight mb-6">
              She Gave Us Milk All Her Life. <br/>
              <span className="text-saffron-600">Why Did We Abandon Her?</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Imagine being old, weak, and thrown out of your own home. This is the reality for millions of cows in India. Once they stop giving milk, they are often turned out onto the streets, forced to eat plastic bags from garbage dumps just to survive.
              </p>
              <p className="font-medium text-gray-800 border-l-4 border-saffron-500 pl-4 italic">
                "We found Gauri bleeding on the highway, hit by a truck, tears rolling down her eyes. She had given up hope. But we didn't."
              </p>
              <p>
                At <span className="font-bold text-saffron-700">Gau Seva Dham</span>, we believe that serving Gau Mata is the highest form of Dharma. We bring them home. We treat their maggot-infested wounds, feed them fresh green fodder, and give them the love they deserve in their old age.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 font-serif">Your Donations Provide:</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">✓</div>
                <div>
                  <strong className="text-gray-900">Immediate Medical Aid:</strong> Surgeries, bandages, and painkillers for accident victims.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">✓</div>
                <div>
                  <strong className="text-gray-900">Nutritious Fodder:</strong> Green grass, jaggery, and specialized feed for weak calves.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">✓</div>
                <div>
                  <strong className="text-gray-900">A Dignified Life:</strong> A clean, covered shelter safe from rain and harsh winters.
                </div>
              </li>
            </ul>

            <a href="#donate" className="inline-flex items-center gap-2 text-saffron-600 font-bold hover:text-saffron-700 transition-colors group">
              Start your Seva journey today 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;