import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    video: {type: String, required: false},
    comment: {type: String, required: false},
    author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    date: { type: Date, default: Date.now },
    to_sale: {type: Boolean, default: false},
});

export default model('Post', postSchema);
