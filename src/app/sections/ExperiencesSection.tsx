"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import { EXPERIENCES } from "../utils/constants";

export default function ExperiencesSection() {
  return (
    <section id="experiences" className=" bg-transparent ">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Judul Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experiences
        </motion.h2>

        {/* Daftar Pengalaman */}
        <div className="space-y-5">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 bg-white rounded-2xl border border-gray-200">
                <CardContent>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Gambar */}
                    <motion.div
                      className={`relative w-full h-64 md:h-80 rounded-2xl overflow-hidden ${
                        index % 2 === 1 ? "md:order-2" : "md:order-1"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </motion.div>

                    {/* Deskripsi */}
                    <div
                      className={`space-y-5 ${
                        index % 2 === 1 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-md hover:bg-blue-700 transition-colors"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
