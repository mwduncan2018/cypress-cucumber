# cypress-cucumber

## Allure Reports

###### INSTALL - https://allurereport.org/docs/install/

###### EXECUTE TESTS (allure-results directory is created) - npx cypress run

###### GENERATE (allure-report directory is created) - allure generate allure-results --clean -o allure-report

###### SERVE (Opens report) - allure open

###### GENERATE & SERVE SHORTCUT (generates report to temp directory and opens report) - allure serve

## Docker

###### Within cypress.config.js, change baseUrl to http://host.docker.internal:5096 when building a new image.

##### Execute with Powershell

###### docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" -v "$(Get-Location)/cypress/videos:/e2e/cypress/videos" -v "$(Get-Location)/cypress/screenshots:/e2e/cypress/screenshots" cypress-duncan:1.0

##### On Windows, execute with GitBash

###### docker run -v "$(cygpath -w "$PWD/allure-results")":/e2e/allure-results -v "$(cygpath -w "$PWD/cypress/videos")":/e2e/cypress/videos -v "$(cygpath -w "$PWD/cypress/screenshots")":/e2e/cypress/screenshots cypress-duncan:1.0
