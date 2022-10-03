import React, {useState} from 'react';
import './App.css';

//components 
import Greeter from './Components/Greeter'; 
import ShoppingList from './Components/ShoppingList';
import ShoppingForm from './Components/ShoppingForm';

//modules 
import Items from './modules/items'; 

function App() {
// useState, call the items by interface as the type and set the state as an empty array to start with
  const [items, setItems] = useState<Items[]>([]);

  const addItem = (product: string) => {
    console.log('returned state to app \n', product)
  }

  return (
    <div>
      <Greeter/> 
      <ShoppingList items={items}/>
      <ShoppingForm onClickAdd={addItem}/> 
    </div>
  );
}

export default App;
