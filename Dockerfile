# Debian
# Cypress
# Chrome, Firefox, Electron
FROM cypress/included:14.5.3

WORKDIR /e2e

COPY package.json .
COPY package-lock.json . 
COPY tsconfig.json . 
RUN npm install

COPY cypress/e2e cypress/e2e
COPY cypress/fixtures cypress/fixtures
COPY cypress/support cypress/support

COPY cypress.config.js . 

CMD ["cypress", "run", "--browser", "chrome"]


# Execute with Powershell, execute all tests
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" cypress-duncan:1.0

# Execute with Powershell, execute a specific feature
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" cypress-duncan:1.0 cypress run --env tags="@contact"

# Execute with GitBash, execute all tests
# docker run -v "//d/dev/typescript/cypress-cucumber-02/allure-results":/e2e/allure-results cypress-duncan:1.0

