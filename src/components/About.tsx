import React from "react";
import bgImage from "./bg.png"; // Make sure to replace this with the actual path to your image

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      year: "2020 - 2024",
      description:
        "Focused on core computer science concepts, software development, and problem-solving.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <h4 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h4>
                <p className="text-indigo-100 mt-2">{edu.institution}</p>
                <p className="text-indigo-200 mt-1">{edu.year}</p>
                <p className="text-indigo-50 mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black">
              Professional Summary
            </h3>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
              <p className="text-white leading-relaxed">
                As a Computer Science Engineering student, I am passionate about
                leveraging technology to solve real-world problems. My academic
                journey has equipped me with strong foundations in programming,
                algorithms, and software development.
              </p>
              <p className="text-indigo-100 leading-relaxed mt-4">
                I have actively participated in coding competitions, hackathons,
                and have undertaken various projects that demonstrate my
                technical abilities and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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

.bg-white {
  background-color: #ffffff;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #667eea, #764ba2);
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

.transition-transform {
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

.overflow-hidden {
  overflow: hidden;
}

.group:hover .group-hover\\:opacity-0 {
  opacity: 0;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.opacity-10 {
  opacity: 0.1;
}

.text-white {
  color: #ffffff;
}

.text-indigo-100 {
  color: #c3dafe;
}

.text-indigo-200 {
  color: #a3bffa;
}

.text-indigo-50 {
  color: #ebf4ff;
}

.leading-relaxed {
  line-height: 1.625;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
