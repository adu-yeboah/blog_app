import React from "react";
import MainLayout from "../../layout/mainLayout";
import { BlogCard } from "../../components/cards/BlogCard";
import { Link, router, usePage } from "@inertiajs/react";

export default function BlogSection() {
    const { destination } = usePage().props;
    const { data: blogPosts, links } = destination;

    const handleFilterChange = (category) => {
        router.get('/destination', { category }, {
            preserveState: true,
            replace: true,
        });
    };

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
                            value={'All'}
                            onChange={(e) => handleFilterChange(e.target.value)}
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
                            <BlogCard
                                key={index}
                                data={blog}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex justify-center space-x-2">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                preserveState
                                className={`px-4 py-2 rounded-lg ${
                                    link.active
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}