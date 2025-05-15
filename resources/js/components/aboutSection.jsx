import React from 'react';
import { MapPin, Camera, Utensils } from 'lucide-react';

export default function AboutMe() {
    return (
        <section className="py-27 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="px-4 md:px-10 mx-auto text-center flex flex-row justify-between">

                <div className="w-1/3">
                    <img src="" alt="me" />
                </div>

                <div className="flex-flex-col w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Hello, I'm Kwame</h2>
                    <p className="text-gray-600 mb-6">
                        I'm a Ghanaian travel blogger passionate about showcasing the beauty and diversity of my
                        homeland. What started as sharing photos with friends has turned into a mission to promote
                        sustainable tourism in Ghana.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Over the past five years, I've explored every region of Ghana, from the bustling streets of
                        Accra to the remote villages of the Upper West Region, always seeking authentic experiences
                        to share.
                    </p>
                    <p className="text-gray-600 mb-10">
                        Through this blog, I hope to inspire both locals and visitors to discover Ghana's rich
                        culture, breathtaking landscapes, and warm hospitality that makes our country so special.
                    </p>
                    <div className="flex justify-center space-x-8 text-gray-600">
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-6 h-6 text-green-500" />
                            <span>16 Regions Explored</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Camera className="w-6 h-6 text-green-500" />
                            <span>8K+ Photos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Utensils className="w-6 h-6 text-green-500" />
                            <span>Countless Fufu Meals</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}