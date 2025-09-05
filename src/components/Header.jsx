import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = ["about", "services", "testimonials", "contact"];

  return (
    <header className="bg-secondary text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/elizabeth.jpg" // Public folder path
            alt="Elizabeth Wanjiku"
            className="w-16 h-16 rounded-full border-2 border-accent object-cover"
          />
          <div>
            <h1 className="text-xl font-bold">Elizabeth Wanjiku</h1>
            <p className="text-sm text-accent">
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
              className="cursor-pointer hover:text-accent capitalize"
            >
              {section}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary px-6 py-4 flex flex-col space-y-4"
          >
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-accent capitalize text-lg"
              >
                {section}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
