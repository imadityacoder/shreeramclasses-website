"use client";

import Image from "next/image";
import { Star, Phone, CheckCircle, Video, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-primary via-secondary to-primary-hover min-h-[75vh] md:min-h-screen pt-20 pb-8 md:pt-28 md:pb-16 flex items-center overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Accent Topper */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 text-accent px-3 py-1 rounded-full w-fit mb-4 md:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-inter font-bold text-xxs uppercase tracking-wider">Admissions Open 2026-27</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-montserrat font-black text-2xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-4 md:mb-6"
            >
              Patna&apos;s Leader in <span className="text-accent underline decoration-accent/30 underline-offset-4 sm:underline-offset-8">Arts Education</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="font-inter font-medium text-xs sm:text-lg text-gray-200 leading-relaxed mb-6 md:mb-8 max-w-xl"
            >
              Join hundreds of board aspirants learning directly from Alok Sir through structured notes, digital classrooms, and result-oriented coaching in Patna.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-row items-center gap-3 mb-6 md:mb-10 w-full"
            >
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 h-12 rounded-xl bg-accent hover:bg-accent/90 text-primary font-inter font-extrabold text-xs sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Book Free Demo
              </a>
              <a
                href="tel:+917779977725"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 sm:px-8 h-12 rounded-xl bg-white/10 hover:bg-white/15 text-white font-inter font-bold text-xs sm:text-base border border-white/20 hover:border-white/40 transition-all duration-200 text-center"
              >
                <Phone className="h-4 w-4 mr-1 text-accent flex-shrink-0" />
                Call Helpline
              </a>
            </motion.div>

            {/* Trust Badges grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 md:gap-4 border-t border-white/10 pt-4 md:pt-8 max-w-xl"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-accent/10 p-1.5 rounded-lg flex-shrink-0">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                </div>
                <div>
                  <span className="block font-montserrat font-bold text-xxs sm:text-base text-white">5.0 Star Rating</span>
                  <span className="block font-inter text-xxs text-gray-400">590+ Google Reviews</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-accent/10 p-1.5 rounded-lg flex-shrink-0">
                  <Users className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="block font-montserrat font-bold text-xxs sm:text-base text-white">Thousands Guided</span>
                  <span className="block font-inter text-xxs text-gray-400">Patna&apos;s trusted mentor</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column - Hidden on mobile, visible on tablet/desktop */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 hidden md:flex justify-center relative"
          >
            {/* Background glow circle */}
            <div className="absolute inset-0 bg-accent/25 rounded-2xl blur-2xl transform rotate-3 scale-95 z-0" />
            
            <div className="relative w-full max-w-[450px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 z-10 bg-primary/40 flex items-center justify-center">
              <Image
                src="/class.jpg"
                alt="Alok Sir teaching Arts class at Shree Ram Classes Patna"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
                unoptimized
              />
              {/* Overlay with subtle visual glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlapping interactive badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center space-x-3 shadow-lg"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping absolute top-2 right-2" />
                <div className="bg-accent text-primary font-black rounded-lg text-xs px-2.5 py-1.5 uppercase font-montserrat tracking-wider">
                  Live
                </div>
                <div className="text-left">
                  <span className="font-montserrat font-bold text-white text-sm block">Interactive smartboard setup</span>
                  <span className="font-inter text-xs text-gray-300">Modern visual education in action</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
