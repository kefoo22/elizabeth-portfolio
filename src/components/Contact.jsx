import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      (result) => setStatus("Message sent successfully!"),
      (error) => setStatus("Failed to send message. Please try again.")
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 px-6 bg-secondary text-light">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-accent">Contact Me</h2>
        <p className="mb-6">
          I’d love to hear from you! Contact me via email, phone, or the form below.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-2 text-accent">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary text-light border border-accent focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-accent">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary text-light border border-accent focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-accent">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-primary text-light border border-accent focus:outline-none focus:border-accent"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#fbbf24" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-accent text-black py-3 rounded-lg shadow-lg font-semibold"
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
    </section>
  );
}
