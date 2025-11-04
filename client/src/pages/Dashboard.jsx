import React, { useEffect, useState } from 'react'
import {dummyResumeData} from '../assets/assets'
import { FilePenIcon, PencilIcon, TrashIcon } from 'lucide-react'

const Dashboard = () => {
  const [allResume, setAllResume] = useState([])

  const loadAllResumes = async ()=>{
    setAllResume(dummyResumeData)

  }

  useEffect(()=>{
    loadAllResumes()
  },[])

  return (
    <div className='max-w-7xl mx-auto px-4 py-8 '>

      <p className='text-2xl font-medium mb-6 bg-amber-300 bg-clip-text text-transparent '> Welcome, Chanaka Ekanayaka</p>

      <div className='flex gap-4'>
        <button className='w-full bg-gray-100 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 borde border-dashed border-slate-300 hover:border-amber-600 hover:shadow-xl transition-all duration-300 cursor-pointer'>
          <img src='createresume.png' className='w-30 hover:scale-105  duration-300hover:'></img>
          <p className='font-medium text-slate-800 group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
        </button>

        <button className='w-full bg-gray-100 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 borde border-dashed border-slate-300 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer'>
          <img src='uploadresume.png' className='w-60 hover:scale-105  duration-300hover:'></img>
          <p className='font-medium text-slate-800 group-hover:text-indigo-600 transition-all duration-300'>Upload Existing</p>
        </button>
      </div>


       <hr className='border-slate-300 my-6 sm:w-[305px]'></hr>

      <div className='grid grid-cols-2 sm:flex flex-wrap gap-4 '>
        {allResume.map((resume,index)=>{
          
          return(
            <button key={index} className='relative w-full bg-blue-200 hover:bg-blue-400 sm:max-w-38 h-48 flex flex-col
            items-center justify-center rounded-lg gap-[50px] border group hover:shadow-lg transition-all
            duration-300 cursor-pointer'>

             <FilePenIcon className='size-9 group-hover:scale-105 transition-all hover:text-blue-500'></FilePenIcon>
             <p className='group-hover:scale-105 transition-all px-2 text-center '>{resume.title}</p>
             <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center'>Update on {new Date().toLocaleDateString()}</p>
             <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
              <TrashIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'></TrashIcon>
              <PencilIcon className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'></PencilIcon>

             </div>
            </button>
          )
        })}

      </div>
       



        
      
    </div>
  )
}

export default Dashboard
