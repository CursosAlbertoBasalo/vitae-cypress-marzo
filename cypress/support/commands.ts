// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.visit("login", { failOnStatusCode: false });
  cy.get("input[name=email]").type("admin@world.org");
  cy.get("input[name=password]").type("S3cr3t");
  cy.get("button[type=submit]").click();
});

Cypress.Commands.overwrite("request", (originalFn, ...args) => {
  const optionsObject = args[0];
  const token = Cypress.env("token");

  if (!!token && optionsObject === Object(optionsObject)) {
    optionsObject.headers = {
      authorization: "Bearer " + token,
      ...optionsObject.headers,
    };

    // optionsObject.headers
    //   ? (optionsObject.headers["authorization"] = "")
    //   : (optionsObject.headers = { authorization : "" });

    return originalFn(optionsObject);
  }

  return originalFn(...args);
});
