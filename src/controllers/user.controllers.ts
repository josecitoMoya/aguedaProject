import { Request, Response } from 'express';
import { UserService } from '../services/user.services';

async function createUser(req: Request, res: Response) {
  try {
    const result = await UserService.createUser(req.body);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(201).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el usuario', error });
  }
}

async function loginUser(req: Request, res: Response) {
  try {
    const { username } = req.body;

    const result = await UserService.loginUser(username);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
}

async function getAllUsers(req: Request, res: Response) {
  try {
    const result = await UserService.getAllUsers();

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
}

async function getUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const result = await UserService.getUser(id);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const result = await UserService.updateUser(id, req.body);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json(result.data);

  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    const result = await UserService.deleteUser(id);

    if (!result.success) {
      return res.status(400).json(result.errors);
    }

    return res.status(200).json({ deleted: true });

  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el usuario', error });
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
