"use strict";
class Player {
    constructor(initials, first, last) {
        this.score = 0;
        this.initials = initials;
        this.first = first;
        this.last = last;
    }
    ;
    secretMethod() {
        console.log("SECRET METHOD");
    }
    ;
}
;
const mame = new Player("MBD", "Mame", "Dennis");
