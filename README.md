# Mi-Tiendita-Online

## Proyecto para el reto Web 360
---

#importante

**pnpm**: Este proyecto utiliza pnpm como gestor de paquetes.  
Para iniciar el servidor, usa el siguiente comando:

```bash
pnpm run dev

## Tecnologías

### Backend:
- **Express.js**: Framework para Node.js utilizado para crear el servidor y manejar las rutas.
- **MSSQL**: Base de datos SQL Server conectada a través del paquete **mssql**.
- **JWT (JSON Web Token)**: Implementación de autenticación segura para usuarios mediante tokens.
- **Bcrypt**: Librería para cifrar y verificar contraseñas de manera segura.
- **Middleware**: Rutas protegidas con autenticación y control de roles de usuario.
- **Multer**: Middleware para manejar la subida de imágenes y otros archivos.

## Probar Backend
Para asegurar la facilidad en las pruebas, se ha nombrado a los 
controladores con el mismo nombre de sus rutas en el servidor(ruta/nombreDeControlador).
El comentario indica el método para realizar la solicitud 
### Ejemplo de Controlador:
```js
// get
export const getCart = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCartModel({ id_user });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```
 ##En este caso la ruta es:
  solicitud get
  http://localhost:3000/getCart
  
### Recomendación:  
- Reemplaza las credenciales del archivo `.env` (que ya incluye configuraciones predeterminadas para SQL Server al usar Docker) por las correctas correspondientes a tu base de datos SQL Server. Al final del documento se adjunta el enlace al script para configurar la base de datos SQL Server.

### Pasos recomendados a seguir:
1. Comienza probando las rutas de autenticación (`/auth`). Al completar este paso, utiliza el token obtenido al registrarte o iniciar sesión como usuario (rol 2).
2. Continúa probando las rutas generales (`/general`).
3. Luego, prueba las rutas específicas de usuario (`/user`).
4. Después de probar las rutas de usuario, reemplaza el token actual por el token obtenido al iniciar sesión o registrarte como operador (rol 1).
5. Finalmente, prueba las rutas específicas de operador (`/operator`).


## Instalación

1. Clona este repositorio:
   ```bash
   https://github.com/danielhz16/Mi-Tiendita-Online.git

2.Script de la base de datos 
https://drive.google.com/file/d/1MgHGoQOn2FYdmQEj1JFVuZJsP5T7Cr64/view?usp=drive_link](https://drive.google.com/file/d/1XbDtVE-0ZEAsXA6MhxhQapbANYTX9y1A/view?usp=drive_link
   

