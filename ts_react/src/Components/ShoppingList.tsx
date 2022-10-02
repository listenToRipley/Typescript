import React from 'react'; 

interface Items { // this is the array of objects 
  id: number; 
  product: string;
  quantity: number; 

} 

interface ShoppingListProps {
  items: Items[] // the item passed is an array of objects. 

} 

// function ShoppingList(props: ShoppingListProps): JSX.Element {
//   return <div>
//     <h1>Shopping List</h1>
//     <ul>
//       {/* items its the element passed from the Shopping List interface, which is an array of objects  */}
//       {props.items.map((item) => {
//         return <li key={item.id}><span>{item.product}</span> - <span>{item.quantity}</span></li>
//       })}
//     </ul>
//   </div>

// }; 

// alteratively destructure 
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