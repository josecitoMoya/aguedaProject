import { Request, Response } from 'express';
import { ProviderServices } from '../services/providers.services';

async function createProvider(req: Request, res: Response) {
  try {
    const result = await ProviderServices.createProvider(req.body);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(201).json({
      Status: result.success,
      Message: `Provider ${result.data?.razonSocial} created`
    });

  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el proveedor', error });
  }
}

async function getAllProviders(req: Request, res: Response) {
  try {
    const result = await ProviderServices.getAllProviders();

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los proveedores', error });
  }
}

async function getProvider(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const result = await ProviderServices.getProvider({ id });

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el proveedor', error });
  }
}

async function updateProvider(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const result = await ProviderServices.updateProvider(id, req.body);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el proveedor', error });
  }
}

async function deleteProvider(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const result = await ProviderServices.deleteProvider(id);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json({ deleted: true });

  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el proveedor', error });
  }
}

export const ProvidersControllers = {
  createProvider,
  getAllProviders,
  getProvider,
  updateProvider,
  deleteProvider
};
