import { Request, Response } from 'express';
import {InvoicesServices} from '../services/invoices.services';

async function createInvoice(req: Request, res: Response): Promise<void> {
    try {

        const invoiceData = req.body

        const newInvoice = await InvoicesServices.createInvoice(invoiceData);

        if (!newInvoice.success) {
            res.status(400).json(newInvoice.errors);
            return; 
        }

        res.status(201).json({ 
            status: newInvoice.success, 
            message: `Factura ${newInvoice.data?.invoiceNumber} cargada`,
            data: newInvoice.data
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la factura', error });
    }
}

async function getAllInvoices(req: Request, res: Response): Promise<void> {
    try {
        const invoices = await InvoicesServices.getAllInvoices();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las facturas', error });
    }
}

async function getInvoice(req: Request, res: Response): Promise<void> {
    try {

        const invoiceId = parseInt(req.params.id as string, 10);

        if (isNaN(invoiceId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const invoice = await InvoicesServices.getInvoice(invoiceId);

        if (!invoice) {
            res.status(404).json({ message: 'Factura no encontrada' });
            return;
        }

        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la factura', error });
    }
}

// async function updateInvoice(req: Request, res: Response): Promise<void> {
//     try {

//         const invoiceData = req.body;

//         const invoiceId = parseInt(req.params.id as string, 10)

//         if (isNaN(invoiceId)) {
//             res.status(400).json({ message: 'ID no válido' });
//             return;
//         }

//         if (Object.keys(invoiceData).length === 0) {
//             res.status(400).json({ message: 'No hay datosde factura para actualizar' });
//             return;
//         }

//         const updatedInvoice = await InvoicesServices.updateInvoice(invoiceId, invoiceData);

//         if (!updatedInvoice) {
//             res.status(404).json({ message: 'Factura no encontrada' });
//             return;
//         }

//         res.status(200).json(updatedInvoice);
//     } catch (error) {
//         res.status(500).json({ message: 'Error al actualizar la factura', error });
//     }
// }

// async function deleteInvoice(req: Request, res: Response): Promise<void> {
//     try {

//         const invoiceId = parseInt(req.params.id as string, 10);

//         if (isNaN(invoiceId)) {
//             res.status(400).json({ message: 'ID no válido' });
//             return;
//         }

//         const deletedInvoice = await InvoicesServices.deleteInvoice(invoiceId);

//         if (!deletedInvoice) {
//             res.status(404).json({ message: 'Factura no encontrada' });
//             return;
//         }

//         res.status(200).json({ message: 'Factura eliminada exitosamente' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error al eliminar la factura', error });
//     }
// }

export const InvoicesControllers = { 
    createInvoice, 
    getAllInvoices, 
    getInvoice, 
    // updateInvoice, 
    // deleteInvoice 
};