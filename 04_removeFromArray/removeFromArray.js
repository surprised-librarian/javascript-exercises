const removeFromArray = function() {
    let argArray = Array.from(arguments);
    let newArray = argArray[0];
    let removeArray = argArray.slice(1);
    let i=0;
    while (i < removeArray.length) {
        startRemove: {
        let index = newArray.indexOf(removeArray[i]);
        if (index > -1) {
            if (newArray.includes(removeArray[i])) {
                newArray.splice(index, 1);
            } else {
                i++;
                break startRemove;
            }   
        } if (newArray.includes(removeArray[i])) {
            break startRemove;
        } else {
            i++;
    }
    }
}
    console.log(newArray);
    return newArray;
};


removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
