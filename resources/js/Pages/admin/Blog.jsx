import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import Head from '../../components/ui/Head';
import { useForm } from '@inertiajs/react';

const Blog = () => {

  const { data, setData, post, processing, reset, errors } = useForm({
    title: '',
    date: '',
    description: '',
    category: '',
    images: [], 
    rating: '',
    location: '',
  });

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  // Handle image file changes (support multiple files)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setData('images', [...data.images, ...files]);
  };

  // Remove an image file
  const removeImage = (index) => {
    const updatedImages = data.images.filter((_, i) => i !== index);
    setData('images', updatedImages);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (
      !data.title ||
      !data.date ||
      !data.description ||
      !data.category ||
      !data.rating ||
      !data.location ||
      data.images.length === 0
    ) {
      alert('Please fill out all fields and upload at least one image.');
      return;
    }

    // Validate rating (between 0 and 5)
    const rating = parseFloat(data.rating);
    if (isNaN(rating) || rating < 0 || rating > 5) {
      alert('Rating must be a number between 0 and 5.');
      return;
    }

    post('/blog/create', {
      onSuccess: () => {
        reset(); 
        alert('Blog post created successfully!');
      },
      onError: (errors) => {
        console.log('Errors:', errors);
      },
    });
    
  };

  return (
    <>
      <AdminLayout>
        <div className="min-h-screen bg-gray-100 p-6">
          <Head title={"Create Blog"} />
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={handleInputChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter blog title"
                  />
                  {errors?.title && <p className="text-red-600 text-sm">{errors.title}</p>}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="text"
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., June 15, 2023"
                  />
                  {errors?.date && <p className="text-red-600 text-sm">{errors.date}</p>}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    name="description"
                    value={data.description}
                    onChange={handleInputChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Write a brief description of the blog post"
                  />
                  {errors?.description && <p className="text-red-600 text-sm">{errors.description}</p>}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    name="category"
                    value={data.category}
                    onChange={handleInputChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option value="History">History</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="Nature">Nature</option>
                    <option value="Culture">Culture</option>
                  </select>
                  {errors?.category && <p className="text-red-600 text-sm">{errors.category}</p>}
                </div>

                {/* Images */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Images (Files)</label>
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  {data.images.length > 0 && (
                    <div className="mt-2 space-y-2 cursor-pointer">
                      {data.images.map((image, index) => (
                        <div key={index} className="flex items-center cursor-pointer space-x-2">
                          <span className="text-sm text-gray-600">{image.name || 'Selected File'}</span>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="text-red-600 cursor-pointer hover:text-red-800 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
                  <input
                    type="number"
                    name="rating"
                    value={data.rating}
                    onChange={handleInputChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 4.5"
                    step="0.1"
                    min="0"
                    max="5"
                  />
                  {errors?.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={data.location}
                    onChange={handleInputChange}
                    className="mt-1 outline-0 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Accra, Greater Accra Region, Ghana"
                  />
                  {errors?.location && <p className="text-red-600 text-sm">{errors.location}</p>}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={processing}
                    className={`w-full bg-green-900 cursor-pointer text-white font-medium py-2 px-4 rounded-md ${processing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                      }`}
                  >
                    {processing ? 'Creating...' : 'Create Blog Post'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Blog;