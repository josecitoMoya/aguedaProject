import express from "express";
import { UserController } from "../controllers/user.controllers";


const router = express.Router();

router.get("/", UserController.getAllUsers);

router.post("/users-login", UserController.loginUser);

router.post("/users-add", UserController.createUser);

router.get("/users-get/:id", UserController.getUser);

router.put("/users-update/:id", UserController.updateUser);

router.delete("/users-delete/:id", UserController.deleteUser);

export default router;