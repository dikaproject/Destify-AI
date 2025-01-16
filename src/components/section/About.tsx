"use client"
import { motion } from 'framer-motion';
import { Users, Target, Globe, MessageSquare } from 'lucide-react';

const stats = [
  { icon: <Users />, label: 'Happy Travelers', value: '10K+' },
  { icon: <Target />, label: 'Destinations', value: '500+' },
  { icon: <Globe />, label: 'Countries', value: '25+' },
  { icon: <MessageSquare />, label: 'AI Chats', value: '50K+' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing Travel with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Technology
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering travelers with intelligent recommendations and personalized experiences
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded with a vision to make travel planning seamless and intelligent, 
              Destify.AI combines cutting-edge artificial intelligence with deep travel 
              expertise to create personalized experiences for every traveler.
            </p>
            <p className="text-gray-600">
              Our AI-powered platform analyzes countless data points to provide 
              tailored recommendations, ensuring each journey is unique and memorable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl"
          >
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-4">
                {['Personalized Travel', 'Smart Planning', 'Local Insights', 'Sustainable Tourism'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity">
            Contact Us
            <MessageSquare className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;