import React from 'react';
import { Briefcase, BookOpen, Award, FileText, Bell } from 'lucide-react';

const StudentDashboard = () => {
  const applications = [
    { id: 1, position: 'Software Engineer Intern', company: 'TechCorp', status: 'Pending' },
    { id: 2, position: 'Marketing Assistant', company: 'BrandBoost', status: 'Shortlisted' },
    { id: 3, position: 'Data Analyst Intern', company: 'DataInsights', status: 'Rejected' },
  ];

  const enrolledCourses = [
    { id: 1, title: 'Web Development Bootcamp', progress: 60 },
    { id: 2, title: 'Digital Marketing Fundamentals', progress: 30 },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2" /> My Applications
          </h2>
          <ul className="space-y-4">
            {applications.map((app) => (
              <li key={app.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{app.position}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{app.company}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  app.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                  app.status === 'Shortlisted' ? 'bg-green-200 text-green-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  {app.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" /> Enrolled Courses
          </h2>
          <ul className="space-y-4">
            {enrolledCourses.map((course) => (
              <li key={course.id}>
                <p className="font-medium">{course.title}</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {course.progress}% completed
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2" /> Achievements
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Award className="mr-2 text-yellow-500" size={20} />
              <span>Completed 5 courses</span>
            </li>
            <li className="flex items-center">
              <Award className="mr-2 text-blue-500" size={20} />
              <span>Top 10% in Python Challenge</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2" /> Resume
          </h2>
          <p className="mb-4">Last updated: 2 weeks ago</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
            Update Resume
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bell className="mr-2" /> Notifications
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              New internship posted in your field
            </li>
            <li className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Your application was viewed by TechCorp
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;