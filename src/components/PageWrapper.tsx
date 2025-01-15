"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname, isFirstLoad]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[70] grid place-items-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              {/* Background Circles */}
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="absolute inset-0 rounded-full bg-blue-100/30 blur-xl" />
              </motion.div>

              {/* Logo Container */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Main Logo */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">D</span>
                  </div>

                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute -inset-4 rounded-full"
                    animate={{
                      scale: [1, 1.2],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    style={{
                      background: "linear-gradient(to right, #2563eb, #7c3aed)",
                    }}
                  />
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  className="mt-8 h-1 bg-gray-200 rounded-full overflow-hidden w-48"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Loading Text */}
                <motion.p
                  className="mt-4 text-gray-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Loading...
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PageWrapper;