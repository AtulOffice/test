import UserModel from "../model/sample.model.js";


export const createUser = async (req, res) => {
    try {
        const { surname, name, age } = req.body;
        const data = await UserModel.create({ name, surname, age });
        return res.status(200).json({
            success: true,
            message: "data created successfully",
            data: data
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const data = await UserModel.find();
        return res.status(200).json({
            success: true,
            message: "data fetch successfully",
            data: data
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const getUserByname = async (req, res) => {
    try {
        const { name } = req.params;
        const user = await UserModel.find({ name });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        });

    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const updateUserbyname = async (req, res) => {
    try {
        const { name } = req.params;
        const { surname, age } = req.body;
        let user = await UserModel.findOne({ name });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.surname = surname || user.surname;
        user.age = age || user.age;
        await user.save();
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const updateUsername = async (req, res) => {
    try {
        const { name } = req.body;
        const data = await UserModel.findByIdAndUpdate(req.params.id, { name }, { new: true })
        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            data
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true, message: "User deleted successfully"
        })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
};
