import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Biology Tutoring",
      description:
        "Comprehensive lessons covering all Biology topics for KCSE, IGCSE, and introductory university courses, with practical experiments and interactive discussions.",
    },
    {
      title: "Chemistry Tutoring",
      description:
        "Engaging Chemistry lessons with hands-on practicals, exam preparation, and problem-solving strategies tailored to students’ needs.",
    },
    {
      title: "Combined Science & Exam Prep",
      description:
        "Support for Combined Science learners, including lab supervision, revision strategies, and preparation for both 8-4-4 and CBE curricula.",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-secondary text-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-accent text-center md:text-left">
          Tutoring Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-primary p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{service.title}</h3>
              <p className="text-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
