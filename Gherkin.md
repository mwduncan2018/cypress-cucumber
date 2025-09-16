# Gherkin Best Practices

###### Reduce Maintenance + Improve Readability + Improve Reusability + Increase Collaboration

## Good Advice

##### You should not need to spend a lot of time reading and understanding a scenario.

##### A person that works in the business should not feel overwhelmed when reading a scenario

##### If implementation changes, the scenario should not change

##### Gherkin should only change when the requirement changes

##### Do not validate multiple unrelated things in a scenario

## Incidental Details

##### Avoid navigation details in the Gherkin

##### If you do specify a page, specify the specific page where the requirement starts

##### Do not specify text of a button that you click

##### Do not verify navigation after clicking a link

##### Do not mention incidental details

## Trying To Do Too Many Things

##### When you try to do too many things in a scenario, you will not be sure what the failure is when the scenario fails

##### When you try to do too many things in a scenario and something fails, everything you are trying to verify after the failure will not execute within the scenario

##### A scenario should have a single intention

##### A scenario should not have multiple intentions

##### The scenario should have one starting point and one group of "Then" statements as a verification point

## Lengthy

##### 3 to 5 steps is ideal

##### 5 to 8 steps is okay for complex scenarios

##### Do not have more than 8 steps

##### Long scenarios are unreadable

##### Nobody is going to read long scenarios

##### If you have a long scenario, this is an indication to break it up into multiple scenarios

## Conjunction Steps

##### Do not have multiple steps disguised within a single step

##### Every class does one thing and one thing well -- Every method does one thing and one thing well -- Every Gherkin scenario does one thing and one thing well -- Every Gherkin step does one thing and one thing well

##### Smaller focused steps provide better reuse

## Names

##### Avoid lengthy scenario names

##### Avoid lengthy feature names

##### Use the "Rule" keyword to provide a logical grouping to scenarios, which allows scenario names to be shorter

##### If the scenario name is not detailed enough, use the Scenario free text description section to provide detail

##### If the feature name is not detailed enough, use the Feature free text description to provide a detail

## Gherkin is not a Manual Test Plan

##### Gherkin Scenarios are business specifications

##### Gherkin is not a manual test plan
