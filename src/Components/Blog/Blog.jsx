import { useLoaderData, useParams } from 'react-router-dom';

function Blog() {

const blog=useLoaderData()
if (!blog) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 mt-14 sm:mt-16">
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
        className="prose max-w-none prose-sm sm:prose-base md:prose-lg 
        prose-headings:text-xl sm:prose-headings:text-2xl md:prose-headings:text-3xl
        prose-p:text-sm sm:prose-p:text-base
        prose-img:rounded-lg prose-img:my-2 prose-img:w-full prose-img:h-auto
        prose-a:text-blue-600 hover:prose-a:text-blue-800
        prose-ul:list-disc prose-ul:pl-5 prose-ol:pl-5
        prose-li:mb-1 sm:prose-li:mb-2
        [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:aspect-video [&_iframe]:my-4
        [&_video]:w-full [&_video]:max-w-full [&_video]:rounded-lg [&_video]:my-4
        [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_pre]:p-4 [&_pre]:text-sm
        [&_blockquote]:text-sm [&_blockquote]:sm:text-base [&_blockquote]:border-l-4 [&_blockquote]:pl-4
        [&_table]:overflow-x-auto [&_table]:w-full [&_table]:text-sm [&_table]:sm:text-base
        [&_embed]:w-full [&_embed]:max-w-full [&_embed]:my-4"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  );
}

export default Blog;