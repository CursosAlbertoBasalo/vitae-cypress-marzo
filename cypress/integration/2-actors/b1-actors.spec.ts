describe("GIVEN a user navigated to _login_ page", () => {
  before(() => {
    // Arrange
    cy.log("1 - Before Each");
    // cy.visit("login", {
    //   failOnStatusCode: false,
    // });
    cy.visit("/");
    cy.get("a[href$=login]") // selects anchor tags with href ending with 'login'
      .click(); // Acts on the selected element
  });
  beforeEach(() => {
    cy.log("3 / 6 / 8- Before Each");
    // cy.get("input[name=email]").clear();
    // cy.get("input[name=password]").clear();
  });
  context("WHEN the form is not filled correctly", () => {
    before(() => {
      cy.log("2 - Before not filled correctly");
      cy.get("input[name=email]").clear();
      cy.get("input[name=password]").clear();
      // Act
      cy.get("input[name=email]").type("not an email");
      cy.get("input[name=password]").type(" ");
    });
    it("THEN _submit_ should be disabled", () => {
      // Arrange
      cy.get("button[type=submit]") // find the submit button
        .should("be.disabled"); // assert that the button is disabled
    });
    after(() => {
      // cy.get("input[name=email]").clear();
      // cy.get("input[name=password]").clear();
    });
  });
  context("WHEN the form is filled correctly", () => {
    before(() => {
      cy.log("5 - Before filled correctly");
      cy.get("input[name=email]").clear();
      cy.get("input[name=password]").clear();
      // Act
      cy.get("input[name=email]").type("fake_user@world.org");
      cy.get("input[name=password]").type("fake_pass");
    });
    it("THEN _submit_ should be enabled", () => {
      // assert
      cy.get("button[type=submit]").should("be.enabled"); // assert that the submit button is enabled
    });
  });
  context("WHEN click on _reset_ button", () => {
    before(() => {
      // Act
      cy.log("7 - Before filled correctly");
      cy.log("Before reset");
      cy.get("button[type=reset]") // find the reset button
        .click(); // act: on the button
    });
    it("THEN _submit_ should be disabled", () => {
      // Arrange
      cy.get("button[type=submit]") // find the submit button
        .should("be.disabled"); // assert that the button is disabled
    });
    it("AND THEN _email_ should be empty", () => {});
  });
});
