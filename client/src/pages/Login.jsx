import React from 'react'
import { login } from '../app/features/authSlice.js'
import toast from 'react-hot-toast'
import api from '../configs/api.js'
import { useDispatch } from 'react-redux'


const Login = () => {
    const dispatch = useDispatch()
   const query = new URLSearchParams(window.location.search)
   const urlState = query.get('state')
   const [state, setState] = React.useState(urlState ||"login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const {data} = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
            
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r bg-gradient-to-r from-[#D1FAE5] to-[#E9D5FF]
'>

        <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white/80 backdrop-blur-lg
">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
                <p className="text-gray-500 text-sm mt-2">Please {state} in to continue</p>
                {state !== "login" && (
                    <div className="flex items-center  mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl- gap- hover:bg-white/70 backdrop-blur-md shadow-2xl
">
                      <img src='user (2).png' className='h-8 '/>
                        
                        <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0" value={formData.name} onChange={handleChange} required />
                    </div>
                )}
                    <div className="flex items-center w-full mt-6 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-2 gap-2">
                    <img src='email.png' className='h-8 '/>
                    
                    <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-2 gap-2">
                    <img src='password.png' className='h-8 '/>
                    
                    <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} required />
                    </div>

                    <div className="mt-4 text-left text-indigo-500 ">
                      
                    <button className="text-sm hover:text-green-500  transition hover:scale-105  duration-300" type="reset  ">Forget password?</button>
                    </div>
                    <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90  transition hover:scale-105  duration-300">
                    {state === "login" ? "Login" : "Sign up"}
                    </button>
                    <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-500 text-sm mt-3 mb-11 ">{state === "login" ? "Don't have an account?" : "Already have an account?"} <a href="#" className="text-indigo-500 transition hover:scale-200  duration-300 " ><span className='text-sm hover:text-green-500  "'>click here</span></a></p>
            </form>
      
    </div>
  )
}

export default Login
