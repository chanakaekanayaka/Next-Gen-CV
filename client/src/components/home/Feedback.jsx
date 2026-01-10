import React from 'react'
import { Star } from 'lucide-react'

const Feedback = () => {
    const testimonials = [
        {
            name: "Donald Jackman",
            role: "Graduate Student",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
            text: "NextGenCV made my job hunt so much easier. The AI suggestions for my bullet points were spot on and helped me land three interviews in one week!"
        },
        {
            name: "Richard Nelson",
            role: "High School Teacher",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
            text: "I haven't updated my resume in years. This tool guided me through the whole process, and the templates are modern and very professional-looking."
        },
        {
            name: "James Washington",
            role: "Software Engineer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
            text: "As a dev, I appreciate the clean layouts. It’s the fastest I’ve ever built a CV that actually looks good and passes the ATS scans easily."
        }
    ]

    return (
        <section id="testimonials" className="bg-slate-50/50 py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Trusted by Job Seekers Worldwide
                    </h2>
                    <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                        Thousands have advanced their careers with AI-powered resumes. Now it’s your turn to stand out.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((item, index) => (
                        <div 
                            key={index} 
                            className="w-full md:w-[350px] flex flex-col items-start p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
                                "{item.text}"
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-50 w-full">
                                <img 
                                    className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-50" 
                                    src={item.image} 
                                    alt={item.name} 
                                />
                                <div className="text-left">
                                    <h4 className="text-base text-slate-900 font-bold group-hover:text-indigo-600 transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feedback