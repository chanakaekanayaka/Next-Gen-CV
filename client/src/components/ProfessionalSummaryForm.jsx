import React from 'react'
import {Sparkles} from 'lucide-react'

const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='flex items-center gap-2 text-lg font-semibold'>Professional Summary</h3>
          <p className='text-sm text-gray-600'>Add Summary for your resume here</p>
        </div>

         <button className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-300 text-purple-700
          rounded hover:bg-purple-300 transition-colors disabled:opacity-50'>
          <Sparkles className='size-4'/>
           AI Enhance
         </button>

      </div>

      <div>
        <textarea value={data || ""} onChange={(e)=>onChange(e.target.value)} rows={7} 
          className='w-full p-3 px-4 mt-2 border text-sm border-gray-400 rounded-l-lg
          focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors 
          resize-none ' placeholder='Write a compelling professional summary that highlights
          your key strengths and career objectives...'/>
          <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>
          Tip:Keep it concise (3-4 sentences) and focus on your 
          most relevent achivements and skills.</p>
      </div>
     
      
    </div>
  )
}

export default ProfessionalSummaryForm
