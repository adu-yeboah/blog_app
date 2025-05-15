import { Link } from '@inertiajs/react'
import React from 'react'

export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-900 via-green-700 to-teal-800 text-center text-white">
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
    )
}