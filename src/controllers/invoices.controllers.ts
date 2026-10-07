import { Request, Response } from 'express';
import { InvoicesServices } from '../services/invoices.services';

async function createInvoice(req: Request, res: Response) {
  try {
    const result = await InvoicesServices.createInvoice(req.body);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(201).json({
      status: result.success,
      message: `Factura ${result.data} cargada`
    });

  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la factura', error });
  }
}

async function getAllInvoices(req: Request, res: Response) {
  try {
    const result = await InvoicesServices.getAllInvoices();

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las facturas', error });
  }
}

async function getInvoice(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await InvoicesServices.getInvoice({ id });

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener la factura', error });
  }
}

async function updateInvoice(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await InvoicesServices.updateInvoice(id, req.body);

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar la factura', error });
  }
}

async function deleteInvoice(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await InvoicesServices.deleteInvoice(id);

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json({ deleted: true });

  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la factura', error });
  }
}

export const InvoicesControllers = {
  createInvoice,
  getAllInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoice
};
