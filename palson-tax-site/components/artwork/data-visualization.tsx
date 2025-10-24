"use client";

import { motion } from "framer-motion";

export function DataVisualization() {
  return (
    <motion.svg
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Center circle */}
      <motion.circle
        cx="125"
        cy="125"
        r="50"
        fill="url(#center-gradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      />

      {/* Orbiting data points */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const radius = 85;
        const x = 125 + radius * Math.cos(angle);
        const y = 125 + radius * Math.sin(angle);

        return (
          <motion.g key={i}>
            {/* Connection line */}
            <motion.line
              x1="125"
              y1="125"
              x2={x}
              y2={y}
              stroke="url(#line-gradient)"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            />

            {/* Data point */}
            <motion.circle
              cx={x}
              cy={y}
              r="12"
              fill="url(#point-gradient)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
            />

            {/* Pulse effect */}
            <motion.circle
              cx={x}
              cy={y}
              r="12"
              stroke="#667eea"
              strokeWidth="2"
              fill="none"
              animate={{
                r: [12, 20, 12],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                delay: i * 0.3,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        );
      })}

      {/* Center icon - dollar sign */}
      <motion.text
        x="125"
        y="135"
        fill="#FFFFFF"
        fontSize="32"
        fontWeight="bold"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        $
      </motion.text>

      {/* Rotating ring */}
      <motion.circle
        cx="125"
        cy="125"
        r="110"
        stroke="url(#ring-gradient)"
        strokeWidth="3"
        strokeDasharray="10 5"
        fill="none"
        opacity="0.4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      />

      <defs>
        <linearGradient id="center-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="point-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5A6" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#0EA5A6" />
        </linearGradient>
        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#0EA5A6" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
