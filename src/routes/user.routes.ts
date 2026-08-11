import express,{ Request, Response} from "express";
import { UserController } from "../controllers/user.controllers";


const router = express.Router();

//aqui toi testeando de que lleguen los datos al backend
router.get("/", (req: Request, res: Response) => {
  res.send({ message: "Estoy en Users!" });
});

router.post("/signup", UserController.prototype.createUser);

router.get("/login", (req: Request, res: Response) => {
  res.send({ message: "Aqui se loguea un usuario!" });
});

export default router;
