// components/Cards.js

import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex-1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex+1);
  };

  return (
    <div className="container mx-auto py-8 relative">
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10" onClick={handlePrevClick}>&larr;</button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10" onClick={handleNextClick}>&rarr;</button>
      <div className="flex overflow-x-auto">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Cards;
