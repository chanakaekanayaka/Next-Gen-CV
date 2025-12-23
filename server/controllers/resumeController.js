//controller for creating a new resume
//post: /api/resumes/create

import Resume from "../models/Resume";

export const createResume = async (req,res)=>{
    try {
        const userId = req.userId;
        const {title} = req.body

        //create new resume 
        const newResume = await Resume.create({userId, title})
        //return sucess message
        return res.status(201).json({message:'Resume created successflly',
        resume: newResume
        })
        
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

//controller for deleting a  resume
//post: /api/resumes/delete

export const deleteResume = async (req,res)=>{
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        //delete resume 
        await Resume.findOneAndDelete({userId,_id:resumeId})
        //return sucess message
        return res.status(200).json({message:'Resume deleted successflly'})
        
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

//get user resume by ID
//GET: /api/resumes/get

export const getResumeById = async (req,res)=>{
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        const resume  = await Resume.findOne({userId, _Id:resumeId})

        if(!resume){
            return res.status(404).json({message:"resume not found"})
        }
        resume._v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;
        return res.status(200).json({resume})
        
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

// get resume by id public
// GET: /api/resumes/public

export const getPublicResumeId = async (req,res)=>{
    try{
        const {resumeId} = req.params;
        const resume = await Resume.findOne({public:true, _id:resumeId})

        if(!resume){
            return res.status(404).json({message:"Resume not found"})
        }
        return res.status(200).json({resume})
    }catch(error){
        return res.status(400).json({message:error.message})
    }
}


//controller for updating a resume
//PUT: /api/resume/update
export const updateResume  = async (req, res)=>{
    try {
        const userId = req.userId;
        const {resumeId,resumeData, removeBackground}=req.body
        const image = req.file;

        let resumeDataCopy = JSON.parse(resumeData);

        const resume = await Resume.findByIdAndUpdate({userId,_id:resumeId},
        resumeDataCopy,{new:true})

        return res.status(200).json({message:'saved sucessfully',resume})
        
    } catch (error) {
         return res.status(400).json({message:error.message})
    }
}