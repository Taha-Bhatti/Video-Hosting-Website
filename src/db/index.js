import mongoose from "mongoose";

import { DB_Name } from "../constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB Connected !! DB Host ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("mongo error",error);
        process.exit(1)
        
    }
}

export default connectDb