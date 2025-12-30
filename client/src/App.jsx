import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import NextGen from './pages/NextGen'
import Preview from './pages/Preview'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(setLoading(false))
      return
    }

    try {
      // Fixed: Added leading slash /api/users/data
      const { data } = await api.get('/api/users/data', {
        headers: { Authorization: token }
      })
      if (data.user) {
        dispatch(login({ token, user: data.user }))
      }
    } catch (error) {
      console.log("Auth Error:", error.message)
    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<NextGen />} />
        </Route>
        <Route path='view/:resumeId' element={<Preview />} />
      </Routes>
    </>
  )
}

export default App