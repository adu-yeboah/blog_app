import React from "react";
export const BlogCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <span className="text-green-500 text-2xl mr-2">🐘</span>
        <h3 className="text-xl font-semibold text-gray-800">Mole Safari</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">April 12, 2023</p>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">Safari in Ghana: Spotting Elephants at Mole National Park</h4>
        <p className="text-gray-700 mb-4">
          Ghana's answer to the African safari experience, Mole National Park offers walking safaris where you can get surprisingly close to elephants and other wildlife.
        </p>
        <a href="#" className="text-green-600 font-medium hover:text-green-800">Read more →</a>
      </div>
    </div>
  );
};
