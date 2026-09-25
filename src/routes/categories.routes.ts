import express, {Request, Response}from "express";
//import { CategoriesController } from "../controllers/categories.controllers";


const router = express.Router();

router.get("/", (req:Request, res:Response) => {res.send("Aqui devolveria todas las categorias")})
//router.get("/", CategoriesController.getAllCategories);

router.post("/categories-add", (req:Request, res:Response) => {res.send("Aqui añadirias una categoria")})
//router.post("/categories-add", UserCategories.createCategory);

router.get("/categories-get/:id", (req:Request, res:Response) => {res.send("Aqui devolveria UNA categoria")})
//router.get("/categories-get/:id", UserCategories.getCategory);

router.put("/categories-edit/:id", (req:Request, res:Response) => {res.send("Aqui editaria una categoria")})
//router.put("/categories-update/:id", CategoriesController.updateCategory);

router.delete("/categories-delete/:id", (req:Request, res:Response) => {res.send("Aqui eliminarias una categoria")})
//router.delete("/categories-delete/:id", CategoriesController.deleteCategory);

export default router;