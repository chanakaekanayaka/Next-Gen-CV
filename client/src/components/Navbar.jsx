import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'

const Navbar = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutuser = () => {
        navigate('/')
        dispatch(logout())
    }

    return (
        <div className='sticky top-0 z-[100] w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-6 py-4'>
                {/* Logo Section */}
                <Link to='/' className='flex items-center transition-transform hover:scale-105 active:scale-95 duration-300'>
                    <img 
                        src='/logo.svg' 
                        alt='logo' 
                        className='h-20 w-50' 
                    />
                </Link>

                {/* User Actions */}
                <div className='flex items-center gap-6 ml-auto'>
                    <div className='hidden sm:flex flex-col items-end'>
                        <p className='text-xs text-slate-500 font-semibold uppercase tracking-wider'>Logged in as</p>
                        <p className='font-bold text-slate-800 leading-tight'>
                            {user?.name || 'User'}
                        </p>
                    </div>

                    <div className='h-8 w-[1px] bg-slate-200 hidden sm:block'></div>

                    <button 
                        onClick={logoutuser} 
                        className='px-6 py-2.5 bg-rose-50 text-rose-600 font-semibold rounded-xl border border-rose-100 hover:bg-rose-600 hover:text-white hover:border-rose-600 hover:shadow-lg hover:shadow-rose-200 active:scale-95 transition-all duration-300 cursor-pointer'
                    >
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar