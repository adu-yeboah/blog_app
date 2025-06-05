import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../../layout/mainLayout";
import { GalleryItem } from "../../components/GalleryItem";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Cape Coast Castle",
      imageUrl: "https://via.placeholder.com/800x600?text=Cape+Coast+Castle",
      description: "A historical site reflecting Ghana's past.",
      tags: ["history", "unesco", "coast"],
    },
    {
      id: 2,
      title: "Mole Safari",
      imageUrl: "https://via.placeholder.com/800x600?text=Mole+Safari",
      description: "Spotting elephants in the wild.",
      tags: ["wildlife", "nature", "safari"],
    },
    {
      id: 3,
      title: "Kakum Canopy Walk",
      imageUrl: "https://via.placeholder.com/800x600?text=Kakum+Canopy",
      description: "Walking above the rainforest canopy.",
      tags: ["nature", "adventure", "forest"],
    },
    {
      id: 4,
      title: "Accra Nightlife",
      imageUrl: "https://via.placeholder.com/800x600?text=Accra+Nightlife",
      description: "Vibrant music and arts scene at night.",
      tags: ["city", "nightlife", "culture"],
    },
    {
      id: 5,
      title: "Elmina Beach",
      imageUrl: "https://via.placeholder.com/800x600?text=Elmina+Beach",
      description: "Golden sands and palm-fringed shores.",
      tags: ["beach", "relaxation", "coast"],
    },
    {
      id: 6,
      title: "Kumasi Market",
      imageUrl: "https://via.placeholder.com/800x600?text=Kumasi+Market",
      description: "Colorful fabrics and local crafts.",
      tags: ["culture", "shopping", "market"],
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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

  return (
    <MainLayout>
      <div className="py-12 px-4 sm:px-6 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-96 mb-12 overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://via.placeholder.com/1920x600?text=Ghana+Gallery"
            alt="Ghana Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Wanderlust Ghana Gallery</h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Immerse yourself in stunning visuals from my travel adventures across Ghana
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto mb-12 px-4">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title, description or tags..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <FiX className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  tags={item.tags}
                  onClick={() => openImage(index)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No images found matching your search</h3>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImage}
            >
              <motion.div
                className="relative max-w-6xl w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages("prev");
                  }}
                >
                  <FiChevronLeft className="text-white text-2xl" />
                </button>

                <div className="relative">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                    <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                    <p className="text-gray-200 mt-1">{selectedImage.description}</p>
                    <div className="flex flex-wrap mt-2">
                      {selectedImage.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImages("next");
                  }}
                >
                  <FiChevronRight className="text-white text-2xl" />
                </button>

                <button
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  onClick={closeImage}
                >
                  <FiX className="text-3xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
}