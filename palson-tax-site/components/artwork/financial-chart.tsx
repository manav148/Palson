"use client";

import { motion } from "framer-motion";

export function FinancialChart() {
  const dataPoints = [40, 60, 45, 70, 55, 85, 75, 95];
  const maxHeight = 150;

  return (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background grid */}
      <g opacity="0.1">
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1="20"
            y1={30 + i * 35}
            x2="280"
            y2={30 + i * 35}
            stroke="#667eea"
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 35}
            y1="30"
            x2={40 + i * 35}
            y2="170"
            stroke="#667eea"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Chart bars */}
      {dataPoints.map((value, i) => {
        const height = (value / 100) * maxHeight;
        const x = 40 + i * 35;
        const y = 170 - height;

        return (
          <motion.g key={i}>
            <motion.rect
              x={x}
              y={y}
              width="25"
              height={height}
              rx="4"
              fill="url(#bar-gradient)"
              initial={{ height: 0, y: 170 }}
              animate={{ height, y }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            />
            <motion.circle
              cx={x + 12.5}
              cy={y}
              r="4"
              fill="#22C55E"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.6, type: "spring" }}
            />
          </motion.g>
        );
      })}

      {/* Animated line path */}
      <motion.path
        d={dataPoints.map((value, i) => {
          const x = 40 + i * 35 + 12.5;
          const y = 170 - (value / 100) * maxHeight;
          return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ')}
        stroke="#0EA5A6"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <defs>
        <linearGradient id="bar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#667eea" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
