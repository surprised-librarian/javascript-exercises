function repeatString(string, num) {
    let i = 0;
    let text = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        while (i < num) {
            text = text + string;
            i++;
        }
    }
    
    console.log(text);
    return text;
}

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin');
repeatString('',10);
// Do not edit below this line
module.exports = repeatString;
