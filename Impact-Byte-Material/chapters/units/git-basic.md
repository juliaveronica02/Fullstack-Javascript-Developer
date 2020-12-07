# Git Basic

## Git

[Git](https://git-scm.com) is the ultimate version control system (VCS) or source code management (SCM) that widely used by various people in the world.

Mostly used by developers to manage their projects and collaborate with others.

### Installation

```sh
# mac
brew install git

# ubuntu
sudo apt install git

# windows
# Follow the guide: https://git-scm.com/download/win
# Choose 64-bit Git for Windows Setup
```

## Commands

Some basic Git commands:

- Example: `git <command-name>`
- `git config`
- `git init`
- `git clone`
- `git status`
- `git add`
- `git commit`
- `git log`
- `git checkout`
- `git remote`
- `git push`
- `git pull`
- `git clone`
- `git merge`
- `git checkout`

Remember to put `git` before the `<command-name>`, so it's `git <command-name>`

Firstly after we installed Git in our computer, we should `config` it first with our full name and email. Use your real name and email as what you use on GitHub and GitLab.

```sh
git config --global user.name "Your Full Name"
# use your actual full name

git config --global user.email "yourname@example.com"
# use your active email
```

BE AWARE to put the `"`! So it's `"Your Full Name"`, not just `Your Full Name`.

We might want to start the directory from the `Desktop` folder.

```sh
$ cd

$ cd Desktop
```

Then create and open a project folder using terminal or code editor.

```sh
mkdir project-git
cd project-git
```

We can initialize a new repo in an existing folder.

```sh
git init
```

After initialization, let's see the repo status.

```sh
git status
```

We would like to create a new file, then add it into our repo.

```sh
$ touch README.md

$ ls
README.md

$ git add README.md
```

Then commit them with a message

```sh
$ git commit -m "Create a blank README file"
```

Finally we can see the changes log as well.

```sh
$ git log
```

---

## Branches & Merging

### Basic Branching

When you create repository in GitHub, you also create a branch called **master**

You can see what branches in your project / repository using this command

```sh
$ git branch
```

When you want to create another branch you can use

```sh
$ git checkout -b new_branch
```

_You can change new_branch with anything name you want._

When you want to switch to another branch just run this command

```sh
git checkout branch_you_want_to_go
```

---

## Git Merge

Let's say your another branch is one commit ahead and you want to merge that branch with your master branch.

You can run this command from your master branch, and it will merge master branch with your another branch.

```sh
git merge branch_with_one_commit_ahead
```

---

## Git References

- [Git Handbook · GitHub Guides](https://guides.github.com/introduction/git-handbook)
- [Productive Git for Developers from @juristr on @eggheadio](https://egghead.io/courses/productive-git-for-developers)
