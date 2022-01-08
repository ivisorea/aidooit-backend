import mongoose from "mongoose";

const { Schema, model } = mongoose;

const categorySchema = new Schema({
    
    name: { type: String, required: true },
    image: { type: String, required: true },
    
});

export default model('Category', categorySchema);