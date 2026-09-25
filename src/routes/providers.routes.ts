import express from "express";
import { ProvidersControllers } from "../controllers/providers.controllers";


const router = express.Router();

router.get("/", ProvidersControllers.getAllProviders);

router.post("/provider-add", ProvidersControllers.createProvider);

router.get("/provider-get/:id", ProvidersControllers.getProvider);

router.put("/provider-edit/:id", ProvidersControllers.updateProvider);

router.delete("/provider-delete/:id", ProvidersControllers.deleteProvider);

export default router;