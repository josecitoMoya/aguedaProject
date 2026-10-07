import { Provider } from '../models';
import { CreateProvidersInput, ProvidersFilters, UpdateProviderInput } from '../interfaces/provider.interface';
import { ServiceResponse } from '../interfaces/services.responses';

async function createProvider(input: CreateProvidersInput): Promise<ServiceResponse<Provider>> {
  try {
    const errors: Record<string, string> = {};

    const cuitExist = await Provider.findOne({ where: { cuit: input.cuit } });
    if (cuitExist) errors.cuit = 'CUIT repetido';

    const razonSocialExist = await Provider.findOne({ where: { razonSocial: input.razonSocial } });
    if (razonSocialExist) errors.razonSocial = 'Razón social repetida';

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    const newProvider = await Provider.create(input);
    return { success: true, data: newProvider };
  } catch (error) {
    console.error('Error creating provider:', error);
    return { success: false, errors: { message: 'Failed to create provider' } };
  }
}

async function getAllProviders(): Promise<ServiceResponse<Provider[]>> {
  try {
    const providers = await Provider.findAll();
    return { success: true, data: providers };
  } catch (error) {
    console.error('Error fetching providers:', error);
    return { success: false, errors: { message: 'Failed to fetch providers' } };
  }
}

async function getProvider(filters: ProvidersFilters): Promise<ServiceResponse<Provider | null>> {
  try {
    if (!filters.id) return { success: false, errors: { message: 'Provider ID is required' } };

    const provider = await Provider.findByPk(filters.id);
    return { success: true, data: provider };
  } catch (error) {
    console.error('Error fetching provider:', error);
    return { success: false, errors: { message: 'Failed to fetch provider' } };
  }
}

async function updateProvider(id: number, data: UpdateProviderInput): Promise<ServiceResponse<Provider>> {
  try {
    const provider = await Provider.findByPk(id);

    console.log("SOY PROVIDER", provider)

    if (!provider) return { success: false, errors: { message: 'Provider not found' } };

    await provider.update(data);

    return { success: true, data: provider };
  } catch (error) {
    console.error('Error updating provider:', error);
    return { success: false, errors: { message: 'Failed to update provider' } };
  }
}

async function deleteProvider(id: number): Promise<ServiceResponse<boolean>> {
  try {
    const provider = await Provider.findByPk(id);

    console.log("SOY PROVIDER EN DELETE", provider)

    if (!provider) return { success: false, errors: { message: 'Provider not found' } };

    await provider.destroy();
    return { success: true, data: true };
  } catch (error) {
    console.error('Error deleting provider:', error);
    return { success: false, errors: { message: 'Failed to delete provider' } };
  }
}

export const ProviderServices = {
  createProvider,
  getAllProviders,
  getProvider,
  updateProvider,
  deleteProvider,
};
