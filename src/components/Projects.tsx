import React from "react";
import bgImage from "./bg.png"; // Make sure to replace this with the actual path to your image

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Hotel Reservation Chatbot",
      description:
        "Built an AI-powered Hotel Reservation Chatbot using Amazon Lex, AWS Lambda, and Twilio for WhatsApp integration with real-time booking and input validation.",
      technologies: ["Amazon Lex", "AWS Lambda", "Twilio"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9CFRPW_EgXrUshlGlR8P1y6wimXJmIEbew&s", // Replace with actual image URL
      duration: "June 2024 - July 2024",
      details:
        "This chatbot helps users make hotel reservations by interacting through WhatsApp. The AI-driven bot understands natural language inputs, validates user information, and processes booking requests in real-time, ensuring a seamless and efficient reservation experience.",
    },
    {
      title: "Student Course Registration System",
      description:
        "A robust system built with Spring Boot for managing course enrollments. It facilitates seamless registration, providing students with easy access to available courses and enabling efficient management of course offerings.",
      technologies: ["Spring Boot", "MySQL", "Thymeleaf"],
      image:
        "https://studentlife.dal.ca/article/2024/06/things-to-keep-in-mind-for-course-registration/_jcr_content/_cq_featuredimage.coreimg.jpeg/1717517860409/registration.jpeg", // Replace with actual image URL
      duration: "August 2023 - October 2023",
      details:
        "This system streamlines the course registration process for students and administrators. It allows students to view and register for available courses, and administrators to manage course offerings and enrollment records, improving overall efficiency and user experience.",
    },
    {
      title: "Regression Testing Using Cucumber",
      description:
        "Utilized Cucumber and Selenium for regression testing, ensuring recent changes uphold existing functionality and stability. Supported agile development and CI/CD with automated tests.",
      technologies: ["Cucumber", "Selenium", "JUnit"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJL6zPPdqj7wUs-onaDlBOnVYY_XaU511ArA&s", // Replace with actual image URL
      duration: "February 2024 - March 2024",
      details:
        "Implemented automated regression testing to maintain software quality and reliability. The tests check that new updates do not disrupt existing features, supporting continuous integration and delivery pipelines in an agile development environment.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-1 italic">{project.duration}</p>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <p className="text-gray-700 mb-2">{project.details}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const styles = `
.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 4px solid rgb(39, 67, 101); /* Bluish border color */
}

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

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition-all {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

.transform {
  transform: scale(1);
}

.hover\\:scale-105:hover {
  transform: scale(1.05);
}

.p-4 {
  padding: 1rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.text-gray-900 {
  color: #1a202c;
}

.text-gray-700 {
  color: #4a5568;
}

.italic {
  font-style: italic;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-1 {
  gap: 0.25rem;
}

.bg-indigo-100 {
  background-color: #c3dafe;
}

.text-indigo-600 {
  color: #4c51bf;
}

.rounded-full {
  border-radius: 9999px;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
