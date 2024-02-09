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

export const getHomeProjectAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/home-projects`, "", "")
}

//get ALL projects

export const allProjectAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/all-projects?search=${searchKey}`
        , "", reqHeader)
}

//get User Project
export const userProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/user-projects`, "", reqHeader)
}

//edit project
export const editProjectAPI = async (id, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/project/edit/${id}`, reqBody, reqHeader)
}

//project/remove
export const deleteProjectAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/project/remove/${id}`,{},reqHeader)
 }

