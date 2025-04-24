import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Setting the page title and meta description
    document.title = "Health Tips & Articles | Green Health";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Discover expert health tips, nutrition advice, and lifestyle changes to improve your well-being."
      );

    // Fetch articles from API
    axios
      .get("https://your-api.com/articles")
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Health Tips & Articles
      </h1>

      {/* Your articles */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching articles: {error.message}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-secondary">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{article.excerpt}</p>
                <button className="mt-3 text-primary font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
