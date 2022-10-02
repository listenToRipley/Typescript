import React from 'react'; 

function ShoppingList(): JSX.Element {

  const items = [
    {id: 1, product:"Lemon", quantity: 3},
    {id: 2, product:"Chili Pepper", quantity: 1},
    {id: 3, product:"Whole Chicken", quantity: 1}
  ]

  return <div>
    <h1>Shopping List</h1>
    <ul>
      {items.map((item) => {
        return <li key={item.id}><span>{item.product}</span> - <span>{item.quantity}</span></li>
      })}
    </ul>
  </div>

}; 

export default ShoppingList;