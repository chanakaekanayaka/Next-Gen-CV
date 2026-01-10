import React, { createRef, useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import { FilePenIcon, LoaderCircleIcon, PencilIcon, TrashIcon, UploadCloud, XIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../configs/api.js'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux';
import pdfToText from 'react-pdftotext'
import { setLoading } from '../app/features/authSlice.js'

const Dashboard = () => {

    const { user, token } = useSelector(state => state.auth)

    const [allResume, setAllResume] = useState([])
    const [showCreateResume, setshowCreateResume] = useState(false)
    const [showUploadResume, setshowUploadResume] = useState(false)
    const [title, setTitle] = useState('')
    const [resume, setResume] = useState(null)
    const [editResumeId, seteditResumeId] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const loadAllResumes = async () => {
        try {
            const { data } = await api.get('/api/users/resumes',
                { headers: { Authorization: token } })
            setAllResume(data.resumes)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const createResume = async (event) => {
        try {
            event.preventDefault()
            const { data } = await api.post('/api/resumes/create', { title },
                { headers: { Authorization: token } })
            setAllResume([...allResume, data.resume])
            setTitle('')
            setshowCreateResume(false)
            navigate(`/app/builder/${data.resume._id}`)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const uploadResume = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const resumeText = await pdfToText(resume)
            const { data } = await api.post('/api/ai/upload-resume', { title, resumeText },
                { headers: { Authorization: token } })
            setTitle('')
            setResume(null)
            setshowUploadResume(false)
            navigate(`/app/builder/${data.resumeId}`)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
        setIsLoading(false)
    }

    const editTitle = async (event) => {
        try {
            event.preventDefault()
            const { data } = await api.put(`/api/resumes/update`, {
                resumeId: editResumeId,
                resumeData: { title }
            }, { headers: { Authorization: token } })
            setAllResume(allResume.map(resume => resume._id === editResumeId ? {
                ...resume,
                title: title
            } : resume))
            setTitle('')
            seteditResumeId('')
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const deleteResume = async (resumeId) => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this Resume ?')
            if (confirm) {
                const { data } = await api.delete(`/api/resumes/delete/${resumeId}`,
                    { headers: { Authorization: token } }
                )
                setAllResume(allResume.filter(resume => resume._id !== resumeId))
                toast.success(data.message)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    useEffect(() => {
        loadAllResumes()
    }, [])

    return (
        <div className='max-w-7xl mx-auto px-6 py-10 min-h-screen bg-white'>

            <div className='mb-8'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent inline-block'>
                    Welcome, {user?.name || 'Chanaka Ekanayaka'}
                </h1>
                <p className='text-slate-500 mt-1'>Create or upload a resume to get started with AI Builder.</p>
            </div>

            <div className='flex flex-wrap gap-6'>
                <button 
                    onClick={() => setshowCreateResume(true)} 
                    className='w-full sm:w-44 h-56 flex flex-col items-center justify-center rounded-xl gap-4 text-slate-600 border-2 border-dashed border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-100 transition-all duration-300 group cursor-pointer'
                >
                    <div className='bg-amber-100 p-4 rounded-full group-hover:bg-amber-500 transition-colors'>
                        <img src='createresume.png' className='w-12 h-12 object-contain group-hover:brightness-0 group-hover:invert transition-all' alt="Create" />
                    </div>
                    <p className='font-semibold text-slate-700 group-hover:text-amber-600'>Create New</p>
                </button>

                <button 
                    onClick={() => setshowUploadResume(true)} 
                    className='w-full sm:w-44 h-56 flex flex-col items-center justify-center rounded-xl gap-4 text-slate-600 border-2 border-dashed border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group cursor-pointer'
                >
                    <div className='bg-indigo-100 p-4 rounded-full group-hover:bg-indigo-500 transition-colors'>
                        <img src='uploadresume.png' className='w-12 h-12 object-contain group-hover:brightness-0 group-hover:invert transition-all' alt="Upload" />
                    </div>
                    <p className='font-semibold text-slate-700 group-hover:text-indigo-600'>Upload PDF</p>
                </button>
            </div>

            <div className='flex items-center gap-4 my-10'>
                <h2 className='text-xl font-bold text-slate-800 whitespace-nowrap'>My Resumes</h2>
                <div className='h-[1px] w-full bg-slate-200'></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {allResume.map((resume, index) => (
                    <div 
                        key={index}
                        onClick={() => navigate(`/app/builder/${resume._id}`)}
                        className='relative group h-64 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:border-indigo-400'
                    >
                        <div className='p-6 rounded-lg bg-white shadow-sm border border-slate-100 mb-4 group-hover:border-indigo-200 transition-all'>
                            <FilePenIcon className='size-10 text-indigo-500' />
                        </div>
                        
                        <p className='font-bold text-slate-800 px-4 text-center line-clamp-1'>{resume.title}</p>
                        <p className='absolute bottom-4 text-[11px] font-medium text-slate-400'>
                            Edited {new Date().toLocaleDateString()}
                        </p>

                        <div 
                            onClick={e => e.stopPropagation()} 
                            className='absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity'
                        >
                            <button 
                                onClick={() => { seteditResumeId(resume._id); setTitle(resume.title) }}
                                className='p-2 bg-white shadow-md rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all'
                            >
                                <PencilIcon className='size-4' />
                            </button>
                            <button 
                                onClick={() => deleteResume(resume._id)}
                                className='p-2 bg-white shadow-md rounded-lg text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all'
                            >
                                <TrashIcon className='size-4' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modals */}
            {(showCreateResume || showUploadResume || editResumeId) && (
                <div className='fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
                    <div 
                        className='relative bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 transform transition-all'
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => { setshowCreateResume(false); setshowUploadResume(false); seteditResumeId(''); setTitle('') }}
                            className='absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all'
                        >
                            <XIcon className='size-5' />
                        </button>

                        <h2 className='text-2xl font-bold text-slate-800 mb-6'>
                            {showCreateResume && "Create New Resume"}
                            {showUploadResume && "Upload Existing Resume"}
                            {editResumeId && "Edit Resume Title"}
                        </h2>

                        <form onSubmit={showCreateResume ? createResume : (showUploadResume ? uploadResume : editTitle)}>
                            <div className='mb-5'>
                                <label className='block text-sm font-semibold text-slate-700 mb-2'>Resume Title</label>
                                <input 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    value={title} 
                                    type='text' 
                                    placeholder='e.g. Full Stack Developer 2024' 
                                    className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all' 
                                    required 
                                />
                            </div>

                            {showUploadResume && (
                                <div className='mb-6'>
                                    <label htmlFor="resume-input" className='block text-sm font-semibold text-slate-700 mb-2'>PDF Document</label>
                                    <label 
                                        htmlFor="resume-input" 
                                        className='flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200 rounded-xl py-8 px-4 hover:border-indigo-400 hover:bg-indigo-50/30 cursor-pointer transition-all'
                                    >
                                        {resume ? (
                                            <div className='text-center'>
                                                <FilePenIcon className='size-8 text-indigo-600 mx-auto mb-2' />
                                                <p className='text-indigo-700 font-medium truncate max-w-[250px]'>{resume.name}</p>
                                            </div>
                                        ) : (
                                            <>
                                                <UploadCloud className='size-10 text-slate-400 stroke-[1.5]' />
                                                <p className='text-slate-500 text-sm'>Click to upload or drag & drop</p>
                                            </>
                                        )}
                                    </label>
                                    <input type='file' id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
                                </div>
                            )}

                            <button 
                                disabled={isLoading} 
                                className='w-full py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70'
                            >
                                {isLoading && <LoaderCircleIcon className='animate-spin size-5' />}
                                {showCreateResume && "Create Resume"}
                                {showUploadResume && (isLoading ? 'Processing PDF...' : 'Upload & Analyze')}
                                {editResumeId && "Update Title"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard