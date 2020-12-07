# React Styling

In React, we can use plain CSS file to style the components.

But what if we combine CSS _inside_ the component?

---

## `style` props

We can use an object inside a `style` props to style the component:

```jsx
export const Button = props => {
  return (
    <button
      style={{
        color: "white",
        background: "black",
        border: "none",
        borderRadius: "2px",
        margin: "4px"
      }}
    >
      Text
    </button>
  );
};
```

```jsx
const buttonStyle = {
  color: "white",
  background: "black",
  border: "none",
  borderRadius: "2px",
  margin: "4px"
};

export const Button = props => {
  return <button style={buttonStyle}>Text</button>;
};
```

```jsx
export const Button = props => {
  const buttonStyle = {
    color: props.color ? "white" : props.color,
    background: "black",
    border: "none",
    borderRadius: "2px",
    margin: "4px"
  };

  return <button style={buttonStyle}>Text</button>;
};
```

---

## `styled-components`

[`styled-components`](https://styled-components.com) or 💅Styled Components can use the best bits of ES6 and CSS to style your apps without stress 💅, via a function.

```jsx
const AnchorButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

render(
  <div>
    <AnchorButton
      href="https://github.com/styled-components/styled-components"
      target="_blank"
      rel="noopener"
      primary
    >
      GitHub
    </AnchorButton>

    <AnchorButton as={Link} href="/docs" prefetch>
      Documentation
    </AnchorButton>
  </div>
);
```

Here `styled.a` is actually just a function which return a styled component.

To get started, just install it:

```sh
yarn add styled-components
```

Then use the `styled`:

```jsx
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;
```

We can even use `css`, pseudo classes (`:hover`, `:active`), and `props` together to make dynamic styling based on data:

```jsx
import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  opacity: 0.8;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const Button = props => {
  return <StyledButton primary={props.primary}>Text</StyledButton>;
};
```

---

## `emotion`

[`emotion`](https://emotion.sh) or 👩‍🎤Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

There are two primary methods of using Emotion. The first is framework agnostic and the second is for use with React.

### Framework Agnostic

The [emotion](https://www.npmjs.com/package/emotion) package is framework agnostic and the simplest way to use Emotion.

- Requires no additional setup, babel plugin, or other config changes.
- Works in situations where configuration is restricted or not possible such as with [Create React App](https://facebook.github.io/create-react-app)
- The `css` prop is not used or needed.
- You simply prefer to use the `css` function to generate class names and `cx` to compose them.

```jsx
import { css, cx } from "emotion";

const color = "white";

render(
  <div
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
);
```

Note here that `render` could be from React or any other framework/library.

### React `core`

The ["@emotion/core"](https://www.npmjs.com/package/@emotion/core) package requires React and is recommended for users of that framework if possible.

- Best when using React with a build environment that can be configured.
- CSS prop support
  - Similar to the `style` prop but adds support for nested selectors, media queries, and auto-prefixing.
  - Allows developers to skip the `styled` API abstraction and style components and elements directly.
  - The `css` prop also accepts a function that is called with your theme as an argument allowing developers easy access to common and customizable values.
  - Reduces boilerplate when composing components and styled with emotion.
- Theming works out of the box.

```jsx
import { css, jsx } from "@emotion/core";

const color = "white";

render(
  <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
);
```

### React `styled`

The [@emotion/styled](https://www.npmjs.com/package/@emotion/styled) package is for those who prefer to use the `styled.div` style API for creating components.

```sh
yarn add @emotion/core @emotion/styled
```

```jsx
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

render(<Button>This my button component.</Button>);
```

```jsx
import styled from "@emotion/styled";

const Component1 = styled.div({
  color: "hotpink"
});

const Component2 = styled.div`
  color: ${props => props.color};
`;

render(
  <Component1>
    <Component2 color="green" />
  </Component1>
);
```

---

## React UI Design System and Libraries/Frameworks

In order to use some popular UI libraries/frameworks, we cannot just use the plain styling anymore. We have to use the component-designed alternatives.

- Bootstrap => [reactstrap - React Bootstrap 4](https://reactstrap.github.io)
- Semantic UI => [Semantic UI React](https://react.semantic-ui.com)
- Materialize => [React Materialize](http://react-materialize.github.io/react-materialize)
- Bulma => [Bloomer](https://bloomer.js.org)
- Foundation => [React + Foundation](https://react.foundation)

---

## React Styling References

### Officials

- [style in DOM Elements](https://reactjs.org/docs/dom-elements.html#style)

### Functions

- [💅Styled Components](https://styled-components.com)
- [👩‍🎤Emotion](https://emotion.sh)
  - [`@emotion/styled`](https://emotion.sh/docs/@emotion/styled)
  - [emotion Styled Components](https://emotion.sh/docs/styled)
- [💄glamorous - React component styling solved](https://glamorous.rocks)

### Guides

- [React for Designers by Design+Code](https://designcode.io/react)

### Libraries/Frameworks

- [reactstrap - React Bootstrap 4](https://reactstrap.github.io)
- [Semantic UI React](https://react.semantic-ui.com)
- [React Materialize](http://react-materialize.github.io/react-materialize)
- [Bloomer](https://bloomer.js.org)
- [React + Foundation](https://react.foundation)
- [Material-UI - The world's most popular React UI framework](https://material-ui.com)
- [Ant Design - The world's second most popular React UI framework](https://ant.design)
- [React Toolbox - Bootstrap your application with beautiful Material Design Components](http://react-toolbox.io)
- [Mineral UI](https://mineral-ui.com)
- [Primer Components](https://primer.style/components)
- [React Icons - Include popular icons in your React projects easily. Font Awesome, Material ,Typicons, Octicons, Ionicons](http://react-icons.github.io/react-icons)
- [Salesforce Lightning Design System | React](https://react.lightningdesignsystem.com)
- [Framer Motion](https://www.framer.com/motion/)
