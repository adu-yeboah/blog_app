import React from "react";

export const NewsletterSection = () => {
    return (
        <div className="bg-green-600 text-white py-12 px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Join My Ghana Travel Community</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter for exclusive Ghana travel tips, destination guides, and cultural insights delivered straight to your inbox.
            </p>
            <div className="flex justify-center mb-4">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="p-3 rounded-l-full text-black w-64 focus:outline-none"
                />
                <button className="bg-white text-green-600 font-semibold p-3 rounded-r-full hover:bg-gray-100">
                    Subscribe
                </button>
            </div>
            <p className="text-sm text-gray-200">
                I respect your privacy. Unsubscribe at anytime.
            </p>
        </div>
    );
};