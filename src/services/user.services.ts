import { Op } from 'sequelize';
import { User } from '../models';

export interface CreateUserInput {
  username: string;
  dni: number;
  cuit: string;
  cuil: string;
  phonenumber: string;
  address: string;
  city: string;
  province: string;
  mail: string;
  role: string;
  type: string;
}

export type UpdateUserInput = Partial<CreateUserInput>;

async function createUser(input: CreateUserInput) {
  const oldUser: { dni?: string; mail?: string; username?: string } = {};

  try {
    const existingUsers = await User.findAll({
      where: {
        [Op.or]: [
          { dni: input.dni },
          { mail: input.mail },
          { username: input.username }
        ]
      }
    });

    if (existingUsers.length > 0) {
      existingUsers.forEach((u) => {
        if (u.dni === input.dni) oldUser.dni = 'dni repetido';
        if (u.mail === input.mail) oldUser.mail = 'mail repetido';
        if (u.username === input.username) oldUser.username = 'username repetido';
      });
      return oldUser;
    }

    const newUser = await User.create(input);
    return newUser;

  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
}

async function loginUser(username: string) {
  try {
    const user = await User.findOne({
      where: { username }
    });

    return user;
  } catch (error) {
    console.error('Error fetching user for login:', error);
    throw new Error('Failed to fetch user');
  }
}

async function getAllUsers(): Promise<User[]> {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

async function getUser(id: number): Promise<User | null> {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user');
  }
}

async function updateUser(id: number, input: UpdateUserInput): Promise<User | null> {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return null;
    }

    await user.update(input);
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
}

async function deleteUser(id: number): Promise<boolean> {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return false;
    }

    await user.destroy();
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw new Error('Failed to delete user');
  }
}

export const UserService = {
  loginUser,
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser
};