'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PerformanceCardProps {
  title: string;
  before: string;
  after: string;
  improvement: string;
  icon: ReactNode;
}

export const PerformanceCard = ({ 
  title, 
  before, 
  after, 
  improvement, 
  icon 
}: PerformanceCardProps) => {
  return (
    <motion.div
      className="relative rounded-lg bg-[#1D1D1D]/50 border border-[#007CEE]/20 p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div 
          className="text-[#007CEE]"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {icon}
        </motion.div>
        <h4 className="font-medium text-gray-300">{title}</h4>
      </div>
      
      <div className="flex items-center gap-4 mb-2">
        <div className="opacity-50">
          <div className="text-sm text-gray-400">Before</div>
          <div className="text-lg font-bold">{before}</div>
        </div>

        <motion.div 
          className="text-[#007CEE]"
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          →
        </motion.div>

        <div>
          <div className="text-sm text-gray-400">After</div>
          <motion.div 
            className="text-lg font-bold text-[#007CEE]"
            whileHover={{ scale: 1.05 }}
          >
            {after}
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="text-sm font-medium text-emerald-500"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {improvement}
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#007CEE]/5 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};