import React from 'react';
import { MapPin, Camera, Utensils, Globe } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function AboutMe({ about }) {
    const stats = [
        { icon: MapPin, label: 'Regions Explored', value: '16' },
        { icon: Camera, label: 'Photos Taken', value: '10K+' },
        { icon: Utensils, label: 'Local Dishes', value: '50+' },
        { icon: Globe, label: 'Years Exploring', value: '5+' }
    ];

    return (
        <section className="py-20 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Image Column */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Placeholder for image */}
                            <div className="aspect-[4/5] bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white">KW</span>
                                    </div>
                                    <p className="text-white/90 text-lg">Your Ghana Travel Guide</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                                Meet Your Guide
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Hello, I'm <span className="text-green-600">Kwame</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                I'm a passionate Ghanaian travel blogger dedicated to showcasing the authentic beauty and rich diversity of my homeland. What began as sharing photos with friends has evolved into a meaningful journey to promote sustainable and responsible tourism across Ghana.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Over the past five years, I've journeyed through every region—from the vibrant markets of Accra to the serene villages of the Upper West, always seeking genuine cultural experiences to share with the world.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl mb-3">
                                        <stat.icon className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mission Statement */}
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                            <p className="text-gray-700 italic">
                                "My mission is to inspire both locals and visitors to discover Ghana's rich heritage, breathtaking landscapes, and the warm hospitality that makes our nation truly special."
                            </p>
                        </div>

                        {/* CTA */}
                        <div>
                            <Link 
                                href="/about"
                                className="group inline-flex items-center text-green-700 font-semibold hover:text-green-800"
                            >
                                <span className="border-b-2 border-green-200 group-hover:border-green-400 transition-colors">
                                    Read My Full Story
                                </span>
                                <svg className="ml-3 h-5 w-5 transform group-hover:translate-x-2 transition-transform" 
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}