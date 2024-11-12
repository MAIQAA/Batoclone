"use client"
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '@/Components/Navbar';
import LandingPage from '@/Components/LandingPage';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Technologies from '@/Components/Technologies';
import Principles from '@/Components/Principles';
import Outsourcing from '@/Components/Outsourcing';

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
        <main className="bg-[#050505]">
          <Navbar/>
          <LandingPage/>
          <About/>
          <Services/>
          <Technologies/>
          <Principles/>
          <Outsourcing/>
        </main>
      )}
    </>
  );
}
