const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

    // GET /cafes devuelve 200 y un arreglo con al menos 1 objeto
    test("GET /cafes debe devolver status 200 y un arreglo con al menos un café", async () => {
        const response = await request(server).get("/cafes");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

    // DELETE /cafes/:id con id inexistente devuelve 404
    test("DELETE /cafes/:id debe devolver 404 si el café no existe", async () => {
        const response = await request(server)
            .delete("/cafes/9999")
            .set("Authorization", "algun-token"); // se necesita un token para pasar la validación previa
        expect(response.status).toBe(404);
    });

    // POST /cafes agrega un café nuevo y devuelve 201
    test("POST /cafes debe agregar un nuevo café y devolver status 201", async () => {
        const nuevoCafe = { id: 100, nombre: "Latte" };
        const response = await request(server)
            .post("/cafes")
            .send(nuevoCafe);
        expect(response.status).toBe(201);
    });

    // PUT /cafes/:id devuelve 400 si el id del parámetro no coincide con el id del payload
    test("PUT /cafes/:id debe devolver 400 si el id del parámetro no coincide con el id del payload", async () => {
        const cafeActualizado = { id: 2, nombre: "Americano actualizado" };
        const response = await request(server)
            .put("/cafes/1") // id del parámetro (1) distinto al id del payload (2)
            .send(cafeActualizado);
        expect(response.status).toBe(400);
    });

});
