# cypress-cucumber

## Allure Reports

###### INSTALL - https://allurereport.org/docs/install/

###### EXECUTE - npx cypress run

###### GENERATE - allure generate allure-results --clean -o allure-report

###### SERVE - allure serve allure-results

###### GENERATE AND SERVE (generates report to temp directory and opens report) - allure serve

## Docker

###### Within cypress.config.js, change baseUrl to http://host.docker.internal:5096 when building a new image.

##### Execute with Powershell

###### docker run -v "$(Get-Location)/allure-results:/e2e/allure-results" cypress-duncan:1.0

##### On Windows, execute with GitBash

###### docker run -v "$(cygpath -w "$PWD/allure-results")":/e2e/allure-results cypress-duncan:1.0
