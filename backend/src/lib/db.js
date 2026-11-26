import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const { MONGO_URI} = process.env;
        if (!MONGO_URI) throw new Error("MONGO_URL is not set");

       
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected"), conn.connection.host
         {
             };
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);// status code 1 means failure 0 means success
    }

};

export default connectDB;