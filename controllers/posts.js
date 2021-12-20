import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Post from "../models/Post.js";
import res from "express/lib/response";

export const getAllPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.find().populate('author')
    res.json(posts);
});

export const getSinglePost = asyncHandler(async(req, res) => {
    const {
        params: { id }
    } = req;
    const post = await Post.findById(id).populate('author');
    if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    res.json(post);
});


