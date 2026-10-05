import express, {Request, Response} from 'express'
import {InvoicesControllers} from '../controllers/invoices.controllers'

const router = express.Router()

router.get("/", InvoicesControllers.getAllInvoices);

router.post("/invoices-add", InvoicesControllers.createInvoice);

router.get("/invoices-get/:id", InvoicesControllers.getInvoice);

router.put("/invoices-update/:id", InvoicesControllers.updateInvoice);

router.delete("/invoices-delete/:id", InvoicesControllers.deleteInvoice);

export default router