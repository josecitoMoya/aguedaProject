import express, {Request, Response}from "express";
import { CategoriesControllers } from "../controllers/categories.controllers";


const router = express.Router();

router.get("/", CategoriesControllers.getAllCategories);

router.post("/categories-add", CategoriesControllers.createCategory);

router.get("/categories-get/:id", CategoriesControllers.getCategory);

router.put("/categories-edit/:id", CategoriesControllers.updateCategory);

router.delete("/categories-delete/:id", CategoriesControllers.deleteCategory);

export default router;

