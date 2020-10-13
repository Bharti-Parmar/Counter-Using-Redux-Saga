import React from 'react';
import Counter from './Counter';
import {createStore} from "redux";
import {Provider} from "react-redux";

// 8). -------- set initialState by count value
const initialState = {
    count: 28
}
  
  // 5). ----- calling reducer
  // 7). ------- we can also use state and action
  // 9). --------- fetch initial state value here and return
  function reducer(state = initialState, action){
  
  // 11). ----------- set action type to handle increment and decrement by using switch case statement
  
  // // statement 1
    switch(action.type){
      case "Increment": 
      return {
        count: state.count + 1
      };
      case "Decrement":
        return {
          count: state.count - 1
        };
      default: 
        return state;
    } 
  
  //   // statement 2
  
  //   // return {
  //   //   count: 28
  //   // };
  
  //   // statement 3
  
  //     // return state;
  }
  
// 3). --- creating store 
// 6). ------ reducer store here to run
const store = createStore(reducer);
  
  // 10). ----------  dispatch the increment for action / event
  store.dispatch({ type: "Increment" });
  store.dispatch({ type: "Decrement" });
  

function CounterReducer() {
    return (
        <div>
            {/* 4). ---- storing value in provider */}
            <Provider store={store}>
                 <Counter />
            </Provider>
        </div>
    );
}

export default CounterReducer