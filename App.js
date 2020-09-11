import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleA from './components/Redux/Array_eg';
// import ExampleB from './components/Redux/CopyOfArray';
// import ToDo from './components/Redux/ToDoAction.js';

// ----  counter by redux -----
// import CounterReducer from './components/Redux/CounterReducer';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

// ------- Age inc. dec. by using redux saga ------
import Age from './components/Redux/AgeIncDecReduxSage';
import createSagaMiddleware from 'redux-saga';
import reducer from './store/reducer';
import { watchAgeUp } from './sagas/saga';


// X----------------------- Redux-SAGA --------------------X

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);


function App() {
  return (
    <div className="App">
      <h1>Redux Practice</h1>
        {/* <ExampleA /> */}
        {/* <ExampleB /> */}
        {/* <ToDo /> */}

{/* ------------------- redux example --------------- */}
        
          {/* <CounterReducer /> */}

{/* -------------------- Redux saga example -------------- */}
        <Provider store={store}>
          <Age />
        </Provider>
    </div>
  );
}

export default App;
