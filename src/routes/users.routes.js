import express from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser, toggleUserStatus } from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.patch('/:id/status', toggleUserStatus)
userRouter.get('/:id', getUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter
