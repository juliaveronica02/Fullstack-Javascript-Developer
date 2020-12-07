# Setup Operating System (OS)

Let's install an OS (Operating System) to your laptop with [Linux Ubuntu](https://ubuntu.com). This setup will be helped by the mentors.

This kind of UNIX or POSIX-compliant OS is really the best platform for professional developer in order to navigate in the real full stack web application development.

If you already have Apple Macintosh (Macbook), you can just use it right away.

## Installation Script

We will help you to install various softwares and tools into your computer later on as the day goes on.

Get some help by our mentors, because using the installation commands and script needs some good experience.

```sh
# ==============================================================================
# Install Script for Impact Byte Participants
# ==============================================================================

# ------------------------------------------------------------------------------
# Linux Ubuntu

## Essential tools

sudo apt install vim git tig tree wget curl

# Chrome
# wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb

# ------------------------------------------------------------------------------
# Mac OS

## Homebrew package manager

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install vim git tig tree wget curl

brew cask install google-chrome
brew cask install iterm2


# ------------------------------------------------------------------------------
# Node.js

# nvm
# Follow the README in repo
# https://github.com/creationix/nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

nvm install v12
```
