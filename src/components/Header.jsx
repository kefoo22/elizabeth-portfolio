import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import elizabethImg from "../assets/elizabeth.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["about", "services", "testimonials", "blog", "contact"];
  const menuRef = useRef();

  const handleLinkClick = () => setIsOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="bg-secondary text-light py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={elizabethImg}
            alt="Elizabeth Wanjiku"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-accent object-cover object-center"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Elizabeth Wanjiku</h1>
            <p className="text-sm md:text-base text-accent">
              Your Biology & Chemistry Tutor in Kenya
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-accent font-bold"
              className="cursor-pointer hover:text-accent transition-colors duration-300 capitalize"
            >
              {section}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex justify-end"
          >
            <motion.nav
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="bg-secondary w-3/4 max-w-xs h-full flex flex-col justify-between p-6 relative"
              role="dialog"
              aria-modal="true"
            >
              {/* Close button inside drawer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-light hover:text-accent transition-colors"
              >
                <X size={28} />
              </button>

              {/* Top: Logo & tagline */}
              <div className="flex items-center space-x-3 mb-8 mt-10">
                <img
                  src={elizabethImg}
                  alt="Elizabeth Wanjiku"
                  className="w-14 h-14 rounded-full border-2 border-accent object-cover object-center"
                />
                <div>
                  <h2 className="font-bold text-lg">Elizabeth Wanjiku</h2>
                  <p className="text-sm text-accent">Biology & Chemistry Tutor</p>
                </div>
              </div>

              {/* Links */}
              <motion.div
                className="flex flex-col space-y-6 text-lg"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {sections.map((section) => (
                  <motion.div
                    key={section}
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <Link
                      to={section}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={handleLinkClick}
                      className="cursor-pointer hover:text-accent transition-colors duration-300 capitalize"
                    >
                      {section}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom: Socials */}
              <div className="flex space-x-6 mt-8 text-2xl justify-center">
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
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
