"use client";

import { motion } from "framer-motion";

export function InvoiceIllustration() {
  return (
    <motion.svg
      width="200"
      height="240"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Document */}
      <motion.rect
        x="30"
        y="20"
        width="140"
        height="200"
        rx="8"
        fill="#FFFFFF"
        stroke="url(#invoice-gradient)"
        strokeWidth="2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Header lines */}
      <motion.rect
        x="45"
        y="35"
        width="110"
        height="8"
        rx="4"
        fill="#667eea"
        initial={{ width: 0 }}
        animate={{ width: 110 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
      <motion.rect
        x="45"
        y="50"
        width="80"
        height="6"
        rx="3"
        fill="#0EA5A6"
        opacity="0.5"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      />

      {/* Line items */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g key={i}>
          <motion.rect
            x="45"
            y={75 + i * 25}
            width="90"
            height="4"
            rx="2"
            fill="#1F2937"
            opacity="0.3"
            initial={{ width: 0 }}
            animate={{ width: 90 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
          />
          <motion.rect
            x="140"
            y={75 + i * 25}
            width="15"
            height="4"
            rx="2"
            fill="#22C55E"
            opacity="0.6"
            initial={{ width: 0 }}
            animate={{ width: 15 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
          />
        </motion.g>
      ))}

      {/* Total line */}
      <motion.line
        x1="45"
        y1="190"
        x2="155"
        y2="190"
        stroke="#667eea"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />

      {/* Total amount */}
      <motion.rect
        x="100"
        y="197"
        width="55"
        height="12"
        rx="6"
        fill="url(#total-gradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      />

      {/* Checkmark */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
      >
        <circle cx="180" cy="40" r="15" fill="#22C55E" />
        <path
          d="M 175 40 L 178 43 L 185 36"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      <defs>
        <linearGradient id="invoice-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#0EA5A6" />
        </linearGradient>
        <linearGradient id="total-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#0EA5A6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
