class Player {
  //ts requires you to stay what these items are before they are called within the constructor 
  // public initials:string; instead using public within the constructor. 
  // public readonly first:string;
  // public readonly last:string; 
  // score:number = 0; < don't need this, can infer
  protected _score = 0; // still private 

  //using the public keyword inhere, it known as a shorthand params properties. 
  constructor(public initials: string, public first: string, public last:string) {
    // this.initials = initials;
    // this.first = first;
    // this.last = last;
  };

  private secretMethod():void{
    console.log("SECRET METHOD");
  }; 

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }; // if there is only a setter, then it will be considered a readonly property. 

  get score():number{
    return this._score; 
  }; 

  //setters always default to a return value of void. Do not set another. 
  set score(newScore:number){
    if (newScore < this._score) {
      this._score = newScore; 
    };
  };

}; 


const mame = new Player("MBD", "Mame", "Dennis");
// mame.score; < cannot access since this is private 
// mame.secretMethod(); 
mame.fullName; 
mame.score; 

class NPC extends Player {
  isNPC: boolean = true;
  
  maxScore() {
    this._score = 10000000; 
  }

};

//interfaces
interface Colorful {
  color: string;
}; 

class Bike implements Colorful {
  constructor(public color: string) {
    //color will be initialized 
  }
}; 

const bike1 = new Bike("red");

interface Printable {
  print(): void; //a method
};

//can be reused on different classes as well
class Jacket implements Colorful, Printable {
  constructor(public color:string, public maker:string, public warmLevel:number) {}; 
  print() {
    console.log(`You already have a winter coat! It's ${this.color} and is rated for ${this.warmLevel} degrees`);
  }
}

const winter = new Jacket("black", "Burlington", -10); 

//Abstracts 
abstract class Employee {
  //methods can must be defined by children elements
  constructor(public first:string, public last:string){};
  abstract getPay(): number; // just saying this needs to exist to create this class. 
  greet() {
    console.log("HELLO!"); 
  } 
}; 

class FullTimeEmployee extends Employee {
  getPay() {
    return 55;
  }; 
}; 

class PartTimeEmployee extends Employee {
  getPay(): number {
    return 21241; 
  }
};