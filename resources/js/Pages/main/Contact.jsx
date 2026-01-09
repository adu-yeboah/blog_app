import React from "react";
import MainLayout from "../../layout/mainLayout";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiUser,
  FiMessageSquare
} from "react-icons/fi";
import { 
  TbMail, 
  TbPhone, 
  TbMapPin,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandFacebook
} from "react-icons/tb";
import { motion } from "framer-motion";

export default function Contact () {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: TbMail,
      title: "Email Me",
      detail: "hello@wanderlustghana.com",
      description: "I typically respond within 24 hours",
      color: "from-green-500 to-emerald-600",
      iconColor: "text-green-600",
      delay: 0.1
    },
    {
      icon: TbPhone,
      title: "Call Me",
      detail: "+233 24 123 4567",
      description: "Available Mon-Fri, 9AM-5PM GMT",
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-600",
      delay: 0.2
    },
    {
      icon: TbMapPin,
      title: "Based In",
      detail: "Accra, Ghana",
      description: "Available for local meetups",
      color: "from-blue-500 to-cyan-600",
      iconColor: "text-blue-600",
      delay: 0.3
    }
  ];

  const socialLinks = [
    { icon: TbBrandInstagram, label: "Instagram", handle: "@wanderlustghana", color: "hover:text-pink-600" },
    { icon: TbBrandTwitter, label: "Twitter", handle: "@wanderlustghana", color: "hover:text-blue-500" },
    { icon: TbBrandFacebook, label: "Facebook", handle: "/wanderlustghana", color: "hover:text-blue-700" },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative py-16 px-4 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
              >
                <FiMessageSquare className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Let's <span className="text-green-300">Connect</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Have questions about traveling in Ghana or want to collaborate? 
                I'm here to help you plan your perfect Ghanaian adventure.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="container mx-auto px-4 -mt-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: info.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center`}>
                    <info.icon className={`w-7 h-7 ${info.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-gray-800">{info.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form and Social Links */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Me a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you as soon as possible
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center">
                          <FiUser className="w-4 h-4 mr-2 text-gray-400" />
                          Your Name
                        </div>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center">
                          <FiMail className="w-4 h-4 mr-2 text-gray-400" />
                          Email Address
                        </div>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can I help you?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      placeholder="Tell me about your Ghana travel plans or questions..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <FiSend className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Social & Additional Info */}
            <div className="space-y-8">
              {/* Social Links */}
              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect Socially</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`group flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 ${social.color}`}
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                        <social.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{social.label}</div>
                        <div className="text-sm text-gray-500">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <TbPhone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Quick Response</h4>
                    <p className="text-sm text-gray-600">I aim to reply within 24 hours</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  For urgent inquiries, please call me directly. For collaborations and partnerships, 
                  email is the best way to reach me with detailed information.
                </p>
              </motion.div>

              {/* FAQ Link */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h4>
                <p className="text-gray-700 mb-4">
                  Before reaching out, you might find answers in my travel guides and FAQ section.
                </p>
                <a 
                  href="/faq" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group"
                >
                  Visit FAQ Section
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Map/CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="text-3xl font-bold mb-6">Planning a Trip to Ghana?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let me help you create an unforgettable itinerary. From hidden gems to must-see attractions, 
              I provide personalized travel advice based on my years of exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5">
                Request Travel Consultation
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                View Travel Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};