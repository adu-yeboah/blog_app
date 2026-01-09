import { Link } from "@inertiajs/react";
import { CalendarDays, MapPin, Star, Clock, Tag } from "lucide-react";
import React from "react";
import { motion } from "framer-motion"

export const BlogCard = ({ data, viewMode = "grid" }) => {
  if (viewMode === "list") {
    return (
      <motion.article 
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3">
            <div className="relative h-64 md:h-full">
              {data.images && data.images[0] ? (
                <img
                  src={data.images[0]}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              {/* Category Badge */}
              {data.category && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs font-medium rounded-full">
                    {data.category}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1" />
                {data.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {data.read_time || "5 min read"}
              </div>
              {data.rating && (
                <div className="flex items-center ml-auto">
                  <Star className="w-4 h-4 mr-1 text-amber-500" />
                  <span className="font-medium">{data.rating}/5</span>
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.title}</h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">{data.description}</p>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{data.location}</span>
              </div>
              
              <Link
                href={`/blog/${data.id}`}
                className="group flex items-center text-green-700 font-medium hover:text-green-800"
              >
                <span className="border-b-2 border-green-200 group-hover:border-green-400 transition-colors">
                  Read Full Story
                </span>
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Grid View (default)
  return (
    <motion.article 
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        {data.images && data.images[0] ? (
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <span className="text-gray-500 text-sm">Travel Image</span>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        
        {/* Category Badge */}
        {data.category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-xs font-medium rounded-full">
              {data.category}
            </span>
          </div>
        )}
        
        {/* Rating Badge */}
        {data.rating && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-amber-500 mr-1" />
              <span className="font-bold">{data.rating}</span>
              <span className="text-gray-500 text-xs ml-1">/5</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Metadata */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <CalendarDays className="w-4 h-4 mr-1" />
            {data.date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {data.read_time || "5 min read"}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{data.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">{data.description}</p>
        
        {/* Location */}
        <div className="mb-6">
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-green-600" />
            <span className="font-medium">{data.location}</span>
          </div>
        </div>

        {/* Tags */}
        {data.tags && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {data.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Read More Link */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/blog/${data.id}`}
            className="group inline-flex items-center justify-between w-full text-green-700 font-medium hover:text-green-800"
          >
            <span>Continue Reading</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};