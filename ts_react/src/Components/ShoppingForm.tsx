import React from 'react'; 

export default function ShoppingForm() {
  
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); 
    console.log(`hello, ${event}`)

  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" />
      <button type="submit">Add Item</button>
    </form>
  </div>
}