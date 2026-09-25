# Prueba - Cafetería Nanacao

Tests unitarios con **Jest** y **Supertest** para la API REST de la Cafetería Nanacao.

## Requisitos previos

- Tener instalado [Node.js](https://nodejs.org/) (incluye npm).

## Estructura del proyecto

```
cafeteria-nanacao/
├── index.js          # Servidor Express (API REST)
├── cafes.json         # Datos de los cafés
├── package.json        # Dependencias y scripts
└── test/
    └── server.spec.js    # Tests de las rutas
```

## Instalación

1. Descarga o clona el proyecto en tu computador.
2. Abre una terminal en la carpeta raíz del proyecto (donde está `package.json`).
3. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecutar los tests

En la misma terminal, ejecuta:

```bash
npm test
```

Este comando corre `jest --forceExit`, el cual levanta el servidor definido en `index.js` y ejecuta los tests contra él.

## Resultado esperado

Deberías ver algo similar a esto en la terminal:

```
PASS test/server.spec.js
  Operaciones CRUD de cafes
    ✓ GET /cafes debe devolver status 200 y un arreglo con al menos un café
    ✓ DELETE /cafes/:id debe devolver 404 si el café no existe
    ✓ POST /cafes debe agregar un nuevo café y devolver status 201
    ✓ PUT /cafes/:id debe devolver 400 si el id del parámetro no coincide con el id del payload

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
```

Si ves **4 passed, 4 total**, la validación fue exitosa y los 4 requerimientos de la prueba están cubiertos.


## Requerimientos cubiertos

| # | Requerimiento 
|---|----------------
| 1 | `GET /cafes` devuelve status 200 y un arreglo con al menos 1 objeto 
| 2 | `DELETE /cafes/:id` con un id inexistente devuelve 404 
| 3 | `POST /cafes` agrega un nuevo café y devuelve 201 
| 4 | `PUT /cafes/:id` devuelve 400 si el id del parámetro no coincide con el id del payload 

