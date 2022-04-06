declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login
       * @example cy.login()
       */
      login(): void;
    }
  }
}
