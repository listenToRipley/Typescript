class Player {
  //ts requires you to stay what these items are before they are called within the constructor 
  initials:string;
  first:string;
  last:string; 

  constructor(initials: string, first: string, last:string) {
    this.initials = initials;
    this.first = first;
    this.last = last;
  }
}; 


const mame = new Player("MBD", "Mame", "Dennis")