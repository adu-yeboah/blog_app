import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <span className="text-green-500 text-2xl mr-2">●</span>
                        <h2 className="text-xl font-bold">Wanderlust Ghana</h2>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Promoting sustainable tourism and sharing the beauty of Ghana with the world.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">Destinations</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Popular Ghana Destinations</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Cape Coast Castle</a></li>
                        <li><a href="#" className="hover:text-white">Kakum National Park</a></li>
                        <li><a href="#" className="hover:text-white">Mole National Park</a></li>
                        <li><a href="#" className="hover:text-white">Elmina Castle</a></li>
                        <li><a href="#" className="hover:text-white">Wli Waterfalls</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe for Ghana travel tips and destination guides.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded-l-md text-black"
                        />
                        <button className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>© 2023 Wanderlust Ghana. All rights reserved.</p>
            </div>
            <div className="mt-4 text-center text-gray-500 text-sm space-x-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
        </footer>
    );
};