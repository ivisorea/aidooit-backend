import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    body: { type: String, required: true },
    comments: [{ body: String, date: Date }],
    author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    date: { type: Date, default: Date.now },
    category: {type: Schema.Types.ObjectId, required: true, ref: 'Category'},
});

export default model('Post', postSchema);
