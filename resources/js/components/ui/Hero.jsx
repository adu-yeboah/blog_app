import React from 'react';
import { Link } from '@inertiajs/react';

export const Hero = ({ data }) => {

    const backgroundImageUrl = '/images/background-image.jpg';

    return (
        <div
            className="flex flex-col items-center justify-center h-screen text-center text-white relative"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Ghana's Hidden Gems</h1>
                <p className="text-lg mb-8 max-w-md mx-auto">
                    Explore the rich culture, breathtaking landscapes, and warm hospitality of the Gold Coast.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link 
                        href="/destination" 
                        className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                        Explore Destinations
                    </Link>
                    <Link 
                        href="/blog" 
                        className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-green-700 transition duration-300"
                    >
                        Read Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};