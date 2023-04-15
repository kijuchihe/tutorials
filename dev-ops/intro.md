# DevOps

DevOps can be seen as an evolution of the agile model of software development

The agile model addressed the gap between clients and developers. We want to bring the development and operations team into integration

The steps involved include

1. Planning
2. Code and use stuff like git to collaborate
3. We can then use tools like Maven and Gradle to consistently build your work from different repositories
4. Testing using stuff like Selenium and JUnit
5. Integrating using stuff like Jenkins to integrate the development to the building phase
6. Deployment with stuff like docker
7. Operate and manage the production environments with tools like chef and ansible
8. Monitoring the entire environment


## Processes
`Cotinuous Delivery -> Continuous Integration -> `

### Continuous Delivery

This involves `Plan -> Code -> Build -> Test`

Fromt the above, it can be seen that this happens before the integration


### Continuous Integration

This involves pushing your code into the release (or build environment) and you want to test your code, if there are defects we can send back to the developer with a message telling the developer what the defect is

### Continuous Deployment

This involves `Deploy -> Operate -> Monitor`

If the code passes the scripted tests, it can then be deployed into production

## Advantages

- Many Companies use DevOps (like Google, Netflix)
- Reduce time consumption
- Complexity of maintaining an application
- Improved collaboration between developer and operations team
