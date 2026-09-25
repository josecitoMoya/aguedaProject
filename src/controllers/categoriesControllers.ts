import {Request, Response} from 'express';
import { CategoriesServices } from '../services/Categories.services';

interface GetCategoriesFilters {
    id?: number;
    name: string
}

interface CategoriesData {
    id?: number;
    name: string
}

async function createCategory(req: Request, res: Response): Promise<void> {
    try {
        const { name } = req.body;

        const newCategory = await CategoriesServices.createCategory({
            id,
            name
        } as CategoriesData);

        if(!newCategory.success) res.status(201).json(newCategory.errors)

        res.status(200).json({Status: newCategory.success, Message: `Category ${newCategory.data?.name} created` })
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al crear la categoria', error });
    }
}

async function getAllCategories(req: Request, res: Response): Promise<void> {
    try {
        const categories = await CategoriesServices.getAllCategories();
        res.status(200).json(categories);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorias', error });
    }
}

async function getCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};

        const category = await CategoriesServices.getCategory({ id: parseInt(id) });

        !category ? res.status(404).json({ message: 'Category not found' }) : res.status(200).json(category);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoria', error });
    }
}

async function updateCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};
        
        const { razonSocial, cuit, address, city, province, phoneNumber, mail } = req.body;

        const updatedCategory = await CategoriesServices.updateCategory(parseInt(id), { razonSocial, cuit, address, city, province, mail, phoneNumber });

        !updatedCategory ? res.status(404).json({ message: 'Category not found' }) : res.status(200).json(updatedCategory);
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proveedor', error });
    }
}

async function deleteCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as {id: string};

        const deletedCategory = await CategoriesService.deleteCategory(parseInt(id));

        !deletedCategory ? res.status(404).json({ message: 'Category not found' }) : res.status(200).json({ message: 'Category deleted successfully' });
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proveedor', error });
    }
}

export const CategoriesControllers = { createCategory, getAllCategories, getCategory, updateCategory, deleteCategory };    