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
  msgStyle = {
    fontSize:'24pt',
    color:'#900',
    margin:'20px 0px',
    padding:'5px',
    borderBottom:'2px solid #900'
  }
  btnStyle = {
    fontSize:'20pt',
    padding:'0px 10px'
  }

  constructor(props){
    super(props);
    this.state = {
      msg:'Hello',
    };
    let timer = setInterval(()=>{
      this.setState((state)=>({
        msg: state.msg + '!'
      }));
    },10000);
  }

  render(){
    return<div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}
  
export default App;
