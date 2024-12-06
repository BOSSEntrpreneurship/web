import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { usePageNavigation } from './hooks/usePageNavigation';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [currentPage, setCurrentPage] = useState('home');

  // Handle page navigation and scrolling
  usePageNavigation(currentPage);

  // Make setCurrentPage available globally for the Hero component
  useEffect(() => {
    (window as any).__setCurrentPage = setCurrentPage;
    return () => {
      delete (window as any).__setCurrentPage;
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors flex flex-col">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
          </>
        ) : currentPage === 'about' ? (
          <About />
        ) : currentPage === 'events' ? (
          <Events />
        ) : currentPage === 'contact' ? (
          <Contact />
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
