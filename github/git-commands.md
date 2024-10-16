# Git Commands

## Setup
- `git config --global user.name "Your Name"` - Set a name that is identifiable for credit when review version history
- `git config --global user.email "youremail@example.com"` - Set an email address that will be associated with each history marker
- `git config --global color.ui auto` - Set automatic command line coloring for Git for easy reviewing

## Start a Repository
- `git init` - Initialize a local Git repository
- `git clone ssh://git@github.com/[username]/[repository-name].git` - Create a local copy of a remote repository

## Workflow
- `git add [file]` - Add a file to the staging area
- `git add -A` - Add all new and changed files to the staging area
- `git add .` - Add all new and changed files to the staging area
- `git commit -m "[commit message]"` - Record changes to the repository
- `git reset [file]` - Unstage a file while retaining the changes in working directory
- `git diff` - Show changes between commits, commit and working tree, etc

## Branch & Merge
- `git branch` - Show all local branches
- `git branch [branch name]` - Create a new branch
- `git checkout [branch name]` - Switch to another branch
- `git merge [branch name]` - Merge a branch into the active branch
- `git branch -d [branch name]` - Delete a branch

## Update & Publish
- `git pull` - Fetch and merge changes from the remote server to the local working directory
- `git push origin [branch name]` - Push a branch to your remote repository
- `git remote add origin ssh://git@github.com/[username]/[repository-name].git` - Add a remote repository

## Tagging
- `git tag 1.0.0 [commit]` - Create a new tag at the current commit
- `git tag` - List all tags
- `git push --tags` - Push all tags to the remote repository

## Log & Status
- `git status` - Show the working tree status
- `git log` - Show the commit history for the currently active branch
- `git log --follow [file]` - Show the commit history for a file, including renames

## Undo
- `git reset --hard [commit]` - Reset the current HEAD to the specified state
- `git checkout -- [file]` - Discard changes to a file

## Advanced
- `git rebase [branch name]` - Rebase your current branch onto another base
- `git stash` - Stash changes in a dirty working directory
- `git cherry-pick [commit]` - Apply the changes introduced by some existing commits

## Remote Repositories
- `git remote -v` - View the URLs for the remote repositories
- `git remote rename [old-name] [new-name]` - Rename a remote repository
- `git remote rm [repository-name]` - Remove a remote repository

## Stashing
- `git stash list` - List the stashes that you've created
- `git stash apply [stash]` - Reapply the changes from a stash without removing it
- `git stash drop [stash]` - Remove a single stash from the list of stashes
- `git stash clear` - Remove all stashes

## Tagging
- `git tag -a 1.0.0 -m "My version 1.0.0"` - Create an annotated tag
- `git show 1.0.0` - Show the tag data along with the commit data
- `git push origin --tags` - Push all of your tags to the remote repository
- `git tag -d 1.0.0` - Delete a local tag
- `git push origin :refs/tags/1.0.0` - Delete a remote tag

## Log
- `git log --since=2.weeks` - Show commits from the last 2 weeks
- `git log --author="[author's name]"` - Show commits by a specific author
- `git log --graph --decorate --oneline` - Show a condensed, graphical representation of the commit history

## Diff
- `git diff [source branch] [target branch]` - Show the difference between two branches
- `git diff --staged` - Show the difference between the staging area and the last commit

## Merging
- `git merge --abort` - Abort the merge process
- `git merge --squash [branch]` - Combine the changes from a branch into a single commit

## Rebasing
- `git rebase -i [commit]` - Interactively rebase the commits that have not been pushed to a remote repository
- `git rebase --continue` - Continue the rebasing process after resolving conflicts
- `git rebase --skip` - Skip the current commit during the rebasing process
- `git rebase --abort` - Abort the rebasing process and return to the original branch

## Cherry-Picking
- `git cherry-pick [commit]` - Apply the changes introduced by a commit
- `git cherry-pick --abort` - Abort the cherry-pick process
- `git cherry-pick --continue` - Continue the cherry-pick process after resolving conflicts

## Bisecting
- `git bisect start` - Start the bisect process
- `git bisect good [commit]` - Mark a commit as good
- `git bisect bad [commit]` - Mark a commit as bad
- `git bisect reset` - Reset to the original HEAD before the bisect started

