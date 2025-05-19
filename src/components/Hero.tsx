import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Full-stack Web Development",
    "Machine Learning",
    "Data Engineering",
    "Software Engineering",
    "AI",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(
      () => {
        if (!isDeleting && charIndex < phrases[phraseIndex].length) {
          setText(phrases[phraseIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setText(phrases[phraseIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 mb-8 overflow-hidden">
            <img
              src="/images/profile.png"
              alt="Oussama NABBAR"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Oussama NABBAR
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Computer Engineering Student — Big Data & Cloud Computing
          </h2>
          <div className="h-12 text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-8">
            {text}
            <span className="animate-blink">|</span>
          </div>
          <motion.a
            href="/CV.pdf"
            download
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
