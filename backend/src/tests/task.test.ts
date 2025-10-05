import request from "supertest";
import app from "../app";
import { response } from "express";


describe("Task API", () => {
  it("should create a task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "Test", description: "Desc" });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Test");
  });
});
