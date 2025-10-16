"use client";

import React from "react";
import { motion } from "framer-motion";

type CardProps = {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
};

export default function Card({
    children,
    className = "",
    hoverEffect = true,
    onClick,
}: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -4, scale: 1.02 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={onClick}
            className={`relative bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl shadow-sm 
      ${hoverEffect ? "hover:shadow-lg cursor-pointer" : ""}
      ${className}`}
        >
            {/* Efek gradient lembut di hover */}
            {hoverEffect && (
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 rounded-2xl pointer-events-none" />
            )}

            {/* Konten */}
            <div className="relative z-10 p-6 md:p-8">{children}</div>
        </motion.div>
    );
}
