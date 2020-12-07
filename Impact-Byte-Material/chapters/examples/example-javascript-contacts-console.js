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

// -----------------------------------------------------------------------------

const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    )
  }
}

// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------

showContacts(myContacts)

// -----------------------------------------------------------------------------

const filteredContacts = filterContacts(myContacts, 12)

showContacts(filteredContacts)
