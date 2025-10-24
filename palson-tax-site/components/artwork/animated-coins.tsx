"use client";

import { motion } from "framer-motion";

export function AnimatedCoins() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Coin 1 */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <motion.circle
          cx="80"
          cy="70"
          r="35"
          fill="url(#coin-gradient-1)"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <text x="80" y="77" fill="#FFF" fontSize="24" fontWeight="bold" textAnchor="middle">$</text>
      </motion.g>

      {/* Coin 2 */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
      >
        <motion.circle
          cx="120"
          cy="110"
          r="30"
          fill="url(#coin-gradient-2)"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "linear" }}
        />
        <text x="120" y="116" fill="#FFF" fontSize="20" fontWeight="bold" textAnchor="middle">$</text>
      </motion.g>

      {/* Coin 3 */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
      >
        <motion.circle
          cx="90"
          cy="140"
          r="25"
          fill="url(#coin-gradient-3)"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "linear" }}
        />
        <text x="90" y="145" fill="#FFF" fontSize="18" fontWeight="bold" textAnchor="middle">$</text>
      </motion.g>

      {/* Sparkles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          cx={70 + Math.random() * 80}
          cy={60 + Math.random() * 100}
          r="2"
          fill="#FFD700"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}

      <defs>
        <linearGradient id="coin-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="coin-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFC700" />
          <stop offset="100%" stopColor="#FF9500" />
        </linearGradient>
        <linearGradient id="coin-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB700" />
          <stop offset="100%" stopColor="#FF8500" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
