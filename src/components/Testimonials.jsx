import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Mwangi",
      role: "KCSE Student",
      comment:
        "Elizabeth's teaching style is amazing! Her lessons are engaging, and she really helped me understand difficult Biology and Chemistry concepts.",
    },
    {
      name: "Peter Kamau",
      role: "Parent",
      comment:
        "My daughter improved her grades tremendously after Elizabeth started tutoring her. She is professional, patient, and motivating.",
    },
    {
      name: "Mary Wanjiru",
      role: "Colleague",
      comment:
        "Working with Elizabeth is a pleasure. She brings creativity and dedication to science teaching, inspiring both students and staff.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-primary text-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-accent text-center md:text-left">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-secondary p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-light italic mb-4">"{t.comment}"</p>
              <p className="font-semibold text-accent">{t.name}</p>
              <p className="text-sm text-light">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
