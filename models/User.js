import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});
