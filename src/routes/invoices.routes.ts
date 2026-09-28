import express, {Request, Response} from 'express'

const router = express.Router()

router.get("/", (req:Request, res:Response) => {res.send("Aqui devolveria todas las categorias")})
//router.get("/", InvoicesControllers.getAllInvoices);

router.post("/invoices-add", (req:Request, res:Response) => {res.send("Aqui añadirias una categoria")})
//router.post("/invoices-add", InvoicesControllers.createInvoices);

router.get("/invoices-get/:id", (req:Request, res:Response) => {res.send("Aqui devolveria UNA categoria")})
//router.get("/invoices-get/:id", InvoicesControllers.getInvoices);

router.put("/invoices-edit/:id", (req:Request, res:Response) => {res.send("Aqui editaria una categoria")})
//router.put("/invoices-update/:id", InvoicesControllers.updateInvoices);

router.delete("/invoices-delete/:id", (req:Request, res:Response) => {res.send("Aqui eliminarias una categoria")})
//router.delete("/invoices-delete/:id", InvoicesControllers.deleteInvoices);

export default router