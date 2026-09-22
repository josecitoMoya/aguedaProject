import express,{ Request, Response} from "express";
import { UserController } from "../controllers/user.controllers";


const router = express.Router();

router.get("/", UserController.getAllUsers);

router.post("/signup", UserController.createUser);

router.post("/login", UserController.getUser);

router.put("/update/:dni", UserController.updateUser);

router.delete("/delete/:dni", UserController.deleteUser);

export default router;