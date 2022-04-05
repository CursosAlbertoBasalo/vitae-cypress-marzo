// - [x] GIVEN the dashboard on the _home_ page, WHEN projects get loaded from the API server THEN should display those projects

describe("GIVEN the dashboard on the _home_ page,", () => {
  beforeEach(() => {
    // arrange
    const url = Cypress.env("apiUrl") + "projects/";
    const response = { fixture: "projects" };
    cy.intercept("GET", url, response).as("getProjects");
    cy.visit("/");
  });
  context("WHEN projects get loaded from the API server ", () => {
    beforeEach(() => {
      cy.waitFor("@getProjects");
    });
    it("THEN should display those projects ", () => {
      // assert
      cy.get("ab-projects ab-card").should("have.length", 2);
    });
  });
});
