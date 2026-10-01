import express, {Request, Response} from 'express'
import {InvoicesControllers} from '../controllers/invoices.controllers'

const router = express.Router()

// router.get("/", (req:Request, res:Response) => {res.send("Aqui devolveria todas las facturas")})
router.get("/", InvoicesControllers.getAllInvoices);

router.post("/invoices-add", (req:Request, res:Response) => {res.send("Aqui añadirias una factura")})
//router.post("/invoices-add", InvoicesControllers.createInvoices);

router.get("/invoices-get/:id", (req:Request, res:Response) => {res.send("Aqui devolveria UNA factura")})
//router.get("/invoices-get/:id", InvoicesControllers.getInvoices);

router.put("/invoices-edit/:id", (req:Request, res:Response) => {res.send("Aqui editaria una factura")})
//router.put("/invoices-update/:id", InvoicesControllers.updateInvoices);

router.delete("/invoices-delete/:id", (req:Request, res:Response) => {res.send("Aqui eliminarias una factura")})
//router.delete("/invoices-delete/:id", InvoicesControllers.deleteInvoices);

export default router