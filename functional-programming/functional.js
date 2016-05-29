"use strict";

function filter(data, criterion) {
    let rv = [];
    for (let i = 0; i < data.length; i++) {
        if (criterion(data[i])) {
            rv.push(data[i]);
        }
    }
    return rv;
}

function shorterThanFactory(threshold) {
    return function (item) {
        return item.length < threshold;
    };
}

function prettyPrint(elem, index, array) {
    console.log("Hello there " + elem + "!");
}

let names = ["Fred", "Jim", "Sheila", "Gillian", "Bob"];
(filter(names, shorterThanFactory(4))).forEach(prettyPrint);