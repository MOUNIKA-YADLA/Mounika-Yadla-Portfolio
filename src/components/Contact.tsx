import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import bgImage from "./bg.png"; // Replace this with the actual path to your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission (replace this with actual logic)
    setTimeout(() => {
      console.log(formData);
      setIsSubmitted(true);

      // Reset the form fields after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-16">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {/* Phone */}

              {/* Email */}
              <a
                href="mailto:mounikayadla28@gmail.com"
                className="flex items-center gap-3 p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:shadow-2xl transition-shadow duration-300"
              >
                <Mail className="w-6 h-6" />
                <span>mounikayadla28@gmail.com</span>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/MOUNIKA-YADLA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white hover:shadow-2xl transition-shadow duration-300"
              >
                <Github className="w-6 h-6" />
                <span>GitHub Profile</span>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mounikayadla/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white hover:shadow-2xl transition-shadow duration-300"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 bg-white rounded-lg shadow-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-semibold text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-semibold text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-semibold text-lg"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Send Message
            </button>
            {/* Success Message */}
            {isSubmitted && (
              <p className="text-green-600 font-semibold mt-4">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
