import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ステートの値
let state_value = {
  counter:0,
  message:'COUNTER'
}

//レデューサー
function counter(state = state_value, action){
  switch(action.type){
    case 'INCREMENT':
      return {
        counter:state.counter + 1,
        message:"INCREMENT"
      };
      case 'DECREMENT':
        return {
          counter:state.counter - 1,
          message:'DECREMENT'
        };
        default:
        return state;
  }
}

//ストアを作成
let store = createStore(counter);

//表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);
ReactDOM.render(
  <App />,document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
