import { Router } from "express";
import { UserController } from '../controllers'

const userRouter = Router()

userRouter.post('/create', UserController.createUser)

userRouter.get('/first-name/:firstName', UserController.getUsersByFirstName)
userRouter.get('/', UserController.getUserByEmail)

userRouter.put('/update', UserController.updateUser)

userRouter.delete('/delete', UserController.deleteUser)

export default userRouter;