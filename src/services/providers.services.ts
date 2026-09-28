import { Provider } from '../models'

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



async function createProvider(data: ProviderData) {
    
    const errors: Record<string, string> = {};

    try {
        const cuitExist = await Provider.findOne({ where: { cuit: data.cuit } });
        if (cuitExist) errors.cuit = "CUIT repetido";

        const razonSocialExist = await Provider.findOne({ where: { razonSocial: data.razonSocial } });
        if (razonSocialExist) errors.razonSocial = "Razón social repetida";

        if (Object.keys(errors).length > 0) {
            return {
                success: false,
                errors
            };
        }
        
        const newProvider = await Provider.create(data);

        return {
            success: true,
            data: newProvider,
        };

    } catch (error) {
        console.error('Error creating provider:', error);
        throw new Error('Failed to create provider');
    }
}

async function getAllProviders() {
    try {
        const providers = await Provider.findAll();
        return providers;
    } catch (error) {
        console.error('Error fetching providers:', error);
        throw new Error('Failed to fetch providers');
    }
}

async function getProvider(filters: GetProviderFilters) {
    try {

        const provider = await Provider.findOne({
            where: {id: filters.id}
        });

        return provider;
        
    } catch (error) {
        console.error('Error fetching providers:', error);
        throw new Error('Failed to fetch providers');
    }
}

async function updateProvider(id: number, filters: GetProviderFilters) {
    try {
        const provider = await Provider.findOne({ where: { id } });

        console.log("SOY PROVIDER", provider)

        if (!provider) {
            return null;
        }

        await provider.update({
            razonSocial: filters.razonSocial,
            cuit: filters.cuit,
            address: filters.address,
            city: filters.city,
            province: filters.province,
            phoneNumber: filters.phoneNumber,
            mail: filters.mail,
        });

        return provider;
    } catch (error) {
        console.error('Error updating provider:', error);
        throw new Error('Failed to update provider');
    }
}

async function deleteProvider(id: number) {
    try {
        const provider = await Provider.findOne({ where: { id } });

        if (!provider) {
            return null;
        }

        await provider.destroy();
        return true;
    } catch (error) {
        console.error('Error deleting provider:', error);
        throw new Error('Failed to delete provider');
    }
}

export const ProviderService = {
    createProvider,
    getAllProviders,
    getProvider,
    updateProvider,
    deleteProvider
};