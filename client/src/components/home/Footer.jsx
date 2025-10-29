import React from 'react'

const Footer = () => {
  return (
    <div>

         <footer className="w-full   text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6 hover:scale-105  duration-300">
                    <img alt="" className="h-20 justify-center items-center flex"
                        src="logo.svg" />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Empowering professionals worldwide with the most intelligent AI resume builder.
              Create standout CVs, tailor your profile for any job, and unlock your next career opportunity — effortlessly with NextGenCV.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://prebuiltui.com">NextGenCV</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
