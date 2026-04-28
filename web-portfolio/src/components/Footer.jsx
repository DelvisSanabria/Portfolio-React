import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-[#101736] dark:bg-[#0a0f1e] text-[#f5f5f5] py-8 px-4 md:px-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="font-semibold text-lg tracking-wider mb-2">Delvis Sanabria</h3>
          <p className="text-sm tracking-wider opacity-80">Web Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:opacity-70 transition-opacity"
            aria-label="GitHub"
          >
            💻
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            🔗
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:opacity-70 transition-opacity"
            aria-label="Twitter"
          >
            🐦
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm tracking-wider opacity-60 text-center md:text-right"
        >
          © {new Date().getFullYear()} Delvis Sanabria. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
