import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{dbName:'workManagerDB'});
        console.log("DATABASE CONNECTED");

    }catch(error){
        console.log(error);
    }
}