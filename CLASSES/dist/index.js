"use strict";
class Player {
    constructor(initials, first, last) {
        this.initials = initials;
        this.first = first;
        this.last = last;
        this.score = 0;
    }
    ;
    secretMethod() {
        console.log("SECRET METHOD");
    }
    ;
}
;
const mame = new Player("MBD", "Mame", "Dennis");
