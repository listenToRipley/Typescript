class Player {
  //ts requires you to stay what these items are before they are called within the constructor 
  public initials:string;
  public readonly first:string;
  public readonly last:string; 
  // score:number; < don't need this, can infer

  score = 0; 

  constructor(initials: string, first: string, last:string) {
    this.initials = initials;
    this.first = first;
    this.last = last;
  }
}; 


const mame = new Player("MBD", "Mame", "Dennis")