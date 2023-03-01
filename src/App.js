import logo from './logo.svg';
import './App.css';
import GreetingsFirst from "./components/greetingsFirst";
import GreetingsSecond from "./components/greetingsSecond";
import SomeCounter from "./components/counter";
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingsFirst message='Hello'>
            <GreetingsSecond/>
            <SomeCounter/>
        </GreetingsFirst>

      </header>
    </div>
  );
}

export default App;
