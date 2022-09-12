# Implementing CI/CD and continuous deployment

One of the key DevOps practices is the process of integration and continuous
delivery, also called CI/CD. In fact, behind the acronyms of CI/CD, there are
three practices:

- Continuous integration (CI)
- Continuous delivery (CD)
- Continuous deployment

## Continuous integration (CI)

In the following definition given by Martin Fowler, there are three key things
mentioned, members of a team, integrate, and as quickly as possible:

"Continuous Integration is a software development practice where members of a
team integrate their work frequently... Each integration is verified by an
automated build (including test) to detect integration errors as quickly as
possible."

That is, CI is an automatic process that allows you to check the completeness of
an application's code every time a team member makes a change. This verification
must be done as quickly as possible.

We see DevOps culture in CI very clearly, with the spirit of collaboration and
communication, because the execution of CI impacts all members in terms of work
methodology and therefore collaboration; moreover, CI requires the
implementation of processes (branch, commit, pull request, code review, and so
on) with automation that is done with tools adapted to the whole team (Git,
Jenkins, Azure DevOps, bash scripts and so on). And finally, CI must run quickly
to collect feedback on code integration as soon as possible and hence be able to
deliver new features more quickly to users.

### Implementing CI

To set up CI, it is, therefore, necessary to have a **Source Code Manager
(SCM)** that will allow the centralization of the code of all members. This code
manager can be of any type: Git, SVN, or Team Foundation Source Control (TFVC).
It's also important to have an automatic build manager (CI server) that supports
continuous integration such as Jenkins, GitLab CI, TeamCity, Azure Pipelines,
GitHub Actions, Travis CI, Circle CI, and so on.

> For this tutorial, we will be using git as our SCM

Each team member will work on the application code daily, iteratively and
incrementally (such as in agile and scrum methods). Each task or feature must be
partitioned from other developments with the use of branches.

Regularly, even several times a day, members archive or commit their code and
preferably with small commits (trunks) that can easily be fixed in the event of
an error. This will, therefore, be integrated into the rest of the code of the
application with all of the other commits of the other members.

This integration of all the commits is the starting point of the CI process.

This process, executed by the CI server, must be automated and triggered at each
commit. The server will retrieve the code and then do the following:

- Build the application package—compilation, file transformation, and so on.
- Perform unit tests (with code coverage).

This CI process must be optimized as soon as possible so that it can run fast
and developers can have quick feedback on the integration of their code. For
example, code that is archived and does not compile or whose test execution
fails can impact and block the entire team.

Sometimes, bad practices can result in the failure of tests in the CI,
deactivating the test execution, taking as arguments: it is not serious, it is
necessary to deliver quickly, or the code that compiles it is essential.

On the contrary, this practice can have serious consequences when the errors
detected by the tests are revealed in production. The time saved during CI will
be lost on fixing errors with hotfixes and redeploying them quickly with stress.
This is the opposite of DevOps culture with poor application quality for end
users and no real feedback, and, instead of developing new features, we spend
time correcting errors.

With an optimized and complete CI process, the developer can quickly fix their
problem and improve their code or discuss it with the rest of the team and
commit their code for a new integration:

## Continuous delivery (CD)

Once continuous integration has been successfully completed, the next step is to
deploy the application automatically in one or more non-production environments,
which is called staging. This process is called continuous delivery (CD).

CD often starts with an application package prepared by CI, which will be
installed according to a list of automated tasks. These tasks can be of any
type: unzip, stop and restart service, copy files, replace configuration, and so
on. The execution of functional and acceptance tests can also be performed
during the CD process.

Unlike CI, CD aims to test the entire application with all of its dependencies.
This is very visible in microservices applications composed of several services
and APIs; CI will only test the microservice under development while, once
deployed in a staging environment, it will be possible to test and validate the
entire application as well as the APIs and microservices that it is composed of.

In practice, today, it is very common to link CI with CD in an integration
environment; that is, CI deploys at the same time in an environment. It is
indeed necessary so that developers can have at each commit not only the
execution of unit tests but also a verification of the application as a whole
(UI and functional), with the integration of the developments of the other team
members.

It is very important that the package generated during CI and that will be
deployed during CD is the same one that will be installed on all environments,
and this should be the case until production. However, there may be
configuration file transformations that differ depending on the environment, but
the application code (binaries, DLL, and JAR) must remain unchanged.

This immutable, unchangeable character of the code is the only guarantee that
the application verified in an environment will be of the same quality as the
version deployed in the previous environment and the same one that will be
deployed in the next environment. If changes (improvements or bug fixes) are to
be made to the code following verification in one of the environments, once
done, the modification will have to go through the CI and CD cycle again.

The tools set up for CI/CD are often completed with others solutions, which are
as follows:

- A package manager: This constitutes the storage space of the packages
  generated by CI and recovered by CD. These managers must support feeds,
  versioning, and different types of packages. There are several on the market,
  such as Nexus, ProGet, Artifactory, and Azure Artifacts.

- A configuration manager: This allows you to manage configuration changes
  during CD; most CD tools include a configuration mechanism with a system of
  variables.

In CD, the deployment of the application in each staging environment is
triggered as follows:

- It can be triggered automatically, following a successful execution on a
  previous environment. For example, we can imagine a case where the deployment
  in the pre-production environment is automatically triggered when the
  integration tests have been successfully performed in a dedicated environment.
- It can be triggered manually, for sensitive environments such as the
  production environment, following a manual approval by a person responsible
  for validating the proper functioning of the application in an environment.

What is important in a CD process is that the deployment to the production
environment, that is, to the end user, is triggered manually by approved users:

## Continuous deployment

Continuous deployment is an extension of CD, but this time, with a process that
automates the entire CI/CD pipeline from the moment the developer commits their
code to deployment in production through all of the verification steps.

This practice is rarely implemented in enterprises because it requires a wide
coverage of tests (unit, functional, integration, performance, and so on) for
the application, and the successful execution of these tests is sufficient to
validate the proper functioning of the application with all of these
dependencies, but also automated deployment to a production environment without
any approval action.

The continuous deployment process must also take into account all of the steps
to restore the application in the event of a production problem.

Continuous deployment can be implemented with the use and implementation of
feature toggle techniques (or feature flags), which involves encapsulating the
application's functionalities in features and activating its features on demand,
directly in production, without having to redeploy the code of the application.

Another technique is to use a blue-green production infrastructure, which
consists of two production environments, one blue and one green. We first deploy
to the blue environment, then to the green; this will ensure that there is no
downtime required:

## Understanding IaC practices

IaC is a practice that consists of writing the code of the resources that make
up an infrastructure.

This practice began to take effect with the rise of DevOps culture and with the
modernization of cloud infrastructure. Indeed, Ops teams that deploy
infrastructures manually take time to deliver infrastructure changes due to
inconsistent handling and the risk of errors. Also, with the modernization of
the cloud and its scalability, the way an infrastructure is built requires a
review of provisioning and change practices by adapting a more automated method.

IaC is the process of writing the code of the provisioning and configuration
steps of infrastructure components to automate its deployment in a repeatable
and consistent manner.

Before we look at the use of IaC, we will see what the benefits of this practice
are.

### The benefits of IaC

The benefits of IaC are as follows:

- The standardization of infrastructure configuration reduces the risk of error.
- The code that describes the infrastructure is versioned and controlled in a
  source code manager.
- The code is integrated into CI/CD pipelines.
- Deployments that make infrastructure changes are faster and more efficient.
- There's better management, control, and a reduction in infrastructure costs.

IaC also brings benefits to a DevOps team by allowing Ops to be more efficient
on infrastructure improvement tasks rather than spending time on manual
configuration and by giving Dev the possibility to upgrade their infrastructures
and make changes without having to ask for more Ops resources.

IaC also allows the creation of self-service, ephemeral environments that will
give developers and testers more flexibility to test new features in isolation
and independently of other environments.

### IaC languages and tools

The languages and tools used to code the infrastructure can be of different
types; that is, scripting and declarative types.

#### Scripting types

These are scripts such as Bash, PowerShell, or any other languages that use the
different clients (SDKs) provided by the cloud provider; for example, you can
script the provisioning of an Azure infrastructure with the Azure CLI or Azure
PowerShell. For example, here is the command that creates a resource group in
Azure:

- Using the Azure CLI (the documentation is at https:/ / bit. ly/ 2V1OfxJ), we
  have the following:

  > `az group create -location westeurope -name MyAppResourcegroup`

- Using Azure PowerShell (the documentation is at https:/ / bit. ly/ 2VcASeh),
  we have the following:
  > `New-AzResourceGroup -Name MyAppResourcegroup -Location westeurope`

The problem with these languages and tools is that they require a lot of lines
of code because we need to manage the different states of the manipulated
resources and it is necessary to write all of the steps of the creation or
update of the desired infrastructure.

However, these languages and tools can be very useful for tasks that automate
repetitive actions to be performed on a list of resources (selection and query)
or that require complex processing with a certain logic to be performed on
infrastructure resources such as a script that automates the deletion of VMs
that carry a certain tag.

#### Declarative types

These are languages in which it is sufficient to write the state of the desired
system or infrastructure in the form of configuration and properties. This is
the case, for example, for Terraform and Vagrant from HashiCorp, Ansible, the
Azure ARM template, PowerShell DSC, Puppet, and Chef. The user only has to write
the final state of the desired infrastructure and the tool takes care of
applying it.

For example, the following is the Terraform code that allows you to define the
desired configuration of an Azure resource group:

```
resource "azurerm_resource_group" "myrg" {
name = "MyAppResourceGroup"
location = "West Europe"
tags = {
environment = "Bookdemo"
}
}
```

In this example, if you want to add or modify a tag, just modify the tags
property in the preceding code and Terraform will do the update itself. Here is
another example that allows you to install and restart nginx on a server using
Ansible:

```
---
- hosts: all
tasks:
- name: install and check nginx latest version
apt: name=nginx state=latest
- name: start nginx
service:
name: nginx
state: started
```

And to ensure that the service is not installed, just change the preceding code,
with service as an absent value and the state property with the stopped value:

```
---
- hosts: all
tasks:
- name: stop nginx
service:
name: nginx
state: stopped
- name: check nginx is not installed
apt: name=nginx state=absent
```

In this example, it was enough to change the state property to indicate the
desired state of the service.
