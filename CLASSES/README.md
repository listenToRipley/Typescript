# Typescript - Understanding Classes 

Classes - JS uses *class* as a keyword. This is a way of prototyping. 

Example: 
```javascript 
class Player {
  score = 0; //if this is always the same when the class is initialized.
  #highScore = 100000 // # = this property should only be used inside player class, replaces _ 
  numLives = 10; // these are not static, and can be altered. 
  //these are elements associated with this classes, always.  
  constructor(initials, first, last) {
      this.initials = initials; //for the specific instance. 
      // this.score = 0; see lines 8, best practices now. "Class Properties"  
      // this.numLives = 10; see line 9, best practices now. 
      this.first = first;
      this.last = last;
  }

  //gets - builds this
  get fullName() {
    return `${this.first} ${this.last}`;
  };

  taunt() { //this is a method 
    console.log('BOOYAH!')
  };

  loseLife() {
    this.numLives -= 1
    return this.numLives
  };

  getHighScore() {
    return this.#highScore; 
  };

  newHighScore(newScore) {
    this.#highScore = newScore; 
  };

;}

const player1 = new Player("NMK", "Natalie", "Kendrick"); 
const player2 = new Player("007", "James", "Bond");
player1.taunt(); 
player2.loseLife(); 
player1.getHighScore(); 
player2.newHighScore(200000);
player1.fullname; //as if this is a property is defined. 
```