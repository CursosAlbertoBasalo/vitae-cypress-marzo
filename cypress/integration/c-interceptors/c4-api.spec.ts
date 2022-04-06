// - [ ] A get _projects_ request should get an array with 1 or more items
// - [ ] A delete _projects_ request should get either a _not authenticated_ a _deleted_ or _not found_ response

const url = Cypress.env("apiUrl") + "projects/";
describe("A get _projects_ request", () => {
  it("should get an array with 1 or more items", () => {
    cy.request(url).then(response => {
      expect(response.body.data).to.have.length.above(1);
      expect(response.status).to.equal(200);
    });
  });
});
describe("A delete _projects_ request", () => {
  it("A delete request should get either a _not authenticated_ a _deleted_ or _not found_ response", () => {
    const requestOptions = {
      method: "DELETE",
      url: url + "conquer_mars",
      body: {},
      failOnStatusCode: false,
    };
    cy.request(requestOptions).then(response => {
      expect(response.status).to.be.oneOf([401, 403, 404]);
    });
  });
});
