import { Op } from 'sequelize';
import { User } from '../models';
import { CreateUserInput, UpdateUserInput } from '../interfaces/user.interface';
import { ServiceResponse } from '../interfaces/services.responses';

async function createUser(input: CreateUserInput): Promise<ServiceResponse<User>> {
  try {
    const errors: Record<string, string> = {};

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
        if (u.dni === input.dni) errors.dni = 'dni repetido';
        if (u.mail === input.mail) errors.mail = 'mail repetido';
        if (u.username === input.username) errors.username = 'username repetido';
      });

      return { success: false, errors };
    }

    const newUser = await User.create(input);
    return { success: true, data: newUser };

  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, errors: { message: 'Failed to create user' } };
  }
}

async function loginUser(username: string): Promise<ServiceResponse<User | null>> {
  try {
    const user = await User.findOne({ where: { username } });
    return { success: true, data: user };
  } catch (error) {
    console.error('Error fetching user for login:', error);
    return { success: false, errors: { message: 'Failed to fetch user' } };
  }
}

async function getAllUsers(): Promise<ServiceResponse<User[]>> {
  try {
    const users = await User.findAll();
    return { success: true, data: users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { success: false, errors: { message: 'Failed to fetch users' } };
  }
}

async function getUser(id: number): Promise<ServiceResponse<User | null>> {
  try {
    if (!id) return { success: false, errors: { message: 'User ID is required' } };

    const user = await User.findByPk(id);
    return { success: true, data: user };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { success: false, errors: { message: 'Failed to fetch user' } };
  }
}

async function updateUser(id: number, input: UpdateUserInput): Promise<ServiceResponse<User>> {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return { success: false, errors: { message: 'User not found' } };
    }

    await user.update(input);
    return { success: true, data: user };

  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, errors: { message: 'Failed to update user' } };
  }
}

async function deleteUser(id: number): Promise<ServiceResponse<boolean>> {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return { success: false, errors: { message: 'User not found' } };
    }

    await user.destroy();
    return { success: true, data: true };

  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, errors: { message: 'Failed to delete user' } };
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
