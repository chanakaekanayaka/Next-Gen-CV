import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from './Dashboard'

const Layout = () => {
  return (
    <div>
      
        <div className='min-h-screen '>
          <Navbar></Navbar>
          
          <Outlet></Outlet>
        </div>
      
    </div>
  )
}

export default Layout
