"use strict";

let q = 3,
    m = 3,
    Y = "2000";

switch(calculateDay(q, m, Y)) {
    case 0:
        console.log("Day is Saturday");
        break;
    case 1:
        console.log("Day is Sunday");
        break;
    case 2:
        console.log("Day is Monday");
        break;
    case 3:
        console.log("Day is Tuesday");
        break;
    case 4:
        console.log("Day is Wednesday");
        break;
    case 5:
        console.log("Day is Thursday");
        break;
    case 6:
        console.log("Day is Friday");
        break;
    default:
        console.log("Invalid value!!");    
}

function calculateDay(q, m, Y) {
    let K, J, h;
    Y = parseInt(Y);
    if (m < 3)  { 
        m = m + 12;
        Y = Y-1;
    }

    K = parseInt(Y%100);
    J = parseInt(Y/100);
    h = (q + Math.floor(13*(m+1)/5) + K + Math.floor(K/4) + Math.floor(J/4) + 5*J);
    return h%7;
}