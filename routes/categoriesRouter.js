import { Router } from "express";
import { getAllCategories, singleCategory } from "../controllers/categories.js";
import Category from "../models/Category.js";

const categoriesRouter = Router();

categoriesRouter.get('/', getAllCategories);
categoriesRouter.get('/:id', singleCategory);

export default categoriesRouter;