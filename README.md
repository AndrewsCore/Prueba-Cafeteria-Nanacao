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

1. Descargar o clonar el proyecto en la computadora.
2. Abrir la terminal en la carpeta raíz del proyecto (donde está `package.json`).
3. Instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecutar los tests

En la misma terminal, ejecutar:

```bash
npm test
```

Este comando corre `jest --forceExit`, el cual levanta el servidor definido en `index.js` y ejecuta los tests.

## Resultado esperado

Se Debería ver algo como esto en la terminal:

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

Si resulta **4 passed, 4 total**, la validación fue exitosa.


## Requerimientos 

| # | Requerimiento 
|---|----------------
| 1 | `GET /cafes` devuelve status 200 y un arreglo con al menos 1 objeto 
| 2 | `DELETE /cafes/:id` con un id inexistente devuelve 404 
| 3 | `POST /cafes` agrega un nuevo café y devuelve 201 
| 4 | `PUT /cafes/:id` devuelve 400 si el id del parámetro no coincide con el id del payload 

