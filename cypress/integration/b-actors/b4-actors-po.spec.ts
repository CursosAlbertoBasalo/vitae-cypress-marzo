// [x] GIVEN a user navigated to _login_ page, WHEN the form is not filled correctly, THEN _submit_ should be disabled.
// [x] GIVEN a user navigated to _login_ page, WHEN the form is filled correctly, THEN _submit_ should be enabled.
// [x] GIVEN a user navigated to _login_ page, WHEN click on _reset_ button, THEN _submit_ should be disabled AND THEN _email_ should be empty.

import { LoginPage } from "../../support/pages/login.page";

describe("GIVEN a user navigated to _login_ page", () => {
  let loginPage: LoginPage; //  = new LoginPage();
  before(() => {
    // Arrange
    loginPage = new LoginPage();
    loginPage.visit();
  });
  context("WHEN the form is not filled correctly", () => {
    before(() => {
      // Act
      loginPage.emailInput.type("not a valid email");
      loginPage.passwordInput.type(" ");
    });
    it("THEN _submit_ should be disabled", () => {
      // Assert
      loginPage.submitButton.should("be.disabled");
    });
  });
  context("WHEN the form is filled correctly", () => {
    before(() => {
      // Act
      loginPage.emailInput.clear().type("fake@world.org");
      loginPage.passwordInput.clear().type("fakePassword");
    });
    it("THEN _submit_ should be enabled", () => {
      // Assert
      loginPage.submitButton.should("be.enabled");
    });
  });
  context("WHEN click on _reset_ button", () => {
    before(() => {
      // Act
      loginPage.resetButton.click();
    });
    it("THEN _submit_ should be disabled", () => {
      // Assert
      loginPage.submitButton.should("be.disabled");
    });
  });
});
