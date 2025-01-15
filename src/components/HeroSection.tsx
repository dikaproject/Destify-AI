"use client"
import { motion } from 'framer-motion';
import {  MapPin, Compass, Camera, Calendar, Star, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: <Compass />, title: 'AI Powered', description: 'Smart recommendations' },
    { icon: <Camera />, title: 'Image Scan', description: 'Find similar places' },
    { icon: <Calendar />, title: 'Trip Planner', description: 'Personalized itinerary' },
    { icon: <Star />, title: 'Top Rated', description: 'Verified destinations' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your Next Adventure with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                AI-Powered
              </span>{' '}
              Recommendations
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Let our intelligent AI guide you to extraordinary destinations tailored just for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto mt-10"
          >
            <div className="flex items-center bg-white rounded-full shadow-lg p-2 backdrop-blur-lg border border-gray-100">
              <div className="flex items-center flex-1 space-x-4">
                <MapPin className="h-6 w-6 text-blue-500 ml-4" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-200 shadow-md">
                Explore Now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="text-center group"
              >
                <div className="bg-white p-4 rounded-2xl inline-block shadow-md group-hover:shadow-lg transition-all duration-200">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:text-blue-700 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer text-gray-400 hover:text-gray-600"
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;