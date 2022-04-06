cy.on("uncaught:exception", error => {
  if (error.message.includes("Expected error")) {
    return false;
  }
});

// Cypress.on("window:before:load", win => {
//   cy.spy(win.console, "error").calledTwice();

//   cy.stub(win.console, "warn").callsFake((msg: string) => {
//     cy.log(msg);
//   });
// });

before(() => {
  cy.log("🪝 Global Before");
});
beforeEach(() => {
  cy.log("🪝 Global Before Each");
});
afterEach(() => {
  cy.log("🪝 Global After Each");
});
after(() => {
  cy.log("🪝 Global After");
});
