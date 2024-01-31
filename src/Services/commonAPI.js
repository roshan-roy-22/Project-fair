import axios from 'axios'

export const commonAPI = async (httpReqest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpReqest,
        url, data: reqBody, headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((err) => {
        return err
    })
}