import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../../layout/mainLayout";
import { GalleryItem } from "../../components/GalleryItem";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight, FiFilter, FiGrid, FiList } from "react-icons/fi";
import { TbPhoto } from "react-icons/tb";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'masonry'
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Cape Coast Castle",
      imageUrl: "https://via.placeholder.com/800x600?text=Cape+Coast+Castle",
      description: "A historical UNESCO World Heritage site reflecting Ghana's rich past and the transatlantic slave trade.",
      tags: ["history", "unesco", "coast", "heritage"],
      category: "historical",
      date: "2023-11-15",
    },
    {
      id: 2,
      title: "Mole National Park Safari",
      imageUrl: "https://via.placeholder.com/800x600?text=Mole+Safari",
      description: "Spotting elephants, antelopes, and diverse wildlife in Ghana's largest wildlife refuge.",
      tags: ["wildlife", "nature", "safari", "adventure"],
      category: "nature",
      date: "2023-09-22",
    },
    {
      id: 3,
      title: "Kakum Canopy Walkway",
      imageUrl: "https://via.placeholder.com/800x600?text=Kakum+Canopy",
      description: "Walking 40 meters above the rainforest floor on suspended bridges through the treetops.",
      tags: ["nature", "adventure", "forest", "canopy"],
      category: "adventure",
      date: "2023-08-10",
    },
    {
      id: 4,
      title: "Accra Nightlife",
      imageUrl: "https://via.placeholder.com/800x600?text=Accra+Nightlife",
      description: "Vibrant music, arts scene, and cultural events in Ghana's bustling capital city.",
      tags: ["city", "nightlife", "culture", "urban"],
      category: "urban",
      date: "2023-12-05",
    },
    {
      id: 5,
      title: "Elmina Beach",
      imageUrl: "https://via.placeholder.com/800x600?text=Elmina+Beach",
      description: "Golden sands and palm-fringed shores along Ghana's picturesque coastline.",
      tags: ["beach", "relaxation", "coast", "sunset"],
      category: "coastal",
      date: "2023-07-18",
    },
    {
      id: 6,
      title: "Kumasi Market",
      imageUrl: "https://via.placeholder.com/600x800?text=Kumasi+Market",
      description: "Colorful fabrics, local crafts, and traditional goods at Ghana's largest market.",
      tags: ["culture", "shopping", "market", "traditional"],
      category: "cultural",
      date: "2023-10-30",
    },
    {
      id: 7,
      title: "Wli Waterfalls",
      imageUrl: "https://via.placeholder.com/600x800?text=Wli+Waterfalls",
      description: "The highest waterfalls in West Africa, surrounded by lush tropical rainforest.",
      tags: ["waterfall", "nature", "hiking", "rainforest"],
      category: "nature",
      date: "2023-06-12",
    },
    {
      id: 8,
      title: "Traditional Festivals",
      imageUrl: "https://via.placeholder.com/800x600?text=Traditional+Festivals",
      description: "Colorful cultural celebrations with traditional dances, music, and attire.",
      tags: ["festival", "culture", "tradition", "celebration"],
      category: "cultural",
      date: "2023-11-28",
    },
    {
      id: 9,
      title: "Volta Region Scenery",
      imageUrl: "https://via.placeholder.com/800x600?text=Volta+Region",
      description: "Breathtaking mountains, lakes, and valleys in Ghana's most scenic region.",
      tags: ["mountains", "landscape", "scenic", "volta"],
      category: "landscape",
      date: "2023-05-20",
    },
  ];

  const categories = [
    { id: "all", label: "All Photos", count: galleryItems.length },
    { id: "nature", label: "Nature", count: galleryItems.filter(item => item.category === "nature").length },
    { id: "cultural", label: "Cultural", count: galleryItems.filter(item => item.category === "cultural").length },
    { id: "historical", label: "Historical", count: galleryItems.filter(item => item.category === "historical").length },
    { id: "coastal", label: "Coastal", count: galleryItems.filter(item => item.category === "coastal").length },
    { id: "adventure", label: "Adventure", count: galleryItems.filter(item => item.category === "adventure").length },
  ];

  const filteredItems = galleryItems.filter(
    (item) =>
      (activeFilter === "all" || item.category === activeFilter) &&
      (searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const openImage = (index) => {
    setSelectedImage(filteredItems[index]);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    setSelectedImage(filteredItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e) => {
    if (!selectedImage) return;
    
    if (e.key === "Escape") {
      closeImage();
    } else if (e.key === "ArrowRight") {
      navigateImages("next");
    } else if (e.key === "ArrowLeft") {
      navigateImages("prev");
    }
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage, currentIndex]);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 mb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://via.placeholder.com/1920x800?text=Ghana+Visual+Journey"
              alt="Ghana Gallery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <TbPhoto className="text-white text-xl" />
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  Visual Journey
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Ghana Through <span className="text-amber-300">My Lens</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                A visual collection of breathtaking moments from my travels across Ghana's diverse landscapes and cultures
              </p>
              
              <div className="flex items-center space-x-4 mt-6 text-white/80">
                <div className="flex items-center">
                  <span className="font-bold text-2xl mr-2">{galleryItems.length}</span>
                  <span>Photos</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="flex items-center">
                  <span className="font-bold text-2xl mr-2">{categories.length - 1}</span>
                  <span>Categories</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="container mx-auto px-4 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.label}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeFilter === category.id
                      ? "bg-white/20"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white rounded-lg p-1 border border-gray-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-amber-50 text-amber-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "masonry"
                      ? "bg-amber-50 text-amber-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search gallery..."
                  className="pl-10 pr-10 py-3 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-3 flex items-center hover:text-gray-700 transition-colors"
                  >
                    <FiX className="text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <div className="text-gray-600">
              Showing <span className="font-bold text-gray-900">{filteredItems.length}</span> of{" "}
              <span className="font-bold text-gray-900">{galleryItems.length}</span> photos
              {searchTerm && (
                <>
                  {" "}for <span className="font-medium text-amber-600">"{searchTerm}"</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 pb-20">
          {filteredItems.length > 0 ? (
            <motion.div 
              className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "columns-1 sm:columns-2 lg:columns-3 gap-6"
              }
              layout
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={viewMode === "masonry" ? "mb-6 break-inside-avoid" : ""}
                >
                  <GalleryItem
                    title={item.title}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    tags={item.tags}
                    category={item.category}
                    date={item.date}
                    onClick={() => openImage(index)}
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
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSearch className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No photos found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Image Modal/Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/95 backdrop-blur-sm"></div>
              
              {/* Lightbox Content */}
              <motion.div
                className="relative h-full flex items-center justify-center p-4 md:p-8"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  onClick={closeImage}
                >
                  <FiX className="text-white text-xl" />
                </button>

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImages("prev");
                      }}
                    >
                      <FiChevronLeft className="text-white text-2xl" />
                    </button>

                    <button
                      className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImages("next");
                      }}
                    >
                      <FiChevronRight className="text-white text-2xl" />
                    </button>
                  </>
                )}

                {/* Image and Info */}
                <div className="max-w-6xl w-full max-h-[90vh]">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Image Container */}
                    <motion.div 
                      className="flex-1 flex items-center justify-center"
                      key={selectedImage.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={selectedImage.imageUrl}
                        alt={selectedImage.title}
                        className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                      />
                    </motion.div>

                    {/* Info Panel */}
                    <motion.div 
                      className="lg:w-96 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 rounded-full text-sm font-medium border border-amber-500/30">
                            {selectedImage.category}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-6">{selectedImage.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Tags</div>
                            <div className="flex flex-wrap gap-2">
                              {selectedImage.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="inline-block bg-white/10 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-400">Photo {currentIndex + 1} of {filteredItems.length}</span>
                              <span className="text-gray-300">{selectedImage.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Download/Share Buttons */}
                      <div className="flex space-x-3">
                        <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                          Download
                        </button>
                        <button className="flex-1 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                          Share
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                  {currentIndex + 1} / {filteredItems.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}