import { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post(
        "https://your-backend-api-url.com/api/contact", 
        formData
      );
      if (res.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Whether you have a question, want to collaborate, or just want to say hi — feel free to drop a message!
          </p>

          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p><strong>Email:</strong> rathorepiyush221@gmail.com</p>
            <p><strong>Phone:</strong> <a href="tel:+918210071294" className="hover:underline">+91 8210071294</a></p>
            <p><strong>Location:</strong> Muzaffarpur, Bihar, India</p>
          </div>

          <div className="flex space-x-6 text-2xl">
            <a href="https://github.com/PiyushRathore29" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-gray-700 dark:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/piyush-raj-577a36323/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-gray-700 dark:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="mailto:rathorepiyush221@gmail.com" className="hover:text-blue-600 text-gray-700 dark:text-gray-300">
              <FaEnvelope />
            </a>
            <a href="tel:+918210071294" className="hover:text-blue-600 text-gray-700 dark:text-gray-300">
              <FaPhone />
            </a>
          </div>

          <a
            href="/myresume.pdf" 
            download
            className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Send Message
          </button>

          {status && <p className="text-center text-indigo-600 font-medium">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
