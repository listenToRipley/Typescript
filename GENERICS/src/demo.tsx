//this will work fine
// function getRandomElement<T>(list: T[]):T {
//   const randIdx = Math.floor(Math.random() * list.length-1);
//   return list[randIdx];
// };

//arrow functions though, you need the , or else the auto complete will be requested. 
const  getRandoElement = <T,>(list: T[]):T =>  {
  const randIdx = Math.floor(Math.random() * list.length-1);
  return list[randIdx];
};