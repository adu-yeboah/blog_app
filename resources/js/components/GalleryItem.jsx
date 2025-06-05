import React from "react";
import { motion } from "framer-motion";

export const GalleryItem = ({ title, imageUrl, description, tags = [], onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-200 text-sm line-clamp-2">{description}</p>
        <div className="flex flex-wrap mt-2">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full mr-1 mb-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};