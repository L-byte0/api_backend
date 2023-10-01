#Backend

Aquí agrego lo que pude hacer de la prueba técnica proporcionada. Por problemas de salud, no pude abarcar todos los puntos y hice lo que pude.

## Creación de Usuarios

Para la creación de usuarios, se deben establecer el puerto y otras variables de entorno necesarias para el funcionamiento, como la conexión a MongoDB y la palabra secreta para JWT. Cuando un usuario se registre, se generará un token JWT para ser validado a través de un middleware. También se deben tener en cuenta validaciones para que el usuario no pueda ingresar cualquier cosa, lo cual también se gestiona con un middleware.

- `/auth/login`
  
- `/auth/register`
  

Las demás rutas también son validadas con el token, que tiene un tiempo de expiración.

Los archivos están organizados bajo el patrón MVC para facilitar el entendimiento.
