## learn-javascript-basic.
* https://github.com/juliaveronica02/learn-javascript-basic.

## Lesson-1.
* change PORT.

## lesson-2.
* function, component and props.

## lesson-3.
* class and make 2 div inside 1 div.

## lesson-4.
* learn seperate div.

## lesson-5.
* learn seprate folder.

## lesson-6.
* learn props in functional and class.

## lesson-7.
* initialize state.
* changing state Note 1:change state (correct mutate state and wrong mutate state).
* changing state Note 2: updating state with previous state (mutate: valid syntax to update state).
* changing state Note 3: working with multiple state properties.

## lesson-8.
* passing down state as props to another component.

## lesson-9.
* conditional rendering in jsx.

## lesson-10.
* ternary expressions.

## lesson-11.
* learn react-redux.

## NOTE!!
* changing state:
  1. do not mutate state directly.
  2. change the state by referenching the previous state.
  3. react will merge the old state with new state.

## Redux.
* be used with other funding frameworks such as angular and view in redux attempts to make state management predictable and easily managed by using a few constraints on how state can be updated.
* without constraints state would have to be mutated directly.

## Redux 3 Principle.
* there is only one source of truth: entire application state is stored in one object to make state changes more predictable and allows for easier debugging.
* state is read-only: we can't directly mutated state, obviously we can change the state (action folder).
* changes are made with pure functions: the final state produced has to be from simple non asynchronous functions state is output it in redux (reducer folder setup switch and case statements).

## React-Redux-ReactRedux.
* Picture.

## Redux has 2 main part (actions and reduces).
1. Actions is literally a javascript object has one type property that is string and it will describe how the action will update the state and actions are passed into redux with the dispatch:
   * Redux specific.
   * Can be dispatched from react.
   * Describe what will happen to the state.
   * Have a required "type" property.
   * Can have any other optional properties.
   * example: an action with the type "login_success" might change a property of redux state called isAuthenticated from false to true which would signify that a user has login.
   * actions function helps pass the action through the reduces under the hood.
   * actions can also optionally hold any other property as well for passing in data and the property is usually called payload and the data can be passed in as an argument to action creator.
2. Action Creators:
   * Can dispatch actions asynchronously.
   * a function which dispatches a normal action.
   * Allow for dynamycally setting payload property.
   * No changes required to the reducer.
   * example: if we want to save the user input to the state. We would setup the action creator with an arrow function like: (user_input_text) =>(type:"USER_INPUT", payload: {text: user_input_text})
3. Reducers:
   * Directly change the Redux status.
   * Must be "pure" or can't be async.
   * Takes "state" and "action" as parameters.
   * Usually setup as a switch statement.
   * Each case statement has to match an action type.
   * example:
   ```javascript
   case ACTION_TYPES.LOGIN_SUCCESS:
     return {
       ...state,
       isAuthenticated: true,
     }
   ```