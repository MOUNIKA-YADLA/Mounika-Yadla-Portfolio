import React from "react";
import { Trophy } from "lucide-react";
import bgImage from "./bg.png"; // Make sure to replace this with the actual path to your image

const Achievements = () => {
  const achievements = [
    {
      platform: "HackerRank",
      achievements: [
        "Resolved complex Java programming challenges on HackerRank.",

        // Add more achievements
      ],
      link: "https://www.hackerrank.com/profile/klu_2100031047",
    },
    {
      platform: "CodeChef",
      achievements: [
        "Achieved the highest rating of 2 stars (1500) on CodeChef",

        // Add more achievements
      ],
      link: "https://www.codechef.com/users/klu_2100031047",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-indigo-600">
                  {platform.platform}
                </h3>
              </div>
              <ul className="space-y-3">
                {platform.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
              <a
                href={platform.link}
                className="text-indigo-600 hover:underline mt-4 block"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

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
  gap: 2rem;
}

.md\\:grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.bg-white {
  background-color: #ffffff;
}

.p-6 {
  padding: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-3 {
  gap: 0.75rem;
}

.text-gray-700 {
  color: #4a5568;
}

.hover\\:text-gray-900:hover {
  color: #1a202c;
}

.transition-colors {
  transition-property: color;
  transition-duration: 300ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.space-y-3 {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}

.text-indigo-600 {
  color: #4c51bf;
}

.hover\\:underline:hover {
  text-decoration: underline;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
