import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0
    }
});
const UserModel = mongoose.model('User', userSchema);

export default UserModel;
