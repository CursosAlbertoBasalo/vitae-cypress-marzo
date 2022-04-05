// [x] GIVEN a user navigated to _login_ page, WHEN the form is not filled correctly, THEN _submit_ should be disabled.
// [x] GIVEN a user navigated to _login_ page, WHEN the form is filled correctly, THEN _submit_ should be enabled.
// [x] GIVEN a user navigated to _login_ page, WHEN click on _reset_ button, THEN _submit_ should be disabled AND THEN _email_ should be empty.

describe("GIVEN a user navigated to _login_ page", () => {
  before(() => {
    // Arrange
    cy.visit("/");
    cy.get("a[href$=login]") // selects anchor tags with href ending with 'login'
      .click(); // Acts on the selected element
  });
  context("WHEN the form is not filled correctly", () => {
    before(() => {
      // Act
      cy.get("input[name=email]") // find the email input
        .type("not a valid email"); // act: type the email
      cy.get("input[name=password]").type(" "); // act: type the password
    });
    it("THEN _submit_ should be disabled", () => {
      // Assert
      cy.get("button[type=submit]") // find the submit button
        .should("be.disabled"); // assert that the button is disabled
    });
  });
  context("WHEN the form is filled correctly", () => {
    before(() => {
      // Act
      cy.get("input[name=email]") // find the email input
        .clear() // clear previous content
        .type("fake_user@world.org"); // act: type the email
      cy.get("input[name=password]").type("fake_pass"); // act: type the password
    });
    it("THEN _submit_ should be enabled", () => {
      // Assert
      cy.get("button[type=submit]").should("be.enabled"); // assert that the submit button is enabled
    });
  });
  context("WHEN click on _reset_ button", () => {
    before(() => {
      // Act
      cy.get("button[type=reset]") // find the reset button
        .click(); // act: on the button
    });
    it("THEN _submit_ should be disabled", () => {
      // Assert
      cy.get("button[type=submit]") // find the submit button
        .should("be.disabled"); // assert that the button is disabled
    });
  });
});
