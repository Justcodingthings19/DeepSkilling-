# Git Cleanup and Push to Remote Repository

## Objective

This hands-on lab demonstrates how to synchronize a local Git repository with a remote repository. It covers checking repository status, viewing branches, pulling latest changes from remote, pushing local commits, and verifying updates in GitHub.

---

# Hands-on Steps

## Step 1: Verify Master Branch is Clean

Check the current repository status.

Command:

```bash id="4qj2r6"
git status
```

Expected Output:

```text id="m1z4c8"
On branch master
nothing to commit, working tree clean
```

📸 Screenshot: Clean repository status.

---

# Branch Verification

## Step 2: List Available Local Branches

Display all local branches.

Command:

```bash id="o4n6kf"
git branch
```

Expected Output:

```text id="4p6f6w"
* master
```

`*` indicates the current active branch.

📸 Screenshot: Local branch list.

---

## Step 3: Display Local and Remote Branches

View all branches including remote branches.

Command:

```bash id="m3f1cu"
git branch -a
```

Expected Output:

```text id="3r5f0q"
* master
  remotes/origin/master
```

📸 Screenshot: Local and remote branches.

---

# Synchronizing Repository

## Step 4: Pull Latest Changes from Remote Repository

Download and merge the latest changes from GitHub.

Command:

```bash id="n7a8qz"
git pull origin master
```

Expected Output:

If repository is updated:

```text id="h6t9lp"
Already up to date.
```

OR:

```text id="7x9r6m"
Updating xxxx
Fast-forward
 file changed
```

📸 Screenshot: Pull operation.

---

## Step 5: Push Local Changes to Remote Repository

Upload local commits to GitHub.

Command:

```bash id="v2k6mp"
git push origin master
```

Expected Output:

```text id="w8j5su"
Enumerating objects...
Counting objects...
Writing objects...

To https://github.com/username/repository.git
```

If already synchronized:

```text id="z4n8xc"
Everything up-to-date
```

📸 Screenshot: Successful push.

---

# Verification

## Step 6: Verify Changes in GitHub Repository

Open your GitHub repository in the browser and check:

✅ Latest commits are visible.
✅ Updated files are present.
✅ README files are uploaded.
✅ Commit history shows recent changes.

📸 Screenshot: GitHub repository updated.

---

## Step 7: View Commit History

Check commit history locally.

Command:

```bash id="q7v3de"
git log --oneline --graph --decorate
```

Expected Output:

```text id="k8m4hz"
* latest commit (HEAD -> master)
* previous commit
* initial commit
```

📸 Screenshot: Commit history.

---

# Commands Used

```bash id="t0j8nv"
git status

git branch

git branch -a

git pull origin master

git push origin master

git log --oneline --graph --decorate
```

---

# Expected Outcome

✅ Repository status is verified successfully.
✅ Local and remote branches are displayed.
✅ Latest changes are pulled from the remote repository.
✅ Local commits are pushed successfully to GitHub.
✅ Updated files and commits are visible in the remote repository.
✅ Local and remote repositories remain synchronized.

---

# Conclusion

This lab demonstrates the final stage of the Git workflow: synchronizing local and remote repositories. 
