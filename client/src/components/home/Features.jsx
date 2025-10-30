import React from 'react'

const Features = () => {
  return (
    <div className=''>

        <div className='py-[50px] '>
           
            <h1 className="text-3xl font-semibold text-center mx-auto ">Powerful Features</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to create, customize, and elevate your professional CV — faster and smarter with AI.</p>
            
            <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0  ">
                <div className=" flex flex-col text-center items-center justify-center  rounded-xl p-6  border border-violet-200 gap-6 max-w-sm hover:bg-blue-200 hover:scale-105  duration-300">
                   <img src='resume.svg' className='w-18 hover:rotate-8'/>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">AI-Powered Resume Builder</h3>
                        <p className="text-sm text-slate-600">Generate perfectly structured, job-winning resumes instantly using advanced AI trained on modern hiring trends.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm  hover:bg-blue-300 hover:scale-105  duration-300">
                     <img src='customization.svg' className='w-18 hover:rotate-8 '/>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Smart Customization & Templates</h3>
                        <p className="text-sm text-slate-600">Choose from elegant, recruiter-approved templates. Adjust colors, layouts, and fonts to match your personal brand.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm  hover:bg-blue-200 hover:scale-105  duration-300">
                    <img src='pdf.svg' className='w-18 hover:rotate-8'/>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Instant PDF & DOCX Export</h3>
                        <p className="text-sm text-slate-600">Download your CV in multiple formats — ready for submission, printing, or professional presentation.</p>
                    </div>
                </div>
                 <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm  hover:bg-blue-300 hover:scale-105  duration-300">
                   <img src='realtime.svg' className='w-18 hover:rotate-8'/>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Real-Time Preview</h3>
                        <p className="text-sm text-slate-600">See live updates as you edit your information. No need to refresh or reformat — your changes appear instantly.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm  hover:bg-blue-200 hover:scale-105  duration-300">
                    <img src='security.svg' className='w-18 hover:rotate-8'/>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Data Privacy & Security</h3>
                        <p className="text-sm text-slate-600">Your information stays encrypted and private. Only you can access or edit your professional details.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Features
