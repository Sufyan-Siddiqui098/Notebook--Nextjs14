import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Please provide firstname"]
    }, 
    lastname: {
        type: String,
    },
    username: {
        type: String, 
        unique: true,
        required: [true, "Please provide username"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please provide email "]
    },
    password: {
        type: String,
        required: true,
    },
    resetkey: {
        type: String, 
    }

}, {timestamps:true});

const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User;