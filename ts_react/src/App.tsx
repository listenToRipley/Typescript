import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Components/Greeter'; 

function App() {
  return (
    <div>
      <Greeter person={"Natalie"}/>
      <Greeter person={"Gruff"}/>
      <Greeter person={"Karlen"}/>
    </div>
  );
}

export default App;
