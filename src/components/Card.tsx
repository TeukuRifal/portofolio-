// components/Card.tsx
import React from "react";
import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0px 8px 30px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 150 }}
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
