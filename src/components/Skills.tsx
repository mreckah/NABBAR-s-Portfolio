import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Brain,
  Wrench,
  Monitor,
  Database,
  Boxes,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        "React",
        "Angular",
        "HTML/CSS",
        "TailwindCSS",
        "Bootstrap",
      ],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "Docker", "Postman", "Jira"],
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Windows","Linux"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "H2", "Elasticsearch"],
    },
    {
      title: "Modeling",
      icon: <Boxes className="w-6 h-6" />,
      skills: ["UML", "Merise"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
