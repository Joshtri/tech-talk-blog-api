// import * as commentController from "../../controllers/comment/comment.public.controller.js";
import { commentPublicController } from "../../controllers/comment/index.js";
import express from "express";
const commentPublicRoute = express.Router();



commentPublicRoute.get("/comment/:id", commentPublicController.getCommentByIdPost);
commentPublicRoute.post("/comment", commentPublicController.postComment);

commentPublicRoute.get("/comment/count/:id", commentPublicController.countCommentByPostId);


export default commentPublicRoute;