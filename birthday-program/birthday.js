"using strict";
let birthdayProt = {
    fName: "na",
    lName: "na",
    month: "mm",
    day: "dd",
    year: "yyyy",
    getName: function() {
        return "Mr. " + this.fName + ", " + this.lName;
    },
    getBirthDate: function() {
        return this.month + "/" + this.day + "/" + this.year;
    },
    getToString: function() {
        return this.getName() + ", " + this.getBirthDate();
    }
}

function Birthday(firstName, lastName, monthDob, dayDob, yearDob){
    let birthday = Object.create(birthdayProt);
    birthday.fName = firstName;
    birthday.lName = lastName;
    birthday.month = monthDob;
    birthday.day = dayDob;
    birthday.year = yearDob;
    return birthday;
}

function verifyField(bdayLineSegment) {
    if ((bdayLineSegment === undefined) ||
        (bdayLineSegment === "")) {
        throw new Error("Field 'name' cannot be empty.");
    }
}

function createBirthDay(ipArray) {
    let birthdayArray = [];
    ipArray.forEach(function(entry) {
        let birthdayLine;
        birthdayLine = entry.split(", ", 5);
        try {
            verifyField(birthdayLine[0]);
            verifyField(birthdayLine[1]);
            let birthDayEntry = Birthday(birthdayLine[0], birthdayLine[1], birthdayLine[2], birthdayLine[3], birthdayLine[4]);
            birthdayArray.push(birthDayEntry.getToString());
        } catch(ex) {
            console.log(ex.message);
        }
    }, this);
    return birthdayArray;
}

/*Declarations ends here*/
let inputArray = ["Van Halen, Eddie, 1, 13, 1955", 
                  "Smith, John, 9, 10, 1955", 
                  ", Bob, 2, 26, 1945", 
                  "Dwarakanath, Arvind, 9, 25, 1987", 
                  "Gandhi, , 9, 25, 1987", 
                  "Piper, Peter, 9, 12, 1984"];
console.log(createBirthDay(inputArray));