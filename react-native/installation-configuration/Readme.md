### Preparation.
* Linux --> Debian Based
   * Linux Mint
   * Ubuntu 18.04 LTS (recommended)
   * Elementary OS
   * Zorin OS
   * Lubuntu
   * Kubuntu
   * Etc
* For MacOS: Mojave (10.14)
* Node.js: 8 or newer (13.13.0)
* NPM: 5 or newer (6.14.4)
* Yarn: 1.22.4
* Java or OpenJDK: 8 or newer (openjdk version "1.8.0_242")
* Android Studio: 3.5 or newer (3.6)
* Android SDK API: 16 or newer (28)
* Visual Studio Code
* React-native: 0.62
* Xcode: 10.13 (only for MacOS) <br>

Hardware specifications with this following conditions:
* Processor >= Core i5
* RAM >= 8Gb
* Free Disk space >= 40Gb (SSD is better than HDD) <br>
(Notice: if hardware spec doesn't meet the above conditions, must be very patient).

## Node.js Installation.
node.js to run Javascript in our machine.

## What is Node.js?
Node.JS is a runtime environment that will let you run Javascript directly in your machine. It means that allows you to write server-side applications in Javascript. <br>

You might wonder, we are able to run Javascript without Node, then why do we need Node.JS? Natively, Javascript only runs on web browser, that was why we need Node.JS. Node.js was built by using V8 Engine of Chrome Browser (The fastest Javascript Engine)

## Why do we need Node.js in React?
There are four types of JavaScript you'll write in todays environments (stackoverflow):

1. Client side browser JavaScript: That's what gets sent to web browsers when they visit your webpage, it then gets executed in the browser at the client side. As you want the JS to load fast and run on all kinds of browsers, you usually use transpilers to turn the modern JS you write into a minified version with better support.
2. Client side native JavaScript: Most devices do have a native JS runtime, therefore you can ship JS files with your Android / iOS / Desktop application and then start them there. These engines also support adding hooks from JavaScript into your native code, that's how React Native does provide it's APIs.

3. Server side NodeJS JavaScript: NodeJS is a runtime you'll use to run servers.

4. Buildscripts running on NodeJS: You can use JavaScript to generate JavaScript files. That's how you bundle the files for (1) and (2) (maybe also (3)).

Now metro is a server side buildscript (on NodeJS) that you can use to either: a) start a server that serves your JS as a webpage (1 & 3), or b) that bundles your JS in a native App that you can install on your device (2). <br>

So the role of Node.js in React Native is to only access npm and manage the packages? No. metro is itself a package that you then run on NodeJS. <br>

React is has 2 things:
1. Client side rendering:
   * You need only webpack here to bundle, compile, transpile the code.
   * You would need npm to download the packages. But to initialise the npm we need the Nodejs.
   * Although you can download the packages and add to your library (we can use yarn). So, Nodejs is not compulsory, but I recommend you to use it.
   * Lastly answering actual question: React is a open source library to create reusable views. So, you need just a library and to test it you need browser   thats all.
2. Server side rendering:
   * As Single Page Applications are not so friendly with SEO.
   * People now a days prefer to render pages from server side.
   * In this scenario you are advised to use Nodejs as a server side Platform as it has modules to work for you.

Here are the top 5 reasons to use Nodejs and Reactjs together to make your code highly efficient and scalable:
1. High server load: Using Nodejs with React makes sense when your web application needs handling of multiple requests and maintaining server load balance.
2. Real-time data: If your application’s core is based on Real-time Data-Intensive management or Data Streaming, using Nodejs is highly advisable for continued server connection.
3. JSON APIs: Building JSON APIs for your application is very efficient with Nodejs due to high code reusability and easy code sharing in Reactjs.
4. Single Page Applications (SPA): Developing Single Page Applications in React while using Node to build a lightweight backend model for asynchronous data loading through callback functions.
5. MERN stack: Nodejs can also be used with React with MERN (MongoDB, Express, React, and Nodejs) stack.

## How to install node.js??
Since, node.js is constantly updating its version, that mean we can't do the convential installation like this.
```bash
sudo apt install nodejs
```

### Use NVM (Node Version Manager) <a name="use-nvm"></a>
To install using this method, we need to install NVM first in our machine. How to do that?

#### Install NVM <a name="install-nvm"></a>

First, we'll install **curl**, then we install the **NVM**.
```bash
sudo apt update
sudo apt install curl -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
#### Install Node.Js Using NVM <a name="install-node.js-using-nvm"></a>
Now you have **NVM** installed in your machine, it's time to install the node.js on the specific version. We're going to install the ```12.13``` version, because it's LTS (Long Term Support).
```bash
nvm install 12.13
```
After installation close and reopen terminal and check nvm version:
```
nvm --version
```
You can check version of node and npm:
```
node -v
npm -
```
#### Test if its really installed in your machine <a name="test-node"></a>

To test if node really running in your machine, copy this command and paste it to your terminal
```bash
node -e "console.log('Hello World')"
```
It **should print hello world** inside terminal.
### Install Node.Js without NVM <a name="not-use-nvm"></a>
Install NodeJS (13.12.0) & npm (6.14.4):
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt install -y nodejs
```
You can check version of node and npm:
```
nodejs -v
npm -v
npm list -g
```
# Yarn Installation <a name="yarn-installation"></a>
Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

Install yarn on terminal:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```
You can check version of yarn:
```
yarn -v
```
# Android Studio Installation <a name="android-studio-installation"></a>
Android Studio provides the fastest tools for building apps on every type of Android device. Android studio needs to be installed for working with React Native development. 
## How to install Android Studio <a name="how-to-install-android-studio"></a>
Usually, Native Android apps build in Java. So, Java Development Kit is required.
On Terminal, run this command:
```
sudo apt install openjdk-8-jre openjdk-8-jdk
```
You can check version of java and javac:
```
java -version
javac -version
```
### Install Android Studio <a name="install-android-studio"></a>
You can easily download it from this link:
[Download Android Studio](https://developer.android.com/studio/index.html)
After download Android Studio. To launch Android Studio, open a terminal, navigate to the android-studio/bin/ directory, and execute studio.sh.

```
cd android-studio/bin
./studio.sh
```
Or another way... <br>
In ubuntu 18.04, snap command is provided which is containerised software packages that are simple to create and install on all linux distributions.

[Snapcraft](https://snapcraft.io/)

So, actually you can download Android Studio easily using snap, but you have to install snap first.

```
sudo apt install snapd
sudo snap install android-studio --classic
```
We can select whether you want to import your previous Android Studio settings or not, then click OK.
### Setup Android Studio <a name="setup-android-studio"></a>
And then, you must configure build path in your .bash_profile or .zshrc.
If the .bash_profile file doesn't exist, you have to create it:
```
touch ~/.bash_profile
```
Then, you will edit the .bash_profile file:
```
sudo gedit ~/.bash_profile
```
Set the ANDROID_HOME environment variable to the location of your Android SDK installation:
(copy-paste on .bash_profile)
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```
Reload bash_profile or .zshrc:
```
source ~/.bash_profile
```
or if you're using zsh:
```
source ~/.zshrc
```
### Install SDK Platform <a name="install-sdk"></a>
You need to install an SDK before you can jump into building Android apps. <br>
Click on Configure -> SDK Manager to open Android SDK Manager. <br>
Select the latest API in order to test against target build, e.g. API 28 ((Android 9.0 Pie), and the Android Support Library and Android Support Repository packages in Extras. Then install the selected packages.
### Create AVD <a name="create-avd"></a>
You have to install and set KVM:
```
sudo apt install qemu-kvm 
sudo adduser isumi kvm
ls -al /dev/kvm
```
Restart your computer/laptop then re-open AVD Android Studio. <br>
Create your own Virtual Device, for example:
* My phone resolution (Samsung J6+): 
* 720x1480, API 28 ((Android 9.0 Pie).
# React Native Installation <a name="rn-installation"></a>
Install react-native-cli using npm:
```
npm install -g react-native-cli
```
Or you can install using Yarn (recommended):
```
yarn global add react-native-cli
```
Create react-native project via react-native-cli:
```
react-native init AwesomeProject
```
Finally run your react-native project:
// Move to created project dir.
```
cd AwesomeProject
```
// Start react-native packager
```
npm start
or
yarn start
```
// open up another terminal and run android
```
react-native run-android
```
# Visual Studio Code Installation <a name="vscode-installation"></a>
VS Code is a free code editor, which runs on the macOS, Linux, and Windows operating systems. Getting up and running with Visual Studio Code is quick and easy. It is a small download so you can install in a matter of minutes and give VS Code a try. <br>

Follow this link:
[Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)

## VS Code Extension <a name="vscode-extension"></a>
VS Code extensions let you add languages, debuggers, and tools to your installation to support your development workflow. VS Code's rich extensibility model lets extension authors plug directly into the VS Code UI and contribute functionality through the same APIs used by VS Code. This topic explains how to find, install, and manage VS Code extensions from the [Visual Studio Code MarketPlace](https://marketplace.visualstudio.com/VSCode). <br>

You can browse and install extensions from within VS Code. Bring up the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of VS Code or the View: Extensions command (Ctrl+Shift+X). <br>

Follow this link:
[Managing Extensions in VS Code](https://code.visualstudio.com/docs/editor/extension-gallery)

You can use the following extensions in VS Code:
1. [HTML Boilerplate](https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate)
2. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
4. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
5. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
6. [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
7. [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
8. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
9. [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode)
10. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Setup ESLint <a name="setup-eslint"></a>
You can follow this video tutorial:
[Setup Eslint in Javascript, ReactJS dan React Native](https://www.youtube.com/watch?v=4AsOTDdmx_I&t=915s)
Or follow this article:
[Linting and Formatting with ESLint in VS Code](https://scotch.io/tutorials/linting-and-formatting-with-eslint-in-vs-code)
Or follow bellow steps:
1. We will need to install it globally on our machine by running:
```
npm install -g eslint
```
Or install the ESLint extension on VS Code.
2. In VS Code, click Menu File -> Preferences -> Settings -> Click icon Open Settings (JSON) in tab menu
3. Copy-paste this code in settings.json:
```
{
  "workbench.startupEditor": "newUntitledFile",
  "window.zoomLevel": 2,
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true
  },
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
# Notice Error <a name="notice-error"></a>
Don’t delete .bashrc, if deleted:
```
cp /etc/skel/.bashrc ~/.bashrc
source ~/.bashrc
```
Error ENOSPC:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
Error EADDRINUSE:
```
ps aux | grep node 
#kill -9 {process_number}
Kill -9 12413
```
Deprecated Gradle:
- Try these steps:
 1. Clear watchman watches: watchman watch-del-all (optional)
 2. Delete node_modules: rm -rf node_modules 
 3. Run: yarn install
 4. Remove the cache: rm -rf /tmp/metro-*.
 5. Reset Metro's cache: yarn start --reset-cache
- Or try these steps:
 1. Run (1st terminal): rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* &&  rm -rf node_modules/ &&  yarn cache clean && yarn install &&  yarn start -- --reset-cache
 2. Run (2nd terminal): 
    cd android/ && rm -rf .gradle/ && cd app/ && rm -rf build 
    cd ../.. && react-native run-android
- Or try these steps:
 1. Edit this file: cd android/app/build.gradle
 
```
defaultConfig {
minSdkVersion rootProject.ext.minSdkVersion
targetSdkVersion rootProject.ext.targetSdkVersion
versionCode 1
versionName "1.0"
multiDexEnabled true =====> (add this statement)
}
```
 2. Delete node_modules: rm -rf node_modules 
 3. Run: yarn install
 4. Delete your .gradle folder and android/app/build folder
 5. Run: react-native run-android
- Or try this:
```
sudo apt install gradle
gradle build --warning-mode all
```
- Or try this:
```
cd android && ./gradlew clean && ./gradlew :app:bundleRelease
```
- Or you can edit file in your RN project /android/build.gradle:
```
classpath("com.android.tools.build:gradle:3.6.3")
```

## Basic linux commands list.
1. pwd: This command print the location of your current working directory.
2. ls: (ls /LS) is one of the most used basic linux commands, used to print contents of a directory, by default it lists contents of current working directory (pwd). Example, use /ls /usr/bin to list contents of the /usr/bin folder.
3. cd: Clarification, assume you're on your Home directory, you need to go to the /usr/local/share/fonts directory, use cd /usr/local/share/fonts. If you need to move one directory up, use "cd .." and go straight to your Home folder with cd, and use cd - to go back to your last working directory.
4. cp: You can copy files and directories with this command. Typical usage is like cp file_a file_1_copy or cp directory_a dir_a_copy Also don't forget to use proper path when you're coping something to different location.
5. mv: used to move or rename directories and files. To rename a file use mv old_name new_name. Some useful arguments to use with the mv command are:
   * -n , don't overwrite an existing file.
   * -i , prompt before overwrite
   * -f , force overwrite, no prompt
   * -u , rename or move only when source file is newer than destination file, or missing.
   * Note: If you're getting the Permission denied error, then you've to use the sudo command with mv, example below.
   ```
   sudo mv old_file_name  new_file_name
   ```
6. rm: to remove directory or files. Like use rm -r /tmp/backup to remove everything that folder. Of course you've to be careful before removing anything.
7. mkdir: to make a new directory in linux.  Example, use mkdir my_new_dir to make a new directory named my_new_directory. The -p argument is useful, when you don't want to make parent directories manually.
8. rmdir: remove a directory, use this command. As example, use rmdir my_dir to remove that specific directory.
9. sudo: Whenever you're getting a Permission denied, Authorization failed or something like that use sudo.
10. df: This command is used to check disk space usage on a linux system. The most common usage is like below, used along with the -h flag.
11. du: If you need to quickly check disk space usage of a file or directory.

## Linux shortcut.
* ctrl+alt+T: ubuntu terminal shortcut.
* Ctrl+Alt+L: Locks the screen.
* Ctrl+Alt+D: Show desktop.
* Alt+Tab: Switch between running applications.
* Alt+F2: Run console.
* Ctrl+Q: Close an application window.
* Ctrl+Alt+arrow: Move between workspaces.
* Ctrl+Alt+Del: Log out.
* custom: Go to Settings->Devices->Keyboard.

## Javascript.
* Undefined: https://icalrn.id/hiruk-pikuk-undefined/.
* algoritma: https://codeva.co.id/pengertian-algoritma/.