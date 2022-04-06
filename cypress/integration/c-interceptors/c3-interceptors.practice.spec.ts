// 📋 To do labs:
// - [ ] GIVEN the dashboard on the _home_ page' WHEN get no projects from server THEN show _Something went wrong..._ with a _message_ class
describe("GIVEN the dashboard on the _home_ page", () => {
  beforeEach(() => {
    const method = "GET";
    const url = Cypress.env("apiUrl") + "projects";
    const stubbedResponse = { statusCode: 503, body: {} };
    cy.intercept(method, url, stubbedResponse).as("getProjects"); // alias
    cy.visit("/");
  });
  context("WHEN get no projects from server", () => {
    beforeEach(() => {
      cy.waitFor("@getProjects");
    });
    it("THEN show _Something went wrong..._ with a _message_ class", () => {
      cy.get(".message").should("contain", "Something went wrong");
    });
  });
});

describe("GIVEN the dashboard on the _home_ page", () => {
  beforeEach(() => {
    const method = "GET";
    const url = Cypress.env("apiUrl") + "projects";
    const stubbedResponse = { body: { data: [] } };
    cy.intercept(method, url, stubbedResponse).as("getProjects"); // alias
    cy.visit("/");
  });
  context("WHEN get no projects from server", () => {
    beforeEach(() => {
      cy.waitFor("@getProjects");
    });
    it("THEN show _No data yet..._ with a _message_ class", () => {
      cy.get(".message").should("contain", "No data yet");
    });
  });
});
