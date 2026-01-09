import React from "react";
import { Send } from 'lucide-react';

export const NewsletterSection = () => {
    return (
        <div className="relative py-20 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600"></div>
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-4xl text-center">
                {/* Decorative icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 border border-white/20">
                    <Send className="h-10 w-10 text-white" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Join Our Ghana Travel Community
                </h2>
                <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get exclusive travel tips, destination guides, and cultural insights from Ghana delivered to your inbox monthly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
                    <div className="flex-1">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder-green-200 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 transition-all"
                        />
                    </div>
                    <button className="group relative overflow-hidden bg-white text-green-700 font-semibold py-4 px-8 rounded-full hover:shadow-xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-0.5">
                        <span className="relative z-10 flex items-center justify-center">
                            Subscribe
                            <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </button>
                </div>
                
                <p className="text-sm text-green-200/80">
                    Join 5,000+ travelers. No spam ever. Unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};