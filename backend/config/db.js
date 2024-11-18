import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB successfully");
    }catch(err){
        console.log("Database connection failed:",err);
    }
};

export default connectDB;