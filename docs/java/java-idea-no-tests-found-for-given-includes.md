# No tests found for given includes

## Problem 
While clicking on run test button in IDEA.
```
Execution failed for task ':lib:test'.
> No tests found for given includes: [org.abc..ABCTest.shouldDo$abc_lib_test](--tests filter)
```


## Solution

Change the idea preference to run test using IDEA instead of gradle.

Go to `Preferences` -> `Build, Execution, Deployment` -> `Build Tools` -> `Gradle`
Change the dropdown `Run tests using` to `IntelliJ IDEA`