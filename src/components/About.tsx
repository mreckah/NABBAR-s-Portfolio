import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const About = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      text: "m.reckahwalt@gmail.com",
      link: "mailto:m.reckahwalt@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      text: "github.com/mreckah",
      link: "https://github.com/mreckah",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      text: "linkedin.com/in/nabbar-oussama",
      link: "https://linkedin.com/in/nabbar-oussama",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="prose dark:prose-invert max-w-none mb-12 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a second-year engineering student at ENSET Mohammedia,
              specializing in Big Data and Cloud Computing. My passion lies in
              leveraging cutting-edge technologies to solve complex problems and
              create innovative solutions. With a strong foundation in both
              theoretical concepts and practical applications, I am constantly
              exploring new technologies and methodologies to enhance my skills
              in machine learning, data engineering, and software development.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  {info.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {info.text}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
