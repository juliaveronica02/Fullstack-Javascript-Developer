# Git Ignore

Git `ignore` can specifies intentionally untracked files to ignore.

To ignore files that we don't want to commit, create a `.gitignore` file:

```txt
secrets.md
*.pdf
video.mp4
```

A `.gitignore` file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected. The repo will then recognize that those files should be ignored.

## Git Ignore References

- [Git - gitignore Documentation](https://git-scm.com/docs/gitignore)
- [`github/gitignore`: A collection of useful `.gitignore` templates](https://github.com/github/gitignore)
- [Ignoring files - GitHub Help](https://help.github.com/articles/ignoring-files)
- [`.gitignore file` - ignoring files in Git | Atlassian Git Tutorial](https://atlassian.com/git/tutorials/saving-changes/gitignore)
