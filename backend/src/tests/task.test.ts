import request from "supertest";
import app from "../app";

describe("Task API", () => {
  it("should create a task", async () => {
    const response = await request(app)
      .post("/api/tasks/create-task")
      .send({ title: "Test Task", description: "This is a test task" });

    expect(response.statusCode).toBe(201);
    expect(response.body.data.title).toBe("Test Task");              // ✅ changed
    expect(response.body.data.description).toBe("This is a test task");  // ✅ changed
  });

  it("should get recent tasks", async () => {
    const response = await request(app)
      .get("/api/tasks/recent-tasks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);   // ✅ changed
  });
});
