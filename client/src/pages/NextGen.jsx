import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, Sparkle, Sparkles, User } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'

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
    pblic: false,
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
                    <div></div>
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
                    {activeSection.id === 'personal' && (
                      <PersonalInfoForm data={resumeData.personal_info} onChange={(data)=>setResumeData(prev =>({...prev, personal_info:data}))}
                      removeBackground={removeBackground}
                      setRemoveBackground={setRemoveBackground}/>
                    )}
                   </div>      

              </div>

            </div>

            {/*Right panel-preview*/}
             <div className='lg:col-span-7 max-lg:mt-6'>

              <div>
                {/*buttons*/}
              </div>

              {/*reume preview*/}

             </div>
          </div>

        </div>
      
    </div>
  )
}

export default NextGen
