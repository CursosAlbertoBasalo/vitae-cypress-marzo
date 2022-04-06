```bash
git clone https://github.com/LabsAdemy/vitae-cypress-marzo.git
vitae-cypress-marzo
git remote rm origin
npm install


# Install Cypress
npm install cypress --save-dev

# Open Cypress
# ""start" : "cypress open"
npm start

# Run Cypress
# "test" : "cypress run -C cypress-production.json > cypress/reports/results.txt"
npm test

# Run specific tests
# "test:spec" : "cypress run -C cypress-production-spec.json --spec "
npm run test:spec -- "cypress/integration/a-selectors/**"

# Run specific reporter

# "test:junit": "cypress run -C cypress-production-junit.json > cypress/reports/spec.txt",
npm run test:junit

# "test:city": "cypress run -C cypress-production-city.json --spec > cypress/reports/city.txt"
npm run test:city -- "cypress/integration/a-selectors/**"

```
