import {Request, Response} from 'express';
import { ProviderService } from '../services/providers.services';

interface GetProviderFilters {
    id?: number;
    razonSocial?: string;
    cuit?: string;
    address?: string;
    city?: string;
    province?: string;
    phoneNumber?: string;
    mail?: string;
    categoryId?: number;
}

interface ProviderData {
  razonSocial: string;
  cuit: string;
  address: string;
  city: string;
  province: string;
  phoneNumber?: string;
  mail?: string;
  categoryId: number;
}

async function createProvider(req: Request, res: Response): Promise<void> {
    try {
        const { razonSocial, cuit, address, city, province, mail, phoneNumber, categoryId } = req.body;

        const newProvider = await ProviderService.createProvider({
            razonSocial,
            cuit,
            address,
            city,
            province,
            mail,
            phoneNumber,
            categoryId
        } as ProviderData);

        if(!newProvider.success) res.status(201).json(newProvider.errors)

        res.status(200).json({Status: newProvider.success, Message: `Provider ${newProvider.data?.razonSocial} created` })
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al crear el proveedor', error });
    }
}

async function getAllProviders(req: Request, res: Response): Promise<void> {
    try {
        const providers = await ProviderService.getAllProviders();
        res.status(200).json(providers);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los proveedores', error });
    }
}

async function getProvider(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};

        const provider = await ProviderService.getProvider({ id: parseInt(id) });

        !provider ? res.status(404).json({ message: 'Provider not found' }) : res.status(200).json(provider);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el proveedor', error });
    }
}

async function updateProvider(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};
        
        const { razonSocial, cuit, address, city, province, phoneNumber, mail } = req.body;

        const updatedProvider = await ProviderService.updateProvider(parseInt(id), { razonSocial, cuit, address, city, province, mail, phoneNumber });

        !updatedProvider ? res.status(404).json({ message: 'Provider not found' }) : res.status(200).json(updatedProvider);
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error });
    }
}

async function deleteProvider(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};

        const deletedProvider = await ProviderService.deleteProvider(parseInt(id));

        !deletedProvider ? res.status(404).json({ message: 'Provider not found' }) : res.status(200).json({ message: 'Provider deleted successfully' });
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error });
    }
}

export const ProvidersControllers = { createProvider, getAllProviders, getProvider, updateProvider, deleteProvider };    