import mongoose from "mongoose";

const connectState = {
    0: "Disconnected",
    1: "Connected",
    2: "Connecting",
    3: "Disconnecting",
    99: "Uninitialized"
}; 

export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`MongoDB is ${connectState[mongoose.connection.readyState]}`)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
