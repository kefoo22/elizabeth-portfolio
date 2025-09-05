import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-primary text-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-accent text-center md:text-left">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed mb-4">
              I’m a passionate Biology and Chemistry teacher from Nyandarua County, Kenya, dedicated to helping students excel in science. Currently teaching at <strong>Turasha Secondary School</strong>, I prepare students for <strong>KCSE exams</strong>, lead laboratory sessions, and mentor learners in academic and extracurricular science activities. I have extensive experience teaching both the <strong>8-4-4 curriculum</strong> and the <strong>Competence-Based Education (CBE) curriculum</strong>, ensuring students not only understand theoretical concepts but also develop practical skills and problem-solving abilities.
            </p>
            <p className="text-lg leading-relaxed">
              I hold a <strong>Bachelor of Education in Biology and Chemistry</strong> from the University of Embu and aspire to pursue a Master’s degree to deepen my expertise and teach at the college level. My goal is to create engaging, interactive learning experiences that inspire curiosity, critical thinking, and academic excellence in every student.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            className="md:w-1/2 w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Elevator Pitch Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Animated Video description */}
            <motion.p
              className="text-center text-sm md:text-base text-accent font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Watch my elevator pitch to learn more about me!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
