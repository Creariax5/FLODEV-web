"use client"
import React, { useState, useEffect } from 'react';
import AnimatedBackground from './background/AnimatedBackground';
import Navbar from './navbar/Navbar';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/service/ServicesSection';
import ContactSection from './sections/contact/ContactSection';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground mousePosition={mousePosition} />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
