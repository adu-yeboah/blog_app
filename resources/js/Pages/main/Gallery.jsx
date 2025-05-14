import React from "react";
import { GalleryItem } from "../../components/GalleryItem";
import MainLayout from "../../layout/mainLayout";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Cape Coast Castle",
      imageUrl: "https://via.placeholder.com/600x400?text=Cape+Coast+Castle",
      description: "A historical site reflecting Ghana's past.",
    },
    {
      title: "Mole Safari",
      imageUrl: "https://via.placeholder.com/300x200?text=Mole+Safari",
      description: "Spotting elephants in the wild.",
    },
    {
      title: "Kakum Canopy Walk",
      imageUrl: "https://via.placeholder.com/300x200?text=Kakum+Canopy",
      description: "Walking above the rainforest canopy.",
    },
    {
      title: "Accra Nightlife",
      imageUrl: "https://via.placeholder.com/300x200?text=Accra+Nightlife",
      description: "Vibrant music and arts scene at night.",
    },
    {
      title: "Accra Nightlife 2",
      imageUrl: "https://via.placeholder.com/300x200?text=Accra+Nightlife+2",
      description: "Vibrant music and arts scene at night.",
    },
  ];

  return (
    <MainLayout>
      <div className="py-12 px-6 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Wanderlust Ghana Gallery</h2>
          <p className="text-lg text-gray-600 mt-2">Explore stunning visuals from my travel adventures in Ghana</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Large Image */}
          <div className="col-span-1">
            <GalleryItem
              title={galleryItems[0].title}
              imageUrl={galleryItems[0].imageUrl}
              description={galleryItems[0].description}
              isMain={true}
            />
          </div>
          {/* Smaller Grid Images */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {galleryItems.slice(1).map((item, index) => (
              <GalleryItem
                key={index}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}