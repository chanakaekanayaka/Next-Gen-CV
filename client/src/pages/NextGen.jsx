import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOff, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkles, User } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreview from '../components/ResumePreview'
import TemplateSelector from '../components/TemplateSelector'
import ColourPicker from '../components/ColourPicker'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationalForm from '../components/EducationalForm'
import ProjectForm from '../components/ProjectForm'
import SkillsForm from '../components/SkillsForm'
import { useSelector } from 'react-redux'
import api from '../configs/api.js'
import toast from 'react-hot-toast'

const NextGen = () => {
  const { resumeId } = useParams()
  const { token } = useSelector(state => state.auth)

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  })

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackground, setRemoveBackground] = useState(false)

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles }
  ]

  const activeSection = sections[activeSectionIndex]

  const loadExistinfResume = async () => {
    try {
      // FIXED: Added missing forward slash / after 'get'
      const { data } = await api.get(`/api/resumes/get/${resumeId}`, {
        headers: { Authorization: token }
      })
      if (data.resume) {
        setResumeData(data.resume)
        document.title = data.resume.title || "Resume Builder";
      }
    } catch (error) {
      console.log("Load Error:", error.message)
    }
  }

  useEffect(() => {
    if (resumeId) loadExistinfResume()
  }, [resumeId])

  const changeResumeVisibility = async () => {
    try {
      const formData = new FormData()
      formData.append("resumeId", resumeId)
      formData.append("resumeData", JSON.stringify({ public: !resumeData.public }))

      const { data } = await api.put('/api/resumes/update', formData, {
        headers: { Authorization: token }
      })

      setResumeData(prev => ({ ...prev, public: !prev.public }))
      toast.success(data.message)
    } catch (error) {
      console.error("Visibility Error:", error)
      toast.error("Failed to change visibility")
    }
  }

  const saveResume = async () => {
    try {
      if (!resumeId) throw new Error("Missing Resume ID");

      let updatedResumeData = structuredClone(resumeData)
      if (updatedResumeData.personal_info?.image && typeof updatedResumeData.personal_info.image === 'object') {
        delete updatedResumeData.personal_info.image
      }

      const formData = new FormData()
      formData.append("resumeId", resumeId)
      formData.append('resumeData', JSON.stringify(updatedResumeData))
      if (removeBackground) formData.append("removeBackground", "yes")

      if (resumeData.personal_info?.image instanceof File) {
        formData.append("image", resumeData.personal_info.image)
      }

      const { data } = await api.put('/api/resumes/update', formData, {
        headers: { 
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      })

      setResumeData(data.resume)
      return data.message || "Saved successfully!"
    } catch (error) {
      console.error("Save Error:", error)
      throw error;
    }
  }

  const handleShare = () => {
    const resumeUrl = `${window.location.origin}/view/${resumeId}`
    if (navigator.share) {
      navigator.share({ url: resumeUrl, text: "My Resume" })
    } else {
      navigator.clipboard.writeText(resumeUrl)
      toast.success("Link copied to clipboard!")
    }
  }

  const downloadResume = () => window.print()

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-7'>
        <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
          <ArrowLeftIcon className='size-4' /> Back To Dashboard
        </Link>
      </div>

      <div className='max-w-7xl mx-auto px-4 pb-8'>
        <div className='grid lg:grid-cols-12 gap-8'>
          <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
              <hr className='absolute top-0 left-0 right-0 border-2' />
              <hr className='absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-800 border-none transition-all duration-200'
                style={{ width: `${(activeSectionIndex / (sections.length - 1)) * 100}%` }} />

              <div className='flex justify-between items-center mb-6 border-b border-gray-400 py-1'>
                <div className='flex items-center gap-2 '>
                  <TemplateSelector selectedTemplate={resumeData.template} onChange={(template) => setResumeData(prev => ({ ...prev, template }))} />
                  <ColourPicker selectedColor={resumeData.accent_color} onChange={(color) => setResumeData(prev => ({ ...prev, accent_color: color }))} />
                </div>

                <div className='flex items-center'>
                  {activeSectionIndex !== 0 && (
                    <button onClick={() => setActiveSectionIndex(prev => prev - 1)} className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50'>
                      <ChevronLeft className='size-4' />Previous
                    </button>
                  )}
                  <button onClick={() => setActiveSectionIndex(prev => Math.min(prev + 1, sections.length - 1))}
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 ${activeSectionIndex === sections.length - 1 && 'opacity-50'}`}
                    disabled={activeSectionIndex === sections.length - 1}>
                    Next <ChevronRight className='size-4' />
                  </button>
                </div>
              </div>

              <div className='space-y-6'>
                {activeSection.id === 'personal' && <PersonalInfoForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))} removeBackground={removeBackground} setRemoveBackground={setRemoveBackground} />}
                {activeSection.id === 'summary' && <ProfessionalSummaryForm data={resumeData.professional_summary} onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))} setResumeData={setResumeData} />}
                {activeSection.id === 'experience' && <ExperienceForm data={resumeData.experience} onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))} />}
                {activeSection.id === 'education' && <EducationalForm data={resumeData.education} onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))} />}
                {activeSection.id === 'projects' && <ProjectForm data={resumeData.project} onChange={(data) => setResumeData(prev => ({ ...prev, project: data }))} />}
                {activeSection.id === 'skills' && <SkillsForm data={resumeData.skills} onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))} />}
              </div>

              <button className='bg-gradient-to-br from-blue-100 to-blue-500 text-blue-900 ring-blue-500 ring hover:ring-black transition-all rounded-md px-6 py-2 mt-6 text-sm'
                onClick={() => toast.promise(saveResume(), { loading: 'Saving...', success: (m) => m, error: (e) => e.message })}>
                Save Changes
              </button>
            </div>
          </div>

          <div className='lg:col-span-7 max-lg:mt-6'>
            <div className='relative w-full'>
              <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2 z-10 px-4'>
                {resumeData.public && (
                  <button onClick={handleShare} className='flex items-center p-2 px-4 gap-2 text-xs bg-white text-blue-600 rounded-lg shadow hover:bg-gray-50 transition-colors'>
                    <Share2Icon className='size-4' /> Share
                  </button>
                )}
                <button onClick={changeResumeVisibility} className='flex items-center p-2 px-4 gap-2 text-xs bg-white rounded-lg shadow hover:bg-gray-50 transition-colors'>
                  {resumeData.public ? <EyeIcon className='size-4' /> : <EyeOff className='size-4' />}
                  {resumeData.public ? 'Public' : 'Private'}
                </button>
                <button onClick={downloadResume} className='flex items-center gap-2 px-6 py-2 text-xs bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors'>
                  <DownloadIcon className='size-4' />Download
                </button>
              </div>
              <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextGen