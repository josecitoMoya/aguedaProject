import { Category } from '../models';
import { CreateCategoryInput, CategoryFilters } from '../interfaces/category.interface';

async function createCategory(input: CreateCategoryInput) {
  try {
    const newCategory = await Category.create(input);
    return { success: true, data: newCategory };
  } catch (error) {
    console.error('Error creating category:', error);
    return { success: false, errors: { message: 'Error al crear la categoría' } };
  }
}

async function getAllCategories(): Promise<Category[]> {
  try {
    return await Category.findAll();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}

async function getCategory(filters: CategoryFilters): Promise<Category | null> {
  try {
    if (!filters.id) return null;
    return await Category.findByPk(filters.id);
  } catch (error) {
    console.error('Error fetching category:', error);
    throw new Error('Failed to fetch category');
  }
}

async function updateCategory(id: number, data: CategoryFilters): Promise<Category | null> {
  try {
    const category = await Category.findByPk(id);

    if (!category) return null;

    await category.update(data);

    return category;

  } 
  
  catch (error) {
  
    console.error('Error updating category:', error);
  
    throw new Error('Failed to update category');
  }
  
}

async function deleteCategory(id: number): Promise<boolean> {
  try {
    const category = await Category.findByPk(id);
    if (!category) return false;

    await category.destroy();
    return true;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw new Error('Failed to delete category');
  }
}

export const CategoryService = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};