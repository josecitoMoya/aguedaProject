import express from "express";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({ message: "Estoy en Users!" });
});

router.get("/singup", (req: express.Request, res: express.Response) => {
  res.send({ message: "Aca podes registrar un nuevo usuario" });
});

router.get("/login", (req: express.Request, res: express.Response) => {
  res.send({ message: "Aqui se loguea un usuario!" });
});

export default router;
