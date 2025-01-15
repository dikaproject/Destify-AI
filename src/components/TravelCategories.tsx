"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mountain, Palmtree, Building, Utensils, Tent, Camera } from 'lucide-react';

const categories = [
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Nature Adventures",
    description: "Mountains, lakes, and forests",
    image: "/nature.jpg",
    count: "250+ destinations"
  },
  {
    icon: <Palmtree className="w-6 h-6" />,
    title: "Beach Escapes",
    description: "Coastal paradises and islands",
    image: "/beach.jpg",
    count: "180+ destinations"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Cultural Heritage",
    description: "Temples, museums, and traditions",
    image: "/cultural.jpg",
    count: "200+ destinations"
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Culinary Tours",
    description: "Local flavors and traditions",
    image: "/culinary.jpg",
    count: "150+ experiences"
  },
  {
    icon: <Tent className="w-6 h-6" />,
    title: "Adventure Sports",
    description: "Thrilling outdoor activities",
    image: "/adventure.jpg",
    count: "120+ activities"
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Photography Spots",
    description: "Instagram-worthy locations",
    image: "/photo.jpg",
    count: "300+ locations"
  }
];

const TravelCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect adventure across various travel experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 w-full p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <span className="text-white">
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm mb-2">
                    {category.description}
                  </p>
                  <span className="text-white/60 text-sm">
                    {category.count}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;