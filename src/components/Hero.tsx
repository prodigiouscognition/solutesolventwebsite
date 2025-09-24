// src/components/Hero.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const messages = [
    { headline: "We Build", highlight: "Intelligence", sub: "AI-driven solutions for smarter businesses." },
    { headline: "Innovate with", highlight: "Precision", sub: "Custom ML and data solutions that make an impact." },
    { headline: "Transform", highlight: "Data", sub: "Turn raw data into actionable insights effortlessly." },
    { headline: "Strategize", highlight: "AI", sub: "Guiding you to implement AI effectively and ethically." },
  ];

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col">

      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex justify-between items-center z-20 relative">
        <div className="flex items-center space-x-2">
          <img src="/logo_1.png" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-teal-700">Solute Solvent</span>
        </div>
        <div className="space-x-6">
          <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-700 hover:text-teal-600 transition">Services</button>
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-700 hover:text-teal-600 transition">About</button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-700 hover:text-teal-600 transition">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="flex flex-col items-center justify-center flex-grow relative z-10 text-center px-6">

        {/* Watermark Background */}
        <img src="/logo_1.png" alt="Logo Watermark" className="absolute opacity-10 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] -z-10" />

        {/* Animated Particles */}
        <div className="absolute inset-0 -z-10">
          {[...Array(25)].map((_, i) => {
            const width = heroRef.current?.clientWidth || window.innerWidth;
            const height = heroRef.current?.clientHeight || window.innerHeight;
            return (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-br from-teal-400 to-yellow-300 opacity-70"
                initial={{ x: Math.random() * width, y: Math.random() * height }}
                animate={{ x: Math.random() * width, y: Math.random() * height, scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 6 + Math.random() * 4, ease: "easeInOut" }}
              />
            );
          })}
        </div>

        {/* Animated Headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: hover ? 1.05 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.5, ease: "easeInOut" } }}
            onMouseEnter={() => setHover(true) || setPaused(true)}
            onMouseLeave={() => setHover(false) || setPaused(false)}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-teal-800 leading-tight">
              {messages[index].headline} <span className="text-yellow-500">{messages[index].highlight}</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">{messages[index].sub}</p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="relative px-8 py-3 text-lg rounded-xl font-semibold bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.5)] hover:scale-[1.02] active:scale-[0.98]">
            Explore Solutions
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="relative px-8 py-3 text-lg rounded-xl font-semibold border-2 border-gray-300 bg-white/80 text-gray-800 backdrop-blur transition-all duration-300 hover:border-yellow-400 hover:text-yellow-500 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:scale-[1.02] active:scale-[0.98]">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
