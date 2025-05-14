import React from "react";
import { motion } from "framer-motion";

export const GalleryItem = ({ title, imageUrl, description, isMain = false }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg ${isMain ? "h-[500px]" : "h-64"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};