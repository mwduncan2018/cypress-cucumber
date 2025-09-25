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


# Execute with Powershell - Execute all
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" cypress-duncan:1.0
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" -v "$(Get-Location)/cypress/screenshots:/e2e/cypress/screenshots" -v "$(Get-Location)/cypress/videos:/e2e/cypress/videos" cypress-duncan:1.0

# Execute with Powershell - Execute those annotated with contact.
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" cypress-duncan:1.0 cypress run --env tags="@contact"

# Execute with Powershell - Execute those annotated with contact.
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" -v "$(Get-Location)/cypress/screenshots:/e2e/cypress/screenshots" -v "$(Get-Location)/cypress/videos:/e2e/cypress/videos" cypress-duncan:1.0 --env tags="@contact"

# Execute with Powershell - Execute those not annotated with contact.
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" -v "$(Get-Location)/cypress/screenshots:/e2e/cypress/screenshots" -v "$(Get-Location)/cypress/videos:/e2e/cypress/videos" cypress-duncan:1.0 --env tags="not @contact"

# Execute with Powershell - Execute those annotated with both fuzzyMatching and smoke.
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" -v "$(Get-Location)/cypress/screenshots:/e2e/cypress/screenshots" -v "$(Get-Location)/cypress/videos:/e2e/cypress/videos" cypress-duncan:1.0 --env tags="@fuzzyMatching and @smoke"

# Execute with Powershell - Execute featurers not annotated with contact, annotated with smoke, and annotated with standardMatching. Additionally, execute those annotated with fuzzyMatching.
# docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" -v "$(Get-Location)/cypress/screenshots:/e2e/cypress/screenshots" -v "$(Get-Location)/cypress/videos:/e2e/cypress/videos" cypress-duncan:1.0 --env tags="(not @contact and @smoke and @standardMatching) or @fuzzyMatching"

# Execute with GitBash, Execute all
# docker run -v "//d/dev/typescript/cypress-cucumber-02/allure-results":/e2e/allure-results cypress-duncan:1.0

