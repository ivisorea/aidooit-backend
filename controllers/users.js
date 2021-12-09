import asyncHandler from "../middleware/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const singUp = asyncHandler(async (req, res, next) => {
    const {
        body: { name, email, password }
      } = req;
      if (!name || !email || !password)
        throw new ErrorResponse('Name, email and password are required', 400);
      const found = await User.findOne({ email });
      if (found) throw new ErrorResponse('User already exist', 403);
      const hash = await bcrypt.hash(password, 5);
      const { _id, name: username } = await User.create({ name, email, password: hash });
      const token = jwt.sign({ _id, username }, process.env.JWT_SECRET, { expiresIn: 3600 });
      res.json({ token });
});

export const singIn = asyncHandler(async (req, res, next) => {
    
    });

export const getMe = asyncHandler(async (req, res, next) => {
    res.json(req.user);
    });

export const logout = asyncHandler(async (req, res, next) => {

    });