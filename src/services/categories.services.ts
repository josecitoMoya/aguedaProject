import { Model } from 'sequelize';
import { Categories } from '../models';

// Interfaces de entrada
export interface GetCategoriesFilters {
    id?: number;
    name?: string;
}

export interface CategoriesData {
    id?: number;
    name: string;
}

// Interfaces de atributos del modelo para el tipado estricto del retorno
interface CategoryAttributes {
    id: number;
    name: string;
}

// Interfaz para el retorno estructurado de la creación
interface CreateCategoryResult {
    success: boolean;
    errors?: Record<string, string>;
    data?: Model<CategoryAttributes>;
}

/**
 * Crea una nueva categoría validando que el nombre no esté repetido.
 */
async function createCategory(data: CategoriesData): Promise<CreateCategoryResult> {
    const errors: Record<string, string> = {};

    try {
        const categoryExist = await Categories.findOne({ where: { name: data.name } });
        
        if (categoryExist) {
            errors.name = "Categoria repetida";
        }

        if (Object.keys(errors).length > 0) {
            return {
                success: false,
                errors
            };
        }
        
        // Al retornar, TypeScript infiere correctamente que es un Model<CategoryAttributes>
        const newCategory = await Categories.create(data) as Model<CategoryAttributes>;

        return {
            success: true,
            data: newCategory,
        };

    } catch (error) {
        console.error('Error creating category:', error);
        throw new Error('Failed to create category');
    }
}

/**
 * Obtiene todas las categorías de la base de datos.
 */
async function getAllCategories(): Promise<Model<CategoryAttributes>[]> {
    try {
        const allCategories = await Categories.findAll() as Model<CategoryAttributes>[];
        return allCategories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error('Failed to fetch categories');
    }
}

/**
 * Obtiene una categoría específica según los filtros provistos (por ejemplo, ID).
 */
async function getCategory(filters: GetCategoriesFilters): Promise<Model<CategoryAttributes> | null> {
    try {
        if (!filters.id) return null;

        const category = await Categories.findOne({
            where: { id: filters.id }
        }) as Model<CategoryAttributes> | null;

        return category;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw new Error('Failed to fetch category');
    }
}

/**
 * Actualiza el nombre de una categoría existente por su ID.
 */
async function updateCategory(id: number, data: CategoriesData): Promise<Model<CategoryAttributes> | null> {
    try {
        const category = await Categories.findOne({ where: { id } }) as Model<CategoryAttributes> | null;

        if (!category) {
            return null;
        }

        await category.update({
            name: data.name
        });

        return category;
    } catch (error) {
        console.error('Error updating category:', error);
        throw new Error('Failed to update category');
    }
}

/**
 * Elimina una categoría de la base de datos por su ID.
 */
async function deleteCategory(id: number): Promise<boolean> {
    try {
        const category = await Categories.findOne({ where: { id } }) as Model<CategoryAttributes> | null;

        if (!category) {
            return false;
        }

        await category.destroy();
        return true;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw new Error('Failed to delete category');
    }
}

export const CategoriesServices = {
    createCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory
};
