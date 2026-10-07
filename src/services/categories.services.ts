import { Category } from '../models';
import { CreateCategoryInput, CategoryFilters, UpdateCategoryInput } from '../interfaces/category.interface';
import { ServiceResponse } from '../interfaces/services.responses';

async function createCategory(input: CreateCategoryInput): Promise<ServiceResponse<Category>> {
  try {
    const newCategory = await Category.create(input);
    return { success: true, data: newCategory };
  } catch (error) {
    console.error('Error creating category:', error);
    return { success: false, errors: { message: 'Error al crear la categoría' } };
  }
}

async function getAllCategories(): Promise<ServiceResponse<Category[]>> {
  try {
    const categories = await Category.findAll();
    return { success: true, data: categories };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { success: false, errors: { message: 'Failed to fetch categories' } };
  }
}

async function getCategory(filters: CategoryFilters): Promise<ServiceResponse<Category | null>> {
  try {
    if (!filters.id) return { success: false, errors: { message: 'Category ID is required' } };

    const category = await Category.findByPk(filters.id);
    return { success: true, data: category };
  } catch (error) {
    console.error('Error fetching category:', error);
    return { success: false, errors: { message: 'Failed to fetch category' } };
  }
}

async function updateCategory(id: number, data: UpdateCategoryInput): Promise<ServiceResponse<Category>> {
  try {
    const category = await Category.findByPk(id);

    if (!category) return { success: false, errors: { message: 'Category not found' } };

    await category.update(data);

    return { success: true, data: category };
  } catch (error) {
    console.error('Error updating category:', error);
    return { success: false, errors: { message: 'Failed to update category' } };
  }
}

async function deleteCategory(id: number): Promise<ServiceResponse<boolean>> {
  try {
    const category = await Category.findByPk(id);

    if (!category) return { success: false, errors: { message: 'Category not found' } };

    await category.destroy();
    return { success: true, data: true };
  } catch (error) {
    console.error('Error deleting category:', error);
    return { success: false, errors: { message: 'Failed to delete category' } };
  }
}

export const CategoryServices = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
