// corsConfig.js

export const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = ["http://localhost:5173", "https://tech-talks-blog.com"];
        
        // Check if the origin is in the allowed origins list or is undefined (e.g., Postman or server-side requests)
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error("Not allowed by CORS")); // Block the request
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};