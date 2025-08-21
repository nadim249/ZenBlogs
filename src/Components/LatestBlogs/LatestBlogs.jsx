import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Toast from '../Toast/Toast';

function LatestBlogs() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setLoading(true);
    fetch('https://dev.to/api/articles?per_page=20&top=7')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (article) => {
    setBookmarks(prevBookmarks => {
      const isBookmarked = prevBookmarks.some(bookmark => bookmark.id === article.id);
      if (isBookmarked) {
        setToast({
          show: true,
          message: 'Bookmark removed successfully',
          type: 'removed'
        });
        return prevBookmarks.filter(bookmark => bookmark.id !== article.id);
      } else {
        setToast({
          show: true,
          message: 'Article bookmarked successfully',
          type: 'success'
        });
        return [...prevBookmarks, article];
      }
    });
  };

  const isBookmarked = (articleId) => {
    return bookmarks.some(bookmark => bookmark.id === articleId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 font-sans">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {articles.slice(0, 6).map((article, index) => (
          <Card
            key={index}
            article={article}
            isBookmarked={isBookmarked}
            toggleBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;