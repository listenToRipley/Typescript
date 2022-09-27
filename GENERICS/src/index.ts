//const nums: number[] = [] < old way of doing this
//Generics  
const nums: Array<number> = []; 
const color: Array<string> = []; 

//look at the < THIS IS THE GENERIC >, the ! allows for validation 
const inputEl = document.querySelector<HTMLInputElement>("#username")!; 
console.log(inputEl);
console.dir(inputEl); 
inputEl.value = "Update the text field"; 

const btn = document.querySelector<HTMLButtonElement>(".btn");

//making your own generic 
function numberIdentity(item:number):number {
  return item; 
}; 

function stringIdentity(item:string):string {
  return item; 
}; 

function booleanIdentity(item:boolean):boolean {
  return item; 
}; 

// function identity(item:any):any { //give anything return anything. 
//   return item; 
// }; 

interface Cat {
  name: string;
  breed: string;
};

function identity<Type>(item:Type): Type { // we establish a relationship that show what information will be coming in and going out. 
  return item; // usually you will see an T in stead of Type.
};

// identity<string>('Returns a string');
// identity<number>(7);
// identity<boolean>(true);

// identity<Cat>({name:'moew', breed:'house-cat'}); // cat goes in, and cat comes out.

function getRandomElement<T>(list: T[]):T {
  const randIdx = Math.floor(Math.random() * list.length-1);
  return list[randIdx];
};

const getString = getRandomElement<string>(["a", "b", "c"]);
console.log(getString);

const getNumber = getRandomElement<number>([1, 42, 34, 34, 26, 234, 242, 523]);
console.log(getNumber); 
//generic still can infer. 

//multiple options, don't have to provide return type, since it will be inferred.
// this is to prevent ANY from being used.  
// extends can extend the properties 
function merge<T extends object,U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  };
};

// output in intersection between the two types. 
const house = merge({house:"Kendrick"}, {pets:["Gruff", "Smidge"]});
console.log(house)

interface Length {
  length: number;
};

function printDoubleLength<T extends Length>(thing: T): number {
  return thing.length * 2;
};


//provide default using = 
function makeEmptyList<T = number>(): T[] {
  return [];
}

const strings = makeEmptyList<string>(); 
const array = makeEmptyList(); 
const boolArray = makeEmptyList<boolean>(); 

//CLASSES 
interface Song {
  title: string;
  artist: string; 
  length: number;
}

interface Video {
  title: string;
  creator: string; 
  length: number;
  resolution: number;
}


class PLaylist <T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  };
}

const songs = new PLaylist<Song>(); 
// songs.add()
const videos = new PLaylist<Video>(); 
// videos.add()