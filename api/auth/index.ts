import { loginUrl, registrationUrl } from '../urls';
import axios from 'axios'
import https from 'https'

interface loginData {
    struct_type: string,
    phone: number
}

interface registrationData {
    phone: string,
    username?: string,
    city?: string,
    password: string
}

export const login = (loginData: loginData) => {
    const agent = new https.Agent({
        rejectUnauthorized: false
    })
    return axios({
        method: 'POST',
        url: loginUrl,
        data: loginData,
        httpsAgent: agent
    }).then((response) => {
        return response.data
    }).catch((error) => {
        throw new error(Error)
    })
}

export const registration = (registrationData: registrationData) => {
    return axios({
        method: 'POST',
        url: registrationUrl,
        data: registrationData
    }).then((response) => {
        return response.data
    }).catch((error) => {
        throw new error(Error)
    })
}