import React, {useState} from 'react';
import { uuid } from 'uuidv4';

//css
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

  const addItem = (product: string, quantity: number) => {
    console.log('returned state to app \n', product)
    let newIndex = 0
    setItems([...items, {id: uuid(), product: product, quantity: quantity } ])
  }

  console.log(items)

  return (
    <div>
      <Greeter/> 
      <ShoppingList items={items}/>
      <ShoppingForm onClickAdd={addItem}/> 
    </div>
  );
}

export default App;
