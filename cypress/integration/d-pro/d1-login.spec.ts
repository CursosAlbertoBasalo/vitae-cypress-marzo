import { LoginPage } from "../../support/pages/login.page";
import { ProjectsAddPage } from "../../support/pages/projects-add.page";

// - [ ] GIVEN an authenticated user visiting the _projectsAdd_ page WHEN submits a new project THEN should send auth token AND THEN should got the create response
describe("GIVEN an authenticated user visiting the _projectsAdd_ page ", () => {
  const loginPage = new LoginPage();
  const projectsAddPage = new ProjectsAddPage();
  const url = Cypress.env("apiUrl") + "projects";
  let newId = "";
  let authorization = "";
  before(() => {
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
      cy.wait("@postProject").then(call => {
        authorization = call.request.headers["authorization"] as string;
        newId = call.response?.body?.data?.id;
      });
    });
    it("THEN should send auth token", () => {
      expect(authorization).contains("Bearer ");
    });
    it("AND THEN should got the create response", () => {
      expect(newId).not.be.empty;
    });
  });
  after(() => {
    cy.request({
      method: "DELETE",
      url: url + "/" + newId,
      headers: {
        authorization,
      },
    }).then(() => {
      cy.visit("/");
    });
  });
});
