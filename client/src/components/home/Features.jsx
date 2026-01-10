import React from 'react'

const Features = () => {
    return (
        <section id="features" className='bg-white py-24 px-6 overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className="text-center mb-20">
                    <span className="text-indigo-600 text-sm font-bold uppercase tracking-widest px-4 py-1.5 bg-indigo-50 rounded-full">
                        Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-6 tracking-tight">
                        Powerful Features
                    </h2>
                    <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to create, customize, and elevate your professional CV — faster and smarter with AI.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AI Powered Builder */}
                    <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-violet-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                            <img src='resume.svg' className='w-12 h-12' alt="Resume Icon"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">AI-Powered Resume Builder</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Generate perfectly structured, job-winning resumes instantly using advanced AI trained on modern hiring trends.
                        </p>
                    </div>

                    {/* Smart Customization */}
                    <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                            <img src='customization.svg' className='w-12 h-12' alt="Customization Icon"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Smart Customization</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Choose from elegant, recruiter-approved templates. Adjust colors, layouts, and fonts to match your personal brand.
                        </p>
                    </div>

                    {/* Instant Export */}
                    <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                            <img src='pdf.svg' className='w-12 h-12' alt="PDF Icon"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Instant PDF Export</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Download your CV in high-quality PDF format — ready for submission, printing, or professional presentation.
                        </p>
                    </div>

                    {/* Real-Time Preview */}
                    <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                            <img src='realtime.svg' className='w-12 h-12' alt="Realtime Icon"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Real-Time Preview</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            See live updates as you edit. No need to refresh or reformat — your changes appear instantly as you type.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-rose-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-2 lg:col-span-1">
                        <div className="w-20 h-20 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                            <img src='security.svg' className='w-12 h-12' alt="Security Icon"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Data Privacy & Security</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Your information stays encrypted and private. Only you can access or edit your professional details.
                        </p>
                    </div>

                    {/* ATS Optimization (New Addition Suggestion) */}
                    <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2">
                        <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300">
                            <Zap className="text-indigo-600 size-10" /> {/* Reusing Lucide Zap for impact */}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">ATS-Friendly Layouts</h3>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Templates specifically designed to pass through Applicant Tracking Systems, ensuring your CV gets noticed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Internal Icon for the 6th card to make the grid perfect
const Zap = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M4 14.5 14 3 10 9.5 20 21l-10-6.5L14 21 4 14.5z" />
    </svg>
);

export default Features