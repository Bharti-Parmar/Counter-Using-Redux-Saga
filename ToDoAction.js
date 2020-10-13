import React from 'react';
import { configureStore } from '@reduxjs/toolkit'

//  1) ".type" field should be a string that gives this action a descriptive name, like "todos/todoAdded". 
// We usually write that type string like "domain/eventName"

// 2).  "payload".
const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
  }

// 3). "action creator" is a function that creates and returns an action object. 
  const addTodo = text => {
    return {
      type: 'todos/todoAdded',
      payload: text
    }
  }

// 4). "reducer" is a function that receives the current state and an action object, 
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}

// 5). Array.reduce() takes a callback function as an argument
const numbers = [2, 5, 8];

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem });
  return previousResult + currentItem;
}

const initialValue = 0;

const total = numbers.reduce(addNumbers, initialValue);
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total);

// 6). create an array of Redux actions, call reduce(), and pass in a reducer function, we'd get a final result the same way:

const actions = [
    { type: 'counter/increment' },
    { type: 'counter/increment' },
    { type: 'counter/increment' }
  ]
  
  
const finalResult = actions.reduce(counterReducer, initialState);
  console.log(finalResult);
  // {value: 3}

// 6). "store" :- The current Redux application state lives in an object called the store .

// import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer: counterReducer });

console.log(store.getState());

// 7). "Dispatch"

store.dispatch({ type: 'counter/increment' });

console.log(store.getState());

//  Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.
const increment = () => {
    return {
      type: 'counter/increment'
    }
  }
  
  store.dispatch(increment());
  
  console.log(store.getState());

// 8). "Selectors" are functions that know how to extract specific pieces of information from a store state value. 

const selectCounterValue = state => state.value;

const currentValue = selectCounterValue(store.getState());
console.log(currentValue);


function ToDoAction() {
    return (
        <div></div>
    )
}

export default ToDoAction;

