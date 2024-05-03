// 'use server'
import axios from 'axios'

export const loginUser = async(credentials)=>{
    try {
       const {data} = await axios.post('/api/login', credentials);
        return data;

    } catch (error) {
        throw new Error( error.response? error.response.data.message : error.message)
    }   
}

export const regisgerUser = async(credentials)=>{
    try {
        const {data} = await axios.post("/api/register", credentials);
        return data;
    } catch (error) {
        throw new Error( error.response? error.response.data.message : error.message)
    }
}

export const logoutUser = async()=>{
    try {
        const {data} = await axios.get('/api/logout');
        console.log("Logout response ", data)
        return data;
    } catch (error) {
        // return {success: false, message: error.message}
        throw new Error( error.response? error.response.data.message : error.message)
    }
}