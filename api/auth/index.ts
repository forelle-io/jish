import { loginUrl, registrationUrl } from '../urls';
import axios from 'axios'

interface loginData {
    phone: string,
    password: string
}

interface registrationData {
    phone: string,
    username?: string,
    city?: string,
    password: string
}

export const login = (loginData: loginData) => {
    return axios({
        method: 'POST',
        url: loginUrl,
        data: loginData
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