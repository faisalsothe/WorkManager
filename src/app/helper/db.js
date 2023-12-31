import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL,
            {useNewUrlParser: true,   
            useUnifiedTopology: true
            });
        console.log("DATABASE CONNECTED");
    }catch(error){
        console.log(error);
    }
}
