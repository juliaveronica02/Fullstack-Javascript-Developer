# Node.js Basic

[Node.js](https://nodejs.org) is a open source JavaScript runtime environment. Using Node.js we can execute JavaScript code outside of a browser. Think Node.js as a JavaScript in the backend, it can replace or work together with Python, Ruby, Golang, Java, Scala, PHP, Kotlin, Swift, C/C++, etc. Even Node.js itself is built on Chrome's V8 JavaScript engine (Google's open source high-performance JavaScript and WebAssembly engine, written in C++).

---

## Installation

- [Download Manually](https://nodejs.org/en/download/)
- [Install via popular package managers](https://nodejs.org/en/download/package-manager)
- [Install via nvm](https://github.com/creationix/nvm#installation).

### Install via `nvm`

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

# or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

The script will `git clone` the `nvm` repository to `~/.nvm` and adds a configuration in your shell.
And adds the source lines from the snippet below to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Check your shell configuration such as `~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`.

Make sure `nvm` is installed properly.

```sh
nvm --version
# 0.35.1
```

Install Node.js via `nvm`.

```sh
nvm install 12
```

---

## `node` REPL

[REPL](https://repl.it) stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell.

Check the Node.js version:

```sh
node -v
# v11.9.0
```

Start the REPL by using `node` command:

```sh
node
```

You can start to code with JavaScript inside the REPL:

```js
console.log("Hello World");
```

```js
const data = [1, 2, 3];
data.forEach(item => console.log(`Hello ${item}`));
```

```js
console.log(this);
```

```js
console.log(process);
```

Some commands available in `node` REPL:

- <kbd>Ctrl + c</kbd> − terminate the current command.
- <kbd>Ctrl + c</kbd> twice − terminate the Node REPL.
- <kbd>Ctrl + d</kbd> − terminate the Node REPL.
- <kbd>↑</kbd>/<kbd>↓</kbd> Keys − see command history and modify previous commands.
- <kbd>Tab</kbd> Key − list of current commands.
- `.help` − list of all commands.
- `.break` − exit from multiline expression.
- `.clear` − exit from multiline expression.
- `.save filename` − save the current Node REPL session to a file.
- `.load filename` − load file content in current Node REPL session.

You can also execute an existing JavaScript file directly:

```sh
node index.js
# Hello World!
```

---

## Node.js Basic References

- [Node.js](https://nodejs.org)
- [Repl.it - The world's leading online coding platform](https://repl.it)
- [`creationix/nvm` - Node Version Manager - Simple bash script to manage multiple active node.js versions](https://github.com/creationix/nvm)
- [The Node.js Handbook by Flavio Copes (PDF)](https://drive.google.com/open?id=1EC4Id7Z6dbCHNw2jr1T4VHiQlSvJIP7I)

## Node.js Basic Guides

- [`impactbyte-learn/module-nodejs`](https://github.com/impactbyte-learn/module-nodejs)

## Node.js Basic Examples

- [`impactbyte-learn/code-nodejs`](https://github.com/impactbyte-learn/code-nodejs)
