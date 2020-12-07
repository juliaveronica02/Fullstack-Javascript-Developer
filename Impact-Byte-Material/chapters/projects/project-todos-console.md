# Project Todos Console

Todos is a simple application to store and manage our todos, tasks, or activities. Just like Google Keep, Google Tasks, or generic todos app.

A complete Todos app should able to:

- Save or store todos, tasks, or activities
- Each todo can contains id, text, date of creation, tags, etc
- Show all todos
- Filter or search todos based on text, date of creation, tags, etc
- Add new todo with new text or tags
- Remove specific todo
- Update todo's text or tags

---

## Steps

- Create a new repo for the project: `project-javascript-todos-console`
- Structure, modify, create, and fill the README, HTML, JavaScript, and a `.gitignore`
- Use multiple variables to contain variety of data types (string, number, boolean, array, object).
- Use multiple functions to process your todos application
- Push changes to GitHub, submit your project, then deploy with Netlify

---

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Todos Console</title>
  </head>
  <body>
    <h1>Project JavaScript Todos Console</h1>

    <script src="index.js"></script>
  </body>
</html>
```

---

## JavaScript Simple

### Show Todo Texts

```js
const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

showTodos(todos)
```

```txt
[1] Write the letter
[2] Eat some lunch
[3] Run around the city
```

### Search Todo Texts

```js
const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

const searchTodos = (data, textToSearch) => {
  let newTodos = []

  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    const lowerCasedItem = item.toLowerCase()
    const lowerCasedText = textToSearch.toLowerCase()

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}
```

```js
const foundTodos = searchTodos(todos, 'run')
// ['Run around the city']
showTodos(foundTodos)
```

```txt
[1] Run around the city
```

```js
const foundTodos = searchTodos(todos, 'THE')
// ['Write the letter', 'Run around the city']
showTodos(foundTodos)
```

```txt
[1] Write the letter
[2] Run around the city
```

### Example Todos Console Simple

[Check out the complete example](../examples/example-javascript-todos-console-simple.js)

---

## JavaScript Complex

### Array of Todo Objects

```js
const myTodos = [
  {
    id: 1,
    text: 'Write the letter',
    tags: ['important', 'writing'],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: 'Eat some lunch',
    tags: ['food'],
    completed: false,
     favorite: true,
  },
  {
    id: 3,
    text: 'Run around the city',
    favorite: false,
    completed: true
  }
]
```

### Show Todos

```js
const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    let itemString = ``

    itemString += item.completed ? `☑` : `x` // Example: ☑
    itemString += ` ${item.text} ` // Example: The todo text
    itemString += item.favorite ? `★` : `x` // Example: ★
    // ☐ The todo text ★

    console.log(itemString)
  }
}
```

### Call `showTodos`

```js
showTodos(myTodos)
```

```txt
☐ Write the letter ★
☑ Eat some lunch
☑ Run around the city ★
```

### Search Todos Text

```js
const searchTodosText = (data, searchText) => {
  let newTodos = []

  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    const lowerCasedItemText = item.text.toLowerCase()
    const lowerCasedSearchText = searchText.toLowerCase()

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}
```

### Call `searchTodosText`

```js
const foundTodos = searchTodosText(myTodos, 'the')

showTodos(foundTodos)
```

```txt
☐ Write the letter ★
☑ Run around the city ★
```
