// [x] GIVEN the _Add new project_ page, connected to a teapot WHEN fill the form and submit to serve THEN correct data should be posted as a payload

import { ProjectsAddPage } from "../../support/pages/projects-add.page";

describe("GIVEN the _Add new project_ page, connected to a teapot", () => {
  const projectsAddPage = new ProjectsAddPage();
  beforeEach(() => {
    // Arrange
    const url = Cypress.env("apiUrl") + "projects";
    // intercept of post request and responds with an error
    const stubbedResponse = {
      statusCode: 418, // I´m a teapot
      body: { data: {} },
    };
    cy.intercept("POST", url, stubbedResponse).as("postProject"); // alias for the request
    projectsAddPage.visit();
  });
  context("WHEN fill the form and submit to server", () => {
    beforeEach(() => {
      // Act
      projectsAddPage.fillCorrectlyFromFixture();
      projectsAddPage.submitButton.click();
    });
    it("THEN correct data should be posted as a payload ", () => {
      // Assert
      cy.wait("@postProject") // wait for the request to be done and assert with a function
        .then(interceptedCall => {
          // check that the project was posted as payload
          const payload = interceptedCall.request.body;
          expect(payload.name).to.eq("Collapse global maritime traffic");
        });
    });
  });
});
