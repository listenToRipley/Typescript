"use strict";
const getRandoElement = (list) => {
    const randIdx = Math.floor(Math.random() * list.length - 1);
    return list[randIdx];
};
