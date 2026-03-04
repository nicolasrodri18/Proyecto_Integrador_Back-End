# Proyecto Integrador - Back-End
Este repositorio contiene el desarrollo del lado del servidor para el proyecto integrador. El objetivo principal es proporcionar una API robusta para la gestión de tareas y usuarios, permitiendo la persistencia de datos y la comunicación con el frente de la aplicación.

## Propósito del Proyecto
El propósito de este sistema es centralizar la lógica de negocio y el manejo de datos de una aplicación de gestión. Permite realizar operaciones de creación, lectura, actualización y eliminación (CRUD) sobre recursos de usuarios y sus respectivas tareas, asegurando una estructura organizada y escalable.

### Estructura del Proyecto
La organización de carpetas y archivos en el directorio principal es la siguiente:

* node_modules/: Contiene todas las dependencias y librerías de terceros instaladas a través de npm.

* src/: Carpeta que aloja el código fuente de la aplicación.

* routes/: Contiene la definición de los puntos de entrada de la API.

* tasks.routes.js: Rutas específicas para el manejo de tareas.

* users.routes.js: Rutas específicas para la gestión de usuarios.

* app.js: Archivo principal donde se configura el servidor Express y se integran las rutas.

* .env: Archivo de configuración para variables de entorno (puertos, claves secretas, etc.).

* .gitignore: Especifica los archivos y directorios que deben ser ignorados por el sistema de control de versiones Git.

* db.json: Archivo utilizado como base de datos local para la persistencia de la información.

* package.json / package-lock.json: Archivos de configuración de Node.js que listan las dependencias y scripts del proyecto.


### Requisitos Previos
Asegúrate de tener instalado:

1- Node.js (versión LTS recomendada).

2- npm (se instala automáticamente con Node).

Configuración e Instalación

- Clonar el repositorio:


git clone <https://github.com/Kanny26/Proyecto_Integrador_Back-End.git>

cd Proyecto_Integrado_Back-End

- Instalar dependencias:

npm install

- Configurar variables de entorno:
Crea un archivo .env en la raíz (si no existe) y define el puerto: PORT=3000

- Cómo Ejecutar el Servidor
Para poner en marcha la aplicación, utiliza uno de los siguientes comandos en tu terminal:

Modo Producción:

npm start

npm run dev

El servidor estará disponible en: http://localhost:3000