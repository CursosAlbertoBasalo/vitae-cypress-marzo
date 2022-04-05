export abstract class BasePage {
  getInputByName(name: string) {
    return cy.get(`input[name=${name}]`);
  }
  getButtonByType(type: string) {
    return cy.get(`button[type=${type}]`);
  }
  visit(pageUrl: string) {
    cy.visit(pageUrl, { failOnStatusCode: false });
  }
}
