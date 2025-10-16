'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { Skill } from '../types/types';

interface SkillCardProps extends Skill {
    className?: string;
    delay?: number;
}

export default function SkillCard({
    name,
    icon,
    level,
    description,
    className = "",
    delay = 0
}: SkillCardProps) {
    // Color variants based on skill level
    const getLevelStyles = (level: string) => {
        switch (level.toLowerCase()) {
            case 'advanced':
                return {
                    bg: 'bg-green-50',
                    text: 'text-green-800',
                    border: 'border-green-200',
                    glow: 'from-green-100 to-emerald-100'
                };
            case 'intermediate':
                return {
                    bg: 'bg-blue-50',
                    text: 'text-blue-800',
                    border: 'border-blue-200',
                    glow: 'from-blue-100 to-cyan-100'
                };
            case 'beginner':
                return {
                    bg: 'bg-purple-50',
                    text: 'text-purple-800',
                    border: 'border-purple-200',
                    glow: 'from-purple-100 to-violet-100'
                };
            default:
                return {
                    bg: 'bg-gray-50',
                    text: 'text-gray-800',
                    border: 'border-gray-200',
                    glow: 'from-gray-100 to-slate-100'
                };
        }
    };

    const levelStyles = getLevelStyles(level);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: delay
            }}
            className={`group cursor-pointer ${className}`}
        >
            <Card
                className={`
          relative overflow-hidden border-2 transition-all duration-300
          hover:shadow-xl hover:border-opacity-50
          ${levelStyles.border} group-hover:shadow-lg
          h-full bg-white/80 backdrop-blur-sm
        `}
            >
                {/* Animated Background Gradient on Hover */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${levelStyles.glow} opacity-0 group-hover:opacity-100 -z-10`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden -z-10">
                    {[1, 2, 3].map((particle) => (
                        <motion.div
                            key={particle}
                            className={`absolute ${levelStyles.bg.replace('50', '100')} rounded-full`}
                            style={{
                                width: Math.random() * 20 + 5,
                                height: Math.random() * 20 + 5,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0, 0.3, 0],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="text-center relative z-10">
                    {/* Skill Icon with Animation */}
                    <motion.div
                        className="flex justify-center mb-4"
                        whileHover={{
                            scale: 1.2,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="relative">
                            <div className="text-4xl md:text-5xl">
                                {icon}
                            </div>

                            {/* Icon Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 ${levelStyles.bg.replace('50', '200')} rounded-full blur-md -z-10`}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Skill Name */}
                    <motion.h3
                        className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {name}
                    </motion.h3>

                    {/* Skill Level Badge */}
                    <motion.span
                        className={`
              inline-block px-4 py-2 text-sm font-semibold rounded-full 
              border transition-all duration-300 group-hover:scale-105
              ${levelStyles.bg} ${levelStyles.text} ${levelStyles.border}
              shadow-sm group-hover:shadow-md
            `}
                        whileHover={{
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                    >
                        {level}
                    </motion.span>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {description}
                    </motion.p>

                    {/* Progress Bar for Skill Level */}
                    <motion.div
                        className="mt-4 bg-gray-200 rounded-full h-2 overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: delay + 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className={`h-full rounded-full ${levelStyles.bg.replace('50', '500')}`}
                            initial={{ width: 0 }}
                            whileInView={{
                                width: level === 'Advanced' ? '90%' :
                                    level === 'Intermediate' ? '70%' : '50%'
                            }}
                            transition={{
                                duration: 1,
                                delay: delay + 0.5,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                        />
                    </motion.div>

                    {/* Hover Indicator */}
                    <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-500 rounded-full"
                        whileHover={{ width: '50%' }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </Card>
        </motion.div>
    );
};