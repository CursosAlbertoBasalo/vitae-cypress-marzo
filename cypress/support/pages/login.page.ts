// 📋 To do:
class LoginPage {
  private emailQ = "input[name=email]";

  get email() {
    return this.getEmail();
  }

  public reset() {
    this.email.clear().type("invalid@world.org");
    cy.get("input[name=password]").clear().type("invalidPassword");
  }
  public getEmail() {
    return cy.get(this.emailQ);
  }
}
