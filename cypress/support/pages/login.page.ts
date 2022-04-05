// 📋 To do:
export class LoginPage {
  get emailInput() {
    return cy.get("input[name=email]");
  }
  get passwordInput() {
    return cy.get("input[name=password]");
  }
  get submitButton() {
    return cy.get("button[type=submit]");
  }
  get resetButton() {
    return cy.get("button[type=reset]");
  }
  get aside() {
    return cy.get("aside");
  }

  readonly path = "/login";

  visit() {
    cy.visit(this.path, {
      failOnStatusCode: false,
    });
  }
}
