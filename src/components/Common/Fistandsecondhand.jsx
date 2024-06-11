import React from "react";

const FirstSecondCollection = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-3xl md:max-w-full">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full border-4 border-amber-600 rounded-lg overflow-hidden">
          <img
            className="h-96 w-full object-cover"
            src={imageSrc}
            alt={title}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
          <p className="text-sm md:text-base text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSecondCollection;
