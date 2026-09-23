import express from "express";
//import { ProviderController } from "../controllers/user.controllers";


const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send({message: "Estoy en providers.routes!"});
});

//router.get("/", ProviderController.getAllProviders);

//router.post("/add-provider", ProviderController.createProvider);

//router.post("/get-provider", ProviderController.getProvider);

//router.put("/update/edit-provider/:id", ProviderController.updateProvider);

//router.delete("/delete-provider/:id", ProviderController.deleteProvider);

export default router;