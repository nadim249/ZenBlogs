import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/Home'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import MainLayout from './layouts/MainLayout'

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
