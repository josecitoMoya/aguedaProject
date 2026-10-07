import { Invoice } from '../models';
import { CreateInvoiceInput, InvoiceFilters, UpdateInvoiceInput } from '../interfaces/invoice.interface';
import { ServiceResponse } from '../interfaces/services.responses';

async function createInvoice(input: CreateInvoiceInput): Promise<ServiceResponse<string>> {
  try {
    const repeated = await Invoice.findOne({ where: { invoiceNumber: input.invoiceNumber } });

    if (repeated) {
      return { success: false, errors: { message: `La factura ${input.invoiceNumber} ya fue cargada` } };
    }

    await Invoice.create(input);
    return { success: true, data: input.invoiceNumber };
  } catch (error) {
    console.error('Error creating invoice:', error);
    return { success: false, errors: { message: 'Error en la carga de la factura' } };
  }
}

async function getAllInvoices(): Promise<ServiceResponse<Invoice[]>> {
  try {
    const invoices = await Invoice.findAll();
    return { success: true, data: invoices };
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return { success: false, errors: { message: 'Failed to fetch invoices' } };
  }
}

async function getInvoice(filters: InvoiceFilters): Promise<ServiceResponse<Invoice | null>> {
  try {
    if (!filters.id) return { success: false, errors: { message: 'Invoice ID is required' } };

    const invoice = await Invoice.findByPk(filters.id);
    return { success: true, data: invoice };
  } catch (error) {
    console.error('Error fetching invoice:', error);
    return { success: false, errors: { message: 'Failed to fetch invoice' } };
  }
}

async function updateInvoice(id: number, data: UpdateInvoiceInput): Promise<ServiceResponse<Invoice>> {
  try {
    const invoice = await Invoice.findByPk(id);

    if (!invoice) return { success: false, errors: { message: 'Invoice not found' } };

    await invoice.update(data);

    return { success: true, data: invoice };
  } catch (error) {
    console.error('Error updating invoice:', error);
    return { success: false, errors: { message: 'Failed to update invoice' } };
  }
}

async function deleteInvoice(id: number): Promise<ServiceResponse<boolean>> {
  try {
    const invoice = await Invoice.findByPk(id);

    if (!invoice) return { success: false, errors: { message: 'Invoice not found' } };

    await invoice.destroy();
    return { success: true, data: true };
  } catch (error) {
    console.error('Error deleting invoice:', error);
    return { success: false, errors: { message: 'Failed to delete invoice' } };
  }
}

export const InvoicesServices = {
  createInvoice,
  getAllInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoice,
};
