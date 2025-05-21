import { Edit, Image, Instagram, Linkedin, MapPin, Phone, Save, Twitter, Upload } from "lucide-react";
import React, { useState } from "react";
import AdminLayout from "../../layout/adminLayout";
import { useForm } from "@inertiajs/react";

export default function Utils({ Utils }) {


  if (Utils) {
    setData(Utils)
  }
  console.log(Utils);

  // State for user data
  const { data, setData, post, processing } = useForm({
    about: "about here",
    phone: "0000000000",
    number: "000000000",
    location: "New York, NY",
    twitter: "@username",
    instagram: "@username",
    linkedin: "linkedin.com/in/username",
    coverImage: ""
  });

  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };


  // Handle cover image upload
  const reader = new FileReader();

  const handleCoverImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setData("coverImage", file);

      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes
  const saveChanges = (section) => {
    post("/utils/store", {
      onSuccess: () => {
        alert('Utils post created successfully!');
      },
      onError: (errors) => {
        console.log('Errors:', errors);
      },
    })

    console.log(data);
    if (section === 'about') {
      setIsEditingAbout(false);
    } else {
      setIsEditingContact(false);
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100">

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Cover Image Section */}
          <div className="mb-6">
            <button
              onClick={() => saveChanges('image')}
              className="bg-green-600 text-white px-4 py-2 self-end rounded-md hover:bg-green-700"
            >
              <Save className="w-5 h-5 inline-block mr-1" />
              Save
            </button>
            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
              {data.coverImage ? (
                <img src={data.coverImage} alt="Cover" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <Image className="w-12 h-12 text-gray-500" />
                </div>
              )}
              <label className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-700">
                <Upload className="w-5 h-5 inline-block mr-2" />
                Change Cover
                <input type="file" className="hidden" accept="image/*" onChange={handleCoverImage} />
              </label>

            </div>
          </div>

          {/* About Section */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">About</h2>
              {!isEditingAbout ? (
                <button
                  onClick={() => setIsEditingAbout(true)}
                  className="text-green-600 hover:text-green-800"
                >
                  <Edit className="w-5 h-5 inline-block mr-1" />
                  Edit
                </button>
              ) : (
                <div className="space-x-2">
                  <button
                    onClick={() => saveChanges('about')}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    <Save className="w-5 h-5 inline-block mr-1" />
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setdata({ ...data });
                      setIsEditingAbout(false);
                    }}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            {isEditingAbout ? (
              <textarea
                name="about"
                value={data.about}
                onChange={handleInputChange}
                className="w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                rows="4"
              />
            ) : (
              <p className="text-gray-600">{data.about}</p>
            )}
          </div>

          {/* Contact and Handles Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Contact & Handles</h2>
              {!isEditingContact ? (
                <button
                  onClick={() => setIsEditingContact(true)}
                  className="text-green-600 hover:text-green-800"
                >
                  <Edit className="w-5 h-5 inline-block mr-1" />
                  Edit
                </button>
              ) : (
                <div className="space-x-2">
                  <button
                    onClick={() => saveChanges('contact')}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    <Save className="w-5 h-5 inline-block mr-1" />
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setdata({ ...data });
                      setIsEditingContact(false);
                    }}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    name="phone"
                    value={data.number}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                  />
                ) : (
                  <p className="mt-1 text-gray-600 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    {data.number}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    name="phone"
                    value={data.phone}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                  />
                ) : (
                  <p className="mt-1 text-gray-600 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    {data.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    name="location"
                    value={data.location}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                  />
                ) : (
                  <p className="mt-1 text-gray-600 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {data.location}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Twitter</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    name="twitter"
                    value={data.twitter}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                  />
                ) : (
                  <p className="mt-1 text-gray-600 flex items-center">
                    <Twitter className="w-5 h-5 mr-2" />
                    {data.twitter}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instagram</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    name="instagram"
                    value={data.instagram}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                  />
                ) : (
                  <p className="mt-1 text-gray-600 flex items-center">
                    <Instagram className="w-5 h-5 mr-2" />
                    {data.instagram}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    name="linkedin"
                    value={data.linkedin}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-2 border outline-0 focus:border-green-800 rounded-md"
                  />
                ) : (
                  <p className="mt-1 text-gray-600 flex items-center">
                    <Linkedin className="w-5 h-5 mr-2" />
                    {data.linkedin}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}