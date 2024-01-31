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