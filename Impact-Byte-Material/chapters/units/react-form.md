# React Form

In React, we can modify the data easily using `setState()`. But what if we need to insert or input a new data from the user? How to handle forms in a React application?

Forms are one of the few HTML elements that are interactive by default. They were designed to allow the user to interact with a page.

Common uses of forms?

- Text input
- Search bar
- Contact form
- Shopping cart checkout
- Registration and login
- Post a new writing and image

Using React we can make our forms much more interactive, dynamic, and less static.

There are two main ways of handling forms in React, which differ on a fundamental level: how data is managed by who.

- if the data is handled by the DOM, we call them **uncontrolled components**
- if the data is handled by the components we call them **controlled components**

---

## Forms

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

```html
<form class="my-form">
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called **controlled components**.

### Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.

We can combine the two by making the React state be the **single source of truth**. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a **controlled component**.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

#### Single Input

```jsx
export class NameForm extends React.Component {
  state = {
    value: 'Alpha Avalon'
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Name: ${this.state.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>Name:</label>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </fieldset>

        <input type='submit' value='Submit Name' />

        <pre>
          <code>{this.state.value}</code>
        </pre>
      </form>
    )
  }
}
```

In short:

- we always listen for a `change`, then we get the value through `event.target.value`.
- we only display or show the data after `submit`.

Since the `value` attribute is set on our form element, the displayed value will always be `this.state.value`, making the React state the source of truth. Since `handleChange` runs on every keystroke to update the React state, the displayed value will update as the user types.

With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write `handleChange` as:

```jsx
handleChange(event) {
  this.setState({ value: event.target.value.toUpperCase() })
}
```

#### Single Input with Hooks

Here's if we're using [Hooks](https://reactjs.org/docs/hooks-intro.html), a feature that is introduced in React `16.7`, and is going to change how we write React apps in the future. React `16.8` is the first stable release to support Hooks. When upgrading, don’t forget to update all packages, including React DOM. React Native will support Hooks in the next stable release.

```jsx
import React, { useState } from 'react'

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

This new function `useState` is the a **Hook**.

```jsx
import React, { useState } from 'react'

export const Demo = props => {
  const [username, setUsername] = useState()

  const handleChange = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
    </form>
  )
}
```

#### Text Area

In HTML, a `<textarea>` element defines its text by its children:

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

In React, a `<textarea>` uses a `value` attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input:

```jsx
class EssayForm extends React.Component {
  state = {
    value: 'Please write an essay about your favorite DOM element.'
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Essay: ${this.state.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Essay:</label>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <input type='submit' value='Submit Essay' />
      </form>
    )
  }
}
```

Notice that `this.state.value` is initialized in the constructor, so that the text area starts off with some text in it.

#### Select Option

In HTML, `<select>` creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Note that the Coconut option is initially selected, because of the `selected` attribute. React, instead of using this `selected` attribute, uses a `value` attribute on the root `select` tag. This is more convenient in a controlled component because you only need to update it in one place. For example:

```jsx
export class FlavorForm extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Your favorite flavor is: ${this.state.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pick your favorite flavor:</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>

        <input type='submit' value='Submit Flavor' />
      </form>
    )
  }
}
```

Overall, this makes it so that `<input type="text">`, `<textarea>`, and `<select>` all work very similarly. They all accept a `value` attribute that you can use to implement a controlled component.

You can also pass an array into the value attribute, allowing you to select multiple options in a select tag:

```jsx
<select multiple={true} value={['B', 'C']}>
```

#### Multiple Inputs

When you need to handle multiple controlled `input` elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.

```jsx
export class Reservation extends React.Component {
  state = {
    isGoing: true,
    numberOfGuests: 2
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label htmlFor='isGoing'>Is going:</label>
        <input
          name='isGoing'
          type='checkbox'
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        />

        <br />

        <label htmlFor='numberOfGuests'>Number of guests:</label>
        <input
          name='numberOfGuests'
          type='number'
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}
```

Note how we used the ES6 [computed property name](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) syntax to update the state key corresponding to the given input name:

```jsx
this.setState({
  [name]: value
})
```

It is equivalent to this ES5 code:

```jsx
var partialState = {}

partialState[name] = value

this.setState(partialState)
```

Also, since `setState()` automatically [merges a partial state into the current state](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged), we only needed to call it with the changed parts.

#### How About Alternative Way?

It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html), an alternative technique for implementing input forms.

If you're looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, [Formik](https://jaredpalmer.com/formik) is one of the popular choices. However, it is built on the same principles of controlled components and managing state, so don't neglect to learn them before.

#### Uncontrolled Component

In most cases, we recommend using **controlled components** to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can [use a `ref`](https://reactjs.org/docs/refs-and-the-dom.html) to get form values from the DOM.

For example, this code accepts a single name in an uncontrolled component:

```jsx
export class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Name: ${this.input.current.value}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type='text' ref={this.input} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
```

Since an uncontrolled component keeps the source of truth in the DOM, it is sometimes easier to integrate React and non-React code when using uncontrolled components. It can also be slightly less code if you want to be quick and dirty. Otherwise, you should usually use controlled components.

If it's still not clear which type of component you should use for a particular situation, you might find [this article on controlled versus uncontrolled inputs](http://goshakkk.name/controlled-vs-uncontrolled-inputs-react) to be helpful.

#### Default Values

In the React rendering lifecycle, the `value` attribute on form elements will override the value in the DOM. With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a `defaultValue` attribute instead of `value`.

```jsx
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>Name:</label>
      <input defaultValue='Betty' type='text' ref={this.input} />
      <input type='submit' value='Submit' />
    </form>
  )
}
```

Likewise, `<input type="checkbox">` and `<input type="radio">` support `defaultChecked`, and `<select>` and `<textarea>` supports `defaultValue`.

#### File Input

In HTML, an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications).

```html
<input type="file" />
```

In React, an `<input type="file" />` is always an **uncontrolled component** because its value is read-only, can only be set by a user, and not programmatically. It is discussed together with other [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html).

You should use the File API to interact with the files. The following example shows how to create a [ref to the DOM node](/docs/refs-and-the-dom.html) to access file(s) in a submit handler:

```jsx
export class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef()
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Selected file: ${this.fileInput.current.files[0].name}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Upload file:</label>
        <input type='file' ref={this.fileInput} />
        <br />
        <button type='submit'>Submit File</button>
      </form>
    )
  }
}
```

```jsx
export class FileInput extends React.Component {
  curriculum = React.createRef()

  handleSubmit = event => {
    event.preventDefault()
    alert(this.curriculum.current.files[0].name)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='file' ref={this.curriculum} />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
```

---

## Formik

[Formik](https://jaredpalmer.com/formik)'s tagline is "Build forms in React, without tears 😭".

Formik has been powering forms at The Palmer Group since 2016. Formik was open sourced in 2017 and is used by teams of all sizes such as Airbnb, Walmart, Lyft, NASA, Docker, Nokia, Sony, Egghead.io, etc.

Features:

- **Declarative**: Formik takes care of the repetitive and annoying stuff, such askeeping track of values/errors/visited fields, orchestrating validation, and handling submission. This means you spend less time wiring up state and change handlers and more time focusing on your business logic.
- **Intuitive**: No fancy stuffs such as `subscriptions` or `observables` under the hood, just plain React `state` and `props`. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!
- **Adoptable**: Since form state is inherently local and ephemeral (lasting for a very short time), Formik does not use external state management libraries like Redux or MobX. This also makes Formik easy to adopt incrementally and keeps bundle size to a minimum.

Let's face it, forms are really verbose in [React](https://github.com/facebook/react). To make matters worse, most form helpers do _wayyyy_ too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

By colocating all of the above in one place, Formik will keep things
organized. Making testing, refactoring, and reasoning about your forms easy as breeze.

```sh
yarn add formik
```

Formik is compatible with React `15+` and works with ReactDOM and React Native.

## The Gist

Formik keeps track of your form's state and then exposes it plus a few reusable
methods and event handlers (`handleChange`, `handleBlur`, and `handleSubmit`) to
your form via `props`. `handleChange` and `handleBlur` work exactly as
expected--they use a `name` or `id` attribute to figure out which field to
update.

```jsx
import React from 'react'
import { Formik } from 'formik'

const validateEmail = values => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

export const FormikForm = props => {
  return (
    <div>
      <h1>Anywhere in your app!</h1>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={validateEmail}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type='submit' disabled={isSubmitting}>
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
```

### Reducing boilerplate

The code above is very explicit about exactly what Formik is doing. `onChange` -> `handleChange`, `onBlur` -> `handleBlur`, and so on. However, to save you time, Formik comes with a few extra components to make life easier and less verbose: `<Form />`, `<Field />`, and `<ErrorMessage />`. They use React context to hook into the parent `<Formik />` state/methods.

```jsx
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const validateEmail = values => {
  let errors = {}
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!values.email) errors.email = 'Required'
  else if (!regex.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

// Using Render Prop
export const FormikForm = () => {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validateEmail}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='div' />
            <Field type='password' name='password' />
            <ErrorMessage name='password' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
```

### Complementary Packages

As you can see above, validation is left up to you. Feel free to write your own validators or use a 3rd party library. Personally, they use [Yup](https://github.com/jquense/yup) for object schema validation. It has an API that's pretty similar [Joi](https://github.com/hapijs/joi) or [React PropTypes](https://github.com/facebook/prop-types) but is small enough for the browser and fast enough for runtime usage. Because they ❤️ Yup _sooo_ much, Formik has a special config option or prop for Yup called `validationSchema` which will automatically transform Yup's validation errors into a pretty object whose keys match `values` and `touched`.

```
yarn add yup
```

---

## Extra Tips

- Use `<form>`, `<fieldset>`, `<label>`, `<input>`, `<input type="submit" />` respectively.
- Name the input's `name` carefully
- Later, don't store form's input values inside Redux

---

## React Form References

### Officials

- [Forms](https://reactjs.org/docs/forms.html)

### Essentials

- [Handling Forms in React](https://flaviocopes.com/react-forms)
- [The complete guide to Forms in React – Agoi Abel – Medium](https://medium.com/@agoiabeladeyemi/the-complete-guide-to-forms-in-react-d2ba93f32825)

### Libraries

- [Formik · Build forms in React, without tears](https://jaredpalmer.com/formik)
  - [`jaredpalmer/formik`: Build forms in React, without the tears 😭](https://github.com/jaredpalmer/formik)
- [`final-form`: 🏁 Framework agnostic, high performance, subscription-based form state management](https://github.com/final-form/final-form)
  - [`react-final-form`: 🏁 High performance subscription-based form state management for React](https://github.com/final-form/react-final-form)
- [`informed`: A lightweight framework and utility for building powerful forms in React applications](https://joepuzzo.github.io/informed)
