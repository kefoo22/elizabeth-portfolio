import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong ❌ Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-6 bg-secondary"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact Me</h2>
        <p className="mb-8 text-center">
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-2 text-accent">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary text-white border border-accent focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-accent">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary text-white border border-accent focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-accent">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary text-white border border-accent focus:outline-none focus:border-white"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-accent text-black py-3 rounded-lg shadow"
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center text-sm text-accent"
          >
            {status}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
