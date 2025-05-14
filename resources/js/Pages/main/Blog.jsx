import React from "react";
const BlogDetails = () => {
    const blog = {
        title: "Confronting History: My Emotional Visit to Cape Coast Castle",
        date: "June 15, 2023",
        category: "History",
        description: "Walking through the 'Door of No Return' at Cape Coast Castle was one of the most profound experiences of my travels. This UNESCO World Heritage site, located in the Central Region of Ghana, stands as a somber reminder of the transatlantic slave trade. The castle's walls echo with the stories of resilience and survival, offering a deep connection to Ghana's past. As I explored the dungeons and courtyards, I felt the weight of history and the strength of the human spirit. This visit left an indelible mark on my journey.",
        images: [
            "https://via.placeholder.com/600x400?text=Cape+Coast+Castle+1",
            "https://via.placeholder.com/600x400?text=Cape+Coast+Castle+2",
            "https://via.placeholder.com/600x400?text=Cape+Coast+Castle+3",
        ],
    };

    return (
        <motion.div
            className="py-12 px-6 bg-gray-50 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <img
                    src={blog.images[0]}
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg"
                />
                <div className="mb-6">
                    <h2 className="text-4xl font-bold text-gray-800">{blog.title}</h2>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-500 text-sm mr-4">{blog.date}</span>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{blog.category}</span>
                    </div>
                </div>
                <div className="prose lg:prose-xl text-gray-700 mb-8">
                    <p>{blog.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blog.images.slice(1).map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`${blog.title} - Image ${index + 2}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <a href="blog.html" className="text-green-600 font-semibold hover:text-green-800">Back to Blog</a>
                </div>
            </div>
        </motion.div>
    );
};
