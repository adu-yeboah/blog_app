import React from "react";
import { BlogCard2 } from "./cards/BlogCard2";
import { blogPosts } from "../constants/blog";
import { BlogCard1 } from "./cards/BlogCardBig";
import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';

export const TravelStoriesSection = () => {
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1, 4);

    return (
        <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl mb-6">
                        <BookOpen className="h-8 w-8 text-amber-600" />
                    </div>
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                        Fresh Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Latest Ghana Travel <span className="text-amber-600">Stories</span>
                    </h2>
                    <p className="text-lg text-gray-600 md:text-xl max-w-3xl mx-auto">
                        Join me on my adventures exploring Ghana's hidden treasures and cultural wonders.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Featured Story */}
                    <div className="lg:col-span-2">
                        <div className="transform transition-all duration-500 hover:-translate-y-2">
                            <BlogCard1 data={featuredPost} />
                        </div>
                    </div>
                    
                    {/* Side Stories */}
                    <div className="space-y-8">
                        {otherPosts.map((blog, index) => (
                            <div key={index} className="transform transition-all duration-500 hover:-translate-y-1">
                                <BlogCard2 data={blog} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link 
                        href="/blog"
                        className="group inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 px-10 rounded-full hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <span>View All Travel Stories</span>
                        <svg className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};