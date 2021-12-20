import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    street: {type: String, required: true},
    house_number: {type: String, required: true},
    city: {type: String, required: true},
    zip_code: {type: String, required: true},
    country: {type: String, required: true},
    phone_number: {type: String, required: false},
    is_admin: {type: Boolean, default: false},
});

export default model('User', userSchema);
