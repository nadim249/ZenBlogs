import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        return response.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{blog.title}</h1>
      <div className="mb-4 sm:mb-6">
        <img 
          src={blog.cover_image || 'https://via.placeholder.com/800x400'} 
          alt={blog.title}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex items-center mb-4 sm:mb-6">
        <img 
          src={blog.user.profile_image} 
          alt={blog.user.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
        />
        <div>
          <h3 className="font-semibold text-sm sm:text-base">{blog.user.name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm">{new Date(blog.published_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div 
        className="prose max-w-none prose-sm sm:prose-base md:prose-lg prose-headings:text-xl sm:prose-headings:text-2xl md:prose-headings:text-3xl"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  );
}

export default Blog;