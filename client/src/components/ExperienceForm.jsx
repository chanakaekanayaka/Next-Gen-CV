import { Plus } from 'lucide-react'
import React from 'react'

const ExperienceForm = ({data, onChange}) => {

  

  return (
    <div className='space-y-6'>
        <div className='flex items-center justify-between'>
        <div>
          <h3 className='flex items-center gap-2 text-lg font-semibold'>Professional Experience</h3>
          <p className='text-sm text-gray-600'>Add your job experience</p>
        </div>

         <button className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-300 text-purple-700
          rounded hover:bg-purple-300 transition-colors'>
          <Plus className='size-4'/>
           Add Experience
         </button>

      </div>
      
    </div>
  )
}

export default ExperienceForm
