import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from 'firebase';

//Firebaseの設定
var config = {
  apiKey: "AIzaSyAQvSN4i9LwJ7IAbErE0AWaqBM7ntpRhyE",
  authDomain: "toshiyuki-react.firebaseapp.com",
  databaseURL: "https://toshiyuki-react.firebaseio.com",
  projectId: "toshiyuki-react",
  storageBucket: "toshiyuki-react.appspot.com",
  messagingSenderId: "355904408614",
};

//Firebaseの初期化
firebase.initializeApp(config);

//Appコンポーネント
class App extends Component {
  render() {
    return(
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}
export default App;