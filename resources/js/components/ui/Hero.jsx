import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export const Hero = ({ data }) => {
    const backgroundImageUrl = '/images/background-image.jpg';

    return (
        <>
            <div
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>

                {/* Pattern overlay */}
                <div className="relative z-10 px-4 text-center max-w-4xl mx-auto">
                    <div className="mb-8">
                        <span className="inline-block px-4 py-2 bg-green-600/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-semibold mb-6 border border-green-500/30">
                            Explore the Heart of Africa
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Discover Ghana's <span className="text-green-400">Hidden</span> Gems
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Journey through rich culture, breathtaking landscapes, and warm hospitality of the Gold Coast.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/destination"
                            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold py-4 px-8 rounded-full hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Explore Destinations
                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/blog"
                            className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                        >
                            <span>Read Travel Stories</span>
                            <svg className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="animate-bounce w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};