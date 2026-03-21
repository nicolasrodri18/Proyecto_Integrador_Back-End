# Proyecto Integrador — Back-End
### Sistema de Gestión de Tareas

Backend del proyecto integrador desarrollado con **Node.js** y **Express.js**, que provee una API RESTful para la gestión de usuarios y tareas. Permite persistencia de datos mediante `db.json` y comunicación con el frontend de la aplicación.

---

## Integrantes del Equipo

| Nombre | Rol | GitHub |
|--------|-----|--------|
| Karol Stephany Moreno Becerra | Líder del proyecto | [@Kanny26](https://github.com/Kanny26) |
| Nicolas Rodriguez Pinzon | Desarrollo Backend | [@nicolasrodri18](https://github.com/nicolasrodri18) |
| Diego Alexander Puerto Acosta | Desarrollo | [@DAPUERTO](https://github.com/DAPUERTO) |

**Programa:** Tecnología en Análisis y Desarrollo de Software — SENA  
**Código ficha:** 2994281 | **Fase:** Ejecución  
**Instructor:** John Freddy Becerra Castellanos — CIMI

---

## Descripción del Proyecto

Este repositorio contiene el desarrollo del lado del servidor para el proyecto integrador. El objetivo principal es proporcionar una API robusta para la gestión de tareas y usuarios, permitiendo la persistencia de los datos y la comunicación con el frontend de la aplicación.

La API implementa el ciclo completo de un CRUD para usuarios y tareas, con soporte para asignación de tareas a múltiples usuarios y control de roles (admin / usuario).

---

## Tecnologías Utilizadas

- **Node.js** v24.x
- **Express.js** — framework web para Node.js
- **cors** — middleware para permitir peticiones desde el frontend
- **nodemon** — reinicio automático del servidor en desarrollo
- **db.json** — persistencia de datos en archivo JSON

---

## Estructura del Proyecto

```
Proyecto_Integrador_Back-End/
├── src/
│   ├── controllers/
│   │   ├── task.controller.js      # Lógica de negocio para tareas
│   │   └── user.controller.js      # Lógica de negocio para usuarios
│   ├── models/
│   │   ├── task.model.js           # Acceso a datos de tareas
│   │   └── user.model.js           # Acceso a datos de usuarios
│   ├── routes/
│   │   ├── tasks.routes.js         # Rutas de tareas
│   │   └── users.routes.js         # Rutas de usuarios
│   └── main.js                     # Punto de entrada del servidor
├── db.json                         # Base de datos en archivo JSON
├── .env                            # Variables de entorno
├── .gitignore
├── package.json
└── README.md
```

---

## Instalación y Ejecución

### Requisitos previos
- Node.js v18 o superior
- npm

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/Kanny26/Proyecto_Integrador_Back-End.git
cd Proyecto_Integrador_Back-End
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear el archivo `.env` en la raíz con el siguiente contenido:
```
PORT=3000
```

4. Iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor quedará corriendo en `http://localhost:3000`

---

## Endpoints de la API

### Usuarios — `/api/users`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/users` | Obtener todos los usuarios |
| GET | `/api/users/:id` | Obtener un usuario por ID |
| POST | `/api/users` | Crear un nuevo usuario |
| PUT | `/api/users/:id` | Actualizar datos de un usuario |
| DELETE | `/api/users/:id` | Eliminar un usuario |
| PATCH | `/api/users/:id/status` | Activar o desactivar un usuario |

### Tareas — `/api/tasks`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tasks` | Obtener todas las tareas |
| GET | `/api/tasks/:id` | Obtener una tarea por ID |
| POST | `/api/tasks` | Crear una nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar datos de una tarea |
| DELETE | `/api/tasks/:id` | Eliminar una tarea |

---

## Requisitos Funcionales Implementados

**Guía 1 — CRUD con JavaScript y API RESTful**
- RF-01 Visualización completa de tareas (READ)
- RF-02 Creación de tareas (CREATE)
- RF-03 Actualización de tareas (UPDATE)
- RF-04 Eliminación de tareas (DELETE)

**Guía 2 — Persistencia de la Información**
- RF01 Conexión del proyecto con la base de datos (db.json)
- RF02 Persistencia de registros (CREATE)
- RF03 Consulta de información almacenada (READ)
- RF04 Actualización de registros (UPDATE)
- RF05 Eliminación de registros (DELETE)
- RF06 Integración completa del CRUD con persistencia

---

## Control de Versiones

El proyecto sigue el flujo de trabajo **Git Flow**:
- Cada funcionalidad se desarrolla en una rama independiente
- Los cambios se integran a `develop` mediante Pull Request
- Solo se hace merge a `main` cuando la versión es estable y revisada

---

*SENA — Centro industrial de mantenimiento integral (CIMI)*
