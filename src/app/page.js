"use client"
import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';

const Home = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <HomePage />
      )}
    </>
  );
};

export default Home;