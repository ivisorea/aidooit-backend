import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import User from "../models/User.js";

export const getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find().populate('first_name');
    res.json(users);
});

export const signUp = asyncHandler(async (req, res, next) => {
    const {
        body: { first_name, last_name, email, password }
      } = req;
      if (!first_name || !last_name || !email || !password)
        throw new ErrorResponse('First name, last name, email and password are required', 400);
      const found = await User.findOne({ email });
      if (found) throw new ErrorResponse('User already exist', 403);
      const hash = await bcryptjs.hash(password, 5);
      const { _id, first_name: username } = await User.create({ first_name, last_name, email, password: hash });
      const token = jwt.sign({ _id, username }, process.env.JWT_SECRET, { expiresIn: 3600 });
      res.json({ token });
});

export const signIn = asyncHandler(async (req, res, next) => {
    const {
        body: { email, password }
      } = req;
      if (!email || !password) throw new ErrorResponse('Email and password are required', 400);
      const found = await User.findOne({ email }).select('+password');
      if (!found) throw new ErrorResponse('User does not exist', 404);
      const { _id, name: username, password: hash } = found;
      const match = await bcryptjs.compare(password, hash);
      if (!match) throw new ErrorResponse('Password is not correct', 401);
      const token = jwt.sign({ _id, username }, process.env.JWT_SECRET, { expiresIn: 3600 });
      res.json({ token });
    });

export const getMe = asyncHandler(async (req, res) => {
  res.json(req.user);
    });

    export const updateUser = asyncHandler(async(req, res) => {
      const {
          user,
          params: { id },
          body: { first_name, last_name, user_image, street, city, zip_code, country, phone_number, house_number }
      } = req;
      const userToUpdate = await User.findById(id);
      if (user.id !== userToUpdate._id.toString()) 
          throw new ErrorResponse(`User ${user.first_name} is not authorized to update this user`, 403);
      const updatedUser = await User.findByIdAndUpdate({_id: id}, {first_name, last_name, user_image, street, city, zip_code, country, phone_number, house_number}, {
          new: true
      });
      res.json(updatedUser);
  });