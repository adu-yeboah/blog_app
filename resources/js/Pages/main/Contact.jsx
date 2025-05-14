import React from "react";
import MainLayout from "../../layout/mainLayout";
export default function Contact () {
  return (
    <MainLayout>
      <div className="py-12 px-6 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-2">
            Have questions about traveling in Ghana or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="text-green-500 text-3xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Me</h3>
              <p className="text-gray-600">hello@wanderlustghana.com</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="text-yellow-500 text-3xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Me</h3>
              <p className="text-gray-600">+233 24 123 4567</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <span className="text-red-500 text-3xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Me</h3>
              <p className="text-gray-600">Accra, Ghana</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 h-32 mb-4"
            />
            <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
