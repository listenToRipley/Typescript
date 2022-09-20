class Player {
  //ts requires you to stay what these items are before they are called within the constructor 
  // public initials:string; instead using public within the constructor. 
  // public readonly first:string;
  // public readonly last:string; 
  // score:number = 0; < don't need this, can infer
  _score = 0; // still private 

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