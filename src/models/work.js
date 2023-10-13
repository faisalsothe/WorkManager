import mongoose, { Schema } from "mongoose";

const workSchema=new Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
    }
);

export const Work=mongoose.models.works || mongoose.model("works",workSchema);