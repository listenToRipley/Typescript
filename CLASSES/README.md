# Typescript - Understanding Classes 

Classes - JS uses *class* as a keyword. This is a way of prototyping. 

Example: 
```javascript 
class Player {
  score = 0; //if this is always the same when the class is initialized. 
  numLives = 10; // these are not static, and can be altered. 
  //these are elements associated with this classes, always.  
  constructor(initials) {
      this.initials = initials; //for the specific instance. 
      // this.score = 0; see lines 8, best practices now. "Class Properties"  
      // this.numLives = 10; see line 9, best practices now. 
  }

  taunt() { //this is a method 
    console.log('BOOYAH!')
  };

  loseLife() {
    this.numLives -= 1
    return this.numLives
  };
;}

const player1 = new Player("NMK"); 
const player2 = new Player("007");
player1.taunt(); 
player2.loseLife(); 

```