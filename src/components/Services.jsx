import { motion } from "framer-motion";

export default function Services() {
  const cards = [
    {
      title: "Subjects",
      description:
        "Biology, Chemistry, and Combined Science (KCSE, IGCSE, and introductory university-level courses).",
    },
    {
      title: "Formats",
      description:
        "One-on-one sessions, small group classes, and online tutoring available.",
    },
    {
      title: "Pricing",
      description: "Contact me for a personalized quote tailored to your needs.",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">Tutoring Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-primary p-6 rounded-lg shadow cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
