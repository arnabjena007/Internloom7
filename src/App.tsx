import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import InternshipListings from './components/InternshipListings';
import CourseSection from './components/CourseSection';
import StudentDashboard from './components/StudentDashboard';
import PaymentInterface from './components/PaymentInterface';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header setCurrentPage={setCurrentPage} />
        <main className="flex-grow">
          {currentPage === 'home' && <HeroSection />}
          {currentPage === 'internships' && <InternshipListings />}
          {currentPage === 'courses' && <CourseSection />}
          {currentPage === 'dashboard' && <StudentDashboard />}
          {currentPage === 'payment' && <PaymentInterface />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;