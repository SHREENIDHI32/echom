import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://shreenidhisaravanan32:<db_password>@cluster0.gte2x.mongodb.net/').then(()=>console.log("DB Connected"))
}

