import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import NextGen from './pages/NextGen'
import Preview from './pages/Preview'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>

        <Route path='app' element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='builder/:resumeId' element={<NextGen></NextGen>}></Route>
        </Route>

        <Route path='view/:resumeId' element={<Preview></Preview>}></Route>
        <Route path='login' element={<Login></Login>}></Route>

      </Routes>
      
    </>
  )
}

export default App
