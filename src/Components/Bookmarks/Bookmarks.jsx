import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const removeBookmark = (article) => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== article.id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  if (bookmarks.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Bookmarks</h1>
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No bookmarks yet</p>
          <Link to="/blogs" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Browse Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Bookmarks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={article.cover_image || 'https://via.placeholder.com/150'} 
              alt={article.title} 
              className="w-full h-48 object-cover sm:object-center"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <Link to={`/blogs/${article.id}`} className="text-xl font-semibold mb-2 line-clamp-2 flex-1 mr-2">
                  {article.title}
                </Link>
                <button
                  onClick={() => removeBookmark(article)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  title="Remove from bookmarks"
                >
                  <svg
                    className="w-6 h-6 text-blue-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-2">By {article.user.name}</p>
              <p className="text-gray-700 text-sm line-clamp-3">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
