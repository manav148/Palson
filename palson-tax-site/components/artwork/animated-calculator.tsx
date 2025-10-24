"use client";

import { motion } from "framer-motion";

export function AnimatedCalculator() {
  return (
    <motion.svg
      width="200"
      height="280"
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Calculator body */}
      <motion.rect
        x="20"
        y="20"
        width="160"
        height="240"
        rx="12"
        fill="url(#calc-gradient)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Display */}
      <motion.rect
        x="35"
        y="35"
        width="130"
        height="50"
        rx="6"
        fill="#1F2937"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      
      {/* Display numbers */}
      <motion.text
        x="155"
        y="67"
        fill="#22C55E"
        fontSize="24"
        fontFamily="monospace"
        textAnchor="end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        $42,750
      </motion.text>
      
      {/* Calculator buttons */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const x = 35 + col * 32;
        const y = 100 + row * 32;
        
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.03 }}
          >
            <motion.rect
              x={x}
              y={y}
              width="28"
              height="28"
              rx="4"
              fill="#667eea"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <rect
              x={x + 2}
              y={y + 2}
              width="24"
              height="24"
              rx="3"
              fill="#6366F1"
              opacity="0.8"
            />
          </motion.g>
        );
      })}
      
      <defs>
        <linearGradient id="calc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
