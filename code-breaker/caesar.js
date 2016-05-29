"use strict";
let cryptedTest = "qcbufohizohwcbg, mci rwr wh!";

let alphabet = [],
    maxRecurrence = 25,
    finalText = "";

for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97+i));
}

for (let count = 1; count <= maxRecurrence; count++) {
    finalText = "";
    for (let c = 0; c < cryptedTest.length; c++) {
        let temp, val;
        temp = cryptedTest.charAt(c);
        switch(temp) {
            case "a": case "b": case "c": case "d": case "e": case "f": case "g": case "h":
            case "i": case "j": case "k": case "l": case "m": case "n": case "o": case "p":
            case "q": case "r": case "s": case "t": case "u": case "v": case "w": case "x":
            case "y": case "z":
                finalText+=alphabet[(alphabet.indexOf(temp)+count)%26];
                break;
            default:
                finalText+=temp;
                break;
        }
    }
    console.log(count + " " + finalText);
}