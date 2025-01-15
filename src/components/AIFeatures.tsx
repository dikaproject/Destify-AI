"use client"
import { motion } from 'framer-motion';
import { Bot, Camera, Map, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Travel Assistant",
    description: "Get personalized recommendations based on your preferences and travel style",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Image Recognition",
    description: "Upload a photo and find similar destinations nearby",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Smart Itinerary",
    description: "AI-powered trip planning optimized for your schedule",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Time-Based Suggestions",
    description: "Get recommendations based on season, weather, and local events",
    color: "from-purple-500 to-pink-500"
  }
];

const AIFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-white"
              >
                Powered by Advanced AI
              </motion.h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Experience the future of travel planning with our cutting-edge AI features
              </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                  <span className="text-white">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-2xl -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try AI Features Now
            <Bot className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeatures;