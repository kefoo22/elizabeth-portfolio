import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Elizabeth helped me improve my Chemistry grade from a C to an A-. She’s patient, clear, and very encouraging!",
      author: "Former Student",
    },
    {
      quote:
        "Her Biology lessons are interactive and engaging. My daughter looks forward to every session!",
      author: "Parent",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((item, idx) => (
          <motion.blockquote
            key={idx}
            className="bg-secondary p-6 rounded-lg shadow cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <p>{item.quote}</p>
            <footer className="mt-2 text-sm text-accent">– {item.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
