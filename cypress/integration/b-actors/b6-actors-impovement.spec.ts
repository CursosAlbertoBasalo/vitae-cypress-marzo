// - [x] GIVEN the _projects add_ page WHEN the form is correctly filled THEN should be able to submit
// - [ ] GIVEN the _projects add_ page WHEN the user clears the form THEN should not be able to submit
// - [ ] GIVEN a _projects add_ form already filled WHEN the anonymous user submits the form THEN should be navigated to login page

import { ProjectsAddPage } from "../../support/pages/projects-add.page";

describe("GIVEN the _projects add_ page ", () => {
  let projectsAddPage: ProjectsAddPage;
  const inputData = {
    name: "Collapse global maritime traffic",
    budget: 1234,
    starDate: "2021-03-23",
  };
  beforeEach(() => {
    projectsAddPage = new ProjectsAddPage();
    projectsAddPage.visit();
    cy.fixture("new-project").as("newProject");
  });
  context("WHEN the form is correctly filled ", () => {
    beforeEach(() => {
      cy.get("@newProject").then(newProject => projectsAddPage.fillCorrectlyFromData(newProject));
    });
    it("THEN should be able to submit ", () => {
      projectsAddPage.submitButton.should("be.enabled");
    });
  });
  context("WHEN the form is not correctly filled ", () => {
    beforeEach(() => {
      projectsAddPage.fillFromFixture("new-bad-project");
    });
    it("THEN should be able to submit ", () => {
      projectsAddPage.submitButton.should("be.disabled");
    });
  });
  context("WHEN the user clears the form", () => {
    beforeEach(() => {
      // cy.get("@newProject").then(newProject => projectsAddPage.fillCorrectlyFromData(newProject));
      projectsAddPage.fillFromFixture("new-project");
      projectsAddPage.resetForm();
    });
    it("THEN should not be able to submit ", () => {
      projectsAddPage.submitButton.should("be.disabled");
    });
  });
});
