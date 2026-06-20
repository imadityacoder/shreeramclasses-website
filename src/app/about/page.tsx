import Navbar from "@/components/Navbar";
import About from "@/components/About";
import LearningSystem from "@/components/LearningSystem";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us | Shree Ram Classes Patna",
  description: "Learn about the history, vision, and teaching approach of Shree Ram Classes Patna. Under Alok Kumar Singh's leadership, we guarantee 1st division results.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-bg-brand text-brand-text flex flex-col justify-between pt-16">
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner Header */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-10 md:py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center space-x-1.5 bg-accent/15 border border-accent/30 text-accent px-3 py-1 rounded-full w-fit mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-inter font-bold text-[9px] uppercase tracking-wider">Success Is Our Tradition</span>
            </div>
            <h1 className="font-montserrat font-black text-2xl sm:text-4xl text-white">About Our Institute</h1>
            <p className="font-inter font-medium text-xs sm:text-sm text-gray-200 mt-2 max-w-lg mx-auto">
              Empowering Arts &amp; Humanities students in Patna under the guidance of Alok Kumar Singh since 2021.
            </p>
          </div>
        </section>

        {/* Core sections */}
        <About />
        <LearningSystem />
        <WhyChooseUs />
        <FAQ />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
