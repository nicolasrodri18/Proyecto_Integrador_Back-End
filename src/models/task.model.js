import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DB_PATH = join(__dirname, '../../db.json')

const readDB = async () => {
  const data = await readFile(DB_PATH, 'utf-8')
  return JSON.parse(data)
}

const writeDB = async (data) => {
  await writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

export const getAll = async () => {
  const db = await readDB()
  return db.tareas
}

export const getById = async (id) => {
  const db = await readDB()
  return db.tareas.find((t) => t.id === id) ?? null
}

export const create = async (taskData) => {
  const db = await readDB()
  const newTask = {
    id: Date.now().toString(),
    fecha: new Date().toISOString(),
    ...taskData,
  }
  db.tareas.push(newTask)
  await writeDB(db)
  return newTask
}

export const update = async (id, taskData) => {
  const db = await readDB()
  const index = db.tareas.findIndex((t) => t.id === id)
  if (index === -1) return null
  db.tareas[index] = { ...db.tareas[index], ...taskData }
  await writeDB(db)
  return db.tareas[index]
}

export const remove = async (id) => {
  const db = await readDB()
  const index = db.tareas.findIndex((t) => t.id === id)
  if (index === -1) return null
  const [removed] = db.tareas.splice(index, 1)
  await writeDB(db)
  return removed
}

export const updateStatus = async (id, status) => {
  const db = await readDB()
  const index = db.tareas.findIndex((t) => t.id === id)
  if (index === -1) return null
  db.tareas[index].status = status
  await writeDB(db)
  return db.tareas[index]
}

export const assignUsers = async (taskId, userIds) => {
  const db = await readDB()
  const index = db.tareas.findIndex((t) => t.id === taskId)
  if (index === -1) return null
  const current = db.tareas[index].usuariosAsignados ?? []
  const merged = [...new Set([...current, ...userIds])]
  db.tareas[index].usuariosAsignados = merged
  await writeDB(db)
  return db.tareas[index]
}

export const getAssignedUsers = async (taskId) => {
  const db = await readDB()
  const task = db.tareas.find((t) => t.id === taskId)
  if (!task) return null
  const userIds = task.usuariosAsignados ?? []
  return db.usuarios.filter((u) => userIds.includes(u.id))
}

export const removeAssignedUser = async (taskId, userId) => {
  const db = await readDB()
  const index = db.tareas.findIndex((t) => t.id === taskId)
  if (index === -1) return null
  const before = db.tareas[index].usuariosAsignados ?? []
  if (!before.includes(userId)) return null
  db.tareas[index].usuariosAsignados = before.filter((id) => id !== userId)
  await writeDB(db)
  return db.tareas[index]
}

export const filterTasks = async ({ status, priority, userId, fechaInicio, fechaFin }) => {
  const db = await readDB()
  let tareas = db.tareas

  if (status) tareas = tareas.filter((t) => t.status === status)
  if (priority) tareas = tareas.filter((t) => t.priority === priority)
  if (userId) tareas = tareas.filter((t) => (t.usuariosAsignados ?? []).includes(userId))
  if (fechaInicio) tareas = tareas.filter((t) => new Date(t.fecha) >= new Date(fechaInicio))
  if (fechaFin) tareas = tareas.filter((t) => new Date(t.fecha) <= new Date(fechaFin))

  return tareas
}

export const getTasksByUser = async (userId) => {
  const db = await readDB()
  return db.tareas.filter((t) => (t.usuariosAsignados ?? []).includes(userId))
}

export const getDashboardStats = async () => {
  const db = await readDB()
  const tareas = db.tareas
  const usuarios = db.usuarios

  return {
    totalUsuarios: usuarios.length,
    usuariosActivos: usuarios.filter((u) => u.activo).length,
    totalTareas: tareas.length,
    tareasPorEstado: {
      pendiente: tareas.filter((t) => t.status === 'pendiente').length,
      'en proceso': tareas.filter((t) => t.status === 'en proceso').length,
      completada: tareas.filter((t) => t.status === 'completada').length,
    },
  }
}
