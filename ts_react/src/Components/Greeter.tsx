import React from 'react'; 

//props is an object, with an agr and it's type. 
function Greeter(props: {person: string}): JSX.Element {  
  
  return <h1>Hello {props.person}</h1>

};

//alternatively - not in vouge. 
// const Greeter: React.FC = () => {
//   return <h1>HELLO! </h1>
// }

export default Greeter; 