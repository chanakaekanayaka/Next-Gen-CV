import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOff, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkle, Sparkles, User } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreview from '../components/ResumePreview'
import TemplateSelector from '../components/TemplateSelector'
import ColourPicker from '../components/ColourPicker'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationalForm from '../components/EducationalForm'
import ProjectForm from '../components/ProjectForm'
import SkillsForm from '../components/SkillsForm'

const NextGen = () => {

  const {resumeId} = useParams()

  const [resumeData , setResumeData] = useState({
    _id:'',
    title:'',
    personal_info:{},
    experience:[],
    education:[],
    project:[],
    skills:[],
    template:"classic",
    accent_color:"#3B82F6",
    public: false,
  })

  

  const loadExistinfResume = async()=>{
    const resume = dummyResumeData.find(resume => resume._id === resumeId)
    if(resume){
      setResumeData(resume)
      document.title = resume.title
    }
  }

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const[removeBackground, setRemoveBackground] = useState(false)



  const sections = [
    {id:"personal", name:"Personal Info", icon: User  },
    {id:"summary" , name:"Summary", icon: FileText},
    {id:"experience", name:"Experience", icon:Briefcase},
    {id:"education", name:"Education", icon:GraduationCap},
    {id:"projects", name:"Projects", icon:FolderIcon},
    {id:"skills", name:"Skills", icon:Sparkles}
  ]

  const activeSection = sections[activeSectionIndex]

  useEffect(()=>{
    loadExistinfResume()
  },[])


  const changeResumeVisibility = async ()=>{
    setResumeData({...resumeData , public: !resumeData.public})
  }

  const handleShare = () =>{
    const frontendUrl = window.location.href.split('/app/')[0];
    const resumeUrl = frontendUrl + '/view/' +resumeId

    if(navigator.share){
      navigator.share({url:resumeUrl , text: "My Resume"})
    }else{
      alert('Share not supported on this browser.')
    }
  }

  const downloadResume = ()=>{
    window.print();
  }






  return (
    <div>

        {/* back to dashboard arrow */}
        <div className='max-w-7xl mx-auto px-4 py-7'>
          <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
         
           <ArrowLeftIcon className='size-4'></ArrowLeftIcon>
            Back To Dashboard

          </Link>
        </div>

        {/* Form section and preview section */}
        <div className='max-w-7xl mx-auto px-4 pb-8'>

          <div className='grid lg:grid-cols-12 gap-8'>
            {/*Left panel-form*/}
            <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
              <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
                {/*Progress bar using activeSectionIndex*/}
                <hr className='absolute top-0 left-0 right-0 border-2'/>
                <hr className='absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 
                  to-blue-800 border-none transition-all duration-2000' 
                  style={{width:`${activeSectionIndex * 100/(sections.length-1)}%`}}/>

                  {/*Section navigation*/}
                  <div className='flex justify-between items-center mb-6 border-b border-gray-400 py-1'>
                  {/*template selector button*/}
                    <div className='flex items-center gap-2 '>
                      <TemplateSelector selectedTemplate={resumeData.template} onChange={(template)=>setResumeData(prev =>({...prev, template}))}/>
                      <ColourPicker selectedColor={resumeData.accent_color} onChange={(color)=>setResumeData(prev=>({...prev, accent_color:color}))}/>  
                    </div>

                    <div className='flex items-center'>
                      {activeSectionIndex !=0 &&(

                        <button onClick={()=>setActiveSectionIndex((prevIndex)=>Math.max(prevIndex-1,0))}
                         className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600
                        hover:bg-gray-50 transition-all' disabled={activeSectionIndex === 0}>
                          <ChevronLeft className='size-4'></ChevronLeft>Previous
                        </button>
                      )}

                      <button onClick={()=>setActiveSectionIndex((prevIndex)=>Math.min(prevIndex+1,sections.length-1))}
                        className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all
                          ${activeSectionIndex === sections.length-1 && 'opacity-50'}` }
                         disabled={activeSectionIndex === sections.length-1}>
                          Next
                          <ChevronRight className='size-4'></ChevronRight>
                        </button>


                    </div>

                  </div>

                   {/*Form content*/} 
                   <div className='space-y-6'>
                    {/*personal info*/}
                    {activeSection.id === 'personal' && (
                      <PersonalInfoForm data={resumeData.personal_info} onChange={(data)=>setResumeData(prev =>({...prev, personal_info:data}))}
                      removeBackground={removeBackground}
                      setRemoveBackground={setRemoveBackground}/>
                    )}
                    {/*professional summary*/}
                    {activeSection.id === 'summary' &&(
                      <ProfessionalSummaryForm data={resumeData.professional_summary} onChange={
                        (data)=>setResumeData(prev=>({...prev,professional_summary:data}))
                      } setResumeData={setResumeData}/>
                    )}
                    {/*Experience*/}
                     {activeSection.id === 'experience' &&(
                      <ExperienceForm data={resumeData.experience} onChange={
                        (data)=>setResumeData(prev=>({...prev, experience:data}))} />
                    )}
                     {activeSection.id === 'education' &&(
                      <EducationalForm data={resumeData.education} onChange={
                        (data)=>setResumeData(prev=>({...prev, education:data}))} />
                    )}
                     {activeSection.id === 'projects' &&(
                      <ProjectForm data={resumeData.project} onChange={
                        (data)=>setResumeData(prev=>({...prev, project:data}))} />
                    )}
                    {activeSection.id === 'skills' &&(
                      <SkillsForm data={resumeData.skills} onChange={
                        (data)=>setResumeData(prev=>({...prev, skills:data}))} />
                    )}
                    
                   </div>    

                   <button className='bg-gradient-to-br from-blue-100 to-blue-500 ring-blue-500
                   text-blue-900 ring hover:ring-black transition-all rounded-md px-6 py-2
                   mt-6 text-sm'>
                    Save Changes</button>  

              </div>

            </div>

            {/*Right panel-preview*/}
             <div className='lg:col-span-7 max-lg:mt-6'>
              <div className='relative w-full'>
                
                <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>
                  {/*share button*/}
                  {resumeData.public && (
                    <button onClick={handleShare} className='flex items-center p-2 px-4 gap-2 text-xs
                    bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600
                    rounded-lg ring-blue-300 hover:ring transition-colors'>
                      <Share2Icon className='size-4'/>
                        Share
                    </button>
                  )}
                  {/*Visibility  button*/}
                  <button onClick={changeResumeVisibility} className='flex items-center p-2 px-4 text-xs bg-gradient-to-br
                  from-purple-200 to-purple-500 ring-purple-400 rounded-lg hover:ring transition-colors '>
                    {resumeData.public ? <EyeIcon className='size-4'/> :
                     <EyeOff className='size-4'/>}
                     {resumeData.public ? 'public' : 'private'}
                  </button>
                  {/*Download button*/}
                  <button onClick={downloadResume} className='flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br
                  from-green-200 to-green-400 text-green-600 rounded-lg ring-green-300 hover:ring
                  transition-colors'>
                      <DownloadIcon className='size-4'/>Download
                  </button>

                </div>

              </div>

              

              {/*reume preview*/}
              <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color}/>

             </div>
          </div>

        </div>
      
    </div>
  )
}

export default NextGen
