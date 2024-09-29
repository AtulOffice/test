import mongoose from "mongoose"

export const CONNECTION_DB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("database connection established")
    }
    catch (error) {
        console.log(error)
    }
}