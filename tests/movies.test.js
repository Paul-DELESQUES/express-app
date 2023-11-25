const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);

    expect(response.status).toEqual(200);
  });
});

//challenge de la quete 01.1 : Test sur la route avec ID

describe("GET /api/movies/:id", () => {
  it("should return a specific movie when a valid ID", async () => {
    const response = await request(app).get("/api/movies/1"); // Change the ID as needed

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1); // Check if the returned movie ID matches the requested ID
  });

  it("should return 404 Not Found", async () => {
    const response = await request(app).get("/api/movies/0"); // Use an ID that does not exist

    expect(response.status).toEqual(404);
  });
});
