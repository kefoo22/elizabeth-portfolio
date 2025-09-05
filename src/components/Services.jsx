export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-secondary text-light">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-accent">Tutoring Services</h2>
        <p className="mb-4">
          I offer personalized tutoring in <strong>Biology, Chemistry, and Combined Science</strong>, tailored to your level and learning style.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Subjects & Levels:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Biology and Chemistry (KCSE, IGCSE)</li>
          <li>Introductory university-level courses</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Formats:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>One-on-one sessions</li>
          <li>Small group classes</li>
          <li>Online tutoring</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Pricing:</h3>
        <p>Flexible and personalized – contact me for a quote.</p>
      </div>
    </section>
  );
}
