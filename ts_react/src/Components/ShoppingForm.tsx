import React, { useRef } from 'react'; 

export default function ShoppingForm() {

  const inputRef = useRef<HTMLInputElement>(null); 

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); 
    console.log(`hello, ${event}`)

  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef}/>
      <button type="submit">Add Item</button>
    </form>
  </div>
}