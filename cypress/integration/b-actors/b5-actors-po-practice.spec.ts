// 📋 To do:
// Use the page object pattern
// - [ ] GIVEN the login form filled with _fake_ data, WHEN click on _reset_ button THEN should clear inputs
// - [ ] GIVEN the login form filled with _fake_ data, WHEN click on _login_ button THEN should display an _aside_ with _Not found_ message
// - [ ] GIVEN the _about_ link on the _home_ page, WHEN is clicked, THEN should display _About_ as the title.

import { LoginPage } from "../../support/pages/login.page";

describe("GIVEN the login form filled with fake data", () => {
  const loginPage: LoginPage = new LoginPage();
  before(() => {
    loginPage.visit();
  });
  beforeEach(() => {
    loginPage.emailInput.clear().type("fake@world.org");
    loginPage.passwordInput.clear().type("fakePassword");
  });
  context("WHEN click on _reset_ button", () => {
    beforeEach(() => {
      loginPage.resetButton.click();
    });
    it("THEN should clear inputs", () => {
      loginPage.emailInput.should("be.empty");
      loginPage.passwordInput.should("be.empty");
    });
  });
  context("WHEN click on _login_ button ", () => {
    beforeEach(() => {
      loginPage.submitButton.click();
    });
    it("THEN should display an _aside_ with _Not found_ message", () => {
      loginPage.aside.contains("Not found");
    });
  });
});
