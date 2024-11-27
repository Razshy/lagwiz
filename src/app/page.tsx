'use client';

// Core imports
import { AnimatedButton } from './components/AnimatedButton';
import { Enhanced3DCard } from './components/Enhanced3DCard';
import { PerformanceCard } from './components/PerformanceCard';
import { PerformanceGraph } from './components/PerformanceGraph';
import { SocialLink } from './components/SocialLink';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState, useMemo } from 'react';
import { 
  Cpu, 
  Zap, 
  Shield, 
  MonitorCheck, 
  ChevronDown, 
  X, 
  Download,
  ExternalLink, 
  Gamepad, 
  Command, 
  Timer, 
  Settings,
  Twitter,
  Github,
  MessagesSquare,
  MessageSquare,
  Copy,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Particle System Configuration
const PARTICLE_COLORS = ['#007CEE', '#0056A4', '#003F7A']; // Brand color variations
const PARTICLE_COUNT = 200; // Number of particles to render


// Grid Background Configuration
const GRID_CONFIG = {
  size: 30, // Grid cell size in pixels
  opacity: 0.05, // Grid line opacity
  color: '#007CEE', // Grid line color
  blur: 0.5, // Grid line blur in pixels
};



export default function Home() {
  // Refs and state
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // Initialize particles with useMemo to prevent recreation on re-renders
  const particles = useMemo(() => 
    Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * 100, // Random X position (0-100%)
      y: Math.random() * 100, // Random Y position (0-100%)
      size: Math.random() * 3 + 1, // Random size (1-4px)
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      speed: Math.random() * 0.5 + 0.2, // Random speed for animation
      delay: Math.random() * 2, // Random delay for animation start
    })), 
  []);
  
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
const [showTermsModal, setShowTermsModal] = useState(false);
const [showContactModal, setShowContactModal] = useState(false);
  // Enhanced Grid Background Component
  const GridBackground = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Vertical grid lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, ${GRID_CONFIG.color} 1px, transparent 1px)`,
            backgroundSize: `${GRID_CONFIG.size}px ${GRID_CONFIG.size}px`,
            opacity: GRID_CONFIG.opacity,
            filter: `blur(${GRID_CONFIG.blur}px)`
          }}
        />
        
        {/* Horizontal grid lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, ${GRID_CONFIG.color} 1px, transparent 1px)`,
            backgroundSize: `${GRID_CONFIG.size}px ${GRID_CONFIG.size}px`,
            opacity: GRID_CONFIG.opacity,
            filter: `blur(${GRID_CONFIG.blur}px)`
          }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-transparent to-[#1D1D1D]"
          animate={{
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Particle system */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, 100, 0],
              x: particle.x + Math.sin(particle.speed * Math.PI) * 10,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
    );
  };
  return (
    <>
{/* Privacy Policy Modal */}
{/* Privacy Policy Modal */}
<AnimatePresence>
  {showPrivacyModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowPrivacyModal(false);
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1D1D1D] p-8 rounded-xl border border-[#007CEE]/20 max-w-2xl w-full mx-4 relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-[#007CEE]/5 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-[#007CEE] bg-clip-text text-transparent">
              Privacy Policy
            </h2>
            <button 
              onClick={() => setShowPrivacyModal(false)}
              className="hover:rotate-90 transition-transform duration-200"
            >
              <X className="text-gray-400 hover:text-[#007CEE] transition-colors" />
            </button>
          </motion.div>

          <motion.div 
            className="space-y-6 text-gray-300 mb-6 max-h-[60vh] overflow-y-auto pr-4 styled-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[#007CEE]">Last updated: November 27, 2024</p>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">1. Overview</h3>
              <p>LagWiz (we, our, or us) is committed to protecting your privacy. This policy outlines our practices for collecting, using, and safeguarding your information.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">2. Information We Collect</h3>
              <p>To optimize your gaming experience, we collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>System specifications and hardware information</li>
                <li>Performance metrics and usage statistics</li>
                <li>Application settings and preferences</li>
                <li>Diagnostic data for troubleshooting</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">3. How We Use Your Information</h3>
              <p>Your data is used exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Optimizing system performance</li>
                <li>Improving our optimization algorithms</li>
                <li>Providing technical support</li>
                <li>Enhancing user experience</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">4. Data Security</h3>
              <p>We implement industry-standard security measures to protect your data. All performance data is encrypted during transmission and storage.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">5. Data Sharing</h3>
              <p>We do not sell or share your personal information with third parties. Performance data is anonymized for analytical purposes.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">6. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access your data</li>
                <li>Request data deletion</li>
                <li>Opt out of data collection</li>
                <li>Export your data</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatedButton
              onClick={() => setShowPrivacyModal(false)}
              className="w-full"
            >
              I Understand
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Terms of Service Modal */}
<AnimatePresence>
  {showTermsModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowTermsModal(false);
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1D1D1D] p-8 rounded-xl border border-[#007CEE]/20 max-w-2xl w-full mx-4 relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-[#007CEE]/5 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-[#007CEE] bg-clip-text text-transparent">
              Terms of Service
            </h2>
            <button 
              onClick={() => setShowTermsModal(false)}
              className="hover:rotate-90 transition-transform duration-200"
            >
              <X className="text-gray-400 hover:text-[#007CEE] transition-colors" />
            </button>
          </motion.div>

          <motion.div 
            className="space-y-6 text-gray-300 mb-6 max-h-[60vh] overflow-y-auto pr-4 styled-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[#007CEE]">Last updated: November 27, 2024</p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">1. Acceptance</h3>
              <p>By using LagWiz, you agree to these terms. We reserve the right to update these terms at any time.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">2. License</h3>
              <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use our software for personal use</li>
                <li>Create system backups and restore points</li>
                <li>Access optimization features</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">3. Restrictions</h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modify or reverse engineer our software</li>
                <li>Use for commercial purposes without authorization</li>
                <li>Distribute or resell the software</li>
                <li>Remove any copyright notices</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">4. Disclaimer</h3>
              <p>While we strive for optimal performance, we cannot guarantee specific results. Use the software at your own risk.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">5. Updates</h3>
              <p>Software updates are provided to enhance functionality and security. Some updates may be mandatory for continued use.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">6. Termination</h3>
              <p>We reserve the right to suspend or terminate your access for violations of these terms or inappropriate use.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatedButton
              onClick={() => setShowTermsModal(false)}
              className="w-full"
            >
              I Accept
            </AnimatedButton>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Contact Modal */}
<AnimatePresence>
  {showContactModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowContactModal(false);
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1D1D1D] p-8 rounded-xl border border-[#007CEE]/20 max-w-md w-full mx-4 relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Discord-style background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-[#007CEE]/5 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-[#007CEE] bg-clip-text text-transparent">
              Contact Us
            </h2>
            <button onClick={() => setShowContactModal(false)}>
              <X className="text-gray-400 hover:text-[#007CEE] transition-colors" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Discord Server */}
            <div className="bg-[#1D1D1D]/50 p-6 rounded-lg border border-[#007CEE]/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="text-[#007CEE]" />
                Join Our Community
              </h3>
              <p className="text-gray-400 mb-4">
                Get help, share feedback, and connect with other users in our Discord server.
              </p>
              <AnimatedButton
                onClick={() => window.open('https://discord.gg/DMs5XYEHRp', '_blank')}
                className="w-full"
              >
                <span className="flex items-center justify-center gap-2">
                  Join Discord Server
                </span>
              </AnimatedButton>
            </div>

            {/* Direct Contact */}
            <div className="bg-[#1D1D1D]/50 p-6 rounded-lg border border-[#007CEE]/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User className="text-[#007CEE]" />
                Direct Contact
              </h3>
              <p className="text-gray-400 mb-4">
                Need to reach out directly? Contact the owner on Discord:
              </p>
              <div className="bg-[#1D1D1D] p-4 rounded-lg border border-[#007CEE]/20 flex items-center justify-between">
                <span className="text-white font-mono">kenyspc</span>
                <motion.button
                  onClick={() => {
                    navigator.clipboard.writeText('kenyspc');
                    // Add a toast notification here if desired
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#007CEE] hover:text-[#007CEE]/80 transition-colors"
                >
                  <Copy size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      {/* Main container */}
      <div ref={containerRef} className="bg-[#1D1D1D] text-white relative min-h-screen overflow-hidden ">
        {/* Grid Background */}
        <GridBackground />

{/* Hero Section */}
<section className="relative min-h-screen flex flex-col items-center justify-center px-4">
  {/* Animated logo */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative mb-12 z-10"
  >
    <div className="relative w-48 h-48"> {/* Increased size from w-32 h-32 */}
      {/* Dark circular background */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-[#1D1D1D] border border-[#007CEE]/20"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Main logo SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width="60%" 
          height="60%" 
          viewBox="0 0 232 303" 
          className="text-white drop-shadow-[0_0_10px_rgba(0,124,238,0.5)]"
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M131.291 0.744909C134.626 1.79368 137.539 3.87897 139.607 6.69751C141.675 9.51605 142.79 12.9209 142.79 16.4167L127.935 107.388L208.305 107.507C211.31 107.506 214.258 108.329 216.828 109.886C219.397 111.444 221.491 113.676 222.88 116.341C224.269 119.005 224.9 122 224.706 124.999C224.511 127.997 223.498 130.885 221.776 133.348L106.978 288.67C104.977 291.537 102.113 293.691 98.8026 294.818C95.4927 295.945 91.9094 295.987 88.5741 294.937C85.2389 293.887 82.3257 291.8 80.2584 288.98C78.1912 286.16 77.0776 282.753 77.0798 279.257L88.5741 179.628H16.4348C13.43 179.629 10.4822 178.806 7.91253 177.249C5.34282 175.691 3.24953 173.459 1.86049 170.794C0.471461 168.13 -0.160119 165.135 0.0344951 162.136C0.229109 159.138 1.24247 156.25 2.96427 153.787L112.892 7.00379C114.896 4.1419 117.761 1.9936 121.069 0.871009C124.378 -0.251587 127.959 -0.290004 131.291 0.761337"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Enhanced glow effects */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#007CEE]/20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-[#007CEE]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  </motion.div>

  {/* Hero Text */}
  <motion.div
    className="text-center relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    <motion.h1 
      className="text-6xl md:text-8xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <motion.span 
        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-[#007CEE]"
        animate={{
          backgroundPosition: ['0% center', '100% center', '0% center'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        LAG
      </motion.span>
      <motion.span 
        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#007CEE] to-white"
        animate={{
          backgroundPosition: ['0% center', '100% center', '0% center'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      >
        WIZ
      </motion.span>
    </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Experience gaming without limitations
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <AnimatedButton
                onClick={() => setShowDownloadModal(true)}
                className="min-w-[200px]"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Now
                </span>
              </AnimatedButton>

              <AnimatedButton
                variant="secondary"
                className="min-w-[200px]"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <ChevronDown size={20} />
                </span>
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <ChevronDown size={32} className="text-[#007CEE]" />
          </motion.div>
        </section>
        {/* Features Section */}
        <section className="relative min-h-screen py-32">
          {/* Enhanced grid effect for features section */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1D1D1D] via-transparent to-[#1D1D1D]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007CEE] to-white">
                  Advanced Gaming Optimization
                </span>
              </motion.h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Experience gaming like never before with our cutting-edge technology
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap size={32} />,
                  title: "Zero Input Lag",
                  description: "Advanced algorithms reduce input delay to give you the competitive edge",
                  stats: { value: "0.1ms", label: "Input Delay" }
                },
                {
                  icon: <Cpu size={32} />,
                  title: "Smart Optimization",
                  description: "AI-powered system optimization that adapts to your gaming needs",
                  stats: { value: "+40%", label: "Performance" }
                },
                {
                  icon: <Shield size={32} />,
                  title: "Safe & Secure",
                  description: "Automatic backup systems protect your settings and configurations",
                  stats: { value: "100%", label: "Safe" }
                },
                {
                  icon: <Timer size={32} />,
                  title: "Real-time Monitoring",
                  description: "Track system performance with detailed analytics and insights",
                  stats: { value: "60 FPS+", label: "Stable FPS" }
                },
                {
                  icon: <Command size={32} />,
                  title: "Game Profiles",
                  description: "Optimized settings for popular games with one-click application",
                  stats: { value: "200+", label: "Games" }
                },
                {
                  icon: <Settings size={32} />,
                  title: "Custom Tweaks",
                  description: "Fine-tune your system with advanced customization options",
                  stats: { value: "∞", label: "Options" }
                }
              ].map((feature, index) => (
                <Enhanced3DCard key={index} {...feature} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="relative min-h-screen py-32">
          {/* Enhanced grid effect for metrics section */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,124,238,0.03)_2px,transparent_2px)] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#1D1D1D]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#1D1D1D]/80 backdrop-blur-xl p-8 border border-[#007CEE]/20"
            >
              <h3 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#007CEE]">
                Real-Time Performance Impact
              </h3>

              {/* Performance Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <PerformanceCard
                  title="Input Latency"
                  before="24.5ms"
                  after="6.2ms"
                  improvement="-74.6%"
                  icon={<Timer size={24} />}
                />
                <PerformanceCard
                  title="FPS Stability"
                  before="75%"
                  after="99.9%"
                  improvement="+24.9%"
                  icon={<Gamepad size={24} />}
                />
                <PerformanceCard
                  title="CPU Usage"
                  before="78%"
                  after="12%"
                  improvement="-66.1%"
                  icon={<Cpu size={24} />}
                />
                <PerformanceCard
                  title="System Load"
                  before="Heavy"
                  after="Light"
                  improvement="Optimized"
                  icon={<Settings size={24} />}
                />
              </div>

              {/* Live Performance Graph */}
              <div className="relative h-64 bg-[#1D1D1D]/50 rounded-lg p-4 border border-[#007CEE]/10">
                <PerformanceGraph />
              </div>
            </motion.div>
          </div>
        </section>
        {/* Call-to-action Section */}
        <section className="relative min-h-screen py-32 overflow-hidden">
          {/* Enhanced grid effect specific to CTA */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#007CEE]/5 via-transparent to-transparent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Main CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-b from-[#1D1D1D] to-[#1D1D1D]/80 border border-[#007CEE]/20 p-12 relative overflow-hidden"
            >
              {/* Animated Lines Background */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007CEE]/20 to-transparent"
                    style={{ top: `${20 * i}%` }}
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                >
                  Ready to
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007CEE] to-white px-4">
                    Level Up
                  </span>
                  Your Game?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                  Join thousands of gamers who have already optimized their gaming experience
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                  <AnimatedButton
                    onClick={() => setShowDownloadModal(true)}
                    className="min-w-[200px]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Download size={20} />
                      Download Now
                    </span>
                  </AnimatedButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 overflow-hidden">
          {/* Footer Grid Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D] via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

             

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                <SocialLink href="https://x.com/ImRazshy" icon="twitter" />
                <SocialLink href="https://discord.gg/DMs5XYEHRp" icon="discord" />
                <SocialLink href="https://github.com/Razshy" icon="github" />
              </motion.div>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#007CEE]/10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © 2024 LagWiz. All rights reserved.
              </motion.p>

              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="flex gap-8 text-sm"
>
  <button 
    onClick={() => setShowPrivacyModal(true)} 
    className="text-gray-400 hover:text-[#007CEE] transition-colors"
  >
    Privacy Policy
  </button>
  <button 
    onClick={() => setShowTermsModal(true)} 
    className="text-gray-400 hover:text-[#007CEE] transition-colors"
  >
    Terms of Service
  </button>
  <button 
    onClick={() => setShowContactModal(true)} 
    className="text-gray-400 hover:text-[#007CEE] transition-colors"
  >
    Contact
  </button>
</motion.div>
            </div>
          </div>
        </footer>

{/* Enhanced Download/Coming Soon Modal */}
<AnimatePresence>
  {showDownloadModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowDownloadModal(false);
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#1D1D1D] p-8 rounded-xl border border-[#007CEE]/20 max-w-md w-full mx-4 relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,124,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,124,238,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-[#007CEE]/5 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#007CEE]/10 flex items-center justify-center relative"
          >
            {/* Animated rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-[#007CEE]/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
            <Download size={32} className="text-[#007CEE]" />
          </motion.div>

          {/* Content */}
          <div className="text-center space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              Coming Soon
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 space-y-4"
            >
              <p>
                LagWiz is currently in development. Join our waitlist to be notified when we launch!
              </p>

{/* Updated Pricing Notice Section */}
<div className="bg-[#1D1D1D]/50 p-4 rounded-lg border border-[#007CEE]/20">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center"
  >
    <h4 className="text-white font-semibold mb-2">Premium Software</h4>
    
    {/* Special Offer Banner */}
    <motion.div
      className="bg-[#007CEE]/10 text-[#007CEE] py-2 px-4 rounded-md mb-4 font-medium"
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
       40% OFF for Early Adopters! 
    </motion.div>
  </motion.div>
</div>

{/* Tiers Preview with Original and Discounted Prices */}
<div className="grid grid-cols-3 gap-2 text-sm pt-2">
  <motion.div 
    className="p-3 rounded bg-[#1D1D1D]/50 border border-[#007CEE]/10"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <div className="font-semibold">Basic</div>
    <div className="text-gray-400 line-through text-xs">$5.99/mo</div>
    <div className="text-[#007CEE] font-bold">$3.59/mo</div>
  </motion.div>
  
  <motion.div 
    className="p-3 rounded bg-[#1D1D1D]/50 border border-[#007CEE]/20 relative overflow-hidden"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    {/* Popular choice indicator */}

    <div className="font-semibold">Pro</div>
    <div className="text-gray-400 line-through text-xs">$11.99/mo</div>
    <div className="text-[#007CEE] font-bold">$7.19/mo</div>
  </motion.div>
  
  <motion.div 
    className="p-3 rounded bg-[#1D1D1D]/50 border border-[#007CEE]/10"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <div className="font-semibold">Ultimate</div>
    <div className="text-gray-400 line-through text-xs">$16.99/mo</div>
    <div className="text-[#007CEE] font-bold">$10.19/mo</div>
  </motion.div>
</div>

{/* Limited Time Notice */}
<div className="text-center mt-3 text-sm text-gray-400">
  <motion.div
    animate={{
      opacity: [0.5, 1, 0.5]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    Limited time offer • First 500 users only
  </motion.div>
</div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <AnimatedButton
                onClick={() => window.open('https://discord.gg/DMs5XYEHRp', '_blank')}
                className="w-full"
              >
                Join Discord for Updates
              </AnimatedButton>
              
              <button
                onClick={() => setShowDownloadModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </>
  );
}
