import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
        console.log(`MongoDb conncet on ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log(`ERROR WHILE CONNECTION TO DATABASE ${DB_NAME}`);
    }
}

export default connectDB