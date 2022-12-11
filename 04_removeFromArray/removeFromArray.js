const removeFromArray = function() {
    let args = Array.from(arguments);
    let theArray = args[0];
    let theItems = args.slice(1, args.length);

    for (let x = 0; x < theItems.length; x++){
        let indexOfItem = theArray.indexOf(theItems[x]);
        if (indexOfItem >= 0){
            let z = theArray.splice(indexOfItem, 1);
        }
    }

    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
