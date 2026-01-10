import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Layout, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
    const { user } = useSelector(state => state.auth)
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="relative min-h-screen bg-white overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                    <div className="absolute top-28 left-1/4 size-72 sm:size-96 bg-emerald-400/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 size-72 sm:size-96 bg-indigo-400/20 blur-[120px] rounded-full"></div>
                </div>

                {/* Navbar */}
                <nav className="relative z-50 flex items-center justify-between w-full py-6 px-6 md:px-16 lg:px-24 xl:px-40">
                    <Link to="/" className='transition-transform hover:scale-105 duration-300'>
                        <img src='/logo.svg' alt="logo" className='h-10 md:h-12 w-auto' />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
                        {['Home', 'Features', 'Feedback', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        {!user ? (
                            <>
                                <Link to='/app?state=login' className="px-6 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
                                    Login
                                </Link>
                                <Link to='/app?state=register' className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 text-white text-sm font-semibold rounded-full transition-all active:scale-95">
                                    Get started
                                </Link>
                            </>
                        ) : (
                            <Link to='/app' className='px-8 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-full transition-all shadow-xl'>
                                Dashboard
                            </Link>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 text-slate-600">
                        <Menu className="size-6" />
                    </button>
                </nav>

                {/* Mobile Menu Sidebar */}
                <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-between items-center mb-12">
                            <img src='/logo.svg' alt="logo" className='h-10 w-auto' />
                            <button onClick={() => setMenuOpen(false)}><X className="size-7 text-slate-600" /></button>
                        </div>
                        <div className="flex flex-col gap-8 text-2xl font-semibold text-slate-800">
                            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
                            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Feedback</a>
                            <a href="#cta" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                        <div className="mt-auto flex flex-col gap-4">
                            <Link to="/app" className="w-full py-4 bg-indigo-600 text-white text-center rounded-2xl font-bold">Get Started</Link>
                        </div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center pt-20 md:pt-32 px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-8">
                        <Sparkles className="size-3" />
                        <span>Trusted by 10,000+ Job Seekers</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold max-w-5xl text-slate-900 tracking-tight leading-[1.1]">
                        Design your dream career profile with 
                        <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                            NextGenCV’s AI Builder
                        </span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-slate-500 mt-8 leading-relaxed">
                        Stand out from the crowd with professional, AI-optimized resume templates. 
                        Get hired faster with a CV that beats the ATS every single time.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
                        <Link to={'/app'} className="group bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-4 text-lg font-bold shadow-2xl shadow-indigo-200 transition-all flex items-center gap-2 hover:-translate-y-1">
                            Start Building Now
                            <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="#features" className="px-10 py-4 text-lg font-bold text-slate-600 hover:text-slate-900 transition-colors">
                            See Templates
                        </a>
                    </div>

                    {/* Floating Badges */}
                    <div className="hidden lg:flex items-center gap-12 mt-20 text-slate-400">
                        <div className="flex items-center gap-2">
                            <Zap className="size-5" />
                            <span className="text-sm font-medium">AI Powered</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layout className="size-5" />
                            <span className="text-sm font-medium">ATS-Friendly</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="size-5" />
                            <span className="text-sm font-medium">Data Secured</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                    * {
                        font-family: 'Poppins', sans-serif;
                        scroll-behavior: smooth;
                    }
                `}
            </style>
        </>
    )
}

export default Hero