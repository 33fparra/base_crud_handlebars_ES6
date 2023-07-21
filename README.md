<img src="public/image/perfil.png" align="right" />

# CRUD en Handlebars (estandar) [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/33fparra/base_crud_handlebars_ES6)

> Mi Trabajo

https://github.com/33fparra/base_crud_handlebars_ES6

Contents
========

 * [Descripción del Proyecto](#descripción-del-proyecto-memo)
 * [Instrucciones de Instalación](#instrucciones-de-instalación-computer)
 * [Funcionalidades](#funcionalidades-sparkles)
 * [Ejecutor](#ejecutor)
 
## Descripción del Proyecto :memo:

📝 Este es un esquema estandar para un proyecto basico de Handlebars en NODE.JS, disribucion de las carpetas, y router para cada una de las vistas

## Instrucciones de Instalación :computer:

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000


<details><summary><b>Ver las instrucciones</b></summary>

1. Instalar las dependencias:

   ```sh
   npm install 
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "body-parser": "^1.20.2",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.0",
    "hbs": "^4.2.0",
    "mysql": "^2.18.1",
    "mysql2": "^3.5.2",
    "sequelize": "^6.32.1"
    }
    ````

</details>

</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Funcionalidad : Utilizacion de hbs
2. Funcionalidad : Router para vistas
3. Funcionalidad : Utilizacion de {{# each}}
4. Funcionalidad : Distribucion estandar de carpetas
5. Funcionalidad : Utilizacion de sequelize para la conexion de MySQL

## Ejecutor :busts_in_silhouette:

1. Felipe Andres Parra : https://github.com/33fparra

### Este proyecto está bajo la licencia MIT. Para más información, consulta el archivo LICENSE.