# Contributing to Splendor

## Git

## Branch Naming Conventions:

1. Use descriptive names that clearly indicate the purpose of the branch.
2. Use hyphens to separate words (kebab case) for readability.
3. Use only lowercase alphanumeric characters and hyphens.
4. Keep names short but meaningful.
5. Use prefixes to categorize branches:

Example branch names:

- feature/: For new features
- bugfix/: For bug fixes
- hotfix/: For critical production fixes
- release/: For release preparation
- docs/: For documentation updates

### Commit Messages

```txt
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types

Types (prefixes) for commit messages:

1. feat: A new feature
2. fix: A bug fix
3. docs: Documentation changes
4. style: Code style changes (formatting, missing semi-colons, etc.)
5. refactor: Code refactoring
6. test: Adding or modifying tests
7. chore: Maintenance tasks, dependency updates, etc.
8. perf: Performance improvements
9. ci: Changes to CI configuration files and scripts
10. build: Changes that affect the build system or external dependencies
11. revert: Reverting a previous commit
12. security: Addressing security vulnerabilities

Example commit message:

```txt
feat(auth): implement user registration

- Add registration form component
- Implement server-side validation
- Store user data in database

Closes #123
```

## Workflow with Three Major Branches:

- main: Production-ready code
- dev: Development branch for integrating features
- staging: Pre-production branch for final testing before release

### Workflow:

- Create feature branches from dev.
- Develop and test features in isolation.
- Create pull requests to merge feature branches into dev.
- Periodically merge dev into staging for integration testing.
- Once staging is stable, create a release branch.
- Perform final tests and bug fixes in the release branch.
- Merge the release branch into both main and dev.

## Using gpg to sign commits

```bash
brew install gpg
```

```bash
gpg --full-generate-key
```

```bash
gpg --list-secret-keys --keyid-format LONG

# sec   ed25519/key-id 2024-09-18 [SC] [expires: 2024-09-25]
#      C2710E8AC5DF7DAAACAB0AF92A96ADCFBCB77EBC
# uid                 [ultimate] Kingsley Ihemelandu (The gpg key for github) <kijuchihe@gmail.com>
# ssb   cv25519/69C85B65DCD4F5AC 2024-09-18 [E] [expires: 2024-09-25]
```

```bash
git config --global user.signingkey <key-id>
```

```bash
git config --global commit.gpgsign true # to enable
git config --global commit.gpgsign false # to disable
```

```bash
git commit -S -m "feat(auth): implement user registration"
```

```bash
git push -u origin <branch-name>
```

### Adding gpg key to github

```bash
gpg --armor --export <key-id>
```

> Copy the output and add it to your github settings

```txt
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZuqYkxYJKwYBBAHaRw8BAQdAleLnvOmub+uxx0bqSbgWXJDPTQ2tLClGesi5
tsAnog60QktpbmdzbGV5IEloZW1lbGFuZHUgKFRoZSBncGcga2V5IGZvciBnaXRo
dWIpIDxraasjdfkjabnsdfljbsdkljfbklasdblkjbadbjkbasdbflkjsbdklfjbskljdfakdjflkjasdl;kfjlksdjfl;jasd;lkfjs;ldkjf;alksdflkjgjbsdkjgdsjkfhshdlkfjsld;jflakjdskjljdlkyfipwquiueuirpoiehasdnkjflasdklfjbaskjdbfklajsdbnkfjabsdkjbakjdsblkjabsdlkjbksdjbakjdsbkljabdslkjblaksjdfbklbdfkljbajksdfkljbsdkjfbaskjdhflajksdyuewhuihailjdhyiuayrareiauyiuayiouyouyouyoaurewtheonohtatirwN5gEAhLlc731Ykxf2MpG+MevCWXeuO7BiiQ8DLRmcgpxt1hEA/jcx
Q8i8qt2jMkzGZcXfSh8kZE+UzfoqdJOiPfsI6sQB
=h3xS
-----END PGP PUBLIC KEY BLOCK-----
```
