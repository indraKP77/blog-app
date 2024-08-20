import mongoose from "mongoose";

export const ConnectDB = async() => {
    await mongoose.connect("mongodb+srv://indravip3:indraKP@77@cluster0.hqgpx0j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DB connected");
}