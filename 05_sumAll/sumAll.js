const sumAll = function(int1, int2) {
    let sum;
    let end;
    let i;
    if (int1 < 0 || int2 < 0 || Number.isInteger(int1) == false || Number.isInteger(int2) == false) {
        return 'ERROR';
    } else {
        if (int2 > int1) {
            sum = int1;
            end = int2;
            i = int1;
        }   else {
            sum = int2;
            end = int1;
            i = int2;
        }
        while (i < end) {
            i++;
            sum += i;
        }
        return sum
    }
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
