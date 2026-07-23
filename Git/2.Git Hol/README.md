 Git Ignore Hands-on Lab

## Objectives

The objectives of this lab are:

- Understand the concept of `.gitignore`
- Learn how to ignore unwanted files and folders using Git
- Implement `.gitignore` to prevent specific files from being tracked by Git

---

# Prerequisites

The following are required to complete this lab:

- Git environment setup
- Notepad++ configured as the default Git editor
- A local Git repository
- A remote repository in GitHub/GitLab

---

# Lab Implementation

## Step 1: Create Git Repository

### Navigate to Git Working Directory

**Command Used:**

```bash
cd GitDemo
Initialize Git Repository

Command Used:

git init

Description:

Creates a new local Git repository.

Step 2: Create Unwanted Files and Folders
Create Log File

Command Used:

echo "Sample log data" > error.log
Create Log Folder

Command Used:

mkdir log
Working Directory Structure
GitDemo
│
├── error.log
│
└── log/

The working directory contains unwanted log files and folders that need to be ignored by Git.

Step 3: Create .gitignore File
Create .gitignore File

Command Used:

touch .gitignore
Add Ignore Rules

Open the .gitignore file and add the following entries:

*.log
log/
Explanation
Pattern	Purpose
*.log	Ignores all files with .log extension
log/	Ignores the log folder and its contents
Step 4: Check Git Status

Command Used:

git status

Description:

The .log files and log folder will not appear as untracked files.

Only files that are not mentioned in .gitignore will be displayed.

Step 5: Add and Commit Changes
Add .gitignore File

Command Used:

git add .gitignore
Commit Changes

Command Used:

git commit -m "Added gitignore file to ignore log files"

Description:

The .gitignore configuration is saved in the local repository.

Step 6: Verify Ignored Files
Check Repository Status

Command Used:

git status
Output
nothing to commit, working tree clean

This confirms that unwanted files and folders are successfully ignored by Git.

Step 7: Push Changes to Remote Repository
Add Remote Repository

Command Used:

git remote add origin <repository-url>
Push Changes

Command Used:

git push origin master

Description:

Uploads the committed changes to the remote GitHub/GitLab repository.

Git Ignore Commands Summary
Command	Purpose
git init	Initializes a Git repository
touch .gitignore	Creates a .gitignore file
git status	Checks repository status
git add	Adds files to staging area
git commit	Saves changes locally
git push	Uploads changes to remote repository
Conclusion

This lab demonstrated the usage of .gitignore to exclude unwanted files and folders from Git tracking.
