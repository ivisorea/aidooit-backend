import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import Category from "../models/Category.js";

export const getAllCategories = asyncHandler(async (req, res, next) => {
    const categories = await Category.find();
    res.json(categories);
});

export const singleCategory = asyncHandler(async (req, res, next) => {
    const {
        params: { id }
    } = req;
    const category = await Category.findById(id);
    if (!category) throw new ErrorResponse(`Category with id of ${id} not found`, 404);
    res.json(category);
}
);
 