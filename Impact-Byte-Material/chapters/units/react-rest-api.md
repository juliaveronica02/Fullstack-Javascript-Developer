# React REST API

---

## React AJAX

### How can I make an AJAX call?

You can use any AJAX library you like with React. Some popular ones are [Axios](https://github.com/axios/axios), [jQuery AJAX](https://api.jquery.com/jQuery.ajax/), and the browser built-in [`window.fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

### Where in the component lifecycle should I make an AJAX call?

You should populate data with AJAX calls in the [`componentDidMount`](/docs/react-component.html#mounting) lifecycle method. This is so you can use `setState` to update your component when the data is retrieved.

### Example: Using AJAX results to set local state

The component below demonstrates how to make an AJAX call in `componentDidMount` to populate local component state.

The example API returns a JSON object like this:

```
{
  "items": [
    { "id": 1, "name": "Apples",  "price": 2 },
    { "id": 2, "name": "Peaches", "price": 5 }
  ]
}
```

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch('https://api.example.com/items')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} ${item.price}
            </li>
          ))}
        </ul>
      )
    }
  }
}
```

---

## React + Axios

### GET

```jsx
import React from 'react'
import axios from 'axios'

const API_STRING = `https://jsonplaceholder.typicode.com/users`

export class PersonListGet extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(API_STRING).then(res => {
      const persons = res.data
      this.setState({ persons })
    })
  }

  render() {
    return (
      <ul>
        {this.state.persons.length > 0 &&
          this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
```

### POST

```jsx
import React from 'react'
import axios from 'axios'

const API_STRING = `https://jsonplaceholder.typicode.com/users`

export class PersonListPost extends React.Component {
  state = {
    name: '',
    data: undefined
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const user = {
      name: this.state.name
    }

    axios.post(API_STRING, { user }).then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person Name:</label>
          <input type='text' name='name' onChange={this.handleChange} />
          <button type='submit'>Add Person</button>
        </form>

        {this.state.data && (
          <pre>
            <code>{JSON.stringify(this.state.data)}</code>
          </pre>
        )}
      </div>
    )
  }
}
```

### DELETE

```jsx
import React from 'react'
import axios from 'axios'

const API_STRING = `https://jsonplaceholder.typicode.com/users`

export class PersonListDelete extends React.Component {
  state = {
    id: '',
    status: undefined,
    data: undefined
  }

  handleChange = event => {
    this.setState({ id: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.delete(`${API_STRING}/${this.state.id}`).then(response => {
      this.setState({
        status: response.status,
        data: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person ID:</label>
          <input type='text' name='id' onChange={this.handleChange} />
          <button type='submit'>Delete Person</button>
        </form>

        <div>
          <label>Status:</label>
          {this.state.status && (
            <pre>
              <code>{JSON.stringify(this.state.status)}</code>
            </pre>
          )}
        </div>

        <div>
          <label>Response:</label>
          {this.state.data && (
            <pre>
              <code>{JSON.stringify(this.state.data)}</code>
            </pre>
          )}
        </div>
      </div>
    )
  }
}
```

### Axios Base Instance

We can also preconfigure `axios` to be used again.

```jsx
import axios from 'axios'

export axios.create({
  baseURL: `http://jsonplaceholder.typicode.com`
})
```

```jsx
// Omitted
import request from './request'

export class PersonList extends React.Component {
  handleSubmit = event => {
    event.preventDefault()

    request.delete(`users/${this.state.id}`).then(response => {
      console.log(response)
    })
  }
}
```

### Axios async/await

```jsx
handleSubmit = async event => {
  event.preventDefault()

  // Promise is resolved and value is inside of the response const.
  const response = await API.delete(`users/${this.state.id}`)

  console.log(response)
}
```

---

## React + Axios with GitHub API

```jsx
import React, { useState } from 'react'
import axios from 'axios'

const GITHUB_API = `https://api.github.com`

const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img alt='avatar' style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <a href={props.blog} target='_blank'>
          {props.blog}
        </a>
      </div>
    </div>
  )
}

const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
)

const Form = props => {
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios.get(`${GITHUB_API}/users/${username}`).then(resp => {
      props.onSubmit(resp.data)
      setUsername('')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder='GitHub username'
        required
      />
      <button type='submit'>Add User Card</button>
    </form>
  )
}

export const GitHubUsers = () => {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}
```

---

## React REST API References

### Officials

- [AJAX and APIs – React](https://reactjs.org/docs/faq-ajax.html)

### Guides

- [HTTP requests using Axios](https://flaviocopes.com/axios)
- [A React simple app example: fetch GitHub users information via API](https://flaviocopes.com/react-example-githubusers)
  - [](https://codepen.io/flaviocopes/pen/oJLyeY)
- [Using Axios with React - Alligator.io](https://alligator.io/react/axios-react)
- [Fetching API Data with React.JS – hello JS](https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2)
