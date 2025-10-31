import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const user = {name: 'chanaka ekanayaka'}
    const navigate = useNavigate()

    const logoutuser = ()=>{
        navigate('/')
    }

  return (
    <div className='shadow  from-[#7DD3FC] to-[#C4B5FD]  text-[#1E293B] '>
        <nav className='flex items-center justify-between max-w-8xl mx-auto px-6 py-3.5 text-slate-800 transition-all'>
            <Link to='/'> 
                <img src='/logo.svg' alt='logo' className='h-15 w-auto mt-3 hover:scale-105  duration-300'></img>

            </Link>
           
            <div className='flex items-center gap-4 ml-auto'>
                <p className='hidden sm:block font-medium text-slate-800'>Hi , <span className='text-amber-950'>{user?.name}</span></p>
                <button onClick={logoutuser} className='px-6 py-2 border bg-red-400 active:scale-95 hover:bg-red-600 transition-all rounded-full text-slate-700 hover:scale-110 hover:text-amber-50 duration-300'>
                    Logout
                </button>
            </div>

        </nav>



    </div>
  )
}

export default Navbar
