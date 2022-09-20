class Player {
  //ts requires you to stay what these items are before they are called within the constructor 
  public initials:string;
  public readonly first:string;
  public readonly last:string; 
  // score:number = 0; < don't need this, can infer
  private score = 0; 

  constructor(initials: string, first: string, last:string) {
    this.initials = initials;
    this.first = first;
    this.last = last;
  };

  private secretMethod():void{
    console.log("SECRET METHOD");
  }; 
}; 


const mame = new Player("MBD", "Mame", "Dennis");
// mame.score; < cannot access since this is private 