# Git Merge Conflict Resolution

## Objective

This hands-on lab demonstrates how Git handles merge conflicts and how to resolve them using the command line and visual merge tool (P4Merge). The exercise simulates two developers modifying the same file in different branches and resolving the conflict during merging.

---

# Hands-on Steps

## Step 1: Verify Master Branch is Clean

Check the current repository status.

Command:

```bash
git status
```

Expected Output:

```text
On branch master
nothing to commit, working tree clean
```

📸 Screenshot: Clean master branch status.

---

# Creating a Branch

## Step 2: Create a New Branch

Create a new branch named `GitWork`.

Command:

```bash
git branch GitWork
```

Switch to the branch:

```bash
git checkout GitWork
```

or:

```bash
git switch -c GitWork
```

Verify:

```bash
git branch
```

Expected Output:

```text
* GitWork
  master
```

📸 Screenshot: GitWork branch created and active.

---

## Step 3: Create hello.xml File

Create a file with content in GitWork branch.

Command:

```bash
echo "<message>Hello from GitWork Branch</message>" > hello.xml
```

Check status:

```bash
git status
```

Expected Output:

```text
Untracked files:
  hello.xml
```

📸 Screenshot: hello.xml created.

---

## Step 4: Commit the Changes

Add the file:

```bash
git add hello.xml
```

Commit:

```bash
git commit -m "Added hello.xml in GitWork branch"
```

Expected Output:

```text
1 file changed, 1 insertion(+)
create mode 100644 hello.xml
```

📸 Screenshot: Commit successful.

---

# Creating Conflict

## Step 5: Switch Back to Master Branch

Command:

```bash
git checkout master
```

Verify:

```bash
git branch
```

Expected Output:

```text
* master
  GitWork
```

---

## Step 6: Create hello.xml with Different Content

Create the same file with different content in master branch.

Command:

```bash
echo "<message>Hello from Master Branch</message>" > hello.xml
```

Check:

```bash
git status
```

Expected Output:

```text
modified: hello.xml
```

📸 Screenshot: Different file content in master.

---

## Step 7: Commit Master Changes

Add file:

```bash
git add hello.xml
```

Commit:

```bash
git commit -m "Added hello.xml in master branch"
```

📸 Screenshot: Master commit completed.

---

# Comparing Branches

## Step 8: View Commit History

Command:

```bash
git log --oneline --graph --decorate --all
```

Expected Output:

```text
* commit-id (HEAD -> master)
| * commit-id (GitWork)
|/
* previous commit
```

📸 Screenshot: Branch history.

---

## Step 9: Compare Differences

Compare master and GitWork branches.

Command:

```bash
git diff master GitWork
```

Expected Output:

```text
-<message>Hello from Master Branch</message>
+<message>Hello from GitWork Branch</message>
```

📸 Screenshot: Difference output.

---

## Step 10: Visual Comparison Using P4Merge

Run:

```bash
git difftool master GitWork
```

P4Merge opens and shows the differences.

📸 Screenshot: P4Merge comparison window.

---

# Merge Conflict Resolution

## Step 11: Merge GitWork Branch

Merge the branch into master.

Command:

```bash
git merge GitWork
```

Git detects conflict.

Expected Output:

```text
Auto-merging hello.xml

CONFLICT (add/add): Merge conflict in hello.xml

Automatic merge failed; fix conflicts and then commit the result.
```

📸 Screenshot: Merge conflict message.

---

## Step 12: Observe Conflict Markers

Open `hello.xml`.

Git adds conflict markers:

```xml
<<<<<<< HEAD
<message>Hello from Master Branch</message>
=======
<message>Hello from GitWork Branch</message>
>>>>>>> GitWork
```

📸 Screenshot: Conflict markers.

---

## Step 13: Resolve Conflict Using P4Merge

Launch merge tool:

```bash
git mergetool
```

Select the required changes or combine both contents.

Resolved file example:

```xml
<message>Hello from Master Branch</message>
<message>Hello from GitWork Branch</message>
```

Save and close P4Merge.

📸 Screenshot: Conflict resolved using P4Merge.

---

## Step 14: Commit Resolved Merge

Add resolved file:

```bash
git add hello.xml
```

Commit:

```bash
git commit -m "Resolved merge conflict in hello.xml"
```

Expected Output:

```text
Merge made by the 'ort' strategy.
```

📸 Screenshot: Merge resolution commit.

---

# Using .gitignore

## Step 15: Ignore Backup Files

Create or edit `.gitignore`.

Add:

```text
*.orig
*.bak
```

Check status:

```bash
git status
```

Add `.gitignore`:

```bash
git add .gitignore
```

Commit:

```bash
git commit -m "Added backup files to .gitignore"
```

📸 Screenshot: .gitignore commit.

---

# Branch Management

## Step 16: List Available Branches

Command:

```bash
git branch
```

or:

```bash
git branch -a
```

Expected Output:

```text
* master
  GitWork
```

---

## Step 17: Delete Merged Branch

Delete GitWork branch.

Command:

```bash
git branch -d GitWork
```

Expected Output:

```text
Deleted branch GitWork
```

📸 Screenshot: Branch deleted.

---

## Step 18: View Final Commit History

Command:

```bash
git log --oneline --graph --decorate
```

Expected Output:

```text
* Merge conflict resolved commit
* Master commit
* GitWork commit
```

📸 Screenshot: Final history.

---

# Commands Used

```bash
git status

git branch GitWork

git checkout GitWork

git switch -c GitWork

echo "<message>Hello from GitWork Branch</message>" > hello.xml

git add hello.xml

git commit -m "Added hello.xml in GitWork branch"

git checkout master

echo "<message>Hello from Master Branch</message>" > hello.xml

git add hello.xml

git commit -m "Added hello.xml in master branch"

git log --oneline --graph --decorate --all

git diff master GitWork

git difftool master GitWork

git merge GitWork

git mergetool

git add hello.xml

git commit -m "Resolved merge conflict in hello.xml"

git add .gitignore

git commit -m "Added backup files to .gitignore"

git branch

git branch -d GitWork

git log --oneline --graph --decorate
```

---

# Expected Outcome

✅ Master branch is clean initially.
✅ New branch `GitWork` is created successfully.
✅ Same file is modified differently in two branches.
✅ Git detects a merge conflict.
✅ Conflict is resolved using P4Merge.
✅ Resolved changes are committed successfully.
✅ Backup files are ignored using `.gitignore`.
✅ Merged branch is deleted.
✅ Git history displays the merge and conflict resolution.

---

# Conclusion

This lab demonstrates the complete Git merge conflict resolution workflow. 
