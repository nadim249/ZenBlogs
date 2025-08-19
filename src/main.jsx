import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/Home'
import Blogs from './Components/Blogs/Blogs'
import Blog from './Components/Blog/Blog'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import MainLayout from './Layouts/MainLayout'

const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout/>,
          children: [{
            path: "/",
            element:<Home/>,
          },
          {
            path: "/blogs",
            element: <Blogs/>
          },
          {
            path: "/blogs/:id",
            element: <Blog/>
          },
          {
            path: "/bookmarks",
            element: <Bookmarks/>
          }
          ]
        }
      ])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    
  </>
)
