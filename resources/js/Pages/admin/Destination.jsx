import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AdminLayout from '../../layout/adminLayout';
import Head from '../../components/ui/Head';

const CreateDestination = () => {
  const { data, setData, post, processing, reset, errors } = useForm({
    title: '',
    rating: '',
    description: '',
    location: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setData('images', [...data.images, ...files]);
  };

  const removeImage = (index) => {
    const updatedImages = data.images.filter((_, i) => i !== index);
    setData('images', updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title || !data.rating || !data.description || !data.location || data.images.length === 0) {
      alert('Please fill out all fields and upload at least one image.');
      return;
    }
    const rating = parseFloat(data.rating);
    if (isNaN(rating) || rating < 0 || rating > 5) {
      alert('Rating must be a number between 0 and 5.');
      return;
    }
    post('/destinations', {
      onSuccess: () => {
        reset();
        alert('Destination created successfully!');
      },
    });
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100 p-6">
        <Head title="Create Destination" />
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter destination title"
                />
                {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rating (0-5)</label>
                <input
                  type="number"
                  name="rating"
                  value={data.rating}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g., 4.5"
                  step="0.1"
                  min="0"
                  max="5"
                />
                {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  placeholder="Describe the destination"
                />
                {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={data.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Paris, France"
                />
                {errors.location && <p className="text-red-600 text-sm">{errors.location}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Images</label>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {data.images.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {data.images.map((image, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{image.name}</span>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {errors.images && <p className="text-red-600 text-sm">{errors.images}</p>}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={processing}
                  className={`w-full bg-blue-600 text-white py-2 rounded-md ${processing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                >
                  {processing ? 'Creating...' : 'Create Destination'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateDestination;