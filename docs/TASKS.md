# Suggested individual and group exercises

> You can adapt them to an application of your own.

## 0. Installation and start

- [x] Installation and first run of Cypress
- [x] Extract examples from Cypress
- [x] hello cypress

## 1. Selectors and content checking

- [x] there are an h1 with page title
- [x] there are a link to the about page
- [x] there are a footer with doc-credits role
- [x] there are four buttons for manipulate data

## 2. Manipulate data

- [x] GIVEN a user navigated to _login_ page, WHEN the form is not filled correctly, THEN _submit_ should be disabled.
- [x] GIVEN a user navigated to _login_ page, WHEN the form is filled correctly, THEN _submit_ should be enabled.
- [x] GIVEN a user navigated to _login_ page, WHEN click on _reset_ button, THEN _submit_ should be disabled AND THEN _email_ should be empty.
- [x] GIVEN the login form filled with _fake_ data, WHEN click on _reset_ button THEN should clear inputs
- [x] GIVEN the login form filled with _fake_ data, WHEN click on _login_ button THEN should display an _aside_ with _Not found_ message
- [x] GIVEN the _about_ link on the _home_ page, WHEN is clicked, THEN should display _About_ as the title.

- [x] Refactor using a **PageObject**

- [ ] GIVEN the _projects add_ page WHEN the form is correctly filled THEN should be able to submit
- [ ] GIVEN the _projects add_ page WHEN the user clears the form THEN should not be able to submit
- [ ] GIVEN a _projects add_ form already filled WHEN the anonymous user submits the form THEN should be navigated to login page
