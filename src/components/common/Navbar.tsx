"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    MapPin, 
    Home,
    Navigation,
    Bot,
    Info
  } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileNavItems = [
    { icon: <Home size={24} />, label: 'Home', href: '/' },
    { icon: <Navigation size={24} />, label: 'Explore', href: '/destinations' },
    { icon: <Bot size={24} />, label: 'AI Chat', href: '/ai-recommendations' },
    { icon: <Info size={24} />, label: 'About', href: '/about' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${
          scrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MapPin className="h-8 w-8 text-blue-600 relative" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Destify.AI
              </span>
            </Link>

            <div className="flex items-center space-x-8">
              {['Destinations', 'AI Recommendations', 'About'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="relative group"
                >
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden px-6 py-2 rounded-full"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90" />
                <span className="relative text-white font-medium">Get Started</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/20 md:hidden z-50"
      >
        <div className="flex justify-around items-center h-20 px-4">
          {mobileNavItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative flex flex-col items-center space-y-1.5 px-4 py-2 transition-all duration-300 ${
                pathname === item.href 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  y: -2 
                }}
                whileTap={{ 
                  scale: 0.95,
                  y: 1 
                }}
                className="relative"
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -inset-3 bg-blue-100/60 rounded-xl"
                    transition={{ 
                      type: "spring", 
                      bounce: 0.2, 
                      duration: 0.6 
                    }}
                  />
                )}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {item.icon}
                </motion.div>
              </motion.div>
              <span className="text-xs font-medium tracking-wide">{item.label}</span>
              {pathname === item.href && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full transform -translate-x-1/2"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;