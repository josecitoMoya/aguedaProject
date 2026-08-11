import { Request, Response } from 'express';

export class UserController {
    public userName: string;
    private userEmail: string;
    private userPassword: string;

    constructor(userName: string, userEmail: string, userPassword: string) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { userName, userEmail, userPassword } = req.body;
            const newUser = new UserController(userName, userEmail, userPassword);
            res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el usuario', error });
        }
    }
}