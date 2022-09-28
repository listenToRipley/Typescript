//typeof guard
function triple(value: number | string): string | number {
  if (typeof value === "string") {
    return value.repeat(3);
  } 
// at this point, it would have to be a number. 
  return value * 3; 
};


// truthiness 
const el = document.getElementById("idk"); 

if (el) {
  console.log(el);
} else {
  console.log('el is null');
};

const printLetters = (word?: string) => {
  if (word) {
    for(let char of word) {
      console.log(char)
    };
  } else {
    word
    console.log('You are missing the word.')
  };
};

//equality 
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log('They match ')
    if (typeof x === "string") {
      return x.toUpperCase(); 
    } else {
      return `${x}`
    }
  } else {
    console.group(`they don't match.`)
  }

};

// in operator

const pet = {name:"Gruff", age: 8}
console.log("name" in pet); 
console.log("breed" in pet); 

interface Movie {
  title: string;
  duration:  number; 
};

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number; 
}; 

function getRunTime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  } else {
    return media.duration;
  }
}

const movieTime = getRunTime({title: "Fifth Element", duration: 113});
const tvTime = getRunTime({title: "Dead Like Me", numEpisodes: 29, episodeDuration: 50})
console.log(movieTime); 
console.log(tvTime);

//instanceof
function printFullDaye(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString()); 
  } else {
    console.log(new Date(date).toUTCString()); 
  }
};

class User {
  constructor(public username: string) {
  };
};

class Company{
  constructor(public name: string) {
  };
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity.username);
  } else {
    console.log(entity.name);
  };
};

//Predicates 
interface Cat {
  name: string; 
  numLives: number; 
};

interface Dog {
  name: string;
  breed: string; 
};

function isCat(animal:Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined; 
}

function makeNoise(animal: Cat | Dog): string {
  if(isCat(animal)) {
    animal
    return "Meow";
  } else {
    animal
    return "Bark";
  }
};

//Discriminated Unions 

interface Rooster {
  name: string;
  weight: number; 
  age: number; 
  kind: "rooster";
};

interface Cow {
  name: string;
  weight: number; 
  age: number; 
  kind: "cow";
};

interface Pig {
  name: string;
  weight: number; 
  age: number; 
  kind: "pig"; 
};

interface Sheep { 
  name: string;
  weight: number; 
  age: number; 
  kind: "sheep"; 
};

type FarmAnimal = Pig | Rooster | Cow ; 

function getFarmAnimalSound(animal: FarmAnimal):string {
  switch(animal.kind) {
    case "pig": 
      return "Oink!"
    case "cow":
      return "Moo!"
    case "rooster": 
      return "Cock-a-doodle-doo!"; 
    // case "sheep": 
    //   return "Bah!" 
    default: //nevers
      // should never make it here if all cases where handled this. 
      const _exhaustiveCheck: never = animal; 
      return _exhaustiveCheck
  }
}

const stevie:Rooster = {
  name: "Stevie Chicks",
  weight: 2, 
  age: 1.5,
  kind: 'rooster' // still has to be passed in. 
}

console.log(getFarmAnimalSound(stevie)); 

