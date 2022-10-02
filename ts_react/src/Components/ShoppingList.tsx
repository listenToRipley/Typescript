import React from 'react'; 
import Items from '../modules/items'; 
interface ShoppingListProps {
  items: Items[] // the item passed is an array of objects. 
};

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return <div>
    <h1>Shopping List</h1>
    <ul>
      {/* items its the element passed from the Shopping List interface, which is an array of objects  */}
      {items.map((item) => {
        return <li key={item.id}><span>{item.product}</span> - <span>{item.quantity}</span></li>
      })}
    </ul>
  </div>

}; 

// export default ShoppingList;