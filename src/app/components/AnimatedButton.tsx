'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  hasRipple?: boolean;
}

export const AnimatedButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  hasRipple = true
}: AnimatedButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number, y: number, id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (hasRipple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples(prev => [...prev, { x, y, id }]);
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 1000);
    }

    onClick?.();
  };

  return (
    <motion.button
      className={cn(
        'relative px-8 py-3 rounded-lg font-medium overflow-hidden transition-all duration-300',
        variant === 'primary'
          ? 'bg-[#007CEE] text-white hover:bg-[#0066CC]'
          : 'border border-[#007CEE]/30 text-white hover:border-[#007CEE]',
        className
      )}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    >
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 0.5
          }}
          animate={{
            width: 500,
            height: 500,
            x: ripple.x - 250,
            y: ripple.y - 250,
            opacity: 0
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut"
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300"
        initial={false}
        whileHover={{ opacity: 1 }}
      />

      <motion.div
        className="relative z-10"
        whileHover={{
          y: -2
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};