# React Hooks

Hooks are a new addition in `React@16.8`. They let you use state and other React features **without writing a class**.

**Note**

- React 16.8.0 is the first release to support Hooks. When upgrading, don’t forget to update all packages, including React DOM.

- **Completely opt-in**. You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

- **100% backwards-compatible**. Hooks don’t contain any breaking changes

- **Hooks don’t replace your knowledge of React concepts**. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.

There are many built-in features that come with Hooks

- **Declarative**: React makes it painless to create interactive UIs using JSX (JavaScript Extension) syntax. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
- **Learn Once, Write Anywhere**: We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native).

And these are the APIs for the built-in Hooks in React.

- [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue

For now, just take a look for **Basic Hooks**, because its complexity, it's not recommended  to learn the additonal built-in API for now.

## References

- [React Hooks](https://reactjs.org/docs/hooks-overview.html)
- [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
- [Hooks References](https://reactjs.org/docs/hooks-reference.html)
