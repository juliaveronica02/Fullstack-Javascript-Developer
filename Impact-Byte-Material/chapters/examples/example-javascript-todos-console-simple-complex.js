const myTodos = [
  {
    id: 1,
    text: 'Write the letter',
    tags: ['important', 'writing'],
    favorite: true,
    completed: false
  },
  {
    id: 2,
    text: 'Eat some lunch',
    tags: ['food'],
    completed: true
  },
  {
    id: 3,
    text: 'Run around the city',
    favorite: true,
    completed: true
  }
]

// -----------------------------------------------------------------------------

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    let itemString = ``

    itemString += item.completed ? `☑` : `☐` // Example: ☑
    itemString += ` ${item.text} ` // Example: The todo text
    itemString += item.favorite ? `★` : `` // Example: ★
    // ☐ The todo text ★

    console.log(itemString)
  }
}

// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------

console.log('= SHOW TODOS =')

showTodos(myTodos)

console.log('')

// -----------------------------------------------------------------------------

console.log('= SEARCH TODOS =')

const textInput = prompt('What todo do you want to search?')
const foundTodos = searchTodosText(myTodos, textInput)

showTodos(foundTodos)
