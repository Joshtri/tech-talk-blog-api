import Comment from "../models/comment.model.js";
import { faker } from '@faker-js/faker';


// Controller functions
export const getCommentByIdPost = async (req, res) => {
    try {
        const { id } = req.params; // Extract postId from the request parameters
        const postData = await Comment.find({ postId: id });
        res.json(postData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Controller function to post a new comment
export const postComment = async (req, res) => {
    try {
        const { comment_user, postId } = req.body;

        // Generate default comment_user name if not provided
        const username = req.body.username || faker.internet.userName();

        // Create a new comment
        const newComment = new Comment({
            comment_user,
            username,
            postId
        });

        // Save the new comment to the database
        const savedComment = await newComment.save();

        // Send a success response
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const countCommentById = async(req,res)=>{
    try {

        const {id}= req.params;
        const totalComment = await Comment.countDocuments({
            postId:id
        });

        res.status(201).json(totalComment);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}