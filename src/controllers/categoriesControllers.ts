import { Request, Response } from 'express';

import { CategoriesServices, CategoriesData } from '../services/categories.services';

async function createCategory(req: Request, res: Response): Promise<void> {
    try {
        const { name } = req.body;

        const newCategory = await CategoriesServices.createCategory({
            name
        } as CategoriesData);

        if (!newCategory.success) {
            res.status(201).json(newCategory.errors);
            return; 
        }

        const categoryPlain = newCategory.data?.get({ plain: true });

        res.status(200).json({ 
            Status: newCategory.success, 
            Message: `Category ${categoryPlain?.name} created` 
        });
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

/**
 * Controlador para obtener una categoría específica por su ID.
 */
async function getCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as { id: string };

        const category = await CategoriesServices.getCategory({ id: parseInt(id) });

        if (!category) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }

        res.status(200).json(category);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoria', error });
    }
}

/**
 * Controlador para actualizar una categoría por su ID.
 */
async function updateCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as { id: string };
        const { name } = req.body;

        const updatedCategory = await CategoriesServices.updateCategory(parseInt(id), { name });

        if (!updatedCategory) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }

        res.status(200).json(updatedCategory);
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoria', error });
    }
}

/**
 * Controlador para eliminar una categoría por su ID.
 */
async function deleteCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as { id: string };

        const deletedCategory = await CategoriesServices.deleteCategory(parseInt(id));

        if (!deletedCategory) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    }
    
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoria', error });
    }
}

export const CategoriesControllers = { 
    createCategory, 
    getAllCategories, 
    getCategory, 
    updateCategory, 
    deleteCategory 
};
