import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Anomaly Detection System",
      description:
        "Developed an advanced anomaly detection system using Isolation Forest and KMeans algorithms during my internship at ES Atlas.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/mreckah/anomaly-detection",
      demo: null,
    },
    {
      title: "MentorAI",
      description:
        "A hackathon project that uses AI to match mentors with mentees based on skills and learning goals.",
      tech: ["React", "FastAPI", "Python", "PostgreSQL"],
      github: "https://github.com/mreckah/mentor-ai",
    },
    {
      title: "Water Potability Prediction",
      description:
        "Machine learning model to predict water potability based on various chemical properties.",
      tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
      github: "https://github.com/mreckah/water-potability",
    },
    {
      title: "Jumia Price Scraper & Chatbot",
      description:
        "Web scraper for Jumia products with an integrated chatbot for price queries.",
      tech: ["Python", "BeautifulSoup", "Flask", "NLTK"],
      github: "https://github.com/mreckah/jumia-scraper",
      demo: null,
    },
    {
      title: "Space Game",
      description:
        "A 2D space shooter game built with Java and FXGL game engine.",
      tech: ["Java", "FXGL", "JavaFX"],
      github: "https://github.com/mreckah/space-game",
      demo: null,
    },
    {
      title: "Message Automation",
      description:
        "Bash scripting project for automating message sending and processing.",
      tech: ["Bash", "Shell Scripting", "Linux"],
      github: "https://github.com/mreckah/message-automation",
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
