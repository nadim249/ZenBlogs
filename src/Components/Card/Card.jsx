import React from 'react'
import { Link } from 'react-router-dom'

function Card({ article, isBookmarked, toggleBookmark }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden relative">
      <img 
        src={article.cover_image || 'https://via.placeholder.com/150'} 
        alt={article.title} 
        className="w-full h-48 object-cover sm:object-center"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/blogs/${article.id}`} className="text-xl font-semibold mb-2 line-clamp-2 flex-1 mr-2">{article.title}</Link>
          <button
            onClick={() => toggleBookmark(article)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            title={isBookmarked(article.id) ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            <svg
              className={`w-6 h-6 ${
                isBookmarked(article.id) ? 'text-blue-600 fill-current' : 'text-gray-400'
              }`}
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
  )
}

export default Card