# Project Express

- Create a new repo for the project: `project-express`
- Structure, modify, create, and use the modular Node.js files to create a REST API
  - We can use extra npm packages if needed
- Check the REST API using Postman
  - Use Postman collections to better manage your requests
- Push changes to GitHub
- Deploy the app on Heroku
- Submit your project

For instance:

```js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const todoList = [
  {
    id: 1,
    task: 'learn Express',
    done: false
  },
  {
    id: 2,
    task: 'learn Express-Generator',
    done: false
  }
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//get all todo list
app.get('/', (req, res) => {
  res.send(todoList);
});

app.get('/:id', (req, res) => {
  try {
    const filteredTodo = todoList.find(item => item.id == req.params.id);
    res.send({
      message: 'Here is what you looking for',
      filteredTodo
    });
  } catch (error) {
    res.send(error);
  }
});

// add new todo
app.post('/', (req, res) => {
  try {
    let newId = todoList.length + 1;
    let newTodo = {
      id: newId,
      task: req.body.task,
      done: false
    };

    todoList.push(newTodo);

    res.status(200).send({
      message: 'todo successfully added',
      todoList
    });
  } catch (error) {
    res.send(error);
  }
});

// ~delete todo by its id~
app.delete('/:id', (req, res) => {
  try {
    const idToDelete = req.params.id;
    let newTodo = todoList.filter(item => item.id !== parseInt(idToDelete));

    todoList = newTodo;

    res.status(200).send(todoList);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// ~update a todo by its id~
app.put('/:id', (req, res) => {
  try {
    let getTodoToUpdate = todoList.findIndex(data => data.id == req.params.id);

    todoList.map(data => {
      if (data.id == req.params.id) {
        todoList[getTodoToUpdate].task = req.body.task;
      }
    });
    res.send({
      message: 'data successfully updated',
      todoList
    });
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log('Your server is running on PORT ' + port);
});
```

## API

| Route                   | List                  | Method |
| ----------------------- | --------------------- | ------ |
| http://localhost:3000   | get all todos         | GET    |
| http://localhost:3000/1 | get todo with id 1    | GET    |
| http://localhost:3000/1 | delete todo with id 1 | DELETE |
| http://localhost:3000/1 | update todo with id 1 | PUT    |
| http://localhost:3000   | add new todo          | POST   |
