import { Request, Response } from 'express';
import { CategoryService } from '../services/categories.services';
import { CreateCategoryInput } from '../interfaces/category.interface';

async function createCategory(req: Request, res: Response): Promise<void> {
    try {
        const { name } = req.body as CreateCategoryInput;

        const newCategory = await CategoryService.createCategory({ name });

        if (!newCategory.success) {
            res.status(400).json(newCategory.errors);
            return; 
        }

        res.status(201).json({ 
            status: newCategory.success, 
            message: `Category ${newCategory.data?.name} created`,
            data: newCategory.data
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error });
    }
}

async function getAllCategories(req: Request, res: Response): Promise<void> {
    try {
        const categories = await CategoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
}

async function getCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params

        const categoryId = parseInt(id as string, 10);

        if (isNaN(categoryId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const category = await CategoryService.getCategory({ id: categoryId });

        if (!category) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
}

async function updateCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params

        const { name } = req.body;

        const categoryId = parseInt(id as string, 10)

        if (isNaN(categoryId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const updatedCategory = await CategoryService.updateCategory(categoryId, { name });

        if (!updatedCategory) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
}

async function deleteCategory(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        const categoryId = parseInt(id as string, 10);

        if (isNaN(categoryId)) {
            res.status(400).json({ message: 'ID no válido' });
            return;
        }

        const deletedCategory = await CategoryService.deleteCategory(categoryId);

        if (!deletedCategory) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
}

export const CategoriesControllers = { 
    createCategory, 
    getAllCategories, 
    getCategory, 
    updateCategory, 
    deleteCategory 
};