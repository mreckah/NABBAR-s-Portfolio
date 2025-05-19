import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "ES Atlas",
      period: "06/2024 - 07/2024",
      description: [
        "Developed and implemented an anomaly detection system using Isolation Forest and KMeans algorithms",
        "Collaborated with the data science team to improve model accuracy and performance",
        "Applied data preprocessing and feature selection to boost detection accuracy",
        "Analyzed traffic patterns to classify cyberattacks (DDoS, brute force, scan, etc.)",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                      <span>{experience.company}</span>
                      <span>•</span>
                      <span>{experience.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
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

export default Experience;
