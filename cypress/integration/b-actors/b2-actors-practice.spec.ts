// 📋 To do:
// - [ ] GIVEN the login form filled with _fake_ data, WHEN click on _reset_ button THEN should clear inputs
// - [ ] GIVEN the login form filled with _fake_ data, WHEN click on _login_ button THEN should display an _aside_ with _Not found_ message

describe("GIVEN the login form filled with fake data", () => {
  before(() => {
    //cy.get('a[href$=login]').click()
    cy.visit("/login", {
      failOnStatusCode: false,
    });
  });
  beforeEach(() => {
    cy.get("input[name=email]").type("invalid@world.org");
    cy.get("input[name=password]").type("invalidPassword");
  });
  context("WHEN click on _reset_ button", () => {
    beforeEach(() => {
      cy.get("button[type=reset]").click();
    });
    it("THEN should clear inputs", () => {
      cy.get("input[name=email]").should("be.empty");
      cy.get("input[name=password]").should("be.empty");
    });
  });
  context("WHEN click on _login_ button ", () => {
    beforeEach(() => {
      cy.get("button[type=submit]").click();
    });
    it("THEN should display an _aside_ with _Not found_ message", () => {
      cy.get("aside").contains("Not found");
    });
  });
});
