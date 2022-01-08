import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Post from "../models/Post.js";

//Get all posts
export const getAllPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.find().populate('author')
    res.json(posts);
});

// Create post
export const createPost = asyncHandler(async (req, res) => {
    const {
        body, category, comments,
        user: { _id }
        
    } = req;
    const newPost = await Post.create({
        ...body, author: _id
    });
    
    res.status(201).json(newPost);
});

//Get Single Post
export const getSinglePost = asyncHandler(async(req, res) => {
    const {
        params: { id }
    } = req;
    const post = await Post.findById(id).populate('author');
    if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
    res.json(post);
});

//Update Post
export const updatePost = asyncHandler(async(req, res) => {
    const {
        user,
        params: { id },
        body
    } = req;
    const postToUpdate = await Post.findById(id);
    if (!postToUpdate) 
        throw new ErrorResponse(`Post with id of ${id} not found, could not update`, 404);
    if (user.id !== postToUpdate.author.toString()) 
        throw new ErrorResponse(`User ${user.first_name} is not authorized to update this post`, 403);
    const updatedPost = await Post.findByIdAndUpdate({_id: id}, body, {
        new: true
    });
    res.json(updatedPost);
});

//Delete Post
export const deletePost = asyncHandler(async(req, res) => {
    const {
        user,
        params: { id }
    } = req;
    const postToDelete = await Post.findById(id);
    if (!postToDelete) 
        throw new ErrorResponse(`Post with id of ${id} not found, could not delete`, 404);
    if (user.id !== postToDelete.author.toString()) 
        throw new ErrorResponse(`User ${user.first_name} is not authorized to delete this post`, 403);
    const deleted = await Post.findByIdAndDelete({_id: id});
    if (!deleted) 
        throw new ErrorResponse(`Post with id of ${id} not found, could not delete`, 404);
    res.json({ success: `Post with id of ${id} deleted` });
});

