// src/app/components/Enhanced3DCard.tsx
'use client';

import { motion, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface Enhanced3DCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  };
  delay?: number;
}

export const Enhanced3DCard = ({ 
  icon, 
  title, 
  description, 
  stats, 
  delay = 0 
}: Enhanced3DCardProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const springConfig = { stiffness: 150, damping: 15 };

  // Use springs for smoother rotation
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    rotateX.set(rotation.x);
    rotateY.set(rotation.y);
  }, [rotation, rotateX, rotateY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;

    setRotation({
      x: x * 15, // Reduced from 20 for smoother movement
      y: y * 15
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `
          perspective(1000px) 
          rotateX(${rotateX.get()}deg) 
          rotateY(${rotateY.get()}deg)
        `
      }}
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-[#007CEE]/20 to-transparent rounded-xl blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Content */}
      <div className="relative bg-[#1D1D1D]/90 backdrop-blur-sm rounded-xl border border-[#007CEE]/20 p-6 h-full">
        {/* Icon */}
        <motion.div 
          className="text-[#007CEE] mb-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#007CEE]"
          animate={{
            backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%"
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 relative">
          {description}
        </p>

        {/* Stats */}
        <div className="mt-auto pt-4 border-t border-[#007CEE]/10">
          <motion.div 
            className="flex items-center justify-between"
            animate={{
              y: isHovered ? -2 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.span 
              className="text-2xl font-bold text-[#007CEE]"
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {stats.value}
            </motion.span>
            <span className="text-sm text-gray-400">{stats.label}</span>
          </motion.div>
        </div>

        {/* Hover Gradient Overlay */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#007CEE]/10 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};