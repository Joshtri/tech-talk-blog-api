import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../../repositories/user/user.repository.private.js";
import { validateSignup, validateLogin } from "../../validations/user.validation.js";

const signup = async (userData) => {
    // Validasi data
    const { error } = validateSignup(userData);
    if (error) throw new Error(error.details[0].message);

    // Cek apakah email sudah terdaftar
    const existingUser = await userRepository.findUserByEmail(userData.username);
    if (existingUser) throw new Error("Email already registered");

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Simpan user ke database
    const user = await userRepository.createUser({
        ...userData,
        password: hashedPassword,
    });

    // Generate JWT
    const token = user.generateAuthToken();

    return { user, token };
};

const login = async (loginData) => {
    // Validasi data
    const { error } = validateLogin(loginData);
    if (error) throw new Error(error.details[0].message);

    // Cek apakah user ada
    const user = await userRepository.findUserByEmail(loginData.username);
    if (!user) throw new Error("Invalid email or password");

    // Validasi password
    const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
    if (!isPasswordValid) throw new Error("Invalid email or password");

    // Generate JWT
    const token = user.generateAuthToken();

    return { user, token };
};

export default {
    signup,
    login,
};
