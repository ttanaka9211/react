import React, { Component} from 'react';
import Rect from './Rect';
//import logo from './logo.svg';
import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
class App extends Component {
  render(){
    return <div>
      <h1>React</h1>
      <Rect x="50" y='50' w='150' h='150' c='#6ff9' r='50' />
      <Rect x='150' y='100' w ='150' h='150' c='#f6f9' r='75' />
      <Rect x='100' y='150' w='150' h='150' c='#6669' r='25' />
      </div>;
    }
  }
  

export default App;
