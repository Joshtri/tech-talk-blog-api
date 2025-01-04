import User from "../../models/user.model.js";

const findUserByEmail = async (email) => {
    return await User.findOne({ username: email });
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

export default {
    findUserByEmail,
    createUser,
};
