import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//register 

export const registerAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, user, "")
}

//login

export const loginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, user, "");
}

//add project

export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/addproject`, reqBody, reqHeader);
}

//getHomeProjects

export const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"","")
}

//get ALL projects

export const allProjectAPI= async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects`,"",reqHeader)
}

//get User Project
export const userProjectAPI= async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}