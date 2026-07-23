Git Basics Hands-on Lab
Objectives
Understand basic Git commands:

git init
git status
git add
git commit
git push
git pull
Configure Git on the local machine.

Configure Notepad++ as the default Git editor.

Create and add files to a Git repository.

Prerequisites
Git Bash installed on the system.
GitHub/GitLab account.
Lab Implementation
Step 1: Git Configuration
Check Git Installation
Command used:

git --version

This verifies whether Git is installed successfully.

Configure Git Username and Email

Commands used:

git config --global user.name "Your Username"
git config --global user.email "your-email@example.com"
Verify Git Configuration

Command used:

git config --list

This displays the configured Git details.

Step 2: Configure Notepad++ as Git Editor
Open Notepad++ from Git Bash

Command used:

notepad++
Configure Notepad++ as Default Editor

Command used:

git config --global core.editor "notepad++.exe"
Verify Editor Configuration

Command used:

git config --global -e

This opens the Git configuration file using Notepad++.

Step 3: Create Git Repository
Create Project Folder

Project Name:

GitDemo

Navigate into the project folder:

cd GitDemo
Initialize Git Repository

Command used:

git init

This creates a new local Git repository.

Verify Repository

Command used:

ls -a

The .git folder confirms that the repository is initialized.

Step 4: Create and Add File
Create welcome.txt File

Command used:

echo "Welcome to Git" > welcome.txt
Check File Content

Command used:

cat welcome.txt

Output:

Welcome to Git
Check Repository Status

Command used:

git status

The file appears as an untracked file.

Add File to Git Repository

Command used:

git add welcome.txt

or

git add .

The file is now tracked by Git.

Step 5: Commit Changes

Command used:

git commit -m "Added welcome.txt file"

The changes are saved in the local repository.

Step 6: Remote Repository Operations

Created a remote repository named:

GitDemo

on GitHub/GitLab.

Add Remote Repository

Command used:

git remote add origin <repository-url>
Pull Changes from Remote Repository

Command used:

git pull origin master
Push Local Repository to Remote Repository

Command used:

git push origin master
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

 Git was configured successfully, Notepad++ was integrated as the default editor, and a Git repository was created. Files were added, committed, and synchronized with a remote repository using Git commands.
