"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Image as ImageIcon, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function PageOverviews() {
  const overviews = [
    {
      title: "About Our Institute",
      icon: BookOpen,
      description: "Discover our mission, 6-year history, and the 6-step Shree Ram Learning System directed by Alok Kumar Singh.",
      href: "/about",
      linkText: "Read About Us",
    },

    {
      title: "Contact & Location",
      icon: MapPin,
      description: "Get phone helpline, email support, office working hours, Google maps embed, and submit custom queries.",
      href: "/contact",
      linkText: "Get in Touch",
    }
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {overviews.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all duration-150 text-left"
              >
                <div>
                  <div className="bg-primary/5 p-2 rounded-lg text-primary w-fit mb-3 border border-primary/10">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-montserrat font-black text-xs sm:text-sm text-primary mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-inter font-medium text-xs text-gray-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-xs font-montserrat font-bold text-secondary hover:text-accent group transition-colors w-fit"
                >
                  {item.linkText}
                  <ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
