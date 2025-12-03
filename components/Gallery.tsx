import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-serif">Life at Gau Seva Dham</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Witness the transformation. From pain to peace, your donations make these smiles possible.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large Item */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop" alt="Cows eating" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">Morning Feeding Time</p>
            </div>
          </div>
          
          {/* Standard Items */}
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=400&auto=format&fit=crop" alt="Calf" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">Rescued Calf 'Nandi'</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=400&auto=format&fit=crop" alt="Cow closeup" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">Gau Mata Blessings</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://plus.unsplash.com/premium_photo-1661962360394-0d5885068bbd?q=80&w=400&auto=format&fit=crop" alt="Cow eating grass" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">Fresh Green Fodder</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
             <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1533282960533-51328aa49d1f?q=80&w=400&auto=format&fit=crop" alt="Cows in field" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">Safe Shelter</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
             <a href="#donate" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-saffron-700 bg-orange-100 hover:bg-orange-200 md:text-lg transition-colors">
                Support Their Healing
             </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;