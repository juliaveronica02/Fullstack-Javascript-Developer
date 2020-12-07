## NOTE 
if you want to run the command then you must comment that you don't want to see the result.

## setup node.js.
* goto nodejs.org.
* download LTS versions.

## setup react.
* react-app instalation:npm install -g create-react-app (install globally).
* remove react package: npm uninstall -g create-react-app.
* create-react: npx creact-react-app folder_name or npm init react-app my-app.
* open directory: cd folder_name.
* open vs code: code .
* start project: sudo npm start (auto refresh chrome when change code) or npm start (but not auto refresh chrome).
* inside directory:
```javascript
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```
* build: npm run build.

## List Basic Learning
* Case Sensitive.
* Condition Statement -if else - switch.
* ConvertToNumber.
* ConvertToString.
* Every.
* Filter.
* Filter Unique Values.
* For Loop Array.
* Fullstack (backend : Nodejs and frontend : React js => make simple Create and get data from database).
* Fullstack2 (backend : Nodejs and frontend : React js => make simple Create and get data from database for login and register).
* Fullstack3 (backend : Nodejs and frontend : React js => make simple Create and get data from database for CRUD backend and frontend).
* Get Last Item using Array.
* Intro OOP (Theory only no code).
* Map.
* Map and Unshift Array.
* MathPow().
* Numbers without function.
* Promise.
* Quick Float To Integer.
* Reverse for Array.
* Slice.
* Slice and Reverse Array.
* Spread and Rest.
* Spread and Reduce.
* Truncate an array.
* understanding variables.
* weather app (get api from openweather and using search to know all country weather.).
* Basic react using html.
* forEach.
* function.
* learn fullstack role (admin and user).
* node.js - first excercise.
* node.js - second excercise.
* number with function.
* objects
* string-funtion.
* string without function.
* Stopwatch (start, stop and reset).
* while loop.
* BigIO test:
1. questions about palindrom using "phobia" world and output should be "phobiaiboph".
2. questions make glass hour using star pattern. index a with 5 star and index b using 3 star.

## run
Go Live on index.html <br>
node fileName (run javascript file only) <br>
sudo npm start (frontend: reactjs) <br>
nodemon start (backend) <br>

## Visual Studio Code Extentions
ES7 React/Redux/GraphQL/React-Native snippets shortcut to create import and class by type rcc<br>
indent-rainbow <br>
Live Server for run html and javascript code go to chrome<br>
Prettier-Code formatter for make code pretty<br>
vscode-icons for icon<br> 
material-icon for icon <br>
GitLens - Git supercharged <br>

## How does javascript relate to java?
Java a programming language used to write applications for computers and other devices. example: for application thar on a computer or other devices we can using java. <br>
javascript is a scripting language used to interact with content in a web browser and more recently in other places. example for interactive websites.

## Javascript frameworks
angular.js, react.js, vue.js, and so in are front end application frameworks used to simplify the building of advanced interactive web-based applications.

## node.js
* a javascript platform built on browser runtime environments
* used to run advanced operations and applications on servers and computers using javascripts.

## alternatives div
### nav
nav elements represent the navigation section of a document it should include the primary navigation links for a give page, application, etc. <br>
```javascript
<nav>
<ul>
<li> <a href="">Home </a></li>
<li> <a href="">About </a></li>
<li> <a href="">Blog </a></li>
</ul>
</nav>
```
### Header
header element defines the "header" section of a document or a section. it contains logo of the site.<br>
```javascript
<header>
<h1>About us </h1>
<p> our permission</p>
</header>
```

### Aside
aside elements are mainly used to represent part of a page containing related content to a given section. asides are typically used as sidebars. <br>
```javascript
<aside>
<h4>Popular Post</h4>
<p> A great way to improve your skills when learning to code is by solving coding challanges :). </p>
<a href = ""> Read More</a>
</aside>
```
## Nodejs
Nodejs is a javascript runtime and is a great utility for writing script because we can write, read and manipulate the files. <br>
ctrl+shift+p for quick command interface. <br>
client (browser) can't access server-side code. <br>
server: database, authentication, input validation, business logic. 

## Nodejs Role (in web development)
* Run server: create server and listen to incoming request.
* Business logic: handle requests, validate input, connect to database.
* Responses: return response (rendered HTML, json, ...).

## REPL
* Read: read user input.
* Eval: evaluate user input.
* Print: Print output (Result).
* Loop: wait for new input.

## EM vs REM
em : Parent-div = 1.125em (18px) and child-div = 1.125em (20px). <br>
rem : parent-div  = 1.125em (18px) and child-div = 1.125em (18px).

## What is Javascript
javascript is a programming language used to make interactive webpages. it gives life to the web page and hence fascinates us with the wonderfull interactions. java and javascript are similar as car and carpet are similar. javascript and java are two different language. javascript it used to create interactive web pages for both desktop and mobile applications.
javascript is a light-weight, cross-platform, object oriented programming language. <br>
cross-platform is mean can't run in different platform.<br>
html: display. <br>
csx: desain the display. <br>
javascript: to add interactive and dynamic effect to the content. <br>
javascript based frontend framework: react.js, angular, ember.js and vue.js. <br>
javascript based backend framework: node.js, meteor.js and backbone.js. <br>
building blocks of programming language: <br>
1. varibles : used to store some data for later use. another words, think of them as container which hold whatever data you put inside.
2. data types : what type of value have stored in our varible.
3. operators : symbols used to perform some action on variables. javascript support many operators like plus, minus, multiply, divide, comparison, and the others.
4. expressions : is a line of code contains a valid combination of variables, values and operators. for example: var avg = (num1 + num2 + num3) / totalNum.

## javascript program flow
javascript execute program from top to bottom. it executes one line of code at a time. if an error occurs then the next line of code is not executed.

## javascript writing
* camel case (highly recommendation) : firstNum.
* pascal case : FirstNum.
* snake case : first_num. 

## Rule for naming JS variables.
- name can contain letters, digits, underscore (_) and dolar ($).
```javascript
var mySubject1, math$
```
- name can't start with digit.
```javascript
var maths;
```
- name can start with an _ or $.
```javascript
var _subjectMarks, $rankInClass;
```
- names are case sensitive.
```javascript
var x, X;
```
- names can be reserved by keywords.
```javascript
var var (wrong)
var varName (true)
```
## Scope and Environment
the scope defines the part of the program where a variable or a function is visible/accessbile.<br>
the variables defined outside all the functions and blocks are avaible throughout the code. these are called global variables.

## Inheritance VS composition in javascript
### what is inheritance?
1. in simple, language, inheritance means properties you got from your ancestors.
2. your parents borrowed sime properties from their parents and you borrowed some properties from your parents.
### what is composition?
1. composition is about creating small functions and creating bigger and more complete functions with them.
2. think of a function as a brick, composition is how you would make those bricks work together to build a wall or a house.

## Which AWS service would simplify the migration of a database to AWS?
1. AWS storage gateway.
2. AWS database migration service. => correct answer.
3. Amazon EC2.
4. Amazon AppStream 2.0. => distractor (over 200 services in AWS).

## IT Terminology
1. network: cablesm routers and servers connected with each other.
2. router: a networking device that forwards data packets between computer networks. they know where to send your packets on the internet.
3. switch: takes a packet and send it to the correct server / client on your network.

## Problem with traditional IT approach 
1. pay for the rent for the data center.
2. pay for power supply, cooling, maintenance.
3. adding and replacing hardware takes time .
4. scaling is limited.
hire 24/7 team to monitor the infrastructure.
5. How to deal with disasters? (earthquake, power shutdown, fire, and the others).
6. can we externalize all this? yes using the cloud.

## what is cloud computing?
1. cloud computing is the on-demand delivery of compute power, database storage, applications and other IT resources.
2. through a cloud services platform with pay-as-you-go pricing.
3. you can provision exactly the right type and size of computing resources you need.
4. you can access as many resources as you need, almost instantly.
5. simply way to access servers, storage, database and a set of application services.

## Var, let and Const
global scope : (using var), (can't used let and const). <br>
function scope: var, let and scope. <br>
block scope: (can't used var), (can used let and const). <br>
rediclared: only can use var. <br>
reassigned: can use var and let. <br>
hoisted: only can use var.<br>

## classes 
classes are "special function", and just as we can define function declaration, the class syntax has two components:
class expression and class declaration.

```javascript
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

## modules
a module is just a file. one script is one module. modules can load each other and use special directives export and import to interchange functionality.
```javascript
export function sayHi(user) {
    alert(`Hello, ${user}!`);
}
```
import
```javascript
import {sayHi} from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // hello john.
```

## Promise 
a promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred⁣).

## Arrow function
An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the ‘this’, arguments, super, or new.target keywords. 
```javascript
const materials = [
    'Hydrogen'
    'Helium'
    'Lithium'
]
console.log(material.map(material => material.length))
```
## Destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
```javascript
let a,b, rest;
[a,b] = [10,20]
console.log(a);
// expected output: 10.

console.log(b);
// expected output: 20.

[a,b ...rest] = [10, 20, 30, 40 , 50]

console.log(rest);
// expected output: Array [30, 40, 50]
```
## Quiz
* while java is used for ____, javascript is used for ____. <br>
answer: developing computer applications; interacting with content in a web browser.
* what is javascript?<br>
answer: a scripting language for the web.
* javascript and ecmascript are two different languages. <br>
answer: not quite, ecmascript is the specification javascript adheres to.
* what can we build using javascript? <br>
answer: web applications, mobile applications, desktop applications, games etc. 
* Round brackets "()" tells the computer to seperate the command from text that is to be printed.
* double quotes ("") are added to instruct the computer about which part is to be printed.
* semicolon ";" indicate the end of a command and hence is added after every command.
* in programming, storing container is called "variable". so, variable are containers which store values. in Javascript, creating variable is called "declaring" a variable.
* variables are declared with the "var" keyword followed by an equal to (=) and the value.
* strings are sequences of alphanumeric characters and always written with quotations ("").
* boolean represents either true or false and always defined without quotations.
* javascript is a case sensitive languages.
