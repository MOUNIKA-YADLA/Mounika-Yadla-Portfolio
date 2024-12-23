import React from "react";
import { Award } from "lucide-react";
import bgImage from "./bg.png"; // Make sure to replace this with the actual path to your image

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      date: "June 26, 2023",
      description: "AWS Cloud Practitioner Certification",
      link: "https://www.credly.com/badges/74156906-4bf9-4a7a-8ba6-b99040c80113/public_url",
      image:
        "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    },
    {
      title: "AWS Solution Architect",
      issuer: "AWS",
      date: "March 27, 2024",
      description: "AWS Solution Architect Certification",
      link: "https://www.credly.com/badges/8abcce86-f520-415c-861d-9b01afc2cee6/public_url",
      image:
        "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "July 15, 2023",
      description: "Microsoft Certified: Azure Fundamentals Certification",
      link: "https://www.credly.com/badges/aa28cd01-2a40-445a-9922-6907d48839d3/public_url",
      image:
        "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "September 10, 2023",
      description: "Microsoft Certified: Azure AI Fundamentals Certification",
      link: "https://www.credly.com/badges/2ac577e7-e4c7-4acf-bbc2-470bb0741415/public_url",
      image:
        "https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      date: "August 08, 2023",
      description:
        "Red Hat Certified Enterprise Application Developer Certification",
      link: "https://www.credly.com/badges/3e886b9c-4a76-4895-b927-94ac15eba43a/public_url",
      image:
        "https://images.credly.com/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png",
    },
    {
      title: "RPA Professional",
      issuer: "RPA Organization",
      date: "April 24, 2024",
      description: "RPA Professional Certification",
      link: "https://certificates.automationanywhere.com/5108cb09-4951-4812-a270-61198b33c86d#gs.9ubyj5",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQE6V-sLYJMKtg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685169303217?e=2147483647&v=beta&t=4vjORvVuHXyT8f1BgSHUAiMHc-tOnvjVhTyeI-NnP9E",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-black">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <Award className="icon" />
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              <p className="cert-description">{cert.description}</p>
              <a href={cert.link} className="cert-link">
                View Certification
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

const styles = `
.certifications-section {
  padding: 5rem 0;
  background-size: cover; /* Ensures the background image covers the section */
  background-position: center; /* Centers the background image */
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Decreased min width to make cards smaller */
  gap: 1.5rem; /* Reduced gap between cards */
}

.certification-card {
  background: #fff;
  padding: 1rem; /* Reduced padding to make cards smaller */
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border-top: 4px solid #4c51bf;
}

.certification-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.cert-image {
  width: 70%; /* Decreased width to make image smaller */
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.icon {
  width: 2.5rem; /* Decreased icon size */
  height: 2.5rem;
  color: #4c51bf;
  margin-bottom: 1rem;
}

.cert-title {
  font-size: 1.125rem; /* Decreased font size */
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.cert-issuer {
  color: #718096;
  margin-bottom: 0.25rem;
}

.cert-date {
  color: #a0aec0;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.cert-description {
  color: #4a5568;
}

.cert-link {
  color: #4c51bf;
  transition: color 0.3s;
}

.cert-link:hover {
  color: #2c5282;
  text-decoration: underline;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
