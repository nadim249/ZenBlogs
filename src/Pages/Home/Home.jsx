import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs"
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto lg:my-4 px-4 sm:px-6 lg:px-8 py-8 bg-sky-200 lg:rounded-2xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Welcome to    
         <span className="text-orange-500"> ZeN</span>
          <span className="text-blue-600">Blog</span></h1>
      <p className="text-gray-800 text-center">
        Your one-stop destination for insightful blogs and articles.
      </p>
      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={() => navigate('/blogs')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Get Started
        </button>
        <button 
          onClick={() => navigate('/bookmarks')}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          Bookmarks
        </button>
      </div>
      </div>
      <LatestBlogs />
    </>
  )
}
