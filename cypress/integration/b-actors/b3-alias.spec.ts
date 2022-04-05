// [x] GIVEN the _about_ link on the _home_ page, WHEN is clicked, THEN should display _About_ as the title.

describe("GIVEN the _about_ link on the _home_ page ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("a[href$=about]").as("aboutLink"); // save with an alias
  });
  context("WHEN is clicked", () => {
    beforeEach(() => {
      cy.get("@aboutLink") // look for the alias saved
        .click();
    });
    it("THEN should display _About_ as the title ", () => {
      cy.get(".title").should("contain", "About");
    });
  });
});
