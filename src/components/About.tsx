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

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a second-year engineering student at ENSET Mohammedia,
              specializing in Big Data and Cloud Computing. My passion lies in
              leveraging cutting-edge technologies to solve complex problems and
              create innovative solutions. With a strong foundation in both
              theoretical concepts and practical applications, I am constantly
              exploring new technologies and methodologies to enhance my skills
              in machine learning, data engineering, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {info.icon}
                <span className="text-gray-700 dark:text-gray-300">
                  {info.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
