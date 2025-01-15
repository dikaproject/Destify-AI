"use client"
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: "Raja Ampat",
    location: "Papua Barat",
    image: "/raja-ampat.jpg",
    rating: 4.9,
    category: "Nature"
  },
  {
    id: 2,
    name: "Borobudur Temple",
    location: "Yogyakarta",
    image: "/borobudur.jpg",
    rating: 4.8,
    category: "Cultural"
  },
  {
    id:3,
    name: "Bali",
    location: "Denpasar",
    image: "/bali.jpg",
    rating: 4.7,
    category: "Beach"
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Popular Destinations
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover Indonesia&opus;s most beloved destinations, powered by AI recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full pt-[60%]"> {/* 16:9 aspect ratio */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="absolute inset-0 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{dest.name}</h3>
                  <span className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-sm">{dest.rating}</span>
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{dest.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {dest.category}
                  </span>
                  <button className="text-gray-700 hover:text-blue-600 flex items-center transition-colors">
                    Explore <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">
              View All Destinations
              <ArrowRight className="inline-block h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;