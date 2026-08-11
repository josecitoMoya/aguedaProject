import { Request, Response } from 'express';
import { UserService } from '../services/user.services';

export class UserController {

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { userName, userEmail, userPassword } = req.body;
            const newUser = await UserService.prototype.createUser(userName, userEmail, userPassword);
            if (!newUser) {
                res.status(400).json({ message: 'No se pudo crear el usuario' });
                return;
            }
            res.status(201).json( newUser )
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el usuario', error });
        }
    }
}