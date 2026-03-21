import express from 'express'
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  patchTaskStatus,
  assignTaskUsers,
  getTaskUsers,
  removeTaskUser,
  filterTasksHandler,
} from '../controllers/task.controller.js'

const taskRouter = express.Router()

// Ruta de filtrado antes de /:id para evitar conflictos
taskRouter.get('/filter', filterTasksHandler)

taskRouter.get('/', getTasks)
taskRouter.get('/:id', getTask)
taskRouter.post('/', createTask)
taskRouter.put('/:id', updateTask)
taskRouter.delete('/:id', deleteTask)
taskRouter.patch('/:id/status', patchTaskStatus)
taskRouter.post('/:taskId/assign', assignTaskUsers)
taskRouter.get('/:taskId/users', getTaskUsers)
taskRouter.delete('/:taskId/users/:userId', removeTaskUser)

export default taskRouter
