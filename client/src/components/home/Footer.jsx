import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-slate-100">
            {/* Top Section: Branding & Info */}
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="mb-8 transition-transform duration-300 hover:scale-105">
                    <img 
                        alt="NextGenCV Logo" 
                        className="h-16 w-auto"
                        src="logo.svg" 
                    />
                </div>
                
                <p className="text-center max-w-2xl text-slate-500 text-sm md:text-base leading-relaxed">
                    Empowering professionals worldwide with the most intelligent AI resume builder. 
                    Create standout CVs, tailor your profile for any job, and unlock your next career opportunity 
                    — effortlessly with <span className="text-indigo-600 font-semibold">NextGenCV</span>.
                </p>

                {/* Social Links Container */}
                <div className="flex items-center justify-center gap-6 mt-10">
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" 
                    className="text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                        </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
                    className="text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noreferrer" 
                    className="text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" 
                        height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" 
                    className="text-slate-400 hover:text-indigo-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                            <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="border-t border-slate-100 bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        <a href="https://NextGenCV.com" className="text-slate-900
                         hover:text-indigo-600 transition-colors font-bold">NextGenCV</a> 
                        &nbsp;© {new Date().getFullYear()}. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer