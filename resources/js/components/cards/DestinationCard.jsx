import { Star } from "lucide-react";
import React from "react";
export const DestinarionCard = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

      <div className="flex items-center p-4">
        <div className="w-full h-48">
          {data.images && data.images[0] ? (
            <img
              src={data.images[0]}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
         <h4 className="text-md font-semibold text-gray-800">{data.location}</h4>
        <p className="text-gray-700 line-clamp-1">
          {data.description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <div className="text-green-600 text-base font-medium">Central Region</div>
          <p className="text-gray-600 text-sm flex flex-row gap-1">
            <span className="font-medium text-yellow-600"><Star size={20} /></span> {data.rating}/5
          </p>
        </div>
      </div>
    </div>
  );
};
