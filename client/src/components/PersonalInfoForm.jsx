import { BriefcaseBusiness, Globe, Icon, Linkedin, Mail, MapPin, Phone, User, Camera } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {

    const handleChange = (field, value) => {
        onChange({ ...data, [field]: value })
    }

    const fields = [
        { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
        { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
        { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
        { key: "location", label: "Location", icon: MapPin, type: "text" },
        { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text" },
        { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
        { key: "website", label: "Personal Website", icon: Globe, type: "url" }
    ]

    return (
        <div className="bg-white rounded-2xl p-1">
            <div className="mb-8">
                <h3 className='text-xl font-bold text-slate-900'>Personal Information</h3>
                <p className='text-sm text-slate-500'>This information will appear at the top of your resume.</p>
            </div>

            {/* Profile Image Section */}
            <div className='flex items-center gap-6 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100'>
                <label className="relative cursor-pointer group">
                    {data.image ? (
                        <div className="relative">
                            <img
                                src={typeof data.image === "string"
                                    ? data.image
                                    : URL.createObjectURL(data.image)}
                                alt="user-image"
                                className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md group-hover:opacity-90 transition-all"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="text-white size-6" />
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center w-20 h-20 bg-white border-2 border-dashed border-slate-300 rounded-full text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-500 transition-all'>
                            <User className='size-8' />
                        </div>
                    )}
                    <input type='file' accept='image/jpeg, image/png' className='hidden' onChange={(e) => handleChange("image", e.target.files[0])} />
                </label>

                <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-700 mb-1">Profile Photo</p>
                    <p className="text-xs text-slate-500 mb-3">JPG or PNG. Max size of 800K</p>
                    
                    {typeof data.image === 'object' && (
                        <div className="flex items-center gap-3">
                            <label className="relative inline-flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={removeBackground}
                                    onChange={() => setRemoveBackground(!removeBackground)}
                                />
                                <div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:bg-indigo-600 transition-all duration-300"></div>
                                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </label>
                            <span className="text-sm font-medium text-slate-600">Remove Background</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {fields.map((field) => {
                    const Icon = field.icon;

                    return (
                        <div key={field.key} className={`space-y-1.5 ${field.key === 'full_name' || field.key === 'email' ? 'md:col-span-1' : ''}`}>
                            <label className='flex items-center gap-2 text-sm font-semibold text-slate-700'>
                                <Icon className='size-4 text-slate-400' />
                                {field.label}
                                {field.required && <span className='text-rose-500'>*</span>}
                            </label>
                            <input
                                type={field.type}
                                value={data[field.key] || ""}
                                onChange={(e) => handleChange(field.key, e.target.value)}
                                className='w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200'
                                placeholder={`e.g. ${field.label === 'Location' ? 'New York, NY' : field.label}`}
                                required={field.required}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default PersonalInfoForm