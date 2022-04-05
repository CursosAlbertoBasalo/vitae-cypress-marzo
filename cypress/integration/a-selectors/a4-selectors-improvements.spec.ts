// ✅ Considere using snippets

// cy-b
before(() => {});

// cy-b-e
beforeEach(() => {});

// cy-it
it("should do something", () => {});

// cy-d-it
describe("an scenario", () => {
  it("should do something", () => {});
});

// ✅ Considere use a more readable tests suite
// Applying the Given, When, Then pattern
// Inspired from Behavior Driven Development

// cy-gwt
describe("GIVEN a product feature ", () => {
  context("WHEN an scenario ", () => {
    before(() => {});
    it("THEN should have a behavior ", () => {});
  });
});

// ❌ Avoid test jargon
// sut, input, actual, expected
// Too formal for cypress

describe("GIVEN the home page ", () => {
  context("WHEN search for the title brand ", () => {
    before(() => {
      cy.visit(""); // Use config baseUrl
    });
    it("THEN should display _Budget_ ", () => {
      cy.log("antes");
      cy.title().should("contain", "Budget");
      cy.log("después");
    });
  });
});
