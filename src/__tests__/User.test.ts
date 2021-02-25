import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';


describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@exemple.com",
            name: "User Exemple"
        });

        expect(response.status).toBe(200);
    });

    it("Should not be able to create a user with exists email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@exemple.com",
            name: "User Exemple"
        });

        expect(response.status).toBe(400);
    });
});