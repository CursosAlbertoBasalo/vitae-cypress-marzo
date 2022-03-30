describe("GIVEN the login form filled with fake data", () => {
  let loginPage: LoginPage;
  before(() => {
    //cy.get('a[href$=login]').click()
    loginPage = new LoginPage();
    cy.visit("/login", {
      failOnStatusCode: false,
    });
  });
  beforeEach(() => {
    // const input = cy.get("input[name=email]");
    // input.clear();
    // input.type("a");

    // cy.get("input[name=email]").clear().type("invalid@world.org");
    // cy.get("input[name=password]").clear().type("invalidPassword");
    loginPage.reset();
  });
  context("WHEN click on _reset_ button", () => {
    beforeEach(() => {
      cy.get("button[type=reset]").click();
    });
    it("THEN should clear inputs", () => {
      loginPage.getEmail().should("be.empty");
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
