//require("dotenv").config({path: "C:\Users\User\Desktop\backend_project\.env"})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDb from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path: './.env'
})

connectDb()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`app listining to port ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log(`mongo failed to connect`,err);
    
})

















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