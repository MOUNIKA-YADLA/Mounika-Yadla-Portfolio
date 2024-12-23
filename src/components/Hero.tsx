import React from "react";
import myImage from "./portfolio.png"; // Make sure to replace this with the actual path to your image

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center pt-16"
      style={{ backgroundImage: `url(${myImage})` }}
    >
      <div className="flex justify-end gap-6 mt-32">
        <a
          href="#contact"
          className="px-10 py-4 bg-gradient-to-r from-brown-500 to-brown-500 text-white text-lg font-semibold rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        ></a>
        <a
          href="#projects"
          className="px-10 py-4 border-2 border-pink-500 text-pink-500 text-lg font-semibold rounded-full shadow-lg hover:bg-pink-500 hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

const styles = `
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.text-white {
  color: #ffffff;
}

.text-gray-200 {
  color: #e2e8f0;
}

.bg-yellow-500 {
  background-color: #f59e0b;
}



.hover\\:bg-yellow-600:hover {
  background-color: #d97706;
}

.border-yellow-500 {
  border-color: #f59e0b;
}

.hover\\:bg-yellow-500:hover {
  background-color: #f59e0b;
}



.transition-colors {
  transition: background-color 0.3s, color 0.3s;
}

.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}

.bg-opacity-50 {
  background-opacity: 0.5;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-8 {
  margin-top: 2rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
