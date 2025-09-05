import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-primary text-white pt-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/elizabeth.jpg"
            alt="Elizabeth Wanjiku"
            className="w-12 h-12 rounded-full border-2 border-accent object-cover"
          />
          <span className="font-bold text-lg">Elizabeth Wanjiku</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-accent transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@cikukingee?_t=ZM-8zS5c4XYg7h&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-accent transition-colors duration-300"
          >
            <FaTiktok />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 pb-4 text-sm">
        © {new Date().getFullYear()} Elizabeth Wanjiku. All rights reserved.
      </div>
    </motion.footer>
  );
}
