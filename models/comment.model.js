import mongoose, { mongo } from "mongoose";

const commentSchema = new mongoose.Schema({
    comment_user:{
        type:String,
        required:true,
    },

    username:{
        type:String,
        required: true
    },

    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required: true,
    }

},{
    timestamps:true
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;