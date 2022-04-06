// - [x] GIVEN the dashboard on the _home_ page, WHEN two projects get loaded from the API server THEN should display two projects

describe("GIVEN the dashboard on the _home_ page,", () => {
  beforeEach(() => {
    // arrange
    // intercepts the requests and responds with predefined data
    const url = Cypress.env("apiUrl") + "projects/";
    const response = { fixture: "projects" };
    cy.intercept("GET", url, response).as("getProjects");
    cy.visit("/");
  });
  context("WHEN two projects get loaded from the API server ", () => {
    beforeEach(() => {
      cy.waitFor("@getProjects"); // wait for the aliased call
    });
    it("THEN should display two projects ", () => {
      // assert
      cy.get("ab-projects ab-card").should("have.length", 2);
    });
  });
});
