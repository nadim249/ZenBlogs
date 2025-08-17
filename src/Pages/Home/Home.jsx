import LatestBlogs from "../../Components/LatestBlogs/LatestBlogs"
export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Welcome to ZenBlog</h1>
      <p className="text-gray-700 text-center">
        Your one-stop destination for insightful blogs and articles.
      </p>
      <div className="flex justify-center items-center">
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Get Started
        </button>
        <button className="mt-4 px-4 py-2 mx-1 bg-green-600 text-white rounded-md hover:bg-green-700">
        Bookmarks
        </button>
      </div>
      </div>
      <LatestBlogs />
    </>
  )
}
