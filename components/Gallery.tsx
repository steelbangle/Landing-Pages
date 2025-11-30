import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Life at the Shelter</h2>
          <p className="mt-4 text-gray-600">Glimpses of peace, healing, and gratitude.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/600?random=20" alt="" />
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/300?random=21" alt="" />
          </div>
          <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/300?random=22" alt="" />
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/500?random=23" alt="" />
          </div>
          <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/500?random=24" alt="" />
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/300?random=25" alt="" />
          </div>
          <div className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/300?random=26" alt="" />
            <img className="h-auto max-w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" src="https://picsum.photos/400/600?random=27" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
