import React, { createRef, useEffect, useState } from 'react'
import {dummyResumeData} from '../assets/assets'
import { FilePenIcon, LoaderCircleIcon, PencilIcon, TrashIcon, UploadCloud, XIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../configs/api.js'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux';
import pdfToText from 'react-pdftotext' 
import { setLoading } from '../app/features/authSlice.js'

// ... rest of your imports

const Dashboard = () => {

const {user,token} = useSelector(state=> state.auth)

  const [allResume, setAllResume] = useState([])
  const [showCreateResume,setshowCreateResume] = useState(false)
  const [showUploadResume,setshowUploadResume] = useState(false)
  const [title,setTitle] = useState('')
  const [resume,setResume] = useState(null)
  const [editResumeId,seteditResumeId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();


  const loadAllResumes = async ()=>{
    try {

      const {data} = await api.get('/api/users/resumes',  
        {headers:{Authorization: token}})
        setAllResume(data.resumes)
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }

  }

  const createResume = async (event)=>{
    
    try {

      event.preventDefault()
      const {data} = await api.post('/api/resumes/create', {title}, 
        {headers:{Authorization: token}})
        setAllResume([...allResume, data.resume])
        setTitle('')
        setshowCreateResume(false)
        navigate(`/app/builder/${data.resume._id}`)
      
    } catch (error) {
       toast.error(error?.response?.data?.message || error.message)
    }

  }

  const uploadResume = async (event) =>{
    event.preventDefault()
    setIsLoading(true)

    try {

      const resumeText = await pdfToText(resume)
      const {data} = await api.post('/api/ai/upload-resume', {title, resumeText}, 
        {headers:{Authorization: token}})
      setTitle('')
      setResume(null)
      setshowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)  
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setLoading(false)
  }

  const editTitle = async (event)=>{
    try {

      event.preventDefault()
      const {data} = await api.put(`/api/resumes/update`, {resumeId:editResumeId,
        resumeData: {title}
      }, {headers:{Authorization:token}})
      setAllResume(allResume.map(resume=> resume._id === editResumeId? {...resume,
        title}:resume))
      setTitle('')
      seteditResumeId('')
      toast.success(data.message)

      
    } catch (error) {
       toast.error(error?.response?.data?.message || error.message)
    }
  }

   const deleteResume = async (resumeId)=>{
    try {

      const confirm = window.confirm('Are you sure you want to delete this Resume ?')
    if(confirm){
      const {data}= await api.delete(`/api/resumes/delete/${resumeId}`,
        {headers:{Authorization: token}}
      )
      setAllResume(allResume.filter(resume => resume._id !== resumeId))

      toast.success(data.message)
    }
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    
  }

  useEffect(()=>{
    loadAllResumes()
  },[])

  return (
    <div className='max-w-7xl mx-auto px-4 py-8 '>

      <p className='text-2xl font-medium mb-6 bg-amber-300 bg-clip-text text-transparent '> Welcome, Chanaka Ekanayaka</p>

      <div className='flex gap-4'>
        <button onClick={()=>setshowCreateResume(true)} className='w-full bg-gray-100 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 borde border-dashed border-slate-300 hover:border-amber-600 hover:shadow-xl transition-all duration-300 cursor-pointer'>
          <img src='createresume.png' className='w-30 hover:scale-105  duration-300hover:'></img>
          <p className='font-medium text-slate-800 group-hover:text-indigo-600 transition-all duration-300'>Create Resume</p>
        </button>

        <button onClick={()=>setshowUploadResume(true)} className='w-full bg-gray-100 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 borde border-dashed border-slate-300 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer'>
          <img src='uploadresume.png' className='w-60 hover:scale-105  duration-300hover:'></img>
          <p className='font-medium text-slate-800 group-hover:text-indigo-600 transition-all duration-300'>Upload Existing</p>
        </button>
      </div>


       <hr className='border-slate-300 my-6 sm:w-[305px]'></hr>

      <div className='grid grid-cols-2 sm:flex flex-wrap gap-4 '>
        {allResume.map((resume,index)=>{
          
          return(
            <button onClick={()=>navigate(`/app/builder/${resume._id}`)} key={index} className='relative w-full bg-blue-200 hover:bg-blue-400 sm:max-w-38 h-48 flex flex-col
            items-center justify-center rounded-lg gap-[50px] border group hover:shadow-lg transition-all
            duration-300 cursor-pointer'>

             <FilePenIcon className='size-9 group-hover:scale-105 transition-all hover:text-blue-500'></FilePenIcon>
             <p className='group-hover:scale-105 transition-all px-2 text-center '>{resume.title}</p>
             <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center'>Update on {new Date().toLocaleDateString()}</p>
             <div onClick={e=>e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
              <TrashIcon onClick={()=>deleteResume(resume._id)} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'></TrashIcon>
              <PencilIcon onClick={()=>{seteditResumeId(resume._id); setTitle(resume)}} className='size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors'></PencilIcon>

             </div>
            </button>
          )
        })}

      </div>
       
      {showCreateResume && (
        <form  onSubmit={createResume} onClick={()=>{setshowCreateResume(false)}} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
          <div className='relative bg-slate-100 border shadow-md rounded-lg w-full max-w-sm p-6' onClick={e=>e.stopPropagation()}>

           <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
           <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 focus:border-blue-800 ring-blue-400 'required></input>

          <button className='w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-700 transition-colors'>Create Resume
          </button>
          <XIcon className='absolute top-4 right-4 text-red-400 hover:text-red-600 hover:scale-130   duration-300 cursor-pointer transition-colors border border-rose-700 border-b-red-700' 
          onClick={ ()=>{
            setshowCreateResume(false); setTitle('')
          }}></XIcon>

          </div>

        </form>
      )

      }

      {showUploadResume && (
        <form  onSubmit={uploadResume} onClick={()=>{setshowUploadResume(false)}} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
          <div className='relative bg-slate-100 border shadow-md rounded-lg w-full max-w-sm p-6' onClick={e=>e.stopPropagation()}>

           <h2 className='text-xl font-bold mb-4'>Upload a Resume</h2>
           <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 focus:border-blue-800 ring-blue-400 'required></input>

            <div>
              <label htmlFor="resume-input" className='block text-sm text-slate-700' >
                Select resume file
                <div className='flex flex-col items-center justify-center gap-2 
                border group text-slate-400 border-slate-400 border-dashed rounded-md
                p-4 py-10 my-4 hover:border-blue-400 hover:text-blue-700 cursor-pointer transition-colors'>
                  {resume ? (
                    <p className='text-blue-700'>{resume.name}</p>
                  ):
                   (
                    <>
                    <UploadCloud className='size-14 stroke-1'></UploadCloud>
                    <p>Upload resume</p>
                    </>
                   )
                  }

                </div>

              </label>
              <input type='file' id='resume-input' accept='.pdf' hidden
               onChange={(e)=> setResume(e.target.files[0])}></input>
              
            </div>

          <button disabled={isLoading} className='w-full py-2 bg-blue-600 text-white rounded
          hover:bg-blue-700 transition-colors flex items-center justify-center gap-2'>
            {isLoading && <LoaderCircleIcon className='animate-spin size4 text-white'/>}
            {isLoading ? 'uploading...' : 'Upload Resume'}
            Upload Resume
          </button>v
          <XIcon className='absolute top-4 right-4 text-red-400 hover:text-red-600 hover:scale-130   duration-300 cursor-pointer transition-colors border border-rose-700 border-b-red-700' 
          onClick={ ()=>{
            setshowUploadResume(false); setTitle('')
          }}></XIcon>

          </div>

        </form>

      )

      }

      {editResumeId && (
        <form  onSubmit={editTitle} onClick={()=>{seteditResumeId('')}} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
          <div className='relative bg-slate-100 border shadow-md rounded-lg w-full max-w-sm p-6' onClick={e=>e.stopPropagation()}>

           <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
           <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='Enter Resume Title' className='w-full px-4 py-2 mb-4 focus:border-blue-800 ring-blue-400 'required></input>

          <button className='w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-700 transition-colors'>Update
          </button>
          <XIcon className='absolute top-4 right-4 text-red-400 hover:text-red-600 hover:scale-130   duration-300 cursor-pointer transition-colors border border-rose-700 border-b-red-700' 
          onClick={ ()=>{
            seteditResumeId(''); setTitle('')
          }}></XIcon>

          </div>

        </form>
      )

      }


        
      
    </div>
  )
}

export default Dashboard
