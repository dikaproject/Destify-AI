"use client"
import { motion } from 'framer-motion';
import {  Clock, Plane, Hotel, Coffee } from 'lucide-react';

const AIPlanningSection = () => {
  return (
    <div className="bg-gradient-to-t from-blue-50/30 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Travel Planning with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}AI Budget Calculator
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your perfect trip with our AI-powered calculator that estimates costs, visa requirements, and optimal duration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Plan Your Journey</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full text-gray-700 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Days)</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="7"
                    className="w-full text-gray-700 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="2"
                    className="w-full text-gray-700 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Style</label>
                <select className="w-full text-gray-700 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Budget</option>
                  <option>Standard</option>
                  <option>Luxury</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
                Calculate Trip
              </button>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Cost Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estimated Costs</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Plane className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Flights</span>
                  </div>
                  <span className="font-medium text-gray-700">$800</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Hotel className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Accommodation</span>
                  </div>
                  <span className="font-medium text-gray-700">$600</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Coffee className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Daily Expenses</span>
                  </div>
                  <span className="font-medium text-gray-700">$400</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Total Estimated</span>
                  <span className="font-semibold text-blue-600">$1,800</span>
                </div>
              </div>
            </div>

            {/* Travel Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Requirements</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Plane className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Visa Required</h4>
                    <p className="text-sm text-gray-600">Processing time: 5-7 business days</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Recommended Duration</h4>
                    <p className="text-sm text-gray-600">7-10 days for optimal experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIPlanningSection;