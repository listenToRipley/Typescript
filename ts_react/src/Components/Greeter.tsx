import React from 'react'; 

interface GreeterProps {
  person?: string; 
}

//props is an object, with an agr and it's type. 
function Greeter({person}: GreeterProps): JSX.Element {  
  
  return <h1>Hello {person}</h1>

};

//alternatively - not in vouge. 
// const Greeter: React.FC = () => {
//   return <h1>HELLO! </h1>
// }

export default Greeter; 