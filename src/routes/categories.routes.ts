import express, {Request, Response}from "express";
//import { CategoriesControllers } from "../controllers/categories.controllers";


const router = express.Router();

router.get("/", (req:Request, res:Response) => {res.send("Aqui devolveria todas las categorias")})
//router.get("/", CategoriesControllers.getAllCategories);

router.post("/categories-add", (req:Request, res:Response) => {res.send("Aqui añadirias una categoria")})
//router.post("/categories-add", CategoriesControllers.createCategory);

router.get("/categories-get/:id", (req:Request, res:Response) => {res.send("Aqui devolveria UNA categoria")})
//router.get("/categories-get/:id", CategoriesControllers.getCategory);

router.put("/categories-edit/:id", (req:Request, res:Response) => {res.send("Aqui editaria una categoria")})
//router.put("/categories-update/:id", CategoriesControllers.updateCategory);

router.delete("/categories-delete/:id", (req:Request, res:Response) => {res.send("Aqui eliminarias una categoria")})
//router.delete("/categories-delete/:id", CategoriesControllers.deleteCategory);

export default router;