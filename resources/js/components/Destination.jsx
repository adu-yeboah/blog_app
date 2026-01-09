import React from 'react'
import { BlogCard } from './cards/BlogCard';
import { blogPosts } from '../constants/blog';
import Slider from 'react-slick';
import { DestinarionCard } from './cards/DestinationCard';
import { Compass } from 'lucide-react';

export default function Destination() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '32px',
                },
            },
        ],
    };

    return (
        <section className="py-16 px-4 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            
            <div className="container mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6">
                        <Compass className="h-8 w-8 text-green-600" />
                    </div>
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                        Must-Visit Places
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Ghanaian <span className="text-green-600">Destinations</span>
                    </h2>
                    <p className="text-lg text-gray-600 md:text-xl leading-relaxed">
                        Explore breathtaking landscapes, historic sites, and cultural treasures across Ghana's diverse regions.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative px-2 md:px-8">
                    <Slider {...settings} className="destination-slider">
                        {blogPosts.map((blog, index) => (
                            <div key={index} className="px-3">
                                <div className="transform transition-transform duration-500 hover:-translate-y-2">
                                    <DestinarionCard data={blog} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <a 
                        href="/destination" 
                        className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 group"
                    >
                        <span className="border-b-2 border-green-200 group-hover:border-green-400 transition-colors">
                            View All Destinations
                        </span>
                        <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}