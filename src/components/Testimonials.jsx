export default function Testimonials() {
  const testimonials = [
    {
      quote: "Elizabeth’s Biology and Chemistry lessons are clear, engaging, and practical. She helped me improve my grades and boosted my confidence in science.",
      author: "Former Student",
    },
    {
      quote: "My daughter looks forward to every session. Elizabeth is patient, encouraging, and makes complex concepts easy to understand.",
      author: "Parent",
    },
    {
      quote: "A highly professional and dedicated teacher. She goes beyond the syllabus to ensure students fully grasp the subject and enjoy learning.",
      author: "Colleague",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-primary text-light">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-accent">Testimonials</h2>
        <div className="space-y-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
              <p className="italic mb-2">"{t.quote}"</p>
              <p className="font-semibold text-accent">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
