import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If you want to link to post pages

const client = createClient({
  space: "YOUR_SPACE_ID",
  accessToken: "YOUR_ACCESS_TOKEN",
});

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", order: "-fields.publishDate" })
      .then((response) => setPosts(response.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="blog" className="py-16 px-6 bg-secondary text-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-accent text-center md:text-left">
          Blog
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-light">No posts available yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const { title, excerpt, featuredImage } = post.fields;
              const imageUrl = featuredImage?.fields?.file?.url;

              return (
                <motion.div
                  key={post.sys.id}
                  className="bg-primary rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-2">
                      {title}
                    </h3>
                    <p className="text-light mb-4">{excerpt}</p>
                    <Link
                      to={`/blog/${post.fields.slug}`}
                      className="text-accent font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
