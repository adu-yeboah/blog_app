import React from "react";
export const DestinarionCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <span className="text-green-500 text-2xl mr-2">🏰</span>
        <h3 className="text-xl font-semibold text-gray-800">Cape Coast Castle</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700">
          One of about forty "slave castles" built by European traders in Ghana, now serving as a museum.
        </p>
        <div className="flex items-center mt-2">
          <span className="text-green-600 text-sm font-medium">Central Region</span>
          <div className="flex items-center ml-auto">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-gray-600 ml-1">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};
