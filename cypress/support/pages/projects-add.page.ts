import { BasePage } from "./base.page";

export class ProjectsAddPage extends BasePage {
  get nameInput() {
    return super.getInputByName("name");
  }

  get budgetInput() {
    return super.getInputByName("budget");
  }

  get startDateInput() {
    return super.getInputByName("startDate");
  }

  get resetButton() {
    return super.getButtonByType("reset");
  }

  get submitButton() {
    return super.getButtonByType("submit");
  }

  readonly path = "/projects/add";
  newProjectFile = "new-project";

  override visit() {
    super.visit(this.path);
  }

  fillCorrectlyFromData(newProject: any) {
    cy.get("input[name=name]").clear().type(newProject.name);
    cy.get("input[name=budget]").clear().type(newProject.budget.toString());
    cy.get("input[name=startDate]").clear().type(newProject.starDate);
  }

  fillCorrectlyFromFixture() {
    this.resetForm();
    cy.fixture(this.newProjectFile) // load input data from json file
      .then(newProject => {
        this.nameInput.type(newProject.name);
        this.budgetInput.type(newProject.budget.toString());
        this.startDateInput.type(newProject.starDate);
      });
  }

  fillFromFixture(fixtureName: string) {
    this.resetForm();
    cy.fixture(fixtureName) // load input data from json file
      .then(newProject => {
        cy.get("input[name=name]").clear().type(newProject.name);
        cy.get("input[name=budget]").clear().type(newProject.budget.toString());
        cy.get("input[name=startDate]").clear().type(newProject.starDate);
      });
  }

  resetForm() {
    this.resetButton.click();
  }
}
