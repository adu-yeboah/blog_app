import React from 'react'
import { Link } from '@inertiajs/react'

export const Hero = ({ data }) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen text-center text-white"
            style={{
                backgroundImage: `${data ? data : "url('/images/ghana-background.jpg')"}`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Optional overlay to improve text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-4">Discover Ghana's Hidden Gems</h1>
                <p className="text-lg mb-8 max-w-md">
                    Explore the rich culture, breathtaking landscapes, and warm hospitality of the Gold Coast.
                </p>
                <div className="flex space-x-4">
                    <Link href="/destination" className="bg-white text-green-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-100">
                        Explore Destinations
                    </Link>
                    <Link href="/blog" className="bg-transparent border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-green-700">
                        Read Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}