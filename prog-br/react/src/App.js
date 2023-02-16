import React from 'react';
import Header from './Header';
import CounterFunction from './CounterFunction';
import CounterClass from './CounterClass';
import './App.css';


function App() {
  return (
    <div>
      <Header name="DR Código" links={["About", "Buy", "Contact", "Login"]}></Header>
      <CounterFunction countFunction={5}></CounterFunction>
      <CounterClass countClass={3}></CounterClass>
    </div>
  );
}


export default App;
