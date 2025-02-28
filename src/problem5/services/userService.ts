import { UserModel, UserType } from "../models"

export const createUser = async (user: Partial<UserType>) => {
    try {
        await UserModel.create(user);
        return {
            code: 200,
            message: 'Create user success'
        };
    } catch (error) {
        throw error;
    }
}

export const getUsersByFirstName = async (firstName: string) => {
    try {
        const users = await UserModel.find({ firstName: new RegExp(`^${firstName}`, "i") });
        return {
            code: 200,
            message: 'Get users by first name success',
            data: users
        }
    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const user = await UserModel.findOne({ email });
        return {
            code: 200,
            message: 'Get user by email success',
            data: user
        }
    } catch (error) {
        throw error;
    }
}

export const updateUser = async (user: Partial<UserType>) => {
    try{
        const res = await UserModel.findOneAndUpdate({ _id: user.id }, { $set: user }, { new: true });
        return {
            code: 200,
            message: 'Update user success',
            data: res
        }
    } catch(error) {
        throw error;
    }
}

export const deleteUser = async (userId: String) => {
    try{
        const res = await UserModel.findOneAndDelete({ _id: userId }, { new: true });
        return {
            code: 200,
            message: 'Delete user success',
            data: res
        }
    } catch(error) {
        throw error;
    }
}