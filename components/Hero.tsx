import React from 'react';
import { ArrowRight, Heart, Play, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-earth-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgent Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-bold mb-8 animate-pulse shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            URGENT: Winter blankets and medicine needed for 50+ injured calves.
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight mb-6">
            They are not just animals. <br/>
            They are our <span className="text-saffron-600 italic">Gau Mata.</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Thousands of sacred cows are abandoned on the streets, eating plastic, hit by vehicles, and left to die. 
            <span className="font-semibold text-gray-900"> Your one act of kindness can save a life today.</span>
          </p>

          {/* VSL Visual / Hero Image */}
          <div className="mt-10 relative group cursor-pointer max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.01] duration-500">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1598556776374-ae6d0802c63e?q=80&w=1200&auto=format&fit=crop" 
               alt="Gau Mata needing help" 
               className="w-full h-[400px] md:h-[500px] object-cover"
             />
             
             {/* Simulated Play Button */}
             <div className="absolute inset-0 z-20 flex items-center justify-center">
               <div className="w-20 h-20 bg-saffron-600/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur-sm animate-bounce-slow">
                 <Play fill="white" className="text-white" size={32} />
               </div>
             </div>

             {/* Caption Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 text-left">
                <p className="text-white font-medium text-lg flex items-center gap-2">
                  <Heart className="text-red-500 fill-current" size={20} />
                  Watch: How your donation heals Gauri
                </p>
             </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a
              href="#donate"
              className="w-full sm:w-auto px-8 py-4 bg-saffron-600 text-white text-lg font-bold rounded-full shadow-xl shadow-saffron-500/30 hover:bg-saffron-700 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Donate for Gau Seva
              <ArrowRight size={20} />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 bg-white text-saffron-700 text-lg font-bold rounded-full border-2 border-orange-100 hover:bg-orange-50 transition-colors flex items-center justify-center"
            >
              Read Their Story
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-8 pt-8 border-t border-orange-200/50 max-w-lg mx-auto flex flex-col items-center">
             <div className="flex -space-x-3 mb-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/40/40?random=${i}`} alt="Donor" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-xs font-bold text-saffron-700">
                  +2k
                </div>
             </div>
             <p className="text-sm text-gray-500 font-medium">
               Join <span className="text-saffron-700 font-bold">12,450+ Sanatanis</span> who protected Dharma this month.
             </p>
             <div className="flex gap-1 text-yellow-400 mt-2">
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;