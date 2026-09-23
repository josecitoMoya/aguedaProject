import {Request, Response} from 'express';
//import { ProviderService } from '../services/providers.services';

async function createProvider(req: Request, res: Response): Promise<void> {
    try {
        const { razonSocial, cuit, address, city, province, mail, phonenumber, categoryId } = req.body;

        //const newProvider = await ProviderService.createProvider({ razonSocial, cuit, address, city, province, mail, phonenumber });

        //if("id" in newProvider) {
        //    res.status(201).json(newProvider);
        //} else {
        //    res.status(400).json(Object.values(newProvider).join(', '));
        //}
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al crear el proveedor', error });
    }
}

async function getAllProviders(req: Request, res: Response): Promise<void> {
    try {
        //const providers = await ProviderService.getAllProviders();
        //res.status(200).json(providers);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los proveedores', error });
    }
}

async function getProvider(req: Request, res: Response): Promise<void> {
    try {
        const { razonSocial, id } = req.body;

        //const provider = await ProviderService.getProvider({ name, mail });

        //!provider ? res.status(404).json({ message: 'Provider not found' }) : res.status(200).json(provider);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el proveedor', error });
    }
}

async function updateProvider(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};
        const { razonSocial, address, city, province, mail, phoneNumber } = req.body;

        //const updatedProvider = await ProviderService.updateProvider(cuit, { razonSocial, address, city, province, mail, phoneNumber });

        //!updatedProvider ? res.status(404).json({ message: 'Provider not found' }) : res.status(200).json(updatedProvider);
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error });
    }
}

async function deleteProvider(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};

        //const deletedProvider = await ProviderService.deleteProvider(id);

        //!deletedProvider ? res.status(404).json({ message: 'Provider not found' }) : res.status(200).json({ message: 'Provider deleted successfully' });
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error });
    }
}

export const ProvidersControllers = { createProvider, getAllProviders, getProvider, updateProvider, deleteProvider };    