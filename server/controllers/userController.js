import User from "../models/User.js"

//Get user data
export const getUserData = async(req,res) => {
    const userId = req.auth.userId
    try {
        const user = await User
    } catch (error) {
        
    }
}

//Apply for a job
export const applyForJob = async(req,res) => {

}

//Get user applied applications
export const getUserJobApplications = async(req,res) => {

}

//update user profile (resume)
export const updateUserResume = async(req,res) => {

}