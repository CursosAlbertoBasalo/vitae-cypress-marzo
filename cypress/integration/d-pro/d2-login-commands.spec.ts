import { ProjectsAddPage } from "../../support/pages/projects-add.page";

// - [ ] GIVEN an authenticated user visiting the _projectsAdd_ page WHEN submits a new project THEN should send auth token AND THEN should got the create response
describe("GIVEN an authenticated user visiting the _projectsAdd_ page ", () => {
  const projectsAddPage = new ProjectsAddPage();
  const url = Cypress.env("apiUrl") + "projects";
  let newId = "";
  before(() => {
    cy.login();
    cy.intercept("POST", url).as("postProject");
    projectsAddPage.visit();
  });
  context("WHEN submits a new project ", () => {
    before(() => {
      projectsAddPage.fillAndSubmitCorrectlyFromFixture();
      cy.wait("@postProject").then(call => {
        newId = call.response?.body?.data?.id;
        cy.log(newId);
      });
    });
    it("THEN should got the create response", () => {
      expect(newId).not.be.empty;
    });
    after(() => {
      cy.request({
        method: "DELETE",
        url: url + "/" + newId,
      }).then(() => {
        cy.visit("");
      });
    });
  });
});
