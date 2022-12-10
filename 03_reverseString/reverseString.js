const reverseString = function(string) {
    let reversedString = "";
    for (let x = string.length; x >= 0; x--){
        reversedString += string.charAt(x);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
