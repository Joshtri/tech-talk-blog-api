import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    email_subscription:{
        type:String,
        required:true,
    },

    whats_app_subscription:{
        type:String,
        required: true
    },

},{
    timestamps:true
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;