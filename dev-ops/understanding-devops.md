## Understanding DevOps

The term DevOps was introduced in 2007-2009 by Patrick Debois, Gene Kim, and
John Willis, and it represents the combination of Development (Dev) and
Operations (Ops). It has given rise to a movement that advocates bringing
developers and operations together within teams. This is to be able to deliver
added business value to users more quickly and hence be more competitive in the
market.

DevOps culture is a set of practices that reduce the barriers between
developers, who want to innovate and deliver faster, on the one side and, on the
other side, operations, who want to guarantee the stability of production
systems and the quality of the system changes they make.

To facilitate this collaboration and improve communication between Dev and Ops,
there are several key elements in the processes to be put in place, as in the
following examples:

- More frequent application deployments with integration and continuous delivery
  (called CI/CD)
- The implementation and automation of unitary and integration tests, with a
  process focused on Behavior-Driven Design (BDD) or Test-Driven Design (TDD)
- The implementation of a means of collecting feedback from users
- Monitoring applications and infrastructure

The DevOps movement is based on three axes:

- The culture of collaboration: This is the very essence of DevOps—the fact that
  teams are no longer separated by silos specialization (one team of developers,
  one team of Ops, one team of testers, and so on), but, on the contrary, these
  people are brought together by making multidisciplinary teams that have the
  same objective: to deliver added value to the product as quickly as possible.

- Processes: To expect rapid deployment, these teams must follow development
  processes from agile methodologies with iterative phases that allow for better
  functionality quality and rapid feedback. These processes should not only be
  integrated into the development workflow with continuous integration but also
  into the deployment workflow with continuous delivery and deployment. The
  DevOps process is divided into several phases:
  - The planning and prioritization of functionalities Development
  - Continuous integration and delivery
  - Continuous deployment
  - Continuous monitoring
  ##### The process
  `Code -> Continuous Integration -> Deploy -> Monitor -> Plan -> Code`

These phases are carried out cyclically and iteratively throughout the life of
the project.

- Tools: The choice of tools and products used by teams is very important in
  DevOps. Indeed, when teams were separated into Dev and Ops, each team used
  their specific tools — deployment tools for developers and infrastructure
  tools for Ops—which further widened communication gaps.

  With teams that bring development and operations together, and with this
  culture of unity, the tools used must be usable and exploitable by all
  members.

  Developers need to integrate with monitoring tools used by Ops teams to detect
  performance problems as early as possible and with security tools provided by
  Ops to protect access to various resources.

  Ops, on the other hand, must automate the creation and updating of the
  infrastructure and integrate the code into a code manager; this is called
  Infrastructure as Code, but this can only be done in collaboration with
  developers who know the infrastructure needed for applications. Ops must also
  be integrated into application release processes and tools.

The benefits of establishing a DevOps culture within an enterprise are as
follows:

- Better collaboration and communication in teams, which has a human and social
  impact within the company.
- Shorter lead times to production, resulting in better performance and end user
  satisfaction.
- Reduced infrastructure costs with IaC.
- Significant time saved with iterative cycles that reduce application errors
  and automation tools that reduce manual tasks, so teams focus more on
  developing new functionalities with added business value.
