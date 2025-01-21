import supertest from "supertest";
import app from "../../src/app";

describe("GET /api/userLogin", () => {
  test("Should return status 201", async () => {
    const response = await supertest(app).get("/api/userLogin");

    expect(response.status).toBe(201);
  });
});
