import {Invoice} from '../models'
import { CreateInvoiceInput, InvoiceFilters } from '../interfaces/invoice.interface';

async function createInvoice(input: CreateInvoiceInput) {

    try{
        const repitedInvoice = await Invoice.findOne({where: { invoiceNumber:input.invoiceNumber}})

        if(!repitedInvoice) {
            const newInvoice = await Invoice.create(input);
            return {success: true, data: input.invoiceNumber}
        }

        return {success: false, errors: {message: `La factura ${input.invoiceNumber} ya fue cargada`}}
    }
    catch(error){
        return {success: false, errors: {message: 'Error en la carga de la factura'}}
    }
}

async function getAllInvoices(): Promise<Invoice[]> {
    try{
        return await Invoice.findAll()
    }
    catch(error){
        console.error('Error fetching invoices:', error)
        throw new Error('Failed to fetch categories');
    }
}

async function getInvoice(filters: InvoiceFilters): Promise<Invoice | null> {
    try{
        const { id } = filters;
        console.log(id)

        if(!id) return null;
        return await Invoice.findByPk(id)
    }
    catch(error){
        console.error('Error fetching invoice:', error)
        throw new Error('Failed to fetch invoice');
    }
}

async function updateInvoice(id: number, data: InvoiceFilters): Promise<Invoice | null> {
    try {
        const invoice = await Invoice.findByPk(id);

        if(!invoice) return null;

        await invoice.update(data)

        return invoice;
       }
    catch (error) {
        console.error('Error updating invoice:', error);

        throw new Error('Failed to update invoice');
    }
}

async function deleteInvoice(id: number): Promise<boolean> {
    try {
        const invoice = await Invoice.findByPk(id);

        if(!invoice) return false;

        await invoice.destroy();
        return true;
    }

    catch(error) {
        console.error('Error deleting invoice:', error);
        throw new Error('Failed to delete invoice');
    }
}

export const InvoicesServices = {
    createInvoice,
    getAllInvoices,
    getInvoice,
    updateInvoice,
    deleteInvoice
}