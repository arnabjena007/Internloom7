import React from 'react';
import { Clock, Star, User } from 'lucide-react';

const mockCourses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    duration: '12 weeks',
    price: '$999',
    skillLevel: 'Beginner',
    rating: 4.8,
    students: 10000,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    duration: '8 weeks',
    price: '$799',
    skillLevel: 'Intermediate',
    rating: 4.6,
    students: 8000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  // Add more mock courses here
];

const CourseSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCourses.map((course) => (
          <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <Clock size={16} className="mr-2" />
                {course.duration}
                <span className="mx-2">•</span>
                <Star size={16} className="mr-2" />
                {course.rating}
                <span className="mx-2">•</span>
                <User size={16} className="mr-2" />
                {course.students.toLocaleString()} students
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{course.price}</span>
                <button
                  onClick={() => {
                    // Here you would typically navigate to the payment page
                    console.log('Enrolling in course:', course.id);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;