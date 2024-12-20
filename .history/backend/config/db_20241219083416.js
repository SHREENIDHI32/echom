import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shreenidhisaravanan32:Shree*!@#@cluster0.gte2x.mongodb.net/echom').then(()=>console.log("DB Connected"))
}

