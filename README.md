# -TALLER-AdoptionSystem

API del Sistema de Adopción
Esta API está diseñada para gestionar citas para adopciones de mascotas. Incluye funcionalidades para crear, actualizar y listar citas, así como gestionar la información del usuario.

Variables de Entorno
Cree un archivo .env en el directorio raíz y agregue las siguientes variables:

MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>


Endpoints de la API
Citas
Crear Cita
URL: /api/appointments/createAppointment
Método: POST
Cuerpo:
{
  "date": "2023-10-15T14:48:00.000Z",
  "status": "CREATED",
  "pet": "<pet_id>",
  "user": "<user_id>"
}


Usuarios
Registrar Usuario

URL: /api/users/register
Método: POST
Cuerpo:
{
  "name": "string",
  "username": "string",
  "email": "string",
  "password": "string"
}


Iniciar Sesión

URL: /api/users/login
Método: POST
Cuerpo:
{
  "email": "string",
  "password": "string"
}

Obtener Usuario por ID

URL: /api/users/:uid
Método: GET
Eliminar Usuario

URL: /api/users/:uid
Método: DELETE
Actualizar Contraseña del Usuario

URL: /api/users/:uid/password
Método: PUT
Cuerpo:

{
  "newPassword": "string"
}

Mascotas
Registrar Mascota

URL: /api/pets/register
Método: POST
Cuerpo:
{
  "name": "string",
  "age": "number",
  "type": "string",
  "breed": "string"
}

Obtener Mascota por ID

URL: /api/pets/:pid
Método: GET
Eliminar Mascota

URL: /api/pets/:pid
Método: DELETE
Actualizar Información de la Mascota

URL: /api/pets/:pid
Método: PUT
Cuerpo:
{
  "name": "string",
  "age": "number",
  "type": "string",
  "breed": "string"
}


Funcionalidades Adicionales
Las siguientes funcionalidades necesitan ser desarrolladas:

Actualizar Foto del Usuario
URL: /updateProfilePicture/:uid
Método: PATCH
Cuerpo:
{
  "success": "true",
  "message": "Foto actualizada",
  "user": ""
}

Listar Citas:
Listar las citas que hay
URL: "/"
Método: GET
Cuerpo:
{
  "success": "true",
  total: 1,
  "pet":[]
}

Actualizar Cita
Actualizar las citas que quiera el usuario
URL: "/"
Método: PATCH
Cuerpo:
{
  "success": "true",
  total
  users
}


Descripción: Implementar funcionalidad para cancelar una cita existente.