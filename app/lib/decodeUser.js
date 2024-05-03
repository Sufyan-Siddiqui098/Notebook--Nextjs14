import jwt from "jsonwebtoken"

export const decodeToken = (token)=>{
    try{
        const decoded = jwt.decode(token, process.env.JWT_SECRET_KEY);
        return decoded;
    } catch(error){
        console.log("Error while decoding ", error)
    }
} 