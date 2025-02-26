## Link de la documentacion con Swagger
```bash
  http://localhost:3000
  https://lexart-test-back.vercel.app/v1/docs-json/
```
## Configuración y Uso

Para comenzar con este proyecto, sigue estos pasos:

1. **Instalar Dependencias**
   ```bash
   npm install

2. **Desplegar Proyecto en local**
   ```bash
   npx vercel dev

3. **Desplegar Proyecto en vercel**
   ```bash
   npx vercel --prod


## Endpoints de Productos

- **`POST /products/create/seed`**
  - Descripción: Rellena la base de datos con productos de ejemplo.
  - Cuerpo de la Solicitud: No se necesitan parámetros.

- **`POST /products/create/one/:id`**
  - Descripción: Crea un nuevo producto con el ID especificado.
  - Parámetro en la URL: `id` - El ID del producto a crear.
  - Cuerpo de la Solicitud: 
    ```json
    {
      "name": "string",
      "stock": "number",
      "price": "number",
      "model": "string",
      "mark": "string"
    }
    ```

- **`GET /products/get/all`**
  - Descripción: Recupera todos los productos. Admite parámetros de consulta opcionales.
  - Parámetros de Consulta:
    - `limit` - Número de elementos a devolver (opcional).
    - `offset` - Número de elementos a omitir (opcional).

- **`GET /products/get/one/:id`**
  - Descripción: Recupera un solo producto por su ID.
  - Parámetro en la URL: `id` - El ID del producto a recuperar.

- **`DELETE /products/delete/all`**
  - Descripción: Elimina todos los productos de la base de datos.
  - Cuerpo de la Solicitud: No se necesitan parámetros.

- **`DELETE /products/delete/one/:id`**
  - Descripción: Elimina un producto específico por su ID.
  - Parámetro en la URL: `id` - El ID del producto a eliminar.

## Endpoints de Usuarios

- **`POST /users/login`**
  - Descripción: Inicia sesión un usuario y devuelve un token.
  - Cuerpo de la Solicitud:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **`POST /users/register`**
  - Descripción: Registra un nuevo usuario.
  - Cuerpo de la Solicitud:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- **`GET /users/get/:id`**
  - Descripción: Este endpoint no se usa en la API.
  - Parámetro en la URL: `id` - El ID del usuario a recuperar.
