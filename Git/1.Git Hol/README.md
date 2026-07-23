# Git Basics Hands-on Lab

## Objectives

The objective of this lab is to understand and perform basic Git operations:

- Initialize a Git repository
- Check repository status
- Add files to Git
- Commit changes
- Push changes to remote repository
- Pull changes from remote repository
- Configure Git on the local machine
- Configure Notepad++ as the default Git editor
- Create and manage files in a Git repository

---

# Prerequisites

Before starting the lab, ensure the following are available:

- Git Bash installed on the system
- GitHub/GitLab account
- Notepad++ installed

---

# Lab Implementation

## Step 1: Git Configuration

### Check Git Installation

**Command Used:**

```bash
git --version

Description:

This command verifies whether Git is installed successfully on the system.

Configure Git Username and Email

Commands Used:

git config --global user.name "Your Username"

git config --global user.email "your-email@example.com"

Description:

These commands configure the username and email address for Git commits.

Verify Git Configuration

Command Used:

git config --list

Description:

Displays the configured Git details.

Step 2: Configure Notepad++ as Git Editor
Open Notepad++ from Git Bash

Command Used:

notepad++
Configure Notepad++ as Default Editor

Command Used:

git config --global core.editor "notepad++.exe"
Verify Editor Configuration

Command Used:

git config --global -e

Description:

This command opens the Git configuration file using Notepad++.

Step 3: Create Git Repository
Create Project Folder

Project Name:

GitDemo
Navigate into Project Folder

Command Used:

cd GitDemo
Initialize Git Repository

Command Used:

git init

Description:

Creates a new local Git repository.

Verify Repository

Command Used:

ls -a

Output:

.git

The .git folder confirms that the repository has been initialized successfully.

Step 4: Create and Add File
Create welcome.txt File

Command Used:

echo "Welcome to Git" > welcome.txt
Check File Content

Command Used:

cat welcome.txt

Output:

Welcome to Git
Check Repository Status

Command Used:

git status

Description:

The file appears as an untracked file.

Add File to Git Repository

Commands Used:

git add welcome.txt

or

git add .

Description:

The file is moved to the staging area and is ready for commit.

Step 5: Commit Changes
Commit File

Command Used:

git commit -m "Added welcome.txt file"

Description:

The changes are permanently saved in the local Git repository.

Step 6: Remote Repository Operations
Create Remote Repository

A remote repository named:

GitDemo

was created on GitHub/GitLab.

Add Remote Repository

Command Used:

git remote add origin <repository-url>
Pull Changes from Remote Repository

Command Used:

git pull origin master

Description:

Downloads the latest changes from the remote repository.

Push Local Repository to Remote Repository

Command Used:

git push origin master

Description:

Uploads local commits to the remote repository.

Git Commands Summary
Command	Purpose
git init	Creates a new Git repository
git status	Shows repository status
git add	Adds files to staging area
git commit	Saves changes locally
git pull	Downloads changes from remote repository
git push	Uploads changes to remote repository
git config	Configures Git settings
Conclusion

Git was configured successfully on the local machine.
Notepad++ was integrated as the default Git editor. A Git repository was created, files were added, committed, and synchronized with a remote repository using Git commands.
