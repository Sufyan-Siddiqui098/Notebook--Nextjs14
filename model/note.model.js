import mongoose, {Schema} from "mongoose";

const NoteSchema = new Schema({
    user:{
       type: mongoose.Schema.Types.ObjectId, //stores userID in the user
       ref: 'user'  //Referencing to the user model
    },
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true,
    },
}, {timestamps: true});

const Note = mongoose.models.note || mongoose.model("note", NoteSchema)

export default Note
