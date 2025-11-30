import React from 'react';
import { Leaf, Heart, Home, Activity } from 'lucide-react';

const stats = [
  { id: 1, name: 'Cows Rescued', value: '1,250+', icon: Heart, color: 'text-red-500' },
  { id: 2, name: 'Daily Meals Served', value: '3,500 kg', icon: Leaf, color: 'text-green-600' },
  { id: 3, name: 'Injured Treated', value: '450+', icon: Activity, color: 'text-blue-500' },
  { id: 4, name: 'Shelter Capacity', value: '2,000', icon: Home, color: 'text-saffron-600' },
];

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16" id="impact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              Your Seva Creates Real Impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Every rupee you donate goes directly towards the welfare of these innocent souls. 
              Here is what we have achieved together.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-orange-50/50 p-8 hover:bg-orange-50 transition-colors">
                <dt className="text-sm font-semibold leading-6 text-gray-600 mt-4">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex justify-center items-center gap-2">
                  <stat.icon className={`${stat.color} mb-1`} size={28} />
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;
