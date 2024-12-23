import React from "react";
import bgImage from "./bg.png"; // Make sure to replace this with the actual path to your image

const Skills = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++"],
    "Web Technologies": ["React", "Node.js", "HTML5", "CSS3"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "Linux"],
  };

  // Colors for each skill category
  const categoryColors = {
    "Programming Languages": "bg-gradient-to-r from-green-400 to-blue-500",
    "Web Technologies": "bg-gradient-to-r from-indigo-400 to-purple-500",
    Databases: "bg-gradient-to-r from-yellow-400 to-red-500",
    "Tools & Platforms": "bg-gradient-to-r from-teal-400 to-green-500",
  };

  return (
    <section
      id="skills"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`rounded-lg p-6 ${categoryColors[category]} shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const styles = `
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.font-bold {
  font-weight: 700;
}

.text-center {
  text-align: center;
}

.mb-16 {
  margin-bottom: 4rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.md\\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.lg\\:grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.bg-white {
  background-color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -10px rgba(0, 0, 0, 0.12);
}

.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

.p-6 {
  padding: 1.5rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-white {
  color: #ffffff;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-3 {
  gap: 0.75rem;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #2563EB, #1E40AF, #1E3A8A); /* Darker bluish gradient background */
}

.bg-white {
  background-color: #ffffff;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\\:shadow-xl:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transform {
  transform: scale(1);
}

.hover\\:scale-105:hover {
  transform: scale(1.05);
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
