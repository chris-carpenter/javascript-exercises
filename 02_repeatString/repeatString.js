const repeatString = function(string, num) {
    let returnString = "";
    for (let x = 1; x <= num; x++){
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
