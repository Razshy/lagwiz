// src/app/components/PerformanceGraph.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const PerformanceGraph = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState<number[]>([]);

  // Generate smooth wave data
  useEffect(() => {
    const generateWaveData = () => {
      const points = 50;
      const newData = Array.from({ length: points }, (_, i) => {
        const base = Math.sin(i * 0.2) * 30 + 50; // Base sine wave
        const noise = Math.random() * 5; // Small random variation
        return base + noise;
      });
      setData(newData);
    };

    generateWaveData();
    const interval = setInterval(generateWaveData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Graph Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#007CEE]/5 to-transparent opacity-50" />
      
      {/* Grid Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`grid-${i}`}
            className="absolute w-full border-t border-[#007CEE]/10"
            style={{ top: `${(i + 1) * 20}%` }}
          />
        ))}
      </div>

      {/* Performance Line */}
      <div className="relative h-full flex items-end">
        <div className="w-full h-full flex items-end">
          {data.map((value, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#007CEE]/20 to-[#007CEE]/10"
              initial={{ height: "0%" }}
              animate={{ 
                height: `${value}%`,
                backgroundColor: isHovered ? "rgba(0,124,238,0.3)" : "rgba(0,124,238,0.2)"
              }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="h-1 bg-[#007CEE]"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: isHovered ? 1 : 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover Overlay */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#007CEE]/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Labels */}
      <div className="absolute bottom-0 left-0 text-sm text-gray-400">0ms</div>
      <div className="absolute top-0 left-0 text-sm text-gray-400">100ms</div>
    </motion.div>
  );
};