import imagekit from "../configs/imagekit.js";
import Resume from "../models/Resume.js";
import fs from 'fs';

export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body
    const newResume = await Resume.create({ userId, title })
    return res.status(201).json({ message: 'Resume created successfully', resume: newResume })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;
    await Resume.findOneAndDelete({ userId, _id: resumeId })
    return res.status(200).json({ message: 'Resume deleted successfully' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

   
    const resume = await Resume.findOne({ userId, _id: resumeId })

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" })
    }
    return res.status(200).json({ resume })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const getPublicResumeId = async (req, res) => {
  try {
    const { resumeId } = req.params;
    const resume = await Resume.findOne({ public: true, _id: resumeId })
    if (!resume) return res.status(404).json({ message: "Resume not found" })
    return res.status(200).json({ resume })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const resumeId = req.body.resumeId || req.params.resumeId;
    const { resumeData, removeBackground } = req.body;
    const image = req.file;

    if (!resumeId) return res.status(400).json({ message: "Resume ID is required" });

    let resumeDataCopy = typeof resumeData === 'string' ? JSON.parse(resumeData) : structuredClone(resumeData);

    if (image) {
      const imageBufferData = fs.createReadStream(image.path);
      const response = await imagekit.files.upload({
        file: imageBufferData,
        fileName: `resume_${resumeId}.png`,
        folder: 'user-resumes',
        transformation: {
          pre: 'w-300,h-300,fo-face,z-0.75' + (removeBackground === "yes" ? ',e-bgremove' : '')
        }
      });
      resumeDataCopy.personal_info.image = response.url;
      // Clean up local temp file
      fs.unlinkSync(image.path);
    }

    const resume = await Resume.findOneAndUpdate(
      { _id: resumeId, userId: userId },
      resumeDataCopy,
      { new: true, runValidators: true }
    );

    if (!resume) return res.status(404).json({ message: "Resume not found" });

    return res.status(200).json({ message: 'Saved successfully', resume });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(400).json({ message: error.message });
  }
}