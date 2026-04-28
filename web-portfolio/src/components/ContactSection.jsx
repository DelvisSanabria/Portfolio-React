import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4 md:px-10 lg:px-20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <h2 className="font-semibold text-4xl md:text-5xl text-[#101736] tracking-wider">
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-xl md:text-2xl text-[#101736] tracking-wider mb-4">
              Get In Touch
            </h3>
            <p className="text-[#101736] text-sm md:text-base tracking-wider mb-6 opacity-80">
              Feel free to reach out if you're looking for a developer, have a question,
              or just want to connect.
            </p>
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 text-[#101736]"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl">📧</span>
                <span className="tracking-wider">delvis.sanabria@example.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-[#101736]"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl">📱</span>
                <span className="tracking-wider">+1 (234) 567-890</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-[#101736]"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl">📍</span>
                <span className="tracking-wider">Remote / Worldwide</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#d2d3ce] rounded-2xl p-6 md:p-8"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-xl bg-[#f5f5f5] text-[#101736] placeholder-[#101736]/50 tracking-wider text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#b9b9b9]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-xl bg-[#f5f5f5] text-[#101736] placeholder-[#101736]/50 tracking-wider text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#b9b9b9]"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full p-3 rounded-xl bg-[#f5f5f5] text-[#101736] placeholder-[#101736]/50 tracking-wider text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#b9b9b9] resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full p-3 rounded-xl bg-[#101736] text-[#f5f5f5] font-semibold tracking-wider text-sm md:text-base"
              whileHover={{ scale: 1.02, backgroundColor: "#1a2347" }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
