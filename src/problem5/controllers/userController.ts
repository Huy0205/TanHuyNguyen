import { NextFunction, Request, Response } from "express";
import { UserService } from "../services";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, dayOfBirth } = req.body;
    if(!firstName || !lastName || !email) {
        res.status(400).json('Missing required fields')
    } else {
        try {
            const userRes = await UserService.createUser({
                firstName,
                lastName,
                email,
                dayOfBirth
            })
            const { code, message } = userRes;
            res.status(code).json(message);
        } catch (error) {
            next(error);
        }
    }
}

export const getUsersByFirstName = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName } = req.params;
    if(!firstName) {
        res.status(400).json('Missing required fields');
    } else {
        try {
            const userRes = await UserService.getUsersByFirstName(firstName);
            const { code, message, data } = userRes;
            res.status(code).json({ message, data })
        } catch (error) {
            next(error)
        }
    }
}

export const getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.query;
    if(!email) {
        res.status(400).json('Missing required fields');
    } else {
        try {
            const userRes = await UserService.getUserByEmail(email as string);
            const { code, message, data } = userRes;
            res.status(code).json({ message, data })
        } catch (error) {
            next(error)
        }
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { _id, firstName, lastName, email, dayOfBirth } = req.body;
    if(!email) {
        res.status(400).json('Missing required fields');
    } else {
        try {
            const userRes = await UserService.updateUser({
                id: _id,
                firstName, 
                lastName, 
                email, 
                dayOfBirth
            })
            const { code, message, data } = userRes;
            res.status(code).json({ message, data })
        } catch (error) {
            next(error)
        }
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    if(!userId) {
        res.status(400).json('Missing required fields');
    } else {
        try {
            const userRes = await UserService.deleteUser(userId)
            const { code, message, data } = userRes;
            res.status(code).json({ message, data })
        } catch (error) {
            next(error)
        }
    }
}