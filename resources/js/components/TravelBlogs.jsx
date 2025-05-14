import React from "react";
import { BlogCard } from "./cards/BlogCard";
export const TravelStoriesSection = () => {
    return (
        <div className="py-12 px-6 bg-gray-50">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Latest Ghana Travel Stories</h2>
                <p className="text-lg text-gray-600 mt-2">Read about my recent adventures exploring Ghana</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className="text-center mt-8">
                <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700">
                    View All Ghana Travel Stories
                </button>
            </div>
        </div>
    );
};