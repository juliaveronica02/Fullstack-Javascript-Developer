# Project Contacts Console

Contacts is a simple application to store and manage people's contacts. Just like an address book in your phone or email.

A complete Contacts app should able to:

- Save or store contacts
- Each contact can contains people's name, phone, email, birth date, address, etc.
- Show all contacts
- Filter contacts based on name's length
- Add new contact
- Remove specific contact
- Update contact's name, phone, email, etc

---

## Steps

- Create a new repo for the project: `project-contacts-console`
- Create a `README.md` file to give the project title and description
- Structure, modify, create, and fill the HTML file, JavaScript file, and a `.gitignore`
- Use multiple variables to contain variety of data types (string, number, boolean, array, object).
- Use multiple functions to process your contacts application
- Push changes to GitHub, submit your project, then deploy with Netlify

---

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project Contacts Console</title>
  </head>
  <body>
    <h1>Project Contacts Console</h1>

    <script src="index.js"></script>
  </body>
</html>
```

---

## JavaScript Simple

### Show Names

```js
// Experiments to store people's names
const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']

// Experiments to manage the names
const showNames = names => {
  // loop over the names array
  for (let index = 0; index < names.length; index++) {
    // name and names are different
    const name = names[index]

    // log the name and index at the same time
    console.log(`[${index + 1}] ${name}`)
  }
}

// execute or call the function
showNames(names)
```

```txt
[1] Alpha Avalon
[2] Betty Brave
[3] Gamma Gacurio
```

### Filter Names

```js
const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']

const filterNames = (names, minimumLength) => {
  let newNames = []

  for (let index = 0; index < names.length; index++) {
    const name = names[index]

    if (name.length >= minimumLength) {
      newNames.push(name)
    }
  }

  // return the filtered names
  return newNames
}

// filteredNames and filterNames are different
const filteredNames = filterNames(names, 12) // [ 'Alpha Avalon', 'Gamma Gacurio' ]

showNames(filteredNames)
```

```txt
[1] Alpha Avalon
[2] Gamma Gacurio
```

---

## JavaScript Complex

### Array of Objects

```js
const myContacts = [
  {
    id: 1,
    name: 'Alpha Avalon',
    phone: '+1 111 101010',
    email: 'alpha@avalon.org',
    favorite: true,
    rating: 9,
    tags: ['popular', 'cool']
  },
  {
    id: 2,
    name: 'Betty Brave',
    phone: '+62 812 242424',
    email: 'betty@braverian.com'
  },
  {
    id: 3,
    name: 'Gamma Gacurio',
    phone: '+63 813 363636',
    email: 'gamma@gacurio.dev'
  }
]
```

### Show Contacts

```js
const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    )
  }
}
```

### Call `showContacts`

```js
showContacts(myContacts)
```

```txt
[1] Alpha Avalon (+1 111 101010) <alpha@avalon.org>
[2] Betty Brave (+62 812 242424) <betty@braverian.com>
[3] Gamma Gacurio (+63 813 363636) <gamma@gacurio.dev>
```

### Filter Contacts

```js
const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact)
    }
  }

  return newContacts
}
```

### Call `filterContacts`

```js
const filteredContacts = filterContacts(myContacts, 12)

showContacts(filteredContacts)
```

```txt
[1] Alpha Avalon (+1 111 101010) <alpha@avalon.org>
[2] Gamma Gacurio (+63 813 363636) <gamma@gacurio.dev>
```

### Example Contacts Console

[Check out the complete example](../examples/example-javascript-contacts-console.js)
