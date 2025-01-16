"use client"
import { motion } from 'framer-motion';
import { Bot, Send, Camera, Sparkles, Image as ImageIcon, MessageSquare } from 'lucide-react';
import AIPlanningSection from './AIPlanningSection';

const AIRecommendations = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience AI-Powered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Travel Planning
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect destination through advanced AI technology and image recognition
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI Chat Assistant</h3>
            </div>
            
            <div className="space-y-4 mb-6 h-[300px] overflow-y-auto">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Bot className="w-6 h-6 text-blue-600 mt-1" />
                  <p className="text-gray-700">Hi! I can help you plan the perfect trip. What type of experience are you looking for?</p>
                </div>
              </div>
              {/* Add more chat messages here */}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Ask anything about your trip..."
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Send className="w-5 h-5 text-blue-600 hover:text-blue-700 transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Image Scanning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Image Recognition</h3>
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drop an image or click to upload</p>
                <p className="text-sm text-gray-500">Find similar destinations based on your photo</p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <Sparkles className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-1">Similar Places</h4>
                <p className="text-sm text-gray-600">Find locations matching your image</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Bot className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="font-medium text-gray-900 mb-1">Smart Analysis</h4>
                <p className="text-sm text-gray-600">Get AI-powered insights</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Add AIPlanningSection with top margin */}
        <div className="mt-24">
          <AIPlanningSection />
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;