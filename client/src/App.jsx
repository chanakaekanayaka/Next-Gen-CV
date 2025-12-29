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
import {Toaster} from 'react-hot-toast' 


const App = () => {

  const dispatch = useDispatch()

  const getUserData = async () =>{
    const token = localStorage.getItem('token')

    try {
      if(token){
        const {data} = await api.get('/api/users/data', {headers:{Authorization:token}})
        if(data.user){
          dispatch(login({token,user:data.user}))
        }
        dispatch(setLoading(false))
      }else{
        dispatch(setLoading(false))
      }
      
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message)
      
    }
  }

  useEffect(()=>{
    getUserData()
  }
  
  ,[])

  return (
    <>
    <Toaster/>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}/>

        <Route path='app' element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='builder/:resumeId' element={<NextGen></NextGen>}></Route>
        </Route>

        <Route path='view/:resumeId' element={<Preview></Preview>}></Route>
        

      </Routes>
      
    </>
  )
}

export default App
