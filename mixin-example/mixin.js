"using strict";

class Shirt {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Automobile {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

function getNameWithType() {
    return this.type + " is of color " + this.name;
}

console.log(getNameWithType.call(new Shirt("Red", "Hoodie")));
console.log(getNameWithType.call(new Automobile("Black", "Sedan")));
