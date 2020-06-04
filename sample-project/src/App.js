import React, { Component } from 'react';
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
let theme = {
  light:{
    backgroundColor:'#eef',
    color:'#006',
    padding:'10px'
  },
  dark:{
    backgroundColor:'#006',
    color:'#eef',
    padding:'10px'
  }
}

const ThemeContext = React.createContext(theme.dark);

class App extends Component {  
  static contextType = ThemeContext;

  render(){
    return (
      <div style={this.context}>
        <Title value = 'Content page' />
        <Message value = 'this is content sample.' />
        <Message value = '*これはテーマのサンプルです。' />
      </div>
    );
   }
  }

  class Title extends Component {
    static contextType = ThemeContext;

    render(){
      return(
        <h2 style = {this.context}>{this.props.value}</h2>
      );
    }
  }

  class Message extends Component {
    static contextType = ThemeContext;

    render(){
      return(
        <p style={this.context}>{this.props.value}</p>
      );
    }
  }

export default App;
