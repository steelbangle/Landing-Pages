import React from 'react';
import { ArrowRight, HeartHandshake } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-earth-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-earth-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-saffron-700 text-sm font-semibold mb-6 animate-pulse">
                <HeartHandshake size={16} />
                <span>Urgent: Winter supplies needed</span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block xl:inline">Serve the Sacred.</span>{' '}
                <span className="block text-saffron-600 xl:inline">Save a Life.</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Thousands of cows roam the streets, injured, hungry, and abandoned. At <span className="font-semibold text-gray-900">Gau Seva Dham</span>, we provide them a loving home, medical care, and fresh fodder. Your small contribution becomes their lifeline.
              </p>
              <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#donate"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-saffron-600 hover:bg-saffron-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-saffron-500/40"
                  >
                    Donate for Fodder
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#impact"
                    className="w-full flex items-center justify-center px-8 py-4 border border-orange-200 text-base font-medium rounded-full text-saffron-700 bg-orange-50 hover:bg-orange-100 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    See Our Work
                  </a>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 sm:justify-center lg:justify-start">
                 <div className="flex -space-x-2">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/32/32?random=1" alt=""/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/32/32?random=2" alt=""/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/32/32?random=3" alt=""/>
                 </div>
                 <p>Join 12,000+ donors across India</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full brightness-90 hover:scale-105 transition-transform duration-700"
          src="https://picsum.photos/800/1000?random=12"
          alt="Cow being fed"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-50 to-transparent lg:via-earth-50/20"></div>
      </div>
    </div>
  );
};

export default Hero;
