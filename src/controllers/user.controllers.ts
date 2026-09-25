import { Request, Response } from 'express';
import { UserService } from '../services/user.services';

async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { username, dni, cuit, cuil, phonenumber, address, city, province, mail, role, type } = req.body;

        const newUser = await UserService.createUser({ username, dni, cuit, cuil, phonenumber, address, city, province, mail, role, type });

        if("id" in newUser) {
            res.status(201).json(newUser);
        } else {
            res.status(400).json(Object.values(newUser).join(', '));
        }
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
}

async function loginUser(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        const user = await UserService.getUser({ username, password });

        !user ? res.status(404).json({ message: 'User not found' }) : res.status(200).json(user);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
}

async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
}

async function getUser(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as { id: string };

        const user = await UserService.getUser({ id: parseInt(id) });

        !user ? res.status(404).json({ message: 'User not found' }) : res.status(200).json(user);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
}

async function updateUser(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as { id: string };
        const { username, cuit, cuil, phonenumber, address, city, province, mail, role, type } = req.body;

        const updatedUser = await UserService.updateUser(parseInt(id), { username, cuit, cuil, phonenumber, address, city, province, mail, role, type });

        !updatedUser ? res.status(404).json({ message: 'User not found' }) : res.status(200).json(updatedUser);
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }

}

async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params as { id: string };

        const deletedUser = await UserService.deleteUser(parseInt(id));

        !deletedUser ? res.status(404).json({ message: 'User not found' }) : res.status(200).json({ message: 'User deleted successfully' });
    } 
    
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
}

export const UserController = {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};

