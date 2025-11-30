import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative">
             {/* Image Composition */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/600/500?random=8" 
                alt="Injured cow being treated" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium italic">"Gauri was found with a broken leg. Today, she runs free."</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-saffron-100 rounded-full -z-10"></div>
          </div>

          <div>
            <span className="text-saffron-600 font-bold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl font-serif mb-6">
              A Home for the Voiceless
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                In Indian culture, the cow is not just an animal; she is a mother (Gau Mata), a symbol of life and abundance. Yet, thousands of cows are abandoned on the streets of India every day when they stop giving milk or get injured.
              </p>
              <p className="mb-4">
                <span className="font-semibold text-gray-800">Gau Seva Dham</span> was born out of pain—the pain of seeing these sacred souls eating plastic from garbage bins or bleeding on highways.
              </p>
              <p className="mb-6">
                We are a dedicated team of volunteers and veterinarians working 24/7. We don't just provide fodder; we provide a family. We rescue, we heal, and we love. But we cannot do this alone. The cost of medicine, green fodder, and shelter maintenance is rising every day.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-saffron-500">
                 <h4 className="font-bold text-gray-900">Medical Care</h4>
                 <p className="text-sm text-gray-600">Emergency surgeries & daily dressing for wounds.</p>
               </div>
               <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-saffron-500">
                 <h4 className="font-bold text-gray-900">Nutritious Diet</h4>
                 <p className="text-sm text-gray-600">Fresh green grass, jaggery, and grain mix.</p>
               </div>
            </div>

            <div className="mt-10">
              <a href="#donate" className="text-saffron-600 font-bold hover:text-saffron-700 flex items-center gap-2 group">
                Read our success stories 
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
