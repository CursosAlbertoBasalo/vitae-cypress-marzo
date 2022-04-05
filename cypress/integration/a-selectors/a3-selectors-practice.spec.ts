// 📋 To do:
// - [x] there are an h1 with page title
// - [x] there are a link to the about page
// - [x] there are a footer with doc-credits role
// - [x] there are four buttons for manipulate data

describe("The _budget_ home page", () => {
  before(() => {
    cy.visit("https://angularbuilders.github.io/angular-budget/");
  });
  it("should have an h1 with the page title", () => {
    cy.get("h1").should("contain", "Budget");
  });

  it("should have a link to the _about_ page", () => {
    cy.get("a").contains("About").should("have.attr", "href", "/angular-budget/about");
  });

  it("should have a footer with role _doc-credits_", () => {
    cy.get('[role="doc-credits"]').should("be.visible");
  });

  it("should display four data buttons", () => {
    // Count elements found
    cy.get(".card-footer-item.button").should("have.length", 4);
  });
});
