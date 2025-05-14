import React from "react";
import { BlogCard1 } from "../../components/cards/BlogCard1";
import MainLayout from "../../layout/mainLayout";


export default function BlogSection() {
    const [filter, setFilter] = React.useState("All");
    const [currentPage, setCurrentPage] = React.useState(1);
    const postsPerPage = 2;

    const blogPosts = [
        {
            title: "Confronting History: My Emotional Visit to Cape Coast Castle",
            date: "June 15, 2023",
            description: "Walking through the 'Door of No Return' at Cape Coast Castle was one of the most profound experiences of my travels. This UNESCO site tells the harrowing story of the transatlantic slave trade and Ghana's resilience.",
            category: "History",
        },
        {
            title: "Safari in Ghana: Spotting Elephants at Mole National Park",
            date: "April 12, 2023",
            description: "Ghana's answer to the African safari experience, Mole National Park offers walking safaris where you can get surprisingly close to elephants and other wildlife.",
            category: "Wildlife",
        },
        {
            title: "Walking Among Giants: My Kakum Canopy Walk Experience",
            date: "May 28, 2023",
            description: "Suspended 40 meters above the rainforest floor, the Kakum canopy walkway offers breathtaking views and encounters with tropical birds and wildlife.",
            category: "Nature",
        },
        {
            title: "Vibrant Nights: Exploring Accra's Thriving Music and Arts Scene",
            date: "March 5, 2023",
            description: "From live highlife music at Nubuke Foundation to contemporary art at 233 Jazz Bar, Accra's cultural scene comes alive after dark.",
            category: "Culture",
        },
    ];

    const filteredPosts = filter === "All" ? blogPosts : blogPosts.filter(post => post.category === filter);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <MainLayout>
            <div className="py-12 px-6 bg-gray-50 min-h-screen">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Wanderlust Ghana Blog</h2>
                    <p className="text-lg text-gray-600 mt-2">Explore my latest travel stories and insights from Ghana</p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <label htmlFor="filter" className="mr-2 text-gray-700">Filter by Category:</label>
                        <select
                            id="filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="All">All</option>
                            <option value="History">History</option>
                            <option value="Wildlife">Wildlife</option>
                            <option value="Nature">Nature</option>
                            <option value="Culture">Culture</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {paginatedPosts.map((post, index) => (
                            <BlogCard1
                                key={index}
                                title={post.title}
                                date={post.date}
                                description={post.description}
                                category={post.category}
                            />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-400"
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 ${currentPage === page ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'} rounded-lg hover:bg-gray-400`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-400"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};