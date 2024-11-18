import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import router from "./routes/routes.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use('/api', router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`);
});