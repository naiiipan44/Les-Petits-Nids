// Import the supertest library for making HTTP requests
import supertest from "supertest";

// Import the Express application
import app from "../../src/app";

// Import databaseClient
import databaseClient from "../../database/client";

import type { Result, Rows } from "../../database/client";

// Restore all mocked functions after each test
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GET /api/userLogin", () => {
  it("Should return status 200", async () => {
    const rows = [] as Rows;

    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async () => [rows, []]);

    const response = await supertest(app).get("/api/userLogin");

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows);
  });
});

describe("POST /api/userLogin", () => {
  it("Should return status 201", async () => {
    const result = { insertId: 1 } as Result;

    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async () => [result, []]);

    const fakeUserLogin = {
      firstName: "Jean-Claude",
      lastName: "Bauvin",
      email: "jc.bauvin@gmail.com",
      password: "1234MMMlll!!!",
    };

    const response = await supertest(app)
      .post("/api/userLogin")
      .send(fakeUserLogin);

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toBe(result.insertId);
  });

  it("Should fail on invalid request and return status 400", async () => {
    jest.spyOn(databaseClient, "query");

    const fakeUserLogin = { firstName: "Jean-Patrick" };

    const response = await supertest(app)
      .post("/api/userLogin")
      .send(fakeUserLogin);

    expect(response.status).toBe(400);
  });
});
