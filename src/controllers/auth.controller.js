import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DB_PATH = join(__dirname, '../../db.json')

export const login = async (req, res) => {
  try {
    const { documento } = req.body
    if (!documento) {
      return res.status(400).json({ error: 'El campo documento es requerido' })
    }

    const data = await readFile(DB_PATH, 'utf-8')
    const db = JSON.parse(data)
    const user = db.usuarios.find((u) => String(u.documento) === String(documento))

    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })
    if (!user.activo) return res.status(403).json({ error: 'Usuario inactivo' })

    // Token simple en base64 (sin librería externa)
    const payload = { id: user.id, documento: user.documento, rol: user.rol }
    const token = Buffer.from(JSON.stringify(payload)).toString('base64')

    res.json({ token, usuario: { id: user.id, nombre_completo: user.nombre_completo, rol: user.rol } })
  } catch (error) {
    res.status(500).json({ error: 'Error en la autenticación' })
  }
}
