import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LatestBlogs() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?per_page=20&top=7')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="p-6 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {articles.slice(0, 6).map((article, index) => (
          <div key={index} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={article.cover_image || 'https://via.placeholder.com/150'} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link to={`/blogs/${article.id}`} className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</Link>
              <p className="text-gray-600 text-sm mb-2">By {article.user.name}</p>
              <p className="text-gray-700 text-sm line-clamp-3">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;