//require("dotenv").config({path: "C:\Users\User\Desktop\backend_project\.env"})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";

import connectDb from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDb()
/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        
    } catch (error) {
        console.error("MongoDb error",error);
        throw error
        
    }

})()

*/