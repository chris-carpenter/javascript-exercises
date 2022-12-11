const repeatString = function(string, num) {
    let returnString = "";
    if (num >= 0){
        for (let x = 1; x <= num; x++){
            returnString += string;
        }
        return returnString;
    }
    else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = repeatString;
