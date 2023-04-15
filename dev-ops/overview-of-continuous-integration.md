# Overview of Continuous Integration

Continuous Integration is a development practice of code integration into a shared repository from different repos or branches. Each integration is verified by an automated build and automated tests.

It involves combining code from a number of developers into a single source code that will be used for deployment

## Processes in CI

1. Develop and Compile
2. Perform Unit Tests
3. Integrate with Databases
4. Perform pre-production deployment activities
5. Perform functional testing and code labeling
6. Generate reports and analyze

In CI, the developer has to write unit tests (for all the code in his work branch) to make sure that his/her code written is good enough and then if it passes, it is then pushed to his branch.

If the unit tests don't pass, then the code is not merged and the developer is notified maybe by email
