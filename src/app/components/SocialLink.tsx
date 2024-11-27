// src/app/components/SocialLink.tsx
'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, MessageSquare } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: 'twitter' | 'discord' | 'github';
}

export const SocialLink = ({ href, icon }: SocialLinkProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'twitter':
        return <Twitter size={20} />;
      case 'discord':
        return <MessageSquare size={20} />; // Using MessageSquare for Discord
      case 'github':
        return <Github size={20} />;
      default:
        return null;
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#007CEE]/10 flex items-center justify-center text-[#007CEE] hover:bg-[#007CEE]/20 transition-all duration-300 relative group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#007CEE]/20 blur-md"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0,
          scale: [1, 1.2, 1]
        }}
        whileHover={{ 
          opacity: 1,
          scale: 1.2
        }}
        transition={{
          duration: 0.3
        }}
      />

      {/* Icon wrapper */}
      <motion.div
        className="relative z-10"
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
      >
        {renderIcon()}
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1D1D1D] text-white text-xs py-1 px-2 rounded opacity-0 pointer-events-none whitespace-nowrap border border-[#007CEE]/20"
        initial={{ opacity: 0, y: -5 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {icon.charAt(0).toUpperCase() + icon.slice(1)}
      </motion.div>
    </motion.a>
  );
};