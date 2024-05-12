import axios from "axios"

export const fetchAllNotes = async()=>{
    try{
        const {data} = await axios.get('/api/fetch-all-notes')
        return data;
    } catch (error){
        throw new Error( error.response? error.response.data.message : error.message)
    }
};


export const addNote = async (note)=>{
    try {
        const {data} = await axios.post("/api/add-note", note);
        return data;
    } catch (error) {
        throw new Error( error.response? error.response.data.message : error.message)
    }
}

export const updateNote = async (note) =>{
    try {
        const {data} = await axios.post('/api/update-note', note);
        return data;
    } catch(error){
        throw new Error( error.response? error.response.data.message : error.message)
    }
}

export const deleteNote = async(_id) =>{
    try {
        const {data} = await axios.post('/api/delete-note', {_id});
        return data;
    } catch(error){
        throw new Error( error.response? error.response.data.message : error.message)
    }
}