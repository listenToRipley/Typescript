import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Components/Greeter'; 
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <div>
      <Greeter/> 
      <ShoppingList/>
    </div>
  );
}

export default App;
