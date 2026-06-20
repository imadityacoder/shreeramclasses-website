"use client";

import { MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col space-y-2 md:space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/917779977725?text=Hello%20Alok%20Sir%2C%20I%20am%20interested%20in%20joining%20Shree%20Ram%20Classes.%20Please%20provide%20admission%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 w-11 md:h-13 md:w-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-white/10 group relative"
        aria-label="WhatsApp Admission Inquiry"
      >
        <MessageSquare className="h-5 w-5 md:h-5.5 md:w-5.5 fill-white text-[#25D366]" />
        <span className="absolute right-13 md:right-15 top-1/2 -translate-y-1/2 bg-primary/95 text-white font-inter font-bold text-[10px] md:text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          WhatsApp Admissions
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+917779977725"
        className="h-11 w-11 md:h-13 md:w-13 rounded-full bg-accent text-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow border border-white/10 group relative"
        aria-label="Call Admissions Helpline"
      >
        <Phone className="h-5 w-5 md:h-5.5 md:w-5.5" />
        <span className="absolute right-13 md:right-15 top-1/2 -translate-y-1/2 bg-primary/95 text-white font-inter font-bold text-[10px] md:text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call Admissions
        </span>
      </motion.a>
    </div>
  );
}
