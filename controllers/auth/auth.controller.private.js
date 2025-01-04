import authService from "../../services/auth/auth.service.private.js";

const signup = async (req, res) => {
    try {
        const { user, token } = await authService.signup(req.body);
        res.status(201).json({ message: "Signup successful", user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { user, token } = await authService.login(req.body);
        res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {
    signup,
    login,
};
