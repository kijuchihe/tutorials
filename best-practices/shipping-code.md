# How big companies ship code

- A plan is made
  - Product owner
  - Create Stories using Jira
- Development
  - Take stories
  - Commit
  - Take Feedback
- Build and package
  - CI/CD pipeline and server like Circle CI
  - Run unit tests
  - Jenkins
  - Docker
  - JFrog
- More tests by QA
  - They perform regression and performance tests
  - Deployment and user acception testing is done
- Goes live with docker hosted on clod and feature toggle canary deployment
- Safety Reliability Engineers (SRE) keep an eye on the website with tools like prometheus and datadog
