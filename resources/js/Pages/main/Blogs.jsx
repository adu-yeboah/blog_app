import React, { useState } from "react";
import MainLayout from "../../layout/mainLayout";
import { BlogCard } from "../../components/cards/BlogCard";
import { Link, router, usePage } from "@inertiajs/react";
import { 
  FiFilter, 
  FiGrid, 
  FiList, 
  FiSearch, 
  FiX,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";
import { TbCategory } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogSection() {
    const { posts } = usePage().props;
    const { data: blogPosts, links, meta } = posts;
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState("grid");
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories from posts
    const categories = ["All", ...new Set(blogPosts.map(post => post.category).filter(Boolean))];
    
    const handleFilterChange = (category) => {
        setActiveCategory(category);
        router.get('/blog', { category: category === "All" ? "" : category }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/blog', { search: searchTerm }, {
            preserveState: true,
            replace: true,
        });
    };

    const clearFilters = () => {
        setSearchTerm("");
        setActiveCategory("All");
        router.get('/blog', {}, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Header */}
                <div className="relative py-20 px-4 bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative container mx-auto max-w-6xl px-4">
                        <motion.div 
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 mb-6">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">📝</span>
                                </div>
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                    Travel Stories
                                </span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Ghana <span className="text-green-300">Travel</span> Stories
                            </h1>
                            
                            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                Join me on my adventures exploring Ghana's hidden treasures, 
                                cultural wonders, and breathtaking landscapes.
                            </p>
                            
                            {/* Stats */}
                            <div className="flex items-center justify-center space-x-8 mt-10 text-white/80">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">{meta?.total || blogPosts.length}</div>
                                    <div className="text-sm">Stories</div>
                                </div>
                                <div className="h-8 w-px bg-white/30"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">{categories.length - 1}</div>
                                    <div className="text-sm">Categories</div>
                                </div>
                                <div className="h-8 w-px bg-white/30"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold">5.0</div>
                                    <div className="text-sm">Avg Rating</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Controls Section */}
                <div className="container mx-auto px-4 -mt-8 mb-12">
                    <motion.div 
                        className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            {/* Search Bar */}
                            <form onSubmit={handleSearch} className="flex-1 max-w-xl">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiSearch className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search blog posts..."
                                        className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    {searchTerm && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSearchTerm("");
                                                router.get('/blog', {}, { preserveState: true });
                                            }}
                                            className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-gray-700 transition-colors"
                                        >
                                            <FiX className="text-gray-400" />
                                        </button>
                                    )}
                                </div>
                            </form>

                            {/* View Controls */}
                            <div className="flex items-center space-x-4">
                                {/* Category Filter */}
                                <div className="relative">
                                    <div className="flex items-center space-x-2 text-gray-700">
                                        <FiFilter className="text-gray-500" />
                                        <span className="font-medium">Category:</span>
                                    </div>
                                </div>
                                
                                {/* View Mode Toggle */}
                                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-md transition-colors ${
                                            viewMode === "grid"
                                                ? "bg-white text-green-600 shadow-sm"
                                                : "text-gray-500 hover:text-gray-700"
                                        }`}
                                    >
                                        <FiGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-md transition-colors ${
                                            viewMode === "list"
                                                ? "bg-white text-green-600 shadow-sm"
                                                : "text-gray-500 hover:text-gray-700"
                                        }`}
                                    >
                                        <FiList className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className="mt-6">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleFilterChange(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                            activeCategory === category
                                                ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg shadow-green-500/20"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Active Filters */}
                        {(searchTerm || activeCategory !== "All") && (
                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                    <span className="font-medium">{blogPosts.length}</span> posts found
                                    {searchTerm && (
                                        <span> for "<span className="font-medium text-green-600">{searchTerm}</span>"</span>
                                    )}
                                    {activeCategory !== "All" && (
                                        <span> in <span className="font-medium text-green-600">{activeCategory}</span></span>
                                    )}
                                </div>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
                                >
                                    <FiX className="mr-1" />
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Blog Posts Grid */}
                <div className="container mx-auto px-4 pb-20">
                    <AnimatePresence>
                        {blogPosts.length > 0 ? (
                            <motion.div 
                                className={viewMode === "grid" 
                                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                    : "space-y-8 max-w-4xl mx-auto"
                                }
                                layout
                            >
                                {blogPosts.map((blog, index) => (
                                    <motion.div
                                        key={blog.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <BlogCard 
                                            data={blog} 
                                            viewMode={viewMode}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div 
                                className="text-center py-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiSearch className="w-12 h-12 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">No posts found</h3>
                                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                    Try adjusting your search or filter to find what you're looking for
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Pagination */}
                    {links.length > 3 && (
                        <motion.div 
                            className="mt-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center justify-between max-w-2xl mx-auto">
                                {/* Previous Button */}
                                <Link
                                    href={links[0].url}
                                    preserveState
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full ${
                                        links[0].url
                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            : 'opacity-50 cursor-not-allowed bg-gray-100'
                                    }`}
                                >
                                    <FiChevronLeft />
                                    <span>Previous</span>
                                </Link>

                                {/* Page Numbers */}
                                <div className="flex items-center space-x-2">
                                    {links.slice(1, -1).map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            preserveState
                                            className={`w-10 h-10 flex items-center justify-center rounded-full ${
                                                link.active
                                                    ? 'bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>

                                {/* Next Button */}
                                <Link
                                    href={links[links.length - 1].url}
                                    preserveState
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full ${
                                        links[links.length - 1].url
                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            : 'opacity-50 cursor-not-allowed bg-gray-100'
                                    }`}
                                >
                                    <span>Next</span>
                                    <FiChevronRight />
                                </Link>
                            </div>
                            
                            {/* Results Info */}
                            <div className="text-center mt-6 text-gray-600 text-sm">
                                Showing posts {meta?.from || 1} to {meta?.to || blogPosts.length} of {meta?.total || blogPosts.length}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100 py-16 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Never Miss a Story</h3>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Subscribe to get my latest Ghana travel stories and tips delivered directly to your inbox.
                        </p>
                        <div className="flex max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-6 py-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 rounded-r-full hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}