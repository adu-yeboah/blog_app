import React from "react";
import MainLayout from "../../layout/mainLayout";
import { BlogCard } from "../../components/cards/BlogCard";
import { blogPosts } from "../../constants/blog";
import { DestinarionCard } from "../../components/cards/DestinationCard";


export default function Destination() {
    const [filter, setFilter] = React.useState("All");
    const [currentPage, setCurrentPage] = React.useState(1);
    const postsPerPage = 2;

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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogPosts.map((blog, index) => (
                            <DestinarionCard
                                key={index}
                                data={blog}
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