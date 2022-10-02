import React, {useState} from 'react';
import './App.css';
import Greeter from './Components/Greeter'; 
import ShoppingList from './Components/ShoppingList';
import Items from './modules/items'; 

function App() {
// useState, call the items by interface as the type and set the state as an empty array to start with
  const [items, setItems] = useState<Items[]>([]);

  return (
    <div>
      <Greeter/> 
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
