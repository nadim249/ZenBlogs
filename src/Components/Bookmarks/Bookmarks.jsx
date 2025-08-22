import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Toast from '../Toast/Toast';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
  }, []);

  const removeBookmark = (article) => {
    const updated = bookmarks.filter(b => b.id !== article.id);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
    setToast({ show: true, message: 'Bookmark removed successfully', type: 'success' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(prev => ({ ...prev, show: false }))}
        />
      )}

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No bookmarks yet</p>
          <Link
            to="/blogs"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Blogs
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((article) => (
            <Card
              key={article.id}            // better than index
              article={article}
              isBookmarked={() => true}
              toggleBookmark={removeBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
}
