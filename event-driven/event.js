"using strict";

console.log("Starting......");
let xhr = new XMLHttpRequest();
xhr.addEventListener('load', function() {
    console.log("Loading......");
    if (xhr.readyState === 4) { 
        if (xhr.status === 200) {
            console.log("Got 200, data is " +xhr.responseText);
        }
    }
});
xhr.open("GET", "data.json");
xhr.send();
console.log("Request sent......");