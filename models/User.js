import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    street: {type: String, required: false},
    house_number: {type: String, required: false},
    city: {type: String, required: false},
    zip_code: {type: String, required: false},
    country: {type: String, required: false},
    phone_number: {type: String, required: false},
    is_admin: {type: Boolean, default: false},
});

export default model('User', userSchema);
