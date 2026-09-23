import {User} from '../models/Users';

interface GetUserFilters {
    username?: string;
    dni?: number;
    cuit?: string;
    cuil?: string;
    phonenumber?: string;
    address?: string;
    city?: string;
    province?: string;
    mail?: string;
    role?: string;
    type?: string;
}


async function createUser(filters: GetUserFilters) {
    
    const oldUser: { dni?: string; mail?: string; username?: string } = {};
    
    try {
        const dniExist = await User.findOne({
            where: { dni: filters.dni,}})

        const mailExist = await User.findOne({
            where: { mail: filters.mail,}})

        const usernameExist = await User.findOne({
            where: { username: filters.username,}})

        if (dniExist) oldUser.dni = "dni repetido";
        if (mailExist) oldUser.mail = "mail repetido";
        if (usernameExist) oldUser.username = "username repetido";

        if (Object.keys(oldUser).length > 0) {
            return oldUser;
        }
        
        const newUser = await User.create({
            username: filters.username, 
            dni: filters.dni,
            cuit: filters.cuit,
            cuil: filters.cuil,
            phonenumber: filters.phonenumber,
            address: filters.address,
            city: filters.city,
            province: filters.province,
            mail: filters.mail,
            role: filters.role,
            type: filters.type
        })

            return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
}

async function getAllUsers() {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
}

async function getUser(filters: GetUserFilters) {
    try {
        console.log("me llego esta data a userServices", filters.username, filters.mail)
        
        const user = await User.findOne({
            where: {username: filters.username,mail: filters.mail}
        });

        return user;
        
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
}

async function updateUser(dni: string, filters: GetUserFilters) {
    try {
        const user = await User.findOne({ where: { dni } });

        if (!user) {
            return null;
        }

        await user.update({
            username: filters.username,
            cuit: filters.cuit,
            cuil: filters.cuil,
            phonenumber: filters.phonenumber,
            address: filters.address,
            city: filters.city,
            province: filters.province,
            mail: filters.mail,
            role: filters.role,
            type: filters.type
        });

        return user;
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user');
    }
}

async function deleteUser(dni: string) {
    try {
        const user = await User.findOne({ where: { dni } });

        if (!user) {
            return null;
        }

        await user.destroy();
        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user');
    }
}

export const UserService = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};