import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const singUp = asyncHandler(async (req, res, next) => {

});

export const singIn = asyncHandler(async (req, res, next) => {
    
    });

export const getMe = asyncHandler(async (req, res, next) => {
    res.json(req.user);
    });

export const logout = asyncHandler(async (req, res, next) => {

    });