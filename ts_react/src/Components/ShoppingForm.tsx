import React, { useRef } from 'react'; 

interface ShoppingFormProps {
  onClickAdd: (item: string) => void; // the function should be named the same as the props that was passed from app. 
}

export default function ShoppingForm({ onClickAdd }:ShoppingFormProps): JSX.Element {

  const inputRef = useRef<HTMLInputElement>(null); 

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); 
    console.log(`hello, ${event}`)
    const newProduct = inputRef.current!.value // ! there will be a value!
    onClickAdd(newProduct);
    return inputRef.current!.value = ""

  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef}/>
      <button type="submit">Add Item</button>
    </form>
  </div>
}