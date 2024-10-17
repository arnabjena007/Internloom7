import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const mockInternships = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    duration: '3 months',
    stipend: '$2000/month',
    logo: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    title: 'Marketing Intern',
    company: 'BrandBoost',
    location: 'New York, NY',
    duration: '6 months',
    stipend: '$1800/month',
    logo: 'https://via.placeholder.com/50',
  },
  // Add more mock internships here
];

const InternshipListings = () => {
  const [filter, setFilter] = useState({
    location: '',
    duration: '',
    stipendRange: '',
  });

  const filteredInternships = mockInternships.filter((internship) => {
    // Apply filters here
    return true; // For now, return all internships
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-8">Internship Listings</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold mb-4">Filters</h3>
            {/* Add filter inputs here */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out mt-4">
              Apply Filters
            </button>
          </div>
        </aside>
        <main className="md:w-3/4">
          <div className="space-y-4">
            {filteredInternships.map((internship) => (
              <div key={internship.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={internship.logo} alt={`${internship.company} logo`} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="text-xl font-semibold">{internship.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{internship.company}</p>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
                    Apply Now
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock size={16} className="mr-2" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <DollarSign size={16} className="mr-2" />
                    {internship.stipend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InternshipListings;