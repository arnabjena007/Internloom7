import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Weaving Opportunities for Your Future
          </h1>
          <p className="text-xl mb-8">
            Connect with top internships, jobs, and courses to kickstart your career journey.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for internships, jobs, or courses..."
              className="w-full py-3 px-4 pr-12 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600">
              <Search size={24} />
            </button>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['Engineering', 'Marketing', 'Design', 'Business'].map((category) => (
            <button
              key={category}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;