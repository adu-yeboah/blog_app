import { Link } from "@inertiajs/react";
import { CalendarDays, MapPin, Star } from "lucide-react";
import React from "react";
import { motion } from "motion/react"


export const BlogCard1 = () => {

    const data = {
        title: "Confronting History: My Emotional Visit to Cape Coast Castle",
        date: "June 15, 2023",
        description: "Walking through the 'Door of No Return' at Cape Coast Castle was one of the most profound experiences of my travels. This UNESCO site tells the harrowing story of the transatlantic slave trade and Ghana's resilience.",
        category: "History",
        images: [
            "https://example.com/images/cape-coast-castle-1.jpg",
            "https://example.com/images/door-of-no-return.jpg"
        ],
        rating: 4.8,
        location: "Cape Coast, Central Region, Ghana"
    }
    
    return (
        <motion.div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            {/* Image Section */}
            <div className="w-full h-48">
                {data.images && data.images[0] ? (
                    <img
                        src={data.images[0]}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 p-4 flex flex-col">
                <p className="text-gray-500 text-sm mb-2 flex flex-row gap-1"><CalendarDays size={20} />{data.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h3>
                <p className="text-gray-700 mb-3 flex-1 line-clamp-2">{data.description}</p>
                <div className="mb-4">
                    <p className="text-gray-600 text-sm pb-2 flex flex-row gap-1">
                        <span className="font-medium "><MapPin size={20} /></span> {data.location}
                    </p>
                    <p className="text-gray-600 text-sm flex flex-row gap-1">
                        <span className="font-medium text-yellow-600"><Star size={20} /></span> {data.rating}/5
                    </p>
                </div>
                <Link
                    href={`/blog/${data.id}`}
                    className="text-green-600 font-medium hover:text-green-800 mt-auto"
                >
                    Read more →
                </Link>
            </div>
        </motion.div>
    );
};