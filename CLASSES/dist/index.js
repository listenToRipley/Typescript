"use strict";
class Player {
    constructor(initials, first, last) {
        this.initials = initials;
        this.first = first;
        this.last = last;
        this._score = 0;
    }
    ;
    secretMethod() {
        console.log("SECRET METHOD");
    }
    ;
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    ;
    get score() {
        return this._score;
    }
    ;
    set score(newScore) {
        if (newScore < this._score) {
            this._score = newScore;
        }
        ;
    }
    ;
}
;
const mame = new Player("MBD", "Mame", "Dennis");
mame.fullName;
mame.score;
class NPC extends Player {
    constructor() {
        super(...arguments);
        this.isNPC = true;
    }
    maxScore() {
        this._score = 10000000;
    }
}
;
;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
;
const bike1 = new Bike("red");
;
class Jacket {
    constructor(color, maker, warmLevel) {
        this.color = color;
        this.maker = maker;
        this.warmLevel = warmLevel;
    }
    ;
    print() {
        console.log(`You already have a winter coat! It's ${this.color} and is rated for ${this.warmLevel} degrees`);
    }
}
const winter = new Jacket("black", "Burlington", -10);
