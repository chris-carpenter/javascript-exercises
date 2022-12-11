const sumAll = function() {
    if (arguments[0] < 0 || arguments[1] < 0){
        return "ERROR";
    }
    else if (typeof(arguments[0]) != "number" || typeof(arguments[1]) != "number"){
        return "ERROR";
    }
    else {
        let bottomNum = Math.min(arguments[0], arguments[1]);
        let topNum = Math.max(arguments[0], arguments[1]);
        let finalSum = 0;
        
        for (let x = bottomNum; x <= topNum; x++){
            finalSum += x;
        }
        return finalSum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
