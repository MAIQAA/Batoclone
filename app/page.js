"use client"
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '@/Components/Navbar';
import LandingPage from '@/Components/LandingPage';
import About from '@/Components/About';
import Services from '@/Components/Services';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen/>
      ) : (
        <main className="bg-[#050505] overflow-x-hidden scroll-smooth">
          <Navbar/>
          <LandingPage/>
          <About/>
          <Services/>
        </main>
      )}
    </>
  );
}
