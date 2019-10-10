const request = require("supertest");
const server = "localhost:3000";

describe("Route integration", () => {
  describe("/", () => {
    describe("GET", () => {
      test("responds with 200 status code and text/HTML content", () => {
        // expect(1).toBe(2);
        console.log("hello");
        return request(server)
        .get('/')  
        .then((response) => {
          console.log("hit")
          expect(response.statusCode).toBe(200);
          expect(response.header.contentType).toBe(/text\/html/);
        })
        .catch((err) => {if(err) return err})
      });
    });
  });

  describe("/signup", () => {
    describe("GET", () => {
      test("responds with 200 status code.", () => {
        return request(server)
          .get("/signup")
          .then(response => {
            expect(response.statusCode).toBe(200);
          });
      });
    });

    describe("POST", () => {
      test("responds with 200 status code and application/json content type", () => {
        return request(server)
          .post("/signup")
          .send({ username: "Tester", password: "helloworld" })
          .set("Accept", "application/json")
          .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.header.contentType).toBe(/json/);
          });
      });

      test("return username with on response body", () => {
        return request(server)
          .post("/signup")
          .send({ username: "Tester", password: "helloworld" })
          .set("Accept", "application/json")
          .then(response => {
            expect(response.body.username).toBe("Tester");
          });
      });
    });
  });

  describe("/login", () => {
    describe("GET", () => {
      test("responds with 200 status code", () => {
        return request(server)
          .get("/login")
          .then(response => {
            expect(response.statusCode).toBe(200);
          });
      });
    });

    describe("POST", () => {
      test("responds with 200 status code and application/json content type", () => {
        return request(server)
          .post("/login")
          .set("Accept", "application/json")
          .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.header.contentType).toBe(/text\/html/);
          });
      });

      test("return username with on response body", () => {
        return request(server)
          .post("/login")
          .set("Accept", "application/json")
          .send({ username: "Tester", password: "helloworld" })
          .then(response => expect(response.body.username).toBe("Tester"));
      });
    });
  });
});
