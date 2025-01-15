"use client"
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles } from 'lucide-react';

const samplePrompts = [
  "Plan a weekend trip to Bali",
  "Find cultural attractions in Yogyakarta",
  "Recommend beach destinations in Indonesia",
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: AI Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">AI Travel Assistant</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {samplePrompts.map((prompt, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{prompt}</span>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask anything about your trip..."
                  className="w-full text-gray-700 px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Planning Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
                Dream Vacation Today
              </span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Let our AI assistant help you create the perfect itinerary tailored to your preferences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Free
              <Bot className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;