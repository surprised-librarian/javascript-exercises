const convertToCelsius = function(f) {
  let c = (f - 32) * 5 / 9;
  if(Math.floor(c) !== c) {
    return Number(c.toFixed(1));
  } else {
    return c;
  }
};

var countDecimals = function (value) {
  if(Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
  }
  
  console.log(countDecimals(9.11)) //2
  console.log(countDecimals(9)) //0

const convertToFahrenheit = function(c) {
  let f = c * 9 / 5 + 32;
  if(Math.floor(f) !== f) {
    return Number(f.toFixed(1));
  } else {
    return f;
  }
  
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
