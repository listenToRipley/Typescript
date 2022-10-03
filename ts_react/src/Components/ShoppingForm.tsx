import React, { useRef } from 'react'; 

interface ShoppingFormProps {
  onClickAdd: (item: string, amount: number) => void; // the function should be named the same as the props that was passed from app. 
}

export default function ShoppingForm({ onClickAdd }:ShoppingFormProps): JSX.Element {

  const productInputRef = useRef<HTMLInputElement>(null); 
  const quantityInputRef = useRef<HTMLInputElement>(null); 

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); 
    console.log(`hello, ${event}`)

    const newProduct = productInputRef.current!.value // ! there will be a value!
    const quantity = parseInt(quantityInputRef.current!.value, 10)
    onClickAdd(newProduct, quantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";

  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="product" id="product" placeholder="Product Name" ref={productInputRef}/>
      <input type="number" name="quantity" id="quantity" min={1} defaultValue={1} ref={quantityInputRef}/>
      <button type="submit">Add Item</button>
    </form>
  </div>
}