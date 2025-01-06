# Mi-Tiendita-Online

## Proyecto para el reto Web 360
---

#importante
Ya que solo el operador puede crear usuarios dejo credeciales de prueba aquí
 ##operador
 email: operador2025@email.com
 contraseña: hola@123
 
 ##usuario: 
 email: usuario2025@email.com
 contraseña: hola@123

**pnpm**: Este proyecto utiliza pnpm como gestor de paquetes.  
Para iniciar el servidor, usa el siguiente comando:

```bash
pnpm run dev
```

## Tecnologías

### Frontend:
- **React**: Para la interfaz de usuario.
- **jsPdf**: Para la generacion de comprobantes de pago.
- **Styled-Components**: Para manejar estilos dinamicamente.
- **Lottie-web**: Para animaciones.
- **React Hook-Form**: Para el envío de formularios.
- **Yup**: Para validar los formularios.
- **React Hot Toast**: Para notificaciones.
- **Axios**: Para realizar solicitudes al backend.
- **PrimeReact, PrimeFlex, PrimeIcons**: Librería de componentes.
- **react-international-phone**: Para facilitar el ingreso del número de telefono.
- **React Drop Zone**: para seleccionar fotos.
- **Recharts**: Para generar gráficos.

### Backend:
- **Express.js**: Framework para Node.js utilizado para crear el servidor y manejar las rutas.
- **MSSQL**: Base de datos SQL Server conectada a través del paquete **mssql**.
- **JWT (JSON Web Token)**: Implementación de autenticación segura para usuarios mediante tokens.
- **Bcrypt**: Librería para cifrar y verificar contraseñas de manera segura.
- **Middleware**: Rutas protegidas con autenticación y control de roles de usuario.
- **Multer**: Middleware para manejar la subida de imágenes y otros archivos.
 

##características
 - modulos: usuario / operador.
 - Temas Claro y obscuro.
 - Comprobantes de pago.
 - animaciones.
 - refresh de token jwt para notificar al usuario si es suspendido.
 - los prodictos son ordenados por categoria , esto se maneja automaticamente por lo que al crear una nueva 
  categoría y agrgegar productos se agrgara su sección automaticamente.
 - Autocompletado de dirección de entrega.
 - Selección manual o arrastrando imagen.
 - Gráficos de productos más vendidos, usuarios con más compras.
 - solo un operador puede crear nuevos usuarios.
 - Se guardan url de las fotos usando IMGUR.
 - Solo permite el registro de mayores de edad.

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

  ##
  
## Instalación

1. Clona este repositorio:
   ```bash
   https://github.com/danielhz16/Mi-Tiendita-Online.git

