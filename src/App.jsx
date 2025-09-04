import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-accent">
      {/* HEADER */}
      <header className="bg-secondary text-white py-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <img
              src="/elizabeth.jpg" // replace with your real photo in /public
              alt="Elizabeth Wanjiku"
              className="w-20 h-20 rounded-full border-2 border-accent object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">Elizabeth Wanjiku</h1>
              <p className="text-sm text-accent">Your Biology & Chemistry Tutor in Kenya</p>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="leading-relaxed">
          Hello! I’m Elizabeth Wanjiku, a passionate Biology and Chemistry teacher based in Kenya.
          I love making science engaging and easy to understand. With years of experience teaching
          students in the KCSE and IGCSE curricula, I have helped many learners build confidence and
          achieve top results. My mission is to inspire curiosity and a love for learning in every student.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Tutoring Services</h2>
          <ul className="space-y-4">
            <li className="bg-primary p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Subjects</h3>
              <p>Biology, Chemistry, and Combined Science (KCSE, IGCSE, and introductory university-level).</p>
            </li>
            <li className="bg-primary p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Formats</h3>
              <p>One-on-one sessions, small group classes, and online tutoring available.</p>
            </li>
            <li className="bg-primary p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">Pricing</h3>
              <p>Contact me for a personalized quote tailored to your needs.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">Testimonials</h2>
        <div className="space-y-6">
          <blockquote className="bg-secondary p-4 rounded-lg shadow">
            <p>"Elizabeth helped me improve my Chemistry grade from a C to an A-. She’s patient, clear, and very encouraging!"</p>
            <footer className="mt-2 text-sm text-accent">– Former Student</footer>
          </blockquote>
          <blockquote className="bg-secondary p-4 rounded-lg shadow">
            <p>"Her Biology lessons are interactive and engaging. My daughter looks forward to every session!"</p>
            <footer className="mt-2 text-sm text-accent">– Parent</footer>
          </blockquote>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
          <p className="mb-4">Have questions or want to book a session? Reach out!</p>
          <a
            href="mailto:elizabeth.tutor@example.com"
            className="bg-accent text-black px-6 py-3 rounded-lg shadow hover:bg-white transition"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-6 text-center text-sm text-accent border-t border-secondary">
        © {new Date().getFullYear()} Elizabeth Wanjiku. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
