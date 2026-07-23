# Git Branching and Merging using Git

## Objective

This hands-on lab demonstrates Git Branching and Git Merging concepts. It covers creating a branch, making changes, comparing branches, merging changes into master, viewing history, and deleting the merged branch.

---

# Branching

## Step 1: Create a New Branch

Create a new branch named `GitNewBranch`.

Command:

```bash
git branch GitNewBranch
```

Check branches:

```bash
git branch -a
```

Expected Output:

```
* master
  GitNewBranch
```

`*` indicates the currently active branch.

📸 Screenshot: Branch creation and branch list.

---

## Step 2: Switch to the New Branch

Switch from master branch to `GitNewBranch`.

Command:

```bash
git checkout GitNewBranch
```

or

```bash
git switch GitNewBranch
```

Verify:

```bash
git branch
```

Expected Output:

```
  master
* GitNewBranch
```

📸 Screenshot: Active branch changed.

---

## Step 3: Create a New File

Create a file named `branch.txt`.

Command:

```bash
echo "This file is created in GitNewBranch." > branch.txt
```

Check file:

```bash
ls
```

Expected Output:

```
branch.txt
```

📸 Screenshot: File creation.

---

## Step 4: Add the File

Add the created file to staging area.

Command:

```bash
git add branch.txt
```

---

## Step 5: Commit the Changes

Commit the file with a message.

Command:

```bash
git commit -m "Added branch.txt in GitNewBranch"
```

Expected Output:

```
1 file changed, 1 insertion(+)
create mode 100644 branch.txt
```

📸 Screenshot: Successful commit.

---

## Step 6: Check Repository Status

Command:

```bash
git status
```

Expected Output:

```
nothing to commit, working tree clean
```

---

# Merging

## Step 7: Switch Back to Master Branch

Command:

```bash
git checkout master
```

or

```bash
git switch master
```

Verify:

```bash
git branch
```

Expected Output:

```
* master
  GitNewBranch
```

📸 Screenshot: Switched to master.

---

## Step 8: Compare Differences Between Branches

Compare master and GitNewBranch.

Command:

```bash
git diff master GitNewBranch
```

Expected Output:

```
+This file is created in GitNewBranch.
```

📸 Screenshot: Difference displayed.

---

## Step 9: View Differences Using P4Merge

Command:

```bash
git difftool master GitNewBranch
```

P4Merge will open and display file differences visually.

📸 Screenshot: P4Merge comparison window.

---

## Step 10: Merge Branch into Master

Merge the feature branch into master.

Command:

```bash
git merge GitNewBranch
```

Expected Output:

```
Fast-forward
 branch.txt | 1 +
```

📸 Screenshot: Merge successful.

---

## Step 11: View Commit History

Display commit history with graph.

Command:

```bash
git log --oneline --graph --decorate
```

Expected Output:

```
* commit-id (HEAD -> master) Added branch.txt in GitNewBranch
* previous commit
```

📸 Screenshot: Commit history.

---

## Step 12: Delete the Merged Branch

Delete the branch after successful merge.

Command:

```bash
git branch -d GitNewBranch
```

Expected Output:

```
Deleted branch GitNewBranch
```

Verify:

```bash
git branch
```

Expected Output:

```
* master
```

📸 Screenshot: Branch deleted.

---

## Step 13: Verify Repository Status

Command:

```bash
git status
```

Expected Output:

```
nothing to commit, working tree clean
```

📸 Screenshot: Final clean repository.

---

# Commands Used

```bash
git branch GitNewBranch

git branch -a

git checkout GitNewBranch

git switch GitNewBranch

echo "This file is created in GitNewBranch." > branch.txt

git add branch.txt

git commit -m "Added branch.txt in GitNewBranch"

git status

git checkout master

git switch master

git diff master GitNewBranch

git difftool master GitNewBranch

git merge GitNewBranch

git log --oneline --graph --decorate

git branch -d GitNewBranch

git status
```

---

# Expected Outcome

✅ New branch is created successfully.
✅ File changes are committed in the new branch.
✅ Differences between branches are compared.
✅ P4Merge displays visual differences.
✅ Feature branch is merged into master.
✅ Commit history shows the merge.
✅ Merged branch is deleted safely.
✅ Repository remains clean.

---

# Conclusion

This lab demonstrates the complete Git branching workflow, including branch creation, switching branches, committing changes, comparing branches, merging changes into the master branch, viewing commit history, and deleting merged branches. These operations are essential for collaborative software development using Git.
