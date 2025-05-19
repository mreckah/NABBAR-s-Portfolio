import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Engineering in Big Data & Cloud Computing",
      school: "ENSET Mohammedia",
      period: "2022 - Present",
      description:
        "Second-year engineering student specializing in Big Data and Cloud Computing technologies.",
    },
    {
      degree: "Preparatory Classes (CPGE)",
      school: "CPGE",
      period: "2020 - 2022",
      description:
        "Intensive two-year program preparing for engineering schools entrance exams.",
    },
    {
      degree: "High School Diploma",
      school: "Elkhawarizmy High School",
      period: "2019 - 2020",
      description: "Graduated with honors in Mathematics and Physics.",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                      <span>{edu.school}</span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
