# Git Config

## The `.git` Folder

What happens after `git init` is that `git` will create some configuration inside a `.git` folder. REMEMBER, it's `.git` (with dot sign before the name), not just `git`. This folder is hidden by default because it uses `.` character within the name.

```sh
$ ls -a
.  ..  .git
```

We can change directory to that `.git` folder.

```sh
cd .git
```

See the `.git` folder contents.

```sh
$ ls
HEAD  config  description  hooks  info  objects  refs
```

To head back to the project, use `cd ...` then make sure the current directory using `pwd`.

```sh
$ cd ..

$ pwd
/Users/yourname/Desktop/igneel/project-git
```
