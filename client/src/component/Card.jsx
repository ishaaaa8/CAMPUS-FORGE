// components/Card.js

import React from 'react';

const Card = ({ room }) => {
  return (
    <div className="rounded-lg shadow-md mx-2 p-4 mih-h-[500px] min-w-[300px] hover: scale-[1] translate-z-0 flex flex-col justify-center items-center" style={{ width: '300px',height:'500px' ,background: 'linear-gradient(to bottom, #4A5568, #718096)' }}>
      <h2 className="text-xl font-bold mb-2"></h2>
      <p>Capacity:</p>
      <p>Amenities:</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Card;
