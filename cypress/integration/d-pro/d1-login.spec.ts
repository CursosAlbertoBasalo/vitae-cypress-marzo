import { LoginPage } from "../../support/pages/login.page";
import { ProjectsAddPage } from "../../support/pages/projects-add.page";

// - [ ] GIVEN an authenticated user visiting the _projectsAdd_ page WHEN submits a new project THEN should send auth token AND THEN should got the create response
describe("GIVEN an authenticated user visiting the _projectsAdd_ page ", () => {
  const loginPage = new LoginPage();
  const projectsAddPage = new ProjectsAddPage();
  before(() => {
    const url = Cypress.env("apiUrl") + "projects";
    loginPage.visit();
    loginPage.fillReal();
    loginPage.submitButton.click();
    // ToDo: delete already created project
    cy.intercept("POST", url).as("postProject");
    projectsAddPage.visit();
  });
  context("WHEN submits a new project", () => {
    before(() => {
      projectsAddPage.fillAndSubmitCorrectlyFromFixture();
      // ToDo: wait one
    });
    it("THEN should send auth token", () => {
      cy.wait("@postProject").then(call => {
        const requestAuth = call.request.headers["authorization"] as string;
        expect(requestAuth).contains("Bearer ");
      });
    });
    it("AND THEN should got the create response", () => {
      cy.wait("@postProject").then(call => {
        const newId = call.response?.body?.data?.id;
        expect(newId).not.be.empty;
      });
    });
  });
  after(() => {
    // ToDo: delete created project
  });
});
