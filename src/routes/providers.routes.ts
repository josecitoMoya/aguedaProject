import express from "express";
import { ProvidersControllers } from "../controllers/providers.controllers";


const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({message: "Estoy en providers.routes!"});
});

router.get("/", ProvidersControllers.getAllProviders);

router.post("/add-provider", ProvidersControllers.createProvider);

router.get("/get-provider/:id", ProvidersControllers.getProvider);

router.put("/update/edit-provider/:id", ProvidersControllers.updateProvider);

router.delete("/delete-provider/:id", ProvidersControllers.deleteProvider);

export default router;