// [x] GIVEN the _Add new project_ page, connected to a teapot WHEN fill the form and submit to serve THEN correct data should be posted as a payload

import { ProjectsAddPage } from "../../support/pages/projects-add.page";

describe("GIVEN the _Add new project_ page, connected to a teapot ", () => {
  const projectsAddPage = new ProjectsAddPage();
  beforeEach(() => {
    // arrange
    const url = Cypress.env("apiUrl") + "projects/";
    const response = { statusCode: 418, body: { data: [] } };
    cy.intercept("POST", url, response).as("postProject");
    projectsAddPage.visit();
  });

  context("WHEN fill the form and submit to serve ", () => {
    beforeEach(() => {
      // act
      projectsAddPage.fillCorrectlyFromFixture();
      projectsAddPage.submitButton.click();
    });
    it("THEN correct data should be posted as a payload", () => {
      // assert
      cy.wait("@postProject").then(interceptedCall => {
        const payload = interceptedCall.request.body;
        expect(payload.name).to.eq("Collapse global maritime traffic");
      });
    });
  });
});
