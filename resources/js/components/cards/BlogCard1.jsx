import React from "react";
import { motion } from "motion/react"

export const BlogCard1 = ({ title, date, description, category }) => {
    return (
        <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{category}</span>
            </div>
        </motion.div>
    );
};