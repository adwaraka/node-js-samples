"using strict";

class Birthday {
    constructor(firstName, lastName, monthDob, dayDob, yearDob){
        this.fName = firstName;
        this.lName = lastName;
        this.month = monthDob;
        this.day = dayDob;
        this.year = yearDob;
        Object.seal(this); //to make sure that no new properties are added or deleted
    }
    
    getName() {
        return "Mr. " + this.fName + ", " + this.lName;
    }

    getBirthDate() {
        return this.month + "/" + this.day + "/" + this.year;
    }

    getToString() {
        return this.getName() + ", " + this.getBirthDate();
    }
}

function verifyField(bdayLineSegment, fieldName) {
    if ((bdayLineSegment === undefined) ||
        (bdayLineSegment === "")) {
        throw new Error("Field " + fieldName + " cannot be empty.");
    }
}

function createBirthDay(ipArray) {
    let birthdayArray = [];
    ipArray.forEach(function(entry) {
        let birthdayLine;
        birthdayLine = entry.split(", ", 5);
        try {
            verifyField(birthdayLine[0], "lName");
            verifyField(birthdayLine[1], "fName");
            let birthDayEntry = new Birthday(birthdayLine[0], birthdayLine[1], birthdayLine[2], birthdayLine[3], birthdayLine[4]);
            birthdayArray.push(birthDayEntry.getToString());
        } catch(ex) {
            console.log(ex.message);
        }
    }, this);
    return birthdayArray;
}

/*Declarations ends here*/
let inputArray = ["Van Halen, Eddie, 1, 13, 1955",
                  "Bana, Eddie, 2, 12, 1944",
                  "Smith, John, 9, 10, 1955", 
                  ", Bob, 2, 26, 1945", 
                  "Dwarakanath, Arvind, 9, 25, 1987", 
                  "Gandhi, , 9, 25, 1987", 
                  "Piper, Peter, 9, 12, 1984"];
createBirthDay(inputArray).forEach(function(entry) { console.log(entry) });
