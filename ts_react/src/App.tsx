import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Components/Greeter'; 
import ShoppingList from './Components/ShoppingList';

function App() {


  const items = [
    {id: 1, product:"Lemon", quantity: 3},
    {id: 2, product:"Chili Pepper", quantity: 1},
    {id: 3, product:"Whole Chicken", quantity: 1}
  ]


  return (
    <div>
      <Greeter/> 
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
