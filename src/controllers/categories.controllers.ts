import { Request, Response } from 'express';
import { CategoryServices } from '../services/categories.services';
import { CreateCategoryInput } from '../interfaces/category.interface';

async function createCategory(req: Request, res: Response) {
  try {
    const result = await CategoryServices.createCategory(req.body);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(201).json({
      status: result.success,
      message: `Category ${result.data?.name} created`,
      data: result.data
    });

  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la categoría', error });
  }
}

async function getAllCategories(req: Request, res: Response) {
  try {
    const result = await CategoryServices.getAllCategories();

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las categorías', error });
  }
}

async function getCategory(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await CategoryServices.getCategory({ id });

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener la categoría', error });
  }
}

async function updateCategory(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await CategoryServices.updateCategory(id, req.body);

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar la categoría', error });
  }
}

async function deleteCategory(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID no válido' });
    }

    const result = await CategoryServices.deleteCategory(id);

    if (!result.success) {
      return res.status(404).json(result.errors);
    }

    return res.status(200).json({ deleted: true });

  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la categoría', error });
  }
}

export const CategoriesControllers = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
