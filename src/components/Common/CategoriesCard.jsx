// src/components/Common/CategoriesCard.js

import React from 'react';

const CategoriesCard = ({ imageSrc, subheading }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-32 h-32 bg-brown-500 rounded-full flex items-center justify-center mb-4">
        <img src={imageSrc} alt={subheading} className="w-28 h-28 rounded-full object-cover" />
      </div>
      <p className="text-center text-lg font-semibold">{subheading}</p>
    </div>
  );
};

export default CategoriesCard;
