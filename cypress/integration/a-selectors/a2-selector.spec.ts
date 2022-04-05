describe("The budget home page", () => {
  // arrange
  const homePageUrl = "https://angularbuilders.github.io/angular-budget/";

  before(() => {
    // arrange
    cy.log("visit the page only once before all the tests");
    cy.visit(homePageUrl);
  });

  beforeEach(() => {
    // arrange
    cy.log("visit the page once before each the tests");
    //cy.visit(homePageUrl);
  });

  it("should display the application name", () => {
    cy.contains("Budget");
  });

  it("should display the app name on an anchor", () => {
    cy.get("a").should("contain", "Budget");
  });

  it("should display the app name with a given style class", () => {
    cy.get(".navbar-brand").should("contain", "Budget");
  });

  it("should display the app name on a precise identifier", () => {
    cy.get("#app-name").should("contain", "Budget");
  });

  it("should display the app name on a precise node", () => {
    // A selector precise, but code intrusive
    cy.get('[data-test-id="app-name"]').should("contain", "Budget");
  });

  it("should display the app name on something acting as banner", () => {
    // A selector based on a useful attribute: role, name, placeholder etc.
    cy.get("[role=banner]").should("contain", "Budget");
  });

  it("should have the app name on the title", () => {
    cy.title().should("contain", "Budget");
  });

  it("should have link to a login url", () => {
    // Check existence by complex selectors
    cy.get('a[href*="login"]').should("exist");
  });

  it("should not have a link to a profile url", () => {
    // check something does not exists
    cy.get('a[href*="profile"]', { timeout: 5000 }).should("not.exist");
  });

  it("should not have orphaned links", { defaultCommandTimeout: 5000 }, () => {
    // check several elements
    cy.get("a").should("not.have.attr", "href", "#undefined");
    cy.get("a").each(a => expect(a).to.not.have.attr("href", "undefined"));
  });

  afterEach(() => {
    cy.log("runs once after each the tests");
  });
  after(() => {
    cy.log("runs only once after all the tests");
  });
});
