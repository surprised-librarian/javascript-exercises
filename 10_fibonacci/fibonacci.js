const fibonacci = function(arg) {
    let count = arg;
    if (typeof(count) != 'number') {
        count = Number(arg);
    } else {
        count = arg;
    }
    
    if (count < 0) {
        return "OOPS";
    } else if (count === 0) {
        return 0;
    } else if (count === 1) {
        return 1;
    } else {
        let num1 = 0;
        let num2 = 1;
        let positionValue;
        let i = 1;
        while(i < count) {
            positionValue = num1 + num2;
            num1 = num2;
            num2 = positionValue;
            i++;
        }
        return positionValue;
    }
};

// Do not edit below this line
module.exports = fibonacci;

/* function fibonacci(arg) {
    let count = arg;
    if (typeof(count) != 'number') {
        count = Number(arg);
    } else {
        count = arg;
    }

    if (count < 0) {
        console.log("OOPS");
    } else if (count === 0) {
        console.log(0);
    } else {
        let num1 = 1;
        let num2 = 1;
        let positionValue;
        let i = 2;
        while(i < count) {
            positionValue = num1 + num2;
            num1 = num2;
            num2 = positionValue;
            i++;
        }
        console.log(positionValue);
    }
}

fibonacci(4); */
