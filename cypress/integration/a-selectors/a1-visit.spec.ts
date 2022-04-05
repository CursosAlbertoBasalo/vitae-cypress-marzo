describe("My web app", () => {
  it("should have _budget_ on the home page", () => {
    // arrange
    const homePageUrl = "https://angularbuilders.github.io/angular-budget/";
    // act
    cy.visit(homePageUrl);
    // assert
    cy.contains("Budget");
  });
});
