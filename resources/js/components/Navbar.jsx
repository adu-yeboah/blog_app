import { Link } from '@inertiajs/react'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
            <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-2">●</span>
                <h1 className="text-xl font-bold text-gray-800">Wanderlust Ghana</h1>
            </div>
            <ul className="flex space-x-6 text-gray-600">
                <li><Link href="/" className="hover:text-gray-800">Home</Link></li>
                <li><Link href="/blog" className="hover:text-gray-800">Blog</Link></li>
                <li><Link href="/gallery" className="hover:text-gray-800">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-gray-800">Contact</Link></li>
            </ul>
        </nav>
    )
}
