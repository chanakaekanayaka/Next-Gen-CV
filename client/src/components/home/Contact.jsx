import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="bg-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-indigo-100 rounded-full text-indigo-600 bg-indigo-50 mb-6">
                        Reach Out To Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        We'd Love to Hear From You
                    </h2>
                    <p className="text-lg text-slate-500 mt-4 max-w-2xl">
                        Have a question about our AI builder? Our team is here to help you design the perfect career path.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Email Card */}
                    <div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-300">
                        <div className="bg-indigo-600 text-white p-3 rounded-2xl w-fit group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-indigo-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 4.125H3A1.125 1.125 0 0 0 1.875 5.25V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V5.25A1.125 1.125 0 0 0 21 4.125m-2.892 2.25L12 11.974 5.892 6.375zM4.125 17.625V7.808l7.115 6.522a1.125 1.125 0 0 0 1.52 0l7.115-6.522v9.817z" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mt-6">Email Support</h3>
                        <p className="text-slate-500 mt-2 mb-6 text-sm">Our team usually responds within a few hours.</p>
                        <a href="mailto:chanakaekanayaka15@gmail.com" className="text-indigo-600 font-bold hover:text-indigo-700 break-all transition-colors">
                            chanakaekanayaka15@gmail.com
                        </a>
                    </div>

                    {/* Office Card */}
                    <div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-300">
                        <div className="bg-indigo-600 text-white p-3 rounded-2xl w-fit group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-indigo-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75zm-13.875-4.5h9.75v14.25h-1.5V15a1.125 1.125 0 0 0-1.125-1.125h-4.5A1.125 1.125 0 0 0 7.125 15v4.125h-1.5zm6 14.25h-2.25v-3h2.25zM6.75 7.5a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 7.5m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 11.25 7.5m-4.5 3.75a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 11.25m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75a1.125 1.125 0 0 1-1.125-1.125" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mt-6">Visit Our Office</h3>
                        <p className="text-slate-500 mt-2 mb-6 text-sm">Stop by for a coffee and a career chat.</p>
                        <address className="not-italic text-indigo-600 font-bold tracking-tight">
                            No 11, Kailagoda, Badulla, Sri Lanka
                        </address>
                    </div>

                    {/* Phone Card */}
                    <div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-300">
                        <div className="bg-indigo-600 text-white p-3 rounded-2xl w-fit group-hover:rotate-[360deg] transition-transform duration-700 shadow-lg shadow-indigo-200">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mt-6">Call Us Directly</h3>
                        <p className="text-slate-500 mt-2 mb-6 text-sm">Speak with our support experts now.</p>
                        <a href="tel:+94786365087" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                            (+94) 78 636 5087
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact