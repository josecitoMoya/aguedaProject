import express from "express";
import { ProvidersControllers } from "../controllers/providers.controllers";


const router = express.Router();

router.get("/", ProvidersControllers.getAllProviders);

router.post("/providers-add", ProvidersControllers.createProvider);

router.get("/providers-get/:id", ProvidersControllers.getProvider);

router.put("/providers-edit/:id", ProvidersControllers.updateProvider);

router.delete("/providers-delete/:id", ProvidersControllers.deleteProvider);

export default router;