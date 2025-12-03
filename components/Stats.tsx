import React from 'react';
import { Leaf, Heart, Home, Activity } from 'lucide-react';

const stats = [
  { id: 1, name: 'Cows Rescued', value: '1,250+', icon: Heart, color: 'text-red-500', desc: 'From slaughter & streets' },
  { id: 2, name: 'Daily Fodder', value: '3,500 kg', icon: Leaf, color: 'text-green-600', desc: 'Fresh green grass' },
  { id: 3, name: 'Medical Cases', value: '450+', icon: Activity, color: 'text-blue-500', desc: 'Surgeries performed' },
  { id: 4, name: 'Shelter Capacity', value: '2,000', icon: Home, color: 'text-saffron-600', desc: 'Safe & covered area' },
];

const Stats: React.FC = () => {
  return (
    <div className="relative py-16 sm:py-24 bg-earth-50" id="impact">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-sm font-bold tracking-widest text-saffron-600 uppercase mb-3">Impact Report</h2>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-serif mb-6">
            Your Seva in Action
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-16">
            We are transparent about our work. Every rupee you contribute creates a measurable impact in the lives of Gau Mata.
          </p>
          
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-saffron-500">
                <dt>
                  <div className={`mx-auto rounded-md p-3 w-12 h-12 flex items-center justify-center bg-gray-50 mb-4`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium leading-6 text-gray-500 uppercase tracking-wide">{stat.name}</p>
                </dt>
                <dd className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                <dd className="mt-2 text-xs text-gray-400">{stat.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;