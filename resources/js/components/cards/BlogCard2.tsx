import { Link } from "@inertiajs/react";
import { CalendarDays, LocateFixed, MapIcon, MapPin, Star } from "lucide-react";
import React from "react";

export const BlogCard2 = ({ data }) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-[700px] h-full flex flex-row">
      {/* Image Section */}
      <div className="w-72 h-48">
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

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col w-full">
        <p className="text-gray-500 text-sm mb-2 flex flex-row gap-1"><CalendarDays size={20} />{data.date}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h3>
        <p className="text-gray-700 mb-3 flex-1 line-clamp-2">{data.description}</p>
        <div className="mb-4">
          <p className="text-gray-600 text-sm pb-2 flex flex-row gap-1">
            <span className="font-medium "><MapPin size={20} /></span> {data.location}
          </p>
          <p className="text-gray-600 text-sm flex flex-row gap-1">
            <span className="font-medium text-yellow-600"><Star size={20} /></span> {data.rating}/5
          </p>
        </div>
        <Link
          href={`/blog/${data.id}`}
          className="text-green-600 font-medium hover:text-green-800 mt-auto"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};