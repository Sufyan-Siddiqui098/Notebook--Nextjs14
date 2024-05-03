import mongoose from 'mongoose'

const connection = {
    isConnected: 0
}
export const connectToDatabase = async()=> {
    if(connection.isConnected){
        console.log("Already connected ")
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to Database")
       
    } catch (error) {
        console.log("Database connection failed \n", error)
        process.exit(1);
    }
}

