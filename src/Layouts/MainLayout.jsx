import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout